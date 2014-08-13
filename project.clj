(defproject schengencalc "0.1.0-SNAPSHOT"
  :description "A handy schengen zone calculator"
  :url "http://adambard.github.io/schengencalc"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]

                 ; Cljs
                 [kioo "0.4.0"]
                 [om "0.7.1"]
                 ]

  :plugins [[lein-cljsbuild "1.0.3"]]
  :jvm-opts ["-Xmx1G"]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src/cljs"]

        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          ;:preamble ["resources/react-0.9.0.js"] 
          :output-to "resources/main.js"  ; default: target/cljsbuild-main.js
          :optimizations :whitespace
          :pretty-print true}}]}
  )
