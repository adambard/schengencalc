// Compiled by ClojureScript 1.7.170 {}
goog.provide('schengencalc.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('kioo.om');
goog.require('schengencalc.dates');
schengencalc.core.store = (function schengencalc$core$store(k,obj){
return localStorage.setItem(k,JSON.stringify(cljs.core.clj__GT_js.call(null,obj)));
});
schengencalc.core.keywordify = (function schengencalc$core$keywordify(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5760__auto__ = (function schengencalc$core$keywordify_$_iter__14391(s__14392){
return (new cljs.core.LazySeq(null,(function (){
var s__14392__$1 = s__14392;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14392__$1);
if(temp__4657__auto__){
var s__14392__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14392__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__14392__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__14394 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__14393 = (0);
while(true){
if((i__14393 < size__5759__auto__)){
var vec__14397 = cljs.core._nth.call(null,c__5758__auto__,i__14393);
var k = cljs.core.nth.call(null,vec__14397,(0),null);
var v = cljs.core.nth.call(null,vec__14397,(1),null);
cljs.core.chunk_append.call(null,b__14394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),schengencalc$core$keywordify.call(null,v)], null));

var G__14399 = (i__14393 + (1));
i__14393 = G__14399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14394),schengencalc$core$keywordify_$_iter__14391.call(null,cljs.core.chunk_rest.call(null,s__14392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14394),null);
}
} else {
var vec__14398 = cljs.core.first.call(null,s__14392__$2);
var k = cljs.core.nth.call(null,vec__14398,(0),null);
var v = cljs.core.nth.call(null,vec__14398,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),schengencalc$core$keywordify.call(null,v)], null),schengencalc$core$keywordify_$_iter__14391.call(null,cljs.core.rest.call(null,s__14392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,m);
})());
} else {
if(cljs.core.coll_QMARK_.call(null,m)){
return cljs.core.vec.call(null,cljs.core.map.call(null,schengencalc$core$keywordify,m));
} else {
return m;

}
}
});
schengencalc.core.__GT_prn = (function schengencalc$core$__GT_prn(x){
console.log(x);

return x;
});
schengencalc.core.fetch = (function schengencalc$core$fetch(k,default$){
var item = localStorage.getItem(k);
if(cljs.core.truth_(item)){
return schengencalc.core.keywordify.call(null,cljs.core.js__GT_clj.call(null,JSON.parse((function (){var or__4988__auto__ = localStorage.getItem(k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return {};
}
})())));
} else {
return default$;
}
});
schengencalc.core.fmt_date = (function schengencalc$core$fmt_date(d){
return moment(d).format("MMMM Do, YYYY");
});
schengencalc.core.fmt_date_iso = (function schengencalc$core$fmt_date_iso(d){
return moment(d).format("YYYY-MM-DD");
});
schengencalc.core.date_input = (function schengencalc$core$date_input(stay_key){
return (function (stay,owner){
if(typeof schengencalc.core.t_schengencalc$core14409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
schengencalc.core.t_schengencalc$core14409 = (function (date_input,stay_key,stay,owner,meta14410){
this.date_input = date_input;
this.stay_key = stay_key;
this.stay = stay;
this.owner = owner;
this.meta14410 = meta14410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schengencalc.core.t_schengencalc$core14409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14411,meta14410__$1){
var self__ = this;
var _14411__$1 = this;
return (new schengencalc.core.t_schengencalc$core14409(self__.date_input,self__.stay_key,self__.stay,self__.owner,meta14410__$1));
});

schengencalc.core.t_schengencalc$core14409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14411){
var self__ = this;
var _14411__$1 = this;
return self__.meta14410;
});

schengencalc.core.t_schengencalc$core14409.prototype.om$core$IDidMount$ = true;

schengencalc.core.t_schengencalc$core14409.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Pikaday((function (){var obj14413 = {"onSelect":((function (___$1){
return (function (){
var t = this;
return om.core.update_BANG_.call(null,self__.stay,self__.stay_key,t.getMoment());
});})(___$1))
,"format":"YYYY-MM-DD","minDate":(new Date((2009),(0),(1))),"field":om.core.get_node.call(null,self__.owner)};
return obj14413;
})()));
});

