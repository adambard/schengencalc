// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__12101__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__12100 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__12100,(0),null);
var body = cljs.core.nthnext.call(null,vec__12100,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__12101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12102__i = 0, G__12102__a = new Array(arguments.length -  0);
while (G__12102__i < G__12102__a.length) {G__12102__a[G__12102__i] = arguments[G__12102__i + 0]; ++G__12102__i;}
  args = new cljs.core.IndexedSeq(G__12102__a,0);
} 
return G__12101__delegate.call(this,args);};
G__12101.cljs$lang$maxFixedArity = 0;
G__12101.cljs$lang$applyTo = (function (arglist__12103){
var args = cljs.core.seq(arglist__12103);
return G__12101__delegate(args);
});
G__12101.cljs$core$IFn$_invoke$arity$variadic = G__12101__delegate;
return G__12101;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5760__auto__ = (function sablono$core$update_arglists_$_iter__12108(s__12109){
return (new cljs.core.LazySeq(null,(function (){
var s__12109__$1 = s__12109;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12109__$1);
if(temp__4657__auto__){
var s__12109__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12109__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12109__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12111 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12110 = (0);
while(true){
if((i__12110 < size__5759__auto__)){
var args = cljs.core._nth.call(null,c__5758__auto__,i__12110);
cljs.core.chunk_append.call(null,b__12111,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__12112 = (i__12110 + (1));
i__12110 = G__12112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12111),sablono$core$update_arglists_$_iter__12108.call(null,cljs.core.chunk_rest.call(null,s__12109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12111),null);
}
} else {
var args = cljs.core.first.call(null,s__12109__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__12108.call(null,cljs.core.rest.call(null,s__12109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12118 = arguments.length;
var i__6047__auto___12119 = (0);
while(true){
if((i__6047__auto___12119 < len__6046__auto___12118)){
args__6053__auto__.push((arguments[i__6047__auto___12119]));

var G__12120 = (i__6047__auto___12119 + (1));
i__6047__auto___12119 = G__12120;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5760__auto__ = (function sablono$core$iter__12114(s__12115){
return (new cljs.core.LazySeq(null,(function (){
var s__12115__$1 = s__12115;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12115__$1);
if(temp__4657__auto__){
var s__12115__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12115__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12115__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12117 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12116 = (0);
while(true){
if((i__12116 < size__5759__auto__)){
var style = cljs.core._nth.call(null,c__5758__auto__,i__12116);
cljs.core.chunk_append.call(null,b__12117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__12121 = (i__12116 + (1));
i__12116 = G__12121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12117),sablono$core$iter__12114.call(null,cljs.core.chunk_rest.call(null,s__12115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12117),null);
}
} else {
var style = cljs.core.first.call(null,s__12115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__12114.call(null,cljs.core.rest.call(null,s__12115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq12113){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12113));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to12122 = (function sablono$core$link_to12122(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12125 = arguments.length;
var i__6047__auto___12126 = (0);
while(true){
if((i__6047__auto___12126 < len__6046__auto___12125)){
args__6053__auto__.push((arguments[i__6047__auto___12126]));

var G__12127 = (i__6047__auto___12126 + (1));
i__6047__auto___12126 = G__12127;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.link_to12122.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.link_to12122.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to12122.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12122.cljs$lang$applyTo = (function (seq12123){
var G__12124 = cljs.core.first.call(null,seq12123);
var seq12123__$1 = cljs.core.next.call(null,seq12123);
return sablono.core.link_to12122.cljs$core$IFn$_invoke$arity$variadic(G__12124,seq12123__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12122);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12128 = (function sablono$core$mail_to12128(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12133 = arguments.length;
var i__6047__auto___12134 = (0);
while(true){
if((i__6047__auto___12134 < len__6046__auto___12133)){
args__6053__auto__.push((arguments[i__6047__auto___12134]));

var G__12135 = (i__6047__auto___12134 + (1));
i__6047__auto___12134 = G__12135;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12128.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.mail_to12128.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12131){
var vec__12132 = p__12131;
var content = cljs.core.nth.call(null,vec__12132,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4988__auto__ = content;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12128.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12128.cljs$lang$applyTo = (function (seq12129){
var G__12130 = cljs.core.first.call(null,seq12129);
var seq12129__$1 = cljs.core.next.call(null,seq12129);
return sablono.core.mail_to12128.cljs$core$IFn$_invoke$arity$variadic(G__12130,seq12129__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12128);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list12136 = (function sablono$core$unordered_list12136(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5760__auto__ = (function sablono$core$unordered_list12136_$_iter__12141(s__12142){
return (new cljs.core.LazySeq(null,(function (){
var s__12142__$1 = s__12142;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12142__$1);
if(temp__4657__auto__){
var s__12142__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12142__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12142__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12144 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12143 = (0);
while(true){
if((i__12143 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12143);
cljs.core.chunk_append.call(null,b__12144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12145 = (i__12143 + (1));
i__12143 = G__12145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12144),sablono$core$unordered_list12136_$_iter__12141.call(null,cljs.core.chunk_rest.call(null,s__12142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12144),null);
}
} else {
var x = cljs.core.first.call(null,s__12142__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list12136_$_iter__12141.call(null,cljs.core.rest.call(null,s__12142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12136);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list12146 = (function sablono$core$ordered_list12146(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5760__auto__ = (function sablono$core$ordered_list12146_$_iter__12151(s__12152){
return (new cljs.core.LazySeq(null,(function (){
var s__12152__$1 = s__12152;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12152__$1);
if(temp__4657__auto__){
var s__12152__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12152__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12152__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12154 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12153 = (0);
while(true){
if((i__12153 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12153);
cljs.core.chunk_append.call(null,b__12154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12155 = (i__12153 + (1));
i__12153 = G__12155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12154),sablono$core$ordered_list12146_$_iter__12151.call(null,cljs.core.chunk_rest.call(null,s__12152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12154),null);
}
} else {
var x = cljs.core.first.call(null,s__12152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list12146_$_iter__12151.call(null,cljs.core.rest.call(null,s__12152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12146);
/**
 * Create an image element.
 */
sablono.core.image12156 = (function sablono$core$image12156(var_args){
var args12157 = [];
var len__6046__auto___12160 = arguments.length;
var i__6047__auto___12161 = (0);
while(true){
if((i__6047__auto___12161 < len__6046__auto___12160)){
args12157.push((arguments[i__6047__auto___12161]));

var G__12162 = (i__6047__auto___12161 + (1));
i__6047__auto___12161 = G__12162;
continue;
} else {
}
break;
}

var G__12159 = args12157.length;
switch (G__12159) {
case 1:
return sablono.core.image12156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image12156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12157.length)].join('')));

}
});

sablono.core.image12156.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image12156.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image12156.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12156);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__12164_SHARP_,p2__12165_SHARP_){
return [cljs.core.str(p1__12164_SHARP_),cljs.core.str("["),cljs.core.str(p2__12165_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__12166_SHARP_,p2__12167_SHARP_){
return [cljs.core.str(p1__12166_SHARP_),cljs.core.str("-"),cljs.core.str(p2__12167_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field12168 = (function sablono$core$color_field12168(var_args){
var args12169 = [];
var len__6046__auto___12236 = arguments.length;
var i__6047__auto___12237 = (0);
while(true){
if((i__6047__auto___12237 < len__6046__auto___12236)){
args12169.push((arguments[i__6047__auto___12237]));

var G__12238 = (i__6047__auto___12237 + (1));
i__6047__auto___12237 = G__12238;
continue;
} else {
}
break;
}

var G__12171 = args12169.length;
switch (G__12171) {
case 1:
return sablono.core.color_field12168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field12168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12169.length)].join('')));

}
});

sablono.core.color_field12168.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.color_field12168.call(null,name__12019__auto__,null);
});

sablono.core.color_field12168.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.color_field12168.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12168);

/**
 * Creates a date input field.
 */
sablono.core.date_field12172 = (function sablono$core$date_field12172(var_args){
var args12173 = [];
var len__6046__auto___12240 = arguments.length;
var i__6047__auto___12241 = (0);
while(true){
if((i__6047__auto___12241 < len__6046__auto___12240)){
args12173.push((arguments[i__6047__auto___12241]));

var G__12242 = (i__6047__auto___12241 + (1));
i__6047__auto___12241 = G__12242;
continue;
} else {
}
break;
}

var G__12175 = args12173.length;
switch (G__12175) {
case 1:
return sablono.core.date_field12172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field12172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12173.length)].join('')));

}
});

sablono.core.date_field12172.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.date_field12172.call(null,name__12019__auto__,null);
});

sablono.core.date_field12172.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.date_field12172.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12172);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field12176 = (function sablono$core$datetime_field12176(var_args){
var args12177 = [];
var len__6046__auto___12244 = arguments.length;
var i__6047__auto___12245 = (0);
while(true){
if((i__6047__auto___12245 < len__6046__auto___12244)){
args12177.push((arguments[i__6047__auto___12245]));

var G__12246 = (i__6047__auto___12245 + (1));
i__6047__auto___12245 = G__12246;
continue;
} else {
}
break;
}

var G__12179 = args12177.length;
switch (G__12179) {
case 1:
return sablono.core.datetime_field12176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field12176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12177.length)].join('')));

}
});

sablono.core.datetime_field12176.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.datetime_field12176.call(null,name__12019__auto__,null);
});

sablono.core.datetime_field12176.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.datetime_field12176.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12176);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field12180 = (function sablono$core$datetime_local_field12180(var_args){
var args12181 = [];
var len__6046__auto___12248 = arguments.length;
var i__6047__auto___12249 = (0);
while(true){
if((i__6047__auto___12249 < len__6046__auto___12248)){
args12181.push((arguments[i__6047__auto___12249]));

var G__12250 = (i__6047__auto___12249 + (1));
i__6047__auto___12249 = G__12250;
continue;
} else {
}
break;
}

var G__12183 = args12181.length;
switch (G__12183) {
case 1:
return sablono.core.datetime_local_field12180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field12180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12181.length)].join('')));

}
});

sablono.core.datetime_local_field12180.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.datetime_local_field12180.call(null,name__12019__auto__,null);
});

sablono.core.datetime_local_field12180.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.datetime_local_field12180.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12180);

/**
 * Creates a email input field.
 */
sablono.core.email_field12184 = (function sablono$core$email_field12184(var_args){
var args12185 = [];
var len__6046__auto___12252 = arguments.length;
var i__6047__auto___12253 = (0);
while(true){
if((i__6047__auto___12253 < len__6046__auto___12252)){
args12185.push((arguments[i__6047__auto___12253]));

var G__12254 = (i__6047__auto___12253 + (1));
i__6047__auto___12253 = G__12254;
continue;
} else {
}
break;
}

var G__12187 = args12185.length;
switch (G__12187) {
case 1:
return sablono.core.email_field12184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field12184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12185.length)].join('')));

}
});

sablono.core.email_field12184.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.email_field12184.call(null,name__12019__auto__,null);
});

sablono.core.email_field12184.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.email_field12184.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12184);

/**
 * Creates a file input field.
 */
sablono.core.file_field12188 = (function sablono$core$file_field12188(var_args){
var args12189 = [];
var len__6046__auto___12256 = arguments.length;
var i__6047__auto___12257 = (0);
while(true){
if((i__6047__auto___12257 < len__6046__auto___12256)){
args12189.push((arguments[i__6047__auto___12257]));

var G__12258 = (i__6047__auto___12257 + (1));
i__6047__auto___12257 = G__12258;
continue;
} else {
}
break;
}

var G__12191 = args12189.length;
switch (G__12191) {
case 1:
return sablono.core.file_field12188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field12188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12189.length)].join('')));

}
});

sablono.core.file_field12188.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.file_field12188.call(null,name__12019__auto__,null);
});

sablono.core.file_field12188.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.file_field12188.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12188);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field12192 = (function sablono$core$hidden_field12192(var_args){
var args12193 = [];
var len__6046__auto___12260 = arguments.length;
var i__6047__auto___12261 = (0);
while(true){
if((i__6047__auto___12261 < len__6046__auto___12260)){
args12193.push((arguments[i__6047__auto___12261]));

var G__12262 = (i__6047__auto___12261 + (1));
i__6047__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var G__12195 = args12193.length;
switch (G__12195) {
case 1:
return sablono.core.hidden_field12192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field12192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12193.length)].join('')));

}
});

sablono.core.hidden_field12192.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.hidden_field12192.call(null,name__12019__auto__,null);
});

sablono.core.hidden_field12192.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.hidden_field12192.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12192);

/**
 * Creates a month input field.
 */
sablono.core.month_field12196 = (function sablono$core$month_field12196(var_args){
var args12197 = [];
var len__6046__auto___12264 = arguments.length;
var i__6047__auto___12265 = (0);
while(true){
if((i__6047__auto___12265 < len__6046__auto___12264)){
args12197.push((arguments[i__6047__auto___12265]));

var G__12266 = (i__6047__auto___12265 + (1));
i__6047__auto___12265 = G__12266;
continue;
} else {
}
break;
}

var G__12199 = args12197.length;
switch (G__12199) {
case 1:
return sablono.core.month_field12196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field12196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12197.length)].join('')));

}
});

sablono.core.month_field12196.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.month_field12196.call(null,name__12019__auto__,null);
});

sablono.core.month_field12196.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.month_field12196.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12196);

