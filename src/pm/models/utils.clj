(ns pm.models.utils
  (:use [datomic.api :as d]))

(defmacro q+ [& body]
  `(try (q ~@body) (catch Exception e# (println e#))))