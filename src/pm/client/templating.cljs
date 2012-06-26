(ns pm.client.templating
  (:require [enfocus.core :as ef]
            [fetch.remotes :as remotes]
            [pm.client.utils :as utils])
  (:require-macros [enfocus.macros :as em]
                   [fetch.macros :as fm])
  (:use-macros [enfocus.macros :only [defsnippet deftemplate defaction]]))

(defn doc [] js/document)

(comment (defn get-html [url sel]
  (fm/letrem [html-templ (get-template url sel)] html-templ)))

(defn layout [c]
  "Takes html string as input and inserts it into the DOM" 
  (em/at (doc)
         [".cljs-main"] (em/content c)))

(defsnippet toolbar "templates/components.html" ["#top-navbar"] []
  ["#hello"] (em/content "hi"))

(defaction set-chrome [title] 
  ["title"] (em/content title))

(defaction set-toolbar [] 
  ["#header"] (em/content (toolbar))
  ["#add-new-project"] (em/listen :click add-project))

(defsnippet project-page "templates/components.html" ["#project-add-section"] []
  ["#my-modal"] (em/content "Hello Vidit"))

(defn add-project []
  (let [c (project-page)]
    (layout c)))

(comment
)