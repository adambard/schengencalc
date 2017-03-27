(ns schengencalc.dates)

(defn ->prn [x]
  (js/console.log x)
  x)


(defn- add-days [d num-days]
  (.add (js/moment d) "days" num-days))

(defn- min-date [d1 d2]
  (if (.isBefore d1 d2) d1 d2))

(defn- max-date [d1 d2]
  (if (.isBefore d1 d2) d2 d1))


(defn- relevant-periods [travel-dates]
  (mapcat
    (fn [{entry :entry exit :exit}]
      [{:start entry :end (add-days entry 179)}
       {:start exit :end (add-days exit 179)}])
    travel-dates))

(defn- clean-travel-dates [travel-dates]
  (for [{entry :entry
         exit :exit :as d} travel-dates]
    (assoc d :entry (js/moment entry)
           :exit (js/moment exit))))

(defn- positive-or-zero [n]
  (if (> n 0) n 0))


(defn- duration [period-end period-start]
  (-> period-end
      (.diff period-start)
      (js/moment.duration)
      (.asDays)
      (js/Math.floor)
      (inc)
      (positive-or-zero)
      ))


(defn days-in-period [{start :start
                       end :end :as period} travel-dates]
  (reduce +
    (for [{entry :entry exit :exit} travel-dates]
      (let [period-start (max-date start entry)
            period-end (min-date exit end)]
        (duration period-end period-start)))))


(defn re-entry-dates [travel-dates]
  (let [travel-dates (clean-travel-dates travel-dates)]
    (for [period (relevant-periods travel-dates)]
      (let [days (days-in-period period travel-dates)]
        {:period period
         :deadline (:end period)
         :days-left (- 90 days)
         :days-used days
         :start-date (:start period)
         :end-date (:end period) }))))


(comment
(days-in-period
  (first (relevant-periods
           [{:entry (js/moment "2014-05-05") :exit (js/moment "2014-08-01")}]
           ))
  [{:entry (js/moment "2014-05-05")
   :exit (js/moment "2014-08-08")
   }]
  ))


