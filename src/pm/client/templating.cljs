(ns pm.client.templating
  (:require [enfocus.core :as ef]
            [fetch.remotes :as remotes])
  (:require-macros [enfocus.macros :as em]
                   [fetch.macros :as fm])
  (:use-macros [enfocus.macros :only [defsnippet deftemplate defaction]]))

(defn doc [] js/document) 

(defn get-html [url sel]
  (fm/letrem [html-templ (get-template url sel)] html-templ))

(defaction layout [c]
  "Takes html string as input and inserts it into the DOM" 
  [".cljs-main"] (em/content c))

(defsnippet toolbar "templates/components.html" ["#top-navbar"] []
  ["#hello"] (em/content "hi"))

(defaction set-chrome [title] 
  ["title"] (em/content title))

(defaction set-toolbar [] 
  ["#header"] (em/content (toolbar)))




