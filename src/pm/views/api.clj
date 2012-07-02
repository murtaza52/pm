(ns pm.views.api
  (:use [noir.shoreleave.rpc :only [defremote]]))

(def projects (atom [{:hello 7}]))

(defremote get-projects
  []
  @projects)

(defremote add-project
  [proj]
  (swap! projects (partial cons proj)))
