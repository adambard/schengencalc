// Compiled by ClojureScript 1.7.170 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12391 = arguments.length;
var i__6047__auto___12392 = (0);
while(true){
if((i__6047__auto___12392 < len__6046__auto___12391)){
args__6053__auto__.push((arguments[i__6047__auto___12392]));

var G__12393 = (i__6047__auto___12392 + (1));
i__6047__auto___12392 = G__12393;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.content.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),body);
});
});

kioo.common.content.cljs$lang$maxFixedArity = (0);

kioo.common.content.cljs$lang$applyTo = (function (seq12390){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12390));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12395 = arguments.length;
var i__6047__auto___12396 = (0);
while(true){
if((i__6047__auto___12396 < len__6046__auto___12395)){
args__6053__auto__.push((arguments[i__6047__auto___12396]));

var G__12397 = (i__6047__auto___12396 + (1));
i__6047__auto___12396 = G__12397;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.append.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.append.cljs$lang$maxFixedArity = (0);

kioo.common.append.cljs$lang$applyTo = (function (seq12394){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12394));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12399 = arguments.length;
var i__6047__auto___12400 = (0);
while(true){
if((i__6047__auto___12400 < len__6046__auto___12399)){
args__6053__auto__.push((arguments[i__6047__auto___12400]));

var G__12401 = (i__6047__auto___12400 + (1));
i__6047__auto___12400 = G__12401;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,body,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
});
});

kioo.common.prepend.cljs$lang$maxFixedArity = (0);

kioo.common.prepend.cljs$lang$applyTo = (function (seq12398){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12398));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12403 = arguments.length;
var i__6047__auto___12404 = (0);
while(true){
if((i__6047__auto___12404 < len__6046__auto___12403)){
args__6053__auto__.push((arguments[i__6047__auto___12404]));

var G__12405 = (i__6047__auto___12404 + (1));
i__6047__auto___12404 = G__12405;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return body;
});
});

kioo.common.substitute.cljs$lang$maxFixedArity = (0);

kioo.common.substitute.cljs$lang$applyTo = (function (seq12402){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12402));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12409 = arguments.length;
var i__6047__auto___12410 = (0);
while(true){
if((i__6047__auto___12410 < len__6046__auto___12409)){
args__6053__auto__.push((arguments[i__6047__auto___12410]));

var G__12411 = (i__6047__auto___12410 + (1));
i__6047__auto___12410 = G__12411;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,((function (els){
return (function (n,p__12407){
var vec__12408 = p__12407;
var k = cljs.core.nth.call(null,vec__12408,(0),null);
var v = cljs.core.nth.call(null,vec__12408,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq12406){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12406));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12413 = arguments.length;
var i__6047__auto___12414 = (0);
while(true){
if((i__6047__auto___12414 < len__6046__auto___12413)){
args__6053__auto__.push((arguments[i__6047__auto___12414]));

var G__12415 = (i__6047__auto___12414 + (1));
i__6047__auto___12414 = G__12415;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,(function (n,k){
return cljs.core.dissoc.call(null,n,k);
}),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.remove_attr.cljs$lang$maxFixedArity = (0);

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq12412){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12412));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12419 = arguments.length;
var i__6047__auto___12420 = (0);
while(true){
if((i__6047__auto___12420 < len__6046__auto___12419)){
args__6053__auto__.push((arguments[i__6047__auto___12420]));

var G__12421 = (i__6047__auto___12420 + (1));
i__6047__auto___12420 = G__12421;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.reduce.call(null,(function (p1__12417_SHARP_,p2__12416_SHARP_){
return p2__12416_SHARP_.call(null,p1__12417_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq12418){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12418));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12426 = arguments.length;
var i__6047__auto___12427 = (0);
while(true){
if((i__6047__auto___12427 < len__6046__auto___12426)){
args__6053__auto__.push((arguments[i__6047__auto___12427]));

var G__12428 = (i__6047__auto___12427 + (1));
i__6047__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
var mp = cljs.core.reduce.call(null,((function (els){
return (function (m,p__12424){
var vec__12425 = p__12424;
var k = cljs.core.nth.call(null,vec__12425,(0),null);
var v = cljs.core.nth.call(null,vec__12425,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__12422_SHARP_){
return cljs.core.merge.call(null,p1__12422_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq12423){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12423));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12432 = arguments.length;
var i__6047__auto___12433 = (0);
while(true){
if((i__6047__auto___12433 < len__6046__auto___12432)){
args__6053__auto__.push((arguments[i__6047__auto___12433]));

var G__12434 = (i__6047__auto___12433 + (1));
i__6047__auto___12433 = G__12434;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
var style = cljs.core.reduce.call(null,(function (p1__12429_SHARP_,p2__12430_SHARP_){
return cljs.core.dissoc.call(null,p1__12429_SHARP_,cljs.core.name.call(null,p2__12430_SHARP_),p2__12430_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq12431){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12431));
});
kioo.common.get_class_regex = (function kioo$common$get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function kioo$common$has_class_QMARK_(cur_cls,cls){
var and__4976__auto__ = cur_cls;
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.re_find.call(null,kioo.common.get_class_regex.call(null,cls),cur_cls);
} else {
return and__4976__auto__;
}
});
kioo.common.set_class = (function kioo$common$set_class(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12438 = arguments.length;
var i__6047__auto___12439 = (0);
while(true){
if((i__6047__auto___12439 < len__6046__auto___12438)){
args__6053__auto__.push((arguments[i__6047__auto___12439]));

var G__12440 = (i__6047__auto___12439 + (1));
i__6047__auto___12439 = G__12440;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__12435_SHARP_,p2__12436_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12435_SHARP_,p2__12436_SHARP_))){
return p1__12435_SHARP_;
} else {
return [cljs.core.str(p1__12435_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12436_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq12437){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12437));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12444 = arguments.length;
var i__6047__auto___12445 = (0);
while(true){
if((i__6047__auto___12445 < len__6046__auto___12444)){
args__6053__auto__.push((arguments[i__6047__auto___12445]));

var G__12446 = (i__6047__auto___12445 + (1));
i__6047__auto___12445 = G__12446;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__12441_SHARP_,p2__12442_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12441_SHARP_,p2__12442_SHARP_))){
return p1__12441_SHARP_;
} else {
return [cljs.core.str(p1__12441_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12442_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq12443){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12443));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12450 = arguments.length;
var i__6047__auto___12451 = (0);
while(true){
if((i__6047__auto___12451 < len__6046__auto___12450)){
args__6053__auto__.push((arguments[i__6047__auto___12451]));

var G__12452 = (i__6047__auto___12451 + (1));
i__6047__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__12447_SHARP_,p2__12448_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12447_SHARP_,p2__12448_SHARP_))){
return clojure.string.replace.call(null,p1__12447_SHARP_,kioo.common.get_class_regex.call(null,p2__12448_SHARP_)," ");
} else {
return p1__12447_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq12449){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12449));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
