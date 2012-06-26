(ns pm.client.main
  (:require [pm.client.templating :as templ]
            [pm.client.utils :as utils]
            [enfocus.core :as ef]
            [cljsbinding :as binding])
  (:require-macros [enfocus.macros :as em]
                   [jayq.macros :as jqm]))

(defn init
  "Set the chrome and redirect to the initial page"
  []
  (do
    (templ/set-chrome "Project Management")
    (em/wait-for-load (templ/set-toolbar))))

(jqm/ready
 (init)
 (utils/set-repl)
 (binding/boot))