schengencalc.core.t_schengencalc$core14409.prototype.om$core$IRender$ = true;

schengencalc.core.t_schengencalc$core14409.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var date = moment(cljs.core.get.call(null,self__.stay,self__.stay_key));
return om.dom.input.call(null,{"value": date.format("YYYY-MM-DD")});
});

schengencalc.core.t_schengencalc$core14409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"date-input","date-input",1898177653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stay-key","stay-key",-1405508457,null)], null)))], null)),new cljs.core.Symbol(null,"stay-key","stay-key",-1405508457,null),new cljs.core.Symbol(null,"stay","stay",400204293,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14410","meta14410",1284092991,null)], null);
});

schengencalc.core.t_schengencalc$core14409.cljs$lang$type = true;

schengencalc.core.t_schengencalc$core14409.cljs$lang$ctorStr = "schengencalc.core/t_schengencalc$core14409";

schengencalc.core.t_schengencalc$core14409.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"schengencalc.core/t_schengencalc$core14409");
});

schengencalc.core.__GT_t_schengencalc$core14409 = (function schengencalc$core$date_input_$___GT_t_schengencalc$core14409(date_input__$1,stay_key__$1,stay__$1,owner__$1,meta14410){
return (new schengencalc.core.t_schengencalc$core14409(date_input__$1,stay_key__$1,stay__$1,owner__$1,meta14410));
});

}

