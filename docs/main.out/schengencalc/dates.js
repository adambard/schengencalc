// Compiled by ClojureScript 1.7.170 {}
goog.provide('schengencalc.dates');
goog.require('cljs.core');
schengencalc.dates.__GT_prn = (function schengencalc$dates$__GT_prn(x){
console.log(x);

return x;
});
schengencalc.dates.add_days = (function schengencalc$dates$add_days(d,num_days){
return moment(d).add("days",num_days);
});
schengencalc.dates.min_date = (function schengencalc$dates$min_date(d1,d2){
if(cljs.core.truth_(d1.isBefore(d2))){
return d1;
} else {
return d2;
}
});
schengencalc.dates.max_date = (function schengencalc$dates$max_date(d1,d2){
if(cljs.core.truth_(d1.isBefore(d2))){
return d2;
} else {
return d1;
}
});
schengencalc.dates.relevant_periods = (function schengencalc$dates$relevant_periods(travel_dates){
return cljs.core.mapcat.call(null,(function (p__12534){
var map__12535 = p__12534;
var map__12535__$1 = ((((!((map__12535 == null)))?((((map__12535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12535):map__12535);
var entry = cljs.core.get.call(null,map__12535__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__12535__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),entry,new cljs.core.Keyword(null,"end","end",-268185958),schengencalc.dates.add_days.call(null,entry,(179))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),exit,new cljs.core.Keyword(null,"end","end",-268185958),schengencalc.dates.add_days.call(null,exit,(179))], null)], null);
}),travel_dates);
});
schengencalc.dates.clean_travel_dates = (function schengencalc$dates$clean_travel_dates(travel_dates){
var iter__5760__auto__ = (function schengencalc$dates$clean_travel_dates_$_iter__12549(s__12550){
return (new cljs.core.LazySeq(null,(function (){
var s__12550__$1 = s__12550;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12550__$1);
if(temp__4657__auto__){
var s__12550__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12550__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12550__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12552 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12551 = (0);
while(true){
if((i__12551 < size__5759__auto__)){
var map__12557 = cljs.core._nth.call(null,c__5758__auto__,i__12551);
var map__12557__$1 = ((((!((map__12557 == null)))?((((map__12557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12557):map__12557);
var d = map__12557__$1;
var entry = cljs.core.get.call(null,map__12557__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__12557__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
cljs.core.chunk_append.call(null,b__12552,cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"entry","entry",505168823),moment(entry),new cljs.core.Keyword(null,"exit","exit",351849638),moment(exit)));

var G__12561 = (i__12551 + (1));
i__12551 = G__12561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12552),schengencalc$dates$clean_travel_dates_$_iter__12549.call(null,cljs.core.chunk_rest.call(null,s__12550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12552),null);
}
} else {
var map__12559 = cljs.core.first.call(null,s__12550__$2);
var map__12559__$1 = ((((!((map__12559 == null)))?((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var d = map__12559__$1;
var entry = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
return cljs.core.cons.call(null,cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"entry","entry",505168823),moment(entry),new cljs.core.Keyword(null,"exit","exit",351849638),moment(exit)),schengencalc$dates$clean_travel_dates_$_iter__12549.call(null,cljs.core.rest.call(null,s__12550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,travel_dates);
});
schengencalc.dates.positive_or_zero = (function schengencalc$dates$positive_or_zero(n){
if((n > (0))){
return n;
} else {
return (0);
}
});
schengencalc.dates.duration = (function schengencalc$dates$duration(period_end,period_start){
return schengencalc.dates.positive_or_zero.call(null,(Math.floor(moment.duration(period_end.diff(period_start)).asDays()) + (1)));
});
schengencalc.dates.days_in_period = (function schengencalc$dates$days_in_period(p__12562,travel_dates){
var map__12577 = p__12562;
var map__12577__$1 = ((((!((map__12577 == null)))?((((map__12577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12577):map__12577);
var period = map__12577__$1;
var start = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5760__auto__ = ((function (map__12577,map__12577__$1,period,start,end){
return (function schengencalc$dates$days_in_period_$_iter__12579(s__12580){
return (new cljs.core.LazySeq(null,((function (map__12577,map__12577__$1,period,start,end){
return (function (){
var s__12580__$1 = s__12580;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12580__$1);
if(temp__4657__auto__){
var s__12580__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12580__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12580__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12582 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12581 = (0);
while(true){
if((i__12581 < size__5759__auto__)){
var map__12587 = cljs.core._nth.call(null,c__5758__auto__,i__12581);
var map__12587__$1 = ((((!((map__12587 == null)))?((((map__12587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12587):map__12587);
var entry = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
cljs.core.chunk_append.call(null,b__12582,(function (){var period_start = schengencalc.dates.max_date.call(null,start,entry);
var period_end = schengencalc.dates.min_date.call(null,exit,end);
return schengencalc.dates.duration.call(null,period_end,period_start);
})());

var G__12591 = (i__12581 + (1));
i__12581 = G__12591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12582),schengencalc$dates$days_in_period_$_iter__12579.call(null,cljs.core.chunk_rest.call(null,s__12580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12582),null);
}
} else {
var map__12589 = cljs.core.first.call(null,s__12580__$2);
var map__12589__$1 = ((((!((map__12589 == null)))?((((map__12589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12589):map__12589);
var entry = cljs.core.get.call(null,map__12589__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__12589__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
return cljs.core.cons.call(null,(function (){var period_start = schengencalc.dates.max_date.call(null,start,entry);
var period_end = schengencalc.dates.min_date.call(null,exit,end);
return schengencalc.dates.duration.call(null,period_end,period_start);
})(),schengencalc$dates$days_in_period_$_iter__12579.call(null,cljs.core.rest.call(null,s__12580__$2)));
}
} else {
return null;
}
break;
}
});})(map__12577,map__12577__$1,period,start,end))
,null,null));
});})(map__12577,map__12577__$1,period,start,end))
;
return iter__5760__auto__.call(null,travel_dates);
})());
});
schengencalc.dates.re_entry_dates = (function schengencalc$dates$re_entry_dates(travel_dates){
var travel_dates__$1 = schengencalc.dates.clean_travel_dates.call(null,travel_dates);
var iter__5760__auto__ = ((function (travel_dates__$1){
return (function schengencalc$dates$re_entry_dates_$_iter__12596(s__12597){
return (new cljs.core.LazySeq(null,((function (travel_dates__$1){
return (function (){
var s__12597__$1 = s__12597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12597__$1);
if(temp__4657__auto__){
var s__12597__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12597__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12597__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12599 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12598 = (0);
while(true){
if((i__12598 < size__5759__auto__)){
var period = cljs.core._nth.call(null,c__5758__auto__,i__12598);
cljs.core.chunk_append.call(null,b__12599,(function (){var days = schengencalc.dates.days_in_period.call(null,period,travel_dates__$1);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"period","period",-352129191),period,new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(period),new cljs.core.Keyword(null,"days-left","days-left",145761870),((90) - days),new cljs.core.Keyword(null,"days-used","days-used",-316946025),days,new cljs.core.Keyword(null,"start-date","start-date",295168731),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(period),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(period)], null);
})());

var G__12600 = (i__12598 + (1));
i__12598 = G__12600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12599),schengencalc$dates$re_entry_dates_$_iter__12596.call(null,cljs.core.chunk_rest.call(null,s__12597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12599),null);
}
} else {
var period = cljs.core.first.call(null,s__12597__$2);
return cljs.core.cons.call(null,(function (){var days = schengencalc.dates.days_in_period.call(null,period,travel_dates__$1);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"period","period",-352129191),period,new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(period),new cljs.core.Keyword(null,"days-left","days-left",145761870),((90) - days),new cljs.core.Keyword(null,"days-used","days-used",-316946025),days,new cljs.core.Keyword(null,"start-date","start-date",295168731),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(period),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(period)], null);
})(),schengencalc$dates$re_entry_dates_$_iter__12596.call(null,cljs.core.rest.call(null,s__12597__$2)));
}
} else {
return null;
}
break;
}
});})(travel_dates__$1))
,null,null));
});})(travel_dates__$1))
;
return iter__5760__auto__.call(null,schengencalc.dates.relevant_periods.call(null,travel_dates__$1));
});
