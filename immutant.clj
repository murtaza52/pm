(ns pm.init
  (:require [immutant.daemons   :as daemons]
            [immutant.jobs      :as jobs]
            [immutant.messaging :as messaging]
            [immutant.web       :as web]
            [immutant.repl      :as repl]
            [noir.server        :as server]
            [pm.server :as pserver]))

;; point noir to the right place for views
;(server/load-views (str (web/src-dir) "/my_app/views"))

(server/load-views (io/file (util/app-root) "src/pm/views"))

;; start a web endpoint
(web/start "/" pserver/handler)
