(ns pm.client.main
  (:require [pm.client.templating :as templ]
            [pm.client.utils :as utils]
            [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))

(defn init
  "Set the chrome and redirect to the initial page"
  []
  (do
    (templ/set-chrome "Project Management")
    ;(em/wait-for-load (templ/set-toolbar))
    ))

(utils/onload (utils/set-repl)
              (init))

