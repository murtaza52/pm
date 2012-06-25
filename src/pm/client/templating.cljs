(ns pm.client.templating
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em])
  (:use-macros [enfocus.macros :only [defsnippet deftemplate defaction]]))

(defn doc [] js/document) 

(defaction layout [c]
  "Takes html string as input and inserts it into the DOM" 
  [".cljs-main"] (em/content c))

(defsnippet toolbar "templates/components.html" ["top-navbar"] []
  ["#hello"] (em/content "hi"))

(defaction set-chrome [title] 
  ["title"] (em/content title)
  ["header"] (em/content (toolbar)))

(defaction set-toolbar [title] 
  ["header"] (em/content (toolbar)))


