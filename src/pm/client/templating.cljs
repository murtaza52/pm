(ns pm.client.templating
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))

(defn doc [] js/document) 

(defn layout [c]
  "Takes html string as input and inserts it into the DOM" 
  (em/at (doc)
         [".cljs-main"] (em/content c)))

;;(defn get-toolbar [])

(defn set-chrome [title]
  "Takes html string as input and inserts it into the DOM" 
  (em/at (doc)
         ["title"] (em/content title)
         ["header"] (em/content "Hello World")))

