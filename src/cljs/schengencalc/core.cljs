(ns schengencalc.core
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [kioo.om :as kioo :include-macros true]
    [schengencalc.dates :refer [to-date re-entry-dates duration]]
    )
  )

;; localStorage persistence


; loads from localStorage on page load, save on re-render

(defn store [k obj]
  (.setItem js/localStorage k (js/JSON.stringify (clj->js obj))))

(defn keywordify [m]
  (cond
    (map? m) (into {} (for [[k v] m] [(keyword k) (keywordify v)]))
    (coll? m) (vec (map keywordify m))
    :else m))

(defn ->prn [x]
  (js/console.log x)
  x)

(defn fetch [k default]
  (let [item (.getItem js/localStorage k)]
    (if item
      (-> (.getItem js/localStorage k)
          (or (js-obj))
          (js/JSON.parse)
          (js->clj)
          (keywordify))
      default)))

(defn fmt-date [d]
  (.format (to-date d) "MMMM Do, YYYY"))

(defn fmt-date-iso [d]
  (.format (to-date d) "YYYY-MM-DD"))

;; Input component

(defn date-input [stay-key]
  (fn [stay owner]
    (reify
      om/IDidMount
      (did-mount [_]
        (->> (om/get-node owner)
             (js-obj "onSelect" #(this-as t (om/update! stay stay-key (.getMoment t)))
                     "format" "YYYY-MM-DD"
                     "minDate" (js/Date. 2009 0 1)
                     "field")
             (js/Pikaday.)
             ;(.glDatePicker)
             ))
      om/IRender
      (render [_]
        (let [date (to-date (get stay stay-key))]
          (dom/input #js {:value (.format date "YYYY-MM-DD")}))))))

;; Templates


(kioo/defsnippet date-row "index.html" [:.date-row]
  [{:keys [entry exit] :as rowdata} travel-dates]
  {[:.duration] (kioo/content (str (duration
                                    (to-date (:exit  rowdata))
                                    (to-date (:entry rowdata))) " days"))
   [:input.entry] (kioo/substitute (om/build (date-input :entry) rowdata))
   [:input.exit] (kioo/substitute (om/build (date-input :exit) rowdata))
   [:a] (kioo/listen :on-click
                     (fn [e]
                       (.preventDefault e)
                       (om/transact! travel-dates
                                     #(vec (filter (fn [x]
                                                (and (not (= (:entry x) entry))
                                                     (not (= (:exit x) exit))))
                                              %)))))})

(kioo/defsnippet result-item "index.html" [:li.stay-tpl]
  [{:keys [days-used start-date end-date]}]
  {[:.start] (kioo/content (fmt-date start-date))
   [:.end] (kioo/content (fmt-date end-date))
   [:.days-used] (kioo/content days-used)
   })

(defn- init-travel-dates []
  {:entry (.startOf (js/moment) "day")
   :exit (.startOf (js/moment) "day") })

(kioo/deftemplate main "index.html"
  [{travel-dates :travel-dates}]
  {[:tbody.travel-dates] (kioo/content (map #(date-row % travel-dates) travel-dates))
   [:.add-stay :a] (kioo/listen :on-click
                                (fn [e]
                                  (.preventDefault e)
                                  (om/transact! travel-dates #(conj % (init-travel-dates)))))
   [:ul.results] (kioo/content (->> (re-entry-dates travel-dates)
                                    (filter #(< (:days-left %) 0))
                                    (map result-item)) )
   [:.disclaimer] (if (every? #(>= (:days-left %) 0) (re-entry-dates travel-dates))
                    (kioo/do->
                      (kioo/set-class "disclaimer ok")
                      (kioo/content "This schedule is ok!"))
                    (kioo/do->
                      (kioo/set-class "disclaimer warn")
                      (kioo/content "This schedule violates Schengen Visa rules!")))
   })

(def app-state
  (atom (fetch "schengencalc" {:travel-dates []})))

(defn app [data owner]
  (store "schengencalc" data) ; Persist data
  (om/component (main data)))


(om/root app app-state {:target (.-body js/document)})
