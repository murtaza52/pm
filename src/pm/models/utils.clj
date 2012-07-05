(ns pm.models.utils
  (:require [datomic.api :as d]))


(defmacro q+ [& body]
  `(try (d/q ~@body) (catch Exception e# (println e#))))