(ns pm.client.main
  (:require [pm.client.templating :as templ]
            [pm.client.utils :as utils]))

(defn init
  "Set the chrome and redirect to the initial page"
  []
  (do
    (templ/set-chrome "Project Management")
    (templ/set-toolbar)))

(utils/onload (utils/set-repl)
              (init))