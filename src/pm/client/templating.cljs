(ns pm.client.templating
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em])
  (:use-macros [enfocus.macros :only [defsnippet deftemplate]]))

(defn doc [] js/document) 

(defn layout [c]
  "Takes html string as input and inserts it into the DOM" 
  (em/at (doc)
         [".cljs-main"] (em/content c)))

(defsnippet toolbar "templates/components.html" ["top-navbar"] []
  ["#hello"] (em/content "hi"))

(defn set-toolbar []
  (em/wait-for-load
   (em/at (doc)
         ["header"] (em/content (toolbar)))))

(defn set-chrome [title]
  "Takes html string as input and inserts it into the DOM" 
  (em/at (doc)
         ["title"] (em/content title)))

