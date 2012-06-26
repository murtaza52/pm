(ns pm.views.main
  (:use [noir.core :only [defpage]]
        [noir.response :only [redirect]]))

(defpage "/" [] (redirect "/index.html"))

