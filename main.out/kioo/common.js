// Compiled by ClojureScript 1.7.170 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12402 = arguments.length;
var i__6047__auto___12403 = (0);
while(true){
if((i__6047__auto___12403 < len__6046__auto___12402)){
args__6053__auto__.push((arguments[i__6047__auto___12403]));

var G__12404 = (i__6047__auto___12403 + (1));
i__6047__auto___12403 = G__12404;
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

kioo.common.content.cljs$lang$applyTo = (function (seq12401){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12401));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12406 = arguments.length;
var i__6047__auto___12407 = (0);
while(true){
if((i__6047__auto___12407 < len__6046__auto___12406)){
args__6053__auto__.push((arguments[i__6047__auto___12407]));

var G__12408 = (i__6047__auto___12407 + (1));
i__6047__auto___12407 = G__12408;
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

kioo.common.append.cljs$lang$applyTo = (function (seq12405){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12405));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12410 = arguments.length;
var i__6047__auto___12411 = (0);
while(true){
if((i__6047__auto___12411 < len__6046__auto___12410)){
args__6053__auto__.push((arguments[i__6047__auto___12411]));

var G__12412 = (i__6047__auto___12411 + (1));
i__6047__auto___12411 = G__12412;
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

kioo.common.prepend.cljs$lang$applyTo = (function (seq12409){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12409));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12414 = arguments.length;
var i__6047__auto___12415 = (0);
while(true){
if((i__6047__auto___12415 < len__6046__auto___12414)){
args__6053__auto__.push((arguments[i__6047__auto___12415]));

var G__12416 = (i__6047__auto___12415 + (1));
i__6047__auto___12415 = G__12416;
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

kioo.common.substitute.cljs$lang$applyTo = (function (seq12413){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12413));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12420 = arguments.length;
var i__6047__auto___12421 = (0);
while(true){
if((i__6047__auto___12421 < len__6046__auto___12420)){
args__6053__auto__.push((arguments[i__6047__auto___12421]));

var G__12422 = (i__6047__auto___12421 + (1));
i__6047__auto___12421 = G__12422;
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
return (function (n,p__12418){
var vec__12419 = p__12418;
var k = cljs.core.nth.call(null,vec__12419,(0),null);
var v = cljs.core.nth.call(null,vec__12419,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq12417){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12417));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12424 = arguments.length;
var i__6047__auto___12425 = (0);
while(true){
if((i__6047__auto___12425 < len__6046__auto___12424)){
args__6053__auto__.push((arguments[i__6047__auto___12425]));

var G__12426 = (i__6047__auto___12425 + (1));
i__6047__auto___12425 = G__12426;
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

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq12423){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12423));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12430 = arguments.length;
var i__6047__auto___12431 = (0);
while(true){
if((i__6047__auto___12431 < len__6046__auto___12430)){
args__6053__auto__.push((arguments[i__6047__auto___12431]));

var G__12432 = (i__6047__auto___12431 + (1));
i__6047__auto___12431 = G__12432;
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
return cljs.core.reduce.call(null,(function (p1__12428_SHARP_,p2__12427_SHARP_){
return p2__12427_SHARP_.call(null,p1__12428_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq12429){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12429));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12437 = arguments.length;
var i__6047__auto___12438 = (0);
while(true){
if((i__6047__auto___12438 < len__6046__auto___12437)){
args__6053__auto__.push((arguments[i__6047__auto___12438]));

var G__12439 = (i__6047__auto___12438 + (1));
i__6047__auto___12438 = G__12439;
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
return (function (m,p__12435){
var vec__12436 = p__12435;
var k = cljs.core.nth.call(null,vec__12436,(0),null);
var v = cljs.core.nth.call(null,vec__12436,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__12433_SHARP_){
return cljs.core.merge.call(null,p1__12433_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq12434){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12434));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12443 = arguments.length;
var i__6047__auto___12444 = (0);
while(true){
if((i__6047__auto___12444 < len__6046__auto___12443)){
args__6053__auto__.push((arguments[i__6047__auto___12444]));

var G__12445 = (i__6047__auto___12444 + (1));
i__6047__auto___12444 = G__12445;
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
var style = cljs.core.reduce.call(null,(function (p1__12440_SHARP_,p2__12441_SHARP_){
return cljs.core.dissoc.call(null,p1__12440_SHARP_,cljs.core.name.call(null,p2__12441_SHARP_),p2__12441_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq12442){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12442));
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
var len__6046__auto___12449 = arguments.length;
var i__6047__auto___12450 = (0);
while(true){
if((i__6047__auto___12450 < len__6046__auto___12449)){
args__6053__auto__.push((arguments[i__6047__auto___12450]));

var G__12451 = (i__6047__auto___12450 + (1));
i__6047__auto___12450 = G__12451;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12446_SHARP_,p2__12447_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12446_SHARP_,p2__12447_SHARP_))){
return p1__12446_SHARP_;
} else {
return [cljs.core.str(p1__12446_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12447_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq12448){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12448));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12455 = arguments.length;
var i__6047__auto___12456 = (0);
while(true){
if((i__6047__auto___12456 < len__6046__auto___12455)){
args__6053__auto__.push((arguments[i__6047__auto___12456]));

var G__12457 = (i__6047__auto___12456 + (1));
i__6047__auto___12456 = G__12457;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12452_SHARP_,p2__12453_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12452_SHARP_,p2__12453_SHARP_))){
return p1__12452_SHARP_;
} else {
return [cljs.core.str(p1__12452_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12453_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq12454){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12454));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12461 = arguments.length;
var i__6047__auto___12462 = (0);
while(true){
if((i__6047__auto___12462 < len__6046__auto___12461)){
args__6053__auto__.push((arguments[i__6047__auto___12462]));

var G__12463 = (i__6047__auto___12462 + (1));
i__6047__auto___12462 = G__12463;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12458_SHARP_,p2__12459_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12458_SHARP_,p2__12459_SHARP_))){
return clojure.string.replace.call(null,p1__12458_SHARP_,kioo.common.get_class_regex.call(null,p2__12459_SHARP_)," ");
} else {
return p1__12458_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq12460){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12460));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
