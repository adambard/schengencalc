// Compiled by ClojureScript 1.7.170 {}
goog.provide('kioo.om');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('kioo.core');
goog.require('kioo.util');
kioo.om.make_dom = (function kioo$om$make_dom(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12518 = arguments.length;
var i__6047__auto___12519 = (0);
while(true){
if((i__6047__auto___12519 < len__6046__auto___12518)){
args__6053__auto__.push((arguments[i__6047__auto___12519]));

var G__12520 = (i__6047__auto___12519 + (1));
i__6047__auto___12519 = G__12520;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return kioo.om.make_dom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

kioo.om.make_dom.cljs$core$IFn$_invoke$arity$variadic = (function (node,body){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
});

kioo.om.make_dom.cljs$lang$maxFixedArity = (1);

kioo.om.make_dom.cljs$lang$applyTo = (function (seq12516){
var G__12517 = cljs.core.first.call(null,seq12516);
var seq12516__$1 = cljs.core.next.call(null,seq12516);
return kioo.om.make_dom.cljs$core$IFn$_invoke$arity$variadic(G__12517,seq12516__$1);
});
kioo.om.content = kioo.core.content;
kioo.om.append = kioo.core.append;
kioo.om.prepend = kioo.core.prepend;
kioo.om.after = (function kioo$om$after(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12522 = arguments.length;
var i__6047__auto___12523 = (0);
while(true){
if((i__6047__auto___12523 < len__6046__auto___12522)){
args__6053__auto__.push((arguments[i__6047__auto___12523]));

var G__12524 = (i__6047__auto___12523 + (1));
i__6047__auto___12523 = G__12524;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.om.after.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.om.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,node,body);
} else {
return cljs.core.cons.call(null,kioo.om.make_dom.call(null,node),body);
}
});
});

kioo.om.after.cljs$lang$maxFixedArity = (0);

kioo.om.after.cljs$lang$applyTo = (function (seq12521){
return kioo.om.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12521));
});
kioo.om.before = (function kioo$om$before(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12526 = arguments.length;
var i__6047__auto___12527 = (0);
while(true){
if((i__6047__auto___12527 < len__6046__auto___12526)){
args__6053__auto__.push((arguments[i__6047__auto___12527]));

var G__12528 = (i__6047__auto___12527 + (1));
i__6047__auto___12527 = G__12528;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return kioo.om.before.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

kioo.om.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,body,node);
} else {
return cljs.core.concat.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.om.make_dom.call(null,node)], null));
}
});
});

kioo.om.before.cljs$lang$maxFixedArity = (0);

kioo.om.before.cljs$lang$applyTo = (function (seq12525){
return kioo.om.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12525));
});
kioo.om.substitute = kioo.core.substitute;
kioo.om.set_attr = kioo.core.set_attr;
kioo.om.remove_attr = kioo.core.remove_attr;
kioo.om.do__GT_ = kioo.core.do__GT_;
kioo.om.set_style = kioo.core.set_style;
kioo.om.remove_style = kioo.core.remove_style;
kioo.om.set_class = kioo.core.set_class;
kioo.om.add_class = kioo.core.add_class;
kioo.om.remove_class = kioo.core.remove_class;
kioo.om.wrap = (function kioo$om$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"sym","sym",-1444860305),(React.DOM[cljs.core.name.call(null,tag)]),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kioo.util.convert_attrs.call(null,attrs),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.om.make_dom.call(null,node)], null)], null);
});
});
kioo.om.unwrap = kioo.core.unwrap;
kioo.om.html = kioo.core.html;
kioo.om.html_content = kioo.core.html_content;
kioo.om.listen = kioo.core.listen;
kioo.om.lifecycle = kioo.core.lifecycle;