/**
 * Creates a number input field.
 */
sablono.core.number_field12200 = (function sablono$core$number_field12200(var_args){
var args12201 = [];
var len__6046__auto___12268 = arguments.length;
var i__6047__auto___12269 = (0);
while(true){
if((i__6047__auto___12269 < len__6046__auto___12268)){
args12201.push((arguments[i__6047__auto___12269]));

var G__12270 = (i__6047__auto___12269 + (1));
i__6047__auto___12269 = G__12270;
continue;
} else {
}
break;
}

var G__12203 = args12201.length;
switch (G__12203) {
case 1:
return sablono.core.number_field12200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field12200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12201.length)].join('')));

}
});

sablono.core.number_field12200.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.number_field12200.call(null,name__12019__auto__,null);
});

sablono.core.number_field12200.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.number_field12200.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12200);

/**
 * Creates a password input field.
 */
sablono.core.password_field12204 = (function sablono$core$password_field12204(var_args){
var args12205 = [];
var len__6046__auto___12272 = arguments.length;
var i__6047__auto___12273 = (0);
while(true){
if((i__6047__auto___12273 < len__6046__auto___12272)){
args12205.push((arguments[i__6047__auto___12273]));

var G__12274 = (i__6047__auto___12273 + (1));
i__6047__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var G__12207 = args12205.length;
switch (G__12207) {
case 1:
return sablono.core.password_field12204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field12204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12205.length)].join('')));

}
});

