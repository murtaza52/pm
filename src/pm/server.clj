(ns pm.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remote]))

(server/load-views-ns 'pm.views )
(server/add-middleware remote/wrap-remotes)

(def handler (server/gen-handler {:mode :dev :ns 'pm}))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "9020"))]
    (server/start port {:mode mode
                        :ns 'pm})))

