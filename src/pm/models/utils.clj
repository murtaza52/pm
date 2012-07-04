(ns pm.models.utils)

(comment (defmacro q+ [& body]
  `(try (q ~@body) (catch Exception e# (println e#)))))