sablono.core.password_field12204.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.password_field12204.call(null,name__12019__auto__,null);
});

sablono.core.password_field12204.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.password_field12204.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12204);

/**
 * Creates a range input field.
 */
sablono.core.range_field12208 = (function sablono$core$range_field12208(var_args){
var args12209 = [];
var len__6046__auto___12276 = arguments.length;
var i__6047__auto___12277 = (0);
while(true){
if((i__6047__auto___12277 < len__6046__auto___12276)){
args12209.push((arguments[i__6047__auto___12277]));

var G__12278 = (i__6047__auto___12277 + (1));
i__6047__auto___12277 = G__12278;
continue;
} else {
}
break;
}

var G__12211 = args12209.length;
switch (G__12211) {
case 1:
return sablono.core.range_field12208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field12208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12209.length)].join('')));

}
});

sablono.core.range_field12208.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.range_field12208.call(null,name__12019__auto__,null);
});

sablono.core.range_field12208.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.range_field12208.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12208);

/**
 * Creates a search input field.
 */
sablono.core.search_field12212 = (function sablono$core$search_field12212(var_args){
var args12213 = [];
var len__6046__auto___12280 = arguments.length;
var i__6047__auto___12281 = (0);
while(true){
if((i__6047__auto___12281 < len__6046__auto___12280)){
args12213.push((arguments[i__6047__auto___12281]));

var G__12282 = (i__6047__auto___12281 + (1));
i__6047__auto___12281 = G__12282;
continue;
} else {
}
break;
}

var G__12215 = args12213.length;
switch (G__12215) {
case 1:
return sablono.core.search_field12212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field12212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12213.length)].join('')));

}
});

