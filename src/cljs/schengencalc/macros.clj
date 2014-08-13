(ns schengencalc.macros)

(defmacro bind-input [listen-fn transact-fn cursor k]
  `(~listen-fn :on-change
              (fn [e#]
                (~transact-fn ~cursor #(assoc % ~k (.-value (.-target e#)))))))