return (new schengencalc.core.t_schengencalc$core14409(schengencalc$core$date_input,stay_key,stay,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
schengencalc.core.date_row = (function schengencalc$core$date_row(p__14416,travel_dates){
var map__14419 = p__14416;
var map__14419__$1 = ((((!((map__14419 == null)))?((((map__14419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14419):map__14419);
var rowdata = map__14419__$1;
var entry = cljs.core.get.call(null,map__14419__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.call(null,map__14419__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var ch14415 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.tr,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"date-row",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.substitute.call(null,om.core.build.call(null,schengencalc.core.date_input.call(null,new cljs.core.Keyword(null,"entry","entry",505168823)),rowdata)).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"className","className",-1983287057),"entry",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.input], null)))], null))),cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.substitute.call(null,om.core.build.call(null,schengencalc.core.date_input.call(null,new cljs.core.Keyword(null,"exit","exit",351849638)),rowdata)).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"className","className",-1983287057),"exit",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.input], null)))], null))),kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,[cljs.core.str(schengencalc.dates.duration.call(null,moment(new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(rowdata)),moment(new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(rowdata)))),cljs.core.str(" days")].join('')).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"duration",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" 76 days "], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.td], null))),cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"dissoc",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.listen.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14419,map__14419__$1,rowdata,entry,exit){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,travel_dates,((function (map__14419,map__14419__$1,rowdata,entry,exit){
return (function (p1__14414_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,((function (map__14419,map__14419__$1,rowdata,entry,exit){
return (function (x){
return (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(x),entry))) && (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(x),exit)));
});})(map__14419,map__14419__$1,rowdata,entry,exit))
,p1__14414_SHARP_));
});})(map__14419,map__14419__$1,rowdata,entry,exit))
);
});})(map__14419,map__14419__$1,rowdata,entry,exit))
).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fi-x",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.a], null)))], null)))], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch14415))){
return cljs.core.first.call(null,ch14415);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch14415);
}
});
schengencalc.core.result_item = (function schengencalc$core$result_item(p__14422){
var map__14425 = p__14422;
var map__14425__$1 = ((((!((map__14425 == null)))?((((map__14425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14425):map__14425);
var days_used = cljs.core.get.call(null,map__14425__$1,new cljs.core.Keyword(null,"days-used","days-used",-316946025));
var start_date = cljs.core.get.call(null,map__14425__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.call(null,map__14425__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
var ch14421 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"stay-tpl",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" Between ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,schengencalc.core.fmt_date.call(null,start_date)).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"start",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["August 12, 2014"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.span], null)))," and ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,schengencalc.core.fmt_date.call(null,end_date)).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"end",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["December 14, 2014"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.span], null))),", you will stay for ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,days_used).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"days-used",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" 30"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.span], null)))," days. "], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch14421))){
return cljs.core.first.call(null,ch14421);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch14421);
}
});
schengencalc.core.init_travel_dates = (function schengencalc$core$init_travel_dates(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),moment().startOf("day"),new cljs.core.Keyword(null,"exit","exit",351849638),moment().startOf("day")], null);
});
schengencalc.core.main = (function schengencalc$core$main(p__14432){
var map__14435 = p__14432;
var map__14435__$1 = ((((!((map__14435 == null)))?((((map__14435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14435):map__14435);
var travel_dates = cljs.core.get.call(null,map__14435__$1,new cljs.core.Keyword(null,"travel-dates","travel-dates",-960218385));
var ch14431 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"container",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.header,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.h1,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Schengen calculator"], null))),cljs.core.apply.call(null,om.dom.h2,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["For Visa-Free visitors"], null))),cljs.core.apply.call(null,om.dom.p,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You may stay in the Schengen area for no more than 90 days in any 180 day period. Simple, right? Well I guess you don't need this calculator at all then."], null)))], null))),cljs.core.apply.call(null,om.dom.main,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.p,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.strong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enter your stays in the Schengen area below, in chronological order."], null)))], null))),cljs.core.apply.call(null,om.dom.table,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"entry-table",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.thead,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.tr,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.th,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Entry"], null))),cljs.core.apply.call(null,om.dom.th,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exit"], null))),cljs.core.apply.call(null,om.dom.th,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Duration"], null))),cljs.core.apply.call(null,om.dom.th,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null)))], null))),kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,cljs.core.map.call(null,((function (map__14435,map__14435__$1,travel_dates){
return (function (p1__14427_SHARP_){
return schengencalc.core.date_row.call(null,p1__14427_SHARP_,travel_dates);
});})(map__14435,map__14435__$1,travel_dates))
,travel_dates)).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"travel-dates",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.tr,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"date-row",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.input,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"className","className",-1983287057),"entry",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null))),cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.input,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"className","className",-1983287057),"exit",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null))),cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"duration",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" 76 days "], null))),cljs.core.apply.call(null,om.dom.td,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"dissoc",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fi-x",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null)))], null)))], null)))], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.tbody], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"add-stay",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.listen.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14435,map__14435__$1,travel_dates){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,travel_dates,((function (map__14435,map__14435__$1,travel_dates){
return (function (p1__14428_SHARP_){
return cljs.core.conj.call(null,p1__14428_SHARP_,schengencalc.core.init_travel_dates.call(null));
});})(map__14435,map__14435__$1,travel_dates))
);
});})(map__14435,map__14435__$1,travel_dates))
).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fi-plus",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))," Add a stay"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.a], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"results-area",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.h2,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Results"], null))),kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,((cljs.core.every_QMARK_.call(null,((function (map__14435,map__14435__$1,travel_dates){
return (function (p1__14430_SHARP_){
return (new cljs.core.Keyword(null,"days-left","days-left",145761870).cljs$core$IFn$_invoke$arity$1(p1__14430_SHARP_) >= (0));
});})(map__14435,map__14435__$1,travel_dates))
,schengencalc.dates.re_entry_dates.call(null,travel_dates)))?kioo.om.do__GT_.call(null,kioo.om.set_class.call(null,"disclaimer ok"),kioo.om.content.call(null,"This schedule is ok!")):kioo.om.do__GT_.call(null,kioo.om.set_class.call(null,"disclaimer warn"),kioo.om.content.call(null,"This schedule violates Schengen Visa rules!"))).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"disclaimer",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.p], null))),kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,cljs.core.map.call(null,schengencalc.core.result_item,cljs.core.filter.call(null,((function (map__14435,map__14435__$1,travel_dates){
return (function (p1__14429_SHARP_){
return (new cljs.core.Keyword(null,"days-left","days-left",145761870).cljs$core$IFn$_invoke$arity$1(p1__14429_SHARP_) < (0));
});})(map__14435,map__14435__$1,travel_dates))
,schengencalc.dates.re_entry_dates.call(null,travel_dates)))).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"results",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"stay-tpl",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" Between ",cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"start",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["August 12, 2014"], null)))," and ",cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"end",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["December 14, 2014"], null))),", you will stay for ",cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"days-used",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" 30"], null)))," days. "], null)))], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.ul], null))),cljs.core.apply.call(null,om.dom.p,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Disclaimer: Results are not guaranteed and the proprieter of this site disavows all responsability for anything that may or may not happen to you. Remember to double-check these dates! "], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.footer,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.p,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Made by ",cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://adambard.com/",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exceedingly handsome web developer Adam Bard"], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdnjs.cloudflare.com/ajax/libs/react/0.9.0/react.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"src","src",-1651076051),"lib/pikaday.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"main.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null))),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n        ga('create', 'UA-3525624-31', 'auto');\n        ga('send', 'pageview');\n\n    "], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch14431))){
return cljs.core.first.call(null,ch14431);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch14431);
}
});
schengencalc.core.app_state = cljs.core.atom.call(null,schengencalc.core.fetch.call(null,"schengencalc",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"travel-dates","travel-dates",-960218385),cljs.core.PersistentVector.EMPTY], null)));
schengencalc.core.app = (function schengencalc$core$app(data,owner){
schengencalc.core.store.call(null,"schengencalc",data);

if(typeof schengencalc.core.t_schengencalc$core14440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schengencalc.core.t_schengencalc$core14440 = (function (app,data,owner,meta14441){
this.app = app;
this.data = data;
this.owner = owner;
this.meta14441 = meta14441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schengencalc.core.t_schengencalc$core14440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14442,meta14441__$1){
var self__ = this;
var _14442__$1 = this;
return (new schengencalc.core.t_schengencalc$core14440(self__.app,self__.data,self__.owner,meta14441__$1));
});

schengencalc.core.t_schengencalc$core14440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14442){
var self__ = this;
var _14442__$1 = this;
return self__.meta14441;
});

schengencalc.core.t_schengencalc$core14440.prototype.om$core$IRender$ = true;

schengencalc.core.t_schengencalc$core14440.prototype.om$core$IRender$render$arity$1 = (function (this__12611__auto__){
var self__ = this;
var this__12611__auto____$1 = this;
return schengencalc.core.main.call(null,self__.data);
});

schengencalc.core.t_schengencalc$core14440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14441","meta14441",1854984299,null)], null);
});

schengencalc.core.t_schengencalc$core14440.cljs$lang$type = true;

schengencalc.core.t_schengencalc$core14440.cljs$lang$ctorStr = "schengencalc.core/t_schengencalc$core14440";

schengencalc.core.t_schengencalc$core14440.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"schengencalc.core/t_schengencalc$core14440");
});

schengencalc.core.__GT_t_schengencalc$core14440 = (function schengencalc$core$app_$___GT_t_schengencalc$core14440(app__$1,data__$1,owner__$1,meta14441){
return (new schengencalc.core.t_schengencalc$core14440(app__$1,data__$1,owner__$1,meta14441));
});

}

return (new schengencalc.core.t_schengencalc$core14440(schengencalc$core$app,data,owner,null));
});
om.core.root.call(null,schengencalc.core.app,schengencalc.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));
