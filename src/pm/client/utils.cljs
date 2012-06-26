(ns pm.client.utils
  (:require [clojure.browser.repl :as repl]
            [jayq.core :as jq]))

(def state (atom {:debug true}))

(def repl-url "http://localhost:9000/repl")

(defn log [msg data]
  (when (and js/console
             (@state :debug))
    (let [d (if (string? data)
              data
              (pr-str data))
          s (str msg " :: " d)]
      (.log js/console s))))

(defn set-repl []
    (when (and js/console (@state :debug))
      (repl/connect repl-url)))

;(defn onload
;  "Function to add form on document.ready"
;  [& forms]
;  (apply jq/$ forms))