sablono.core.search_field12212.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.search_field12212.call(null,name__12019__auto__,null);
});

sablono.core.search_field12212.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.search_field12212.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12212);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field12216 = (function sablono$core$tel_field12216(var_args){
var args12217 = [];
var len__6046__auto___12284 = arguments.length;
var i__6047__auto___12285 = (0);
while(true){
if((i__6047__auto___12285 < len__6046__auto___12284)){
args12217.push((arguments[i__6047__auto___12285]));

var G__12286 = (i__6047__auto___12285 + (1));
i__6047__auto___12285 = G__12286;
continue;
} else {
}
break;
}

var G__12219 = args12217.length;
switch (G__12219) {
case 1:
return sablono.core.tel_field12216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field12216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12217.length)].join('')));

}
});

sablono.core.tel_field12216.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.tel_field12216.call(null,name__12019__auto__,null);
});

sablono.core.tel_field12216.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.tel_field12216.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12216);

/**
 * Creates a text input field.
 */
sablono.core.text_field12220 = (function sablono$core$text_field12220(var_args){
var args12221 = [];
var len__6046__auto___12288 = arguments.length;
var i__6047__auto___12289 = (0);
while(true){
if((i__6047__auto___12289 < len__6046__auto___12288)){
args12221.push((arguments[i__6047__auto___12289]));

var G__12290 = (i__6047__auto___12289 + (1));
i__6047__auto___12289 = G__12290;
continue;
} else {
}
break;
}

var G__12223 = args12221.length;
switch (G__12223) {
case 1:
return sablono.core.text_field12220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field12220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12221.length)].join('')));

}
});

sablono.core.text_field12220.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.text_field12220.call(null,name__12019__auto__,null);
});

sablono.core.text_field12220.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.text_field12220.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12220);

/**
 * Creates a time input field.
 */
sablono.core.time_field12224 = (function sablono$core$time_field12224(var_args){
var args12225 = [];
var len__6046__auto___12292 = arguments.length;
var i__6047__auto___12293 = (0);
while(true){
if((i__6047__auto___12293 < len__6046__auto___12292)){
args12225.push((arguments[i__6047__auto___12293]));

var G__12294 = (i__6047__auto___12293 + (1));
i__6047__auto___12293 = G__12294;
continue;
} else {
}
break;
}

var G__12227 = args12225.length;
switch (G__12227) {
case 1:
return sablono.core.time_field12224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field12224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12225.length)].join('')));

}
});

sablono.core.time_field12224.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.time_field12224.call(null,name__12019__auto__,null);
});

sablono.core.time_field12224.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.time_field12224.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12224);

/**
 * Creates a url input field.
 */
sablono.core.url_field12228 = (function sablono$core$url_field12228(var_args){
var args12229 = [];
var len__6046__auto___12296 = arguments.length;
var i__6047__auto___12297 = (0);
while(true){
if((i__6047__auto___12297 < len__6046__auto___12296)){
args12229.push((arguments[i__6047__auto___12297]));

var G__12298 = (i__6047__auto___12297 + (1));
i__6047__auto___12297 = G__12298;
continue;
} else {
}
break;
}

var G__12231 = args12229.length;
switch (G__12231) {
case 1:
return sablono.core.url_field12228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field12228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12229.length)].join('')));

}
});

