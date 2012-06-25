(ns pm.views.common
  (:use [noir.core :only [defpartial]]))

(comment
  [hiccup.page-helpers :only [include-css html5]]
  (defpartial layout [& content]
            (html5
              [:head
               [:title "pm"]
               (include-css "/css/reset.css")]
              [:body
               [:div#wrapper
                content]]))
)
