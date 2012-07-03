(ns pm.server
  (:require [noir.server :as server]
            [noir.shoreleave.rpc :as rpc]
            [ring.middleware.gzip]
            [ring.middleware.file-info]
            [ring.middleware.anti-forgery]
            [pm.models.api]))

(server/load-views-ns 'pm.views)

;;Remote Namesapces
;;-----------------
(rpc/activate-remotes!)
(rpc/remote-ns 'pm.models.api :as "api")

;;Middleware
;;----------
(server/add-middleware ring.middleware.gzip/wrap-gzip)
(server/add-middleware ring.middleware.file-info/wrap-file-info)
(server/add-middleware ring.middleware.anti-forgery/wrap-anti-forgery)

(def handler (server/gen-handler {:mode :dev :ns 'pm}))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "9020"))]
    (server/start port {:mode mode
                        :ns 'pm})))


