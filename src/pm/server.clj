(ns pm.server
  (:require [noir.server :as server]
            [noir.shoreleave.rpc :as rpc]
            [ring.middleware.gzip]
            [ring.middleware.file-info]
            [ring.middleware.anti-forgery]
            [pm.models.api]
            [clojure.java.io :as io]))

(server/load-views-ns 'pm.views)

(def ser (atom nil))

;;Remote Namesapces
;;-----------------
(rpc/activate-remotes!)
(rpc/remote-ns 'pm.models.api :as "api")

;;Middleware
;;----------
(server/add-middleware ring.middleware.gzip/wrap-gzip)
(server/add-middleware ring.middleware.file-info/wrap-file-info)
(server/add-middleware ring.middleware.anti-forgery/wrap-anti-forgery)

;;Generate a ring compatible handler
;;----------------------------------
;;The below handler is for regualar ring apps
;;-------------------------------------------
(def handler (server/gen-handler {:mode :dev :ns 'pm}))
;;-------------------------------------------------------
;;The below handler is GAE compatible
;(def handler (ngae/gae-handler {:mode :dev :ns 'pm}))

;:init pm.server/imm
;;Immutant Settings
;;-----------------
(defn imm
  []
  (require '[immutant.web :as web]
           '[immutant.utilities :as util])
  (server/load-views (io/file @(resolve 'util/app-root) "src/pm/views"))
  @(resolve 'web/start "/dev" handler))

(defn sstart
  "A common start function, abstarcted out so that it can be used from the REPL as well as command line"
  [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "9020"))]
    (reset! ser (server/start port {:mode mode
                        :ns 'pm}))))

(defn -main [& m]
  (sstart m))

(defn sstop
  "Stops the server reference stored in the atom"
  []
  (server/stop @ser)
  (reset! ser nil))