sablono.core.url_field12228.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.url_field12228.call(null,name__12019__auto__,null);
});

sablono.core.url_field12228.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.url_field12228.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12228);

/**
 * Creates a week input field.
 */
sablono.core.week_field12232 = (function sablono$core$week_field12232(var_args){
var args12233 = [];
var len__6046__auto___12300 = arguments.length;
var i__6047__auto___12301 = (0);
while(true){
if((i__6047__auto___12301 < len__6046__auto___12300)){
args12233.push((arguments[i__6047__auto___12301]));

var G__12302 = (i__6047__auto___12301 + (1));
i__6047__auto___12301 = G__12302;
continue;
} else {
}
break;
}

var G__12235 = args12233.length;
switch (G__12235) {
case 1:
return sablono.core.week_field12232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field12232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12233.length)].join('')));

}
});

sablono.core.week_field12232.cljs$core$IFn$_invoke$arity$1 = (function (name__12019__auto__){
return sablono.core.week_field12232.call(null,name__12019__auto__,null);
});

sablono.core.week_field12232.cljs$core$IFn$_invoke$arity$2 = (function (name__12019__auto__,value__12020__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12019__auto__,value__12020__auto__);
});

sablono.core.week_field12232.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12232);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box12304 = (function sablono$core$check_box12304(var_args){
var args12305 = [];
var len__6046__auto___12308 = arguments.length;
var i__6047__auto___12309 = (0);
while(true){
if((i__6047__auto___12309 < len__6046__auto___12308)){
args12305.push((arguments[i__6047__auto___12309]));

var G__12310 = (i__6047__auto___12309 + (1));
i__6047__auto___12309 = G__12310;
continue;
} else {
}
break;
}

var G__12307 = args12305.length;
switch (G__12307) {
case 1:
return sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12305.length)].join('')));

}
});

sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box12304.call(null,name,null);
});

sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box12304.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box12304.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box12304.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12304);
/**
 * Creates a radio button.
 */
sablono.core.radio_button12312 = (function sablono$core$radio_button12312(var_args){
var args12313 = [];
var len__6046__auto___12316 = arguments.length;
var i__6047__auto___12317 = (0);
while(true){
if((i__6047__auto___12317 < len__6046__auto___12316)){
args12313.push((arguments[i__6047__auto___12317]));

var G__12318 = (i__6047__auto___12317 + (1));
i__6047__auto___12317 = G__12318;
continue;
} else {
}
break;
}

var G__12315 = args12313.length;
switch (G__12315) {
case 1:
return sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12313.length)].join('')));

}
});

sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button12312.call(null,group,null);
});

sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button12312.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button12312.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button12312.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12312);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options12320 = (function sablono$core$select_options12320(var_args){
var args12321 = [];
var len__6046__auto___12332 = arguments.length;
var i__6047__auto___12333 = (0);
while(true){
if((i__6047__auto___12333 < len__6046__auto___12332)){
args12321.push((arguments[i__6047__auto___12333]));

var G__12334 = (i__6047__auto___12333 + (1));
i__6047__auto___12333 = G__12334;
continue;
} else {
}
break;
}

var G__12323 = args12321.length;
switch (G__12323) {
case 1:
return sablono.core.select_options12320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options12320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12321.length)].join('')));

}
});

