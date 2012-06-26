(ns pm.views.main
  (:require [pm.views.common :as common]
            )
  (:use [noir.core :only [defpage]]
        [noir.response :only [redirect]]
        [noir.fetch.remotes :only [defremote]]
        [net.cgrand.enlive-html]))

(defpage "/" [] (redirect "/index.html"))

(defn to->html [n]
  (apply str (emit* n)))

(defremote get-template [url sel]
  (let [sn (snippet url sel [])]
    (to->html sn)))
