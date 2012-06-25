(ns pm.client.main
  (:require [pm.client.templating :as templ]
            [jayq.core :as jq]))

(defn init
  "Set the chrome and redirect to the initial page"
  []
  (templ/set-chrome "Project Management"))

(defn onload
  "Function to add form on document.ready"
  []
  "hello")

(init)