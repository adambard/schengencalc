(set-env!
  :resource-paths #{"resources"}
  :source-paths #{"src/cljs"}
  :dependencies '[[org.clojure/clojure "1.8.0"]
                  [cpmcdaniel/boot-copy "1.0" :scope "provided"]
                  [adzerk/boot-cljs "1.7.170-3" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.0" :scope "test"]
                  [adzerk/boot-reload    "0.5.2"      :scope "test"]
                  [pandeiro/boot-http    "0.7.2"      :scope "test"]

                  [org.clojure/clojurescript "1.7.170" :scope "test"]

                  ; Cljs
                  [kioo "0.4.2-SNAPSHOT"]
                  [org.omcljs/om "0.9.0"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
])

(require
 '[cpmcdaniel.boot-copy :refer [copy]]
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http         :refer [serve]])

(deftask dev []
 (comp (serve :dir "target/")
  (watch)
  (speak)
  (reload :on-jsload 'schengencalc.core/on-reload)
  (cljs-repl)
  (copy :output-dir "target" :matching #{#"resources/*"})
  (cljs :source-map true :optimizations :none)))

(deftask build []
  (comp
    (copy :output-dir "target" :matching #{#"resource/*"})
    (cljs :optimizations :whitespace)))
