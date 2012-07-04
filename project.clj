(defproject projm "0.1.0-SNAPSHOT"
  :description "A Project Management Product"
  :plugins [[lein-cljsbuild "0.2.2"]]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [jayq "0.1.0-alpha4"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.2.0-alpha4"]
                 [noir "1.3.0-beta10"]
                 [com.datomic/datomic "0.1.3164"]
                 [enfocus "0.9.1-SNAPSHOT"]
                 [enlive "1.0.1"]
                 [fluentsoftware/cljs-binding "1.0.0-SNAPSHOT"]
                 [shoreleave "0.2.2-SNAPSHOT"]
                 [shoreleave/shoreleave-remote-noir "0.2.2-SNAPSHOT"]
                 [com.cemerick/ring-gzip-middleware "0.1.1"]
                 [ring-anti-forgery "0.1.3"]]
  :cljsbuild {:repl-listen-port 9000
              :builds [{:source-path "src"
                        :compiler {:output-to "resources/public/cljs/client.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :main ^{:skip-aot true} pm.server
  :ring {:handler pm.server/handler
         :auto-refresh? true}
  :immutant {:init pm.server/imm
             :resolve-dependencies true
             :swank-port 4210
             :nrepl-port 4220
             :context-path "/dev"
             }
  :jvm-opts ["-Xmx256m"])