sablono.core.select_options12320.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options12320.call(null,coll,null);
});

sablono.core.select_options12320.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5760__auto__ = (function sablono$core$iter__12324(s__12325){
return (new cljs.core.LazySeq(null,(function (){
var s__12325__$1 = s__12325;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12325__$1);
if(temp__4657__auto__){
var s__12325__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12325__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12325__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12327 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12326 = (0);
while(true){
if((i__12326 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12326);
cljs.core.chunk_append.call(null,b__12327,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12330 = x;
var text = cljs.core.nth.call(null,vec__12330,(0),null);
var val = cljs.core.nth.call(null,vec__12330,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12330,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12320.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__12336 = (i__12326 + (1));
i__12326 = G__12336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12327),sablono$core$iter__12324.call(null,cljs.core.chunk_rest.call(null,s__12325__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12327),null);
}
} else {
var x = cljs.core.first.call(null,s__12325__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12331 = x;
var text = cljs.core.nth.call(null,vec__12331,(0),null);
var val = cljs.core.nth.call(null,vec__12331,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12331,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12320.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__12324.call(null,cljs.core.rest.call(null,s__12325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,coll);
});

sablono.core.select_options12320.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12320);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12337 = (function sablono$core$drop_down12337(var_args){
var args12338 = [];
var len__6046__auto___12341 = arguments.length;
var i__6047__auto___12342 = (0);
while(true){
if((i__6047__auto___12342 < len__6046__auto___12341)){
args12338.push((arguments[i__6047__auto___12342]));

var G__12343 = (i__6047__auto___12342 + (1));
i__6047__auto___12342 = G__12343;
continue;
} else {
}
break;
}

var G__12340 = args12338.length;
switch (G__12340) {
case 2:
return sablono.core.drop_down12337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12337.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12338.length)].join('')));

}
});

sablono.core.drop_down12337.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12337.call(null,name,options,null);
});

sablono.core.drop_down12337.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down12337.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12337);
/**
 * Creates a text area element.
 */
sablono.core.text_area12345 = (function sablono$core$text_area12345(var_args){
var args12346 = [];
var len__6046__auto___12349 = arguments.length;
var i__6047__auto___12350 = (0);
while(true){
if((i__6047__auto___12350 < len__6046__auto___12349)){
args12346.push((arguments[i__6047__auto___12350]));

var G__12351 = (i__6047__auto___12350 + (1));
i__6047__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var G__12348 = args12346.length;
switch (G__12348) {
case 1:
return sablono.core.text_area12345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12346.length)].join('')));

}
});

sablono.core.text_area12345.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12345.call(null,name,null);
});

sablono.core.text_area12345.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area12345.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12345);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12353 = (function sablono$core$label12353(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12353);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12354 = (function sablono$core$submit_button12354(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12354);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12355 = (function sablono$core$reset_button12355(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12355);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12356 = (function sablono$core$form_to12356(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12361 = arguments.length;
var i__6047__auto___12362 = (0);
while(true){
if((i__6047__auto___12362 < len__6046__auto___12361)){
args__6053__auto__.push((arguments[i__6047__auto___12362]));

var G__12363 = (i__6047__auto___12362 + (1));
i__6047__auto___12362 = G__12363;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.form_to12356.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.form_to12356.cljs$core$IFn$_invoke$arity$variadic = (function (p__12359,body){
var vec__12360 = p__12359;
var method = cljs.core.nth.call(null,vec__12360,(0),null);
var action = cljs.core.nth.call(null,vec__12360,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to12356.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12356.cljs$lang$applyTo = (function (seq12357){
var G__12358 = cljs.core.first.call(null,seq12357);
var seq12357__$1 = cljs.core.next.call(null,seq12357);
return sablono.core.form_to12356.cljs$core$IFn$_invoke$arity$variadic(G__12358,seq12357__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12356);
