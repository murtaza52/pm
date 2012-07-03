(ns pm.client.models
  (:require [pm.client.utils :as utils]
            [shoreleave.remote :as sr])
  (:require-macros [shoreleave.remotes.macros :as srm]))

(def proj (atom {:hello 2}))

(defn ^:export add
  []
  (swap! proj (partial cons {:added 3})))

(defn ^:export show
  []
  (srm/letrpc [proj (api/get-projects)]
              (utils/log "Existing Projects :" proj)))

(defn ^:export add
  []
  (srm/letrpc [proj (api/add-project {:newone 3})]
          (utils/log "New + Existing :" proj)))
  
