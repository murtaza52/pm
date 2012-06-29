(ns pm.client.templating
  (:require [enfocus.core :as ef]
            [fetch.remotes :as remotes]
            [pm.client.utils :as utils]
            [jayq.core :as jq]
            [cljsbinding :as binding])
  (:require-macros [enfocus.macros :as em]
                   [fetch.macros :as fm])
  (:use-macros [enfocus.macros :only [defsnippet deftemplate defaction]]))

(defn doc [] js/document)

(comment (defn get-html [url sel]
  (fm/letrem [html-templ (get-template url sel)] html-templ)))

;"Takes html string as input and inserts it into the DOM"
(defaction layout
  [c]
  [".cljs-main"] (em/content c))

;;This Works

(comment
  (defn layout
  "Takes html string as input and inserts it into the DOM"
  [c]
  (em/at (doc)
         [".cljs-main"] (em/content c)))
 )

(defsnippet toolbar "templates/components.html" ["#top-navbar"] []
  ["#hello"] (em/content "hi"))

(defaction set-chrome [title] 
  ["title"] (em/content title))

(defaction set-toolbar [] 
  ["#header"] (em/content (toolbar))
  ["#add-new-project"] (em/listen :click add-project))

(defsnippet project-page "templates/components.html" ["#project-add-section"] [])

(defn add-project []
  (let [c (project-page)]
    (layout c))
  (.modal (jq/$ "#project-add-modal") "show")
  (binding/bindall (jq/$ "#project-add-modal")))

(defn meclicked
  []
  (js/alert "cljs-binding clicked"))

(defn ^:export hello
  []
  (js/alert "hi from cljs"))