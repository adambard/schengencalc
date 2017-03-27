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
var G__12112__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__12111 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__12111,(0),null);
var body = cljs.core.nthnext.call(null,vec__12111,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__12112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12113__i = 0, G__12113__a = new Array(arguments.length -  0);
while (G__12113__i < G__12113__a.length) {G__12113__a[G__12113__i] = arguments[G__12113__i + 0]; ++G__12113__i;}
  args = new cljs.core.IndexedSeq(G__12113__a,0);
} 
return G__12112__delegate.call(this,args);};
G__12112.cljs$lang$maxFixedArity = 0;
G__12112.cljs$lang$applyTo = (function (arglist__12114){
var args = cljs.core.seq(arglist__12114);
return G__12112__delegate(args);
});
G__12112.cljs$core$IFn$_invoke$arity$variadic = G__12112__delegate;
return G__12112;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5760__auto__ = (function sablono$core$update_arglists_$_iter__12119(s__12120){
return (new cljs.core.LazySeq(null,(function (){
var s__12120__$1 = s__12120;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12120__$1);
if(temp__4425__auto__){
var s__12120__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12120__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12120__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12122 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12121 = (0);
while(true){
if((i__12121 < size__5759__auto__)){
var args = cljs.core._nth.call(null,c__5758__auto__,i__12121);
cljs.core.chunk_append.call(null,b__12122,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__12123 = (i__12121 + (1));
i__12121 = G__12123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12122),sablono$core$update_arglists_$_iter__12119.call(null,cljs.core.chunk_rest.call(null,s__12120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12122),null);
}
} else {
var args = cljs.core.first.call(null,s__12120__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__12119.call(null,cljs.core.rest.call(null,s__12120__$2)));
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
var len__6046__auto___12129 = arguments.length;
var i__6047__auto___12130 = (0);
while(true){
if((i__6047__auto___12130 < len__6046__auto___12129)){
args__6053__auto__.push((arguments[i__6047__auto___12130]));

var G__12131 = (i__6047__auto___12130 + (1));
i__6047__auto___12130 = G__12131;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5760__auto__ = (function sablono$core$iter__12125(s__12126){
return (new cljs.core.LazySeq(null,(function (){
var s__12126__$1 = s__12126;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12126__$1);
if(temp__4425__auto__){
var s__12126__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12126__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12126__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12128 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12127 = (0);
while(true){
if((i__12127 < size__5759__auto__)){
var style = cljs.core._nth.call(null,c__5758__auto__,i__12127);
cljs.core.chunk_append.call(null,b__12128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__12132 = (i__12127 + (1));
i__12127 = G__12132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12128),sablono$core$iter__12125.call(null,cljs.core.chunk_rest.call(null,s__12126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12128),null);
}
} else {
var style = cljs.core.first.call(null,s__12126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__12125.call(null,cljs.core.rest.call(null,s__12126__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq12124){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12124));
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
sablono.core.link_to12133 = (function sablono$core$link_to12133(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12136 = arguments.length;
var i__6047__auto___12137 = (0);
while(true){
if((i__6047__auto___12137 < len__6046__auto___12136)){
args__6053__auto__.push((arguments[i__6047__auto___12137]));

var G__12138 = (i__6047__auto___12137 + (1));
i__6047__auto___12137 = G__12138;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.link_to12133.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.link_to12133.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to12133.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12133.cljs$lang$applyTo = (function (seq12134){
var G__12135 = cljs.core.first.call(null,seq12134);
var seq12134__$1 = cljs.core.next.call(null,seq12134);
return sablono.core.link_to12133.cljs$core$IFn$_invoke$arity$variadic(G__12135,seq12134__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12133);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12139 = (function sablono$core$mail_to12139(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12144 = arguments.length;
var i__6047__auto___12145 = (0);
while(true){
if((i__6047__auto___12145 < len__6046__auto___12144)){
args__6053__auto__.push((arguments[i__6047__auto___12145]));

var G__12146 = (i__6047__auto___12145 + (1));
i__6047__auto___12145 = G__12146;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12139.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.mail_to12139.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12142){
var vec__12143 = p__12142;
var content = cljs.core.nth.call(null,vec__12143,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4988__auto__ = content;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12139.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12139.cljs$lang$applyTo = (function (seq12140){
var G__12141 = cljs.core.first.call(null,seq12140);
var seq12140__$1 = cljs.core.next.call(null,seq12140);
return sablono.core.mail_to12139.cljs$core$IFn$_invoke$arity$variadic(G__12141,seq12140__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12139);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list12147 = (function sablono$core$unordered_list12147(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5760__auto__ = (function sablono$core$unordered_list12147_$_iter__12152(s__12153){
return (new cljs.core.LazySeq(null,(function (){
var s__12153__$1 = s__12153;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12153__$1);
if(temp__4425__auto__){
var s__12153__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12153__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12153__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12155 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12154 = (0);
while(true){
if((i__12154 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12154);
cljs.core.chunk_append.call(null,b__12155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12156 = (i__12154 + (1));
i__12154 = G__12156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12155),sablono$core$unordered_list12147_$_iter__12152.call(null,cljs.core.chunk_rest.call(null,s__12153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12155),null);
}
} else {
var x = cljs.core.first.call(null,s__12153__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list12147_$_iter__12152.call(null,cljs.core.rest.call(null,s__12153__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12147);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list12157 = (function sablono$core$ordered_list12157(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5760__auto__ = (function sablono$core$ordered_list12157_$_iter__12162(s__12163){
return (new cljs.core.LazySeq(null,(function (){
var s__12163__$1 = s__12163;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12163__$1);
if(temp__4425__auto__){
var s__12163__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12163__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12163__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12165 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12164 = (0);
while(true){
if((i__12164 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12164);
cljs.core.chunk_append.call(null,b__12165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12166 = (i__12164 + (1));
i__12164 = G__12166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12165),sablono$core$ordered_list12157_$_iter__12162.call(null,cljs.core.chunk_rest.call(null,s__12163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12165),null);
}
} else {
var x = cljs.core.first.call(null,s__12163__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list12157_$_iter__12162.call(null,cljs.core.rest.call(null,s__12163__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12157);
/**
 * Create an image element.
 */
sablono.core.image12167 = (function sablono$core$image12167(var_args){
var args12168 = [];
var len__6046__auto___12171 = arguments.length;
var i__6047__auto___12172 = (0);
while(true){
if((i__6047__auto___12172 < len__6046__auto___12171)){
args12168.push((arguments[i__6047__auto___12172]));

var G__12173 = (i__6047__auto___12172 + (1));
i__6047__auto___12172 = G__12173;
continue;
} else {
}
break;
}

var G__12170 = args12168.length;
switch (G__12170) {
case 1:
return sablono.core.image12167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image12167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12168.length)].join('')));

}
});

sablono.core.image12167.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image12167.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image12167.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12167);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__12175_SHARP_,p2__12176_SHARP_){
return [cljs.core.str(p1__12175_SHARP_),cljs.core.str("["),cljs.core.str(p2__12176_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__12177_SHARP_,p2__12178_SHARP_){
return [cljs.core.str(p1__12177_SHARP_),cljs.core.str("-"),cljs.core.str(p2__12178_SHARP_)].join('');
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
sablono.core.color_field12179 = (function sablono$core$color_field12179(var_args){
var args12180 = [];
var len__6046__auto___12247 = arguments.length;
var i__6047__auto___12248 = (0);
while(true){
if((i__6047__auto___12248 < len__6046__auto___12247)){
args12180.push((arguments[i__6047__auto___12248]));

var G__12249 = (i__6047__auto___12248 + (1));
i__6047__auto___12248 = G__12249;
continue;
} else {
}
break;
}

var G__12182 = args12180.length;
switch (G__12182) {
case 1:
return sablono.core.color_field12179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field12179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12180.length)].join('')));

}
});

sablono.core.color_field12179.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.color_field12179.call(null,name__12030__auto__,null);
});

sablono.core.color_field12179.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.color_field12179.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12179);

/**
 * Creates a date input field.
 */
sablono.core.date_field12183 = (function sablono$core$date_field12183(var_args){
var args12184 = [];
var len__6046__auto___12251 = arguments.length;
var i__6047__auto___12252 = (0);
while(true){
if((i__6047__auto___12252 < len__6046__auto___12251)){
args12184.push((arguments[i__6047__auto___12252]));

var G__12253 = (i__6047__auto___12252 + (1));
i__6047__auto___12252 = G__12253;
continue;
} else {
}
break;
}

var G__12186 = args12184.length;
switch (G__12186) {
case 1:
return sablono.core.date_field12183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field12183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12184.length)].join('')));

}
});

sablono.core.date_field12183.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.date_field12183.call(null,name__12030__auto__,null);
});

sablono.core.date_field12183.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.date_field12183.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12183);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field12187 = (function sablono$core$datetime_field12187(var_args){
var args12188 = [];
var len__6046__auto___12255 = arguments.length;
var i__6047__auto___12256 = (0);
while(true){
if((i__6047__auto___12256 < len__6046__auto___12255)){
args12188.push((arguments[i__6047__auto___12256]));

var G__12257 = (i__6047__auto___12256 + (1));
i__6047__auto___12256 = G__12257;
continue;
} else {
}
break;
}

var G__12190 = args12188.length;
switch (G__12190) {
case 1:
return sablono.core.datetime_field12187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field12187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12188.length)].join('')));

}
});

sablono.core.datetime_field12187.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.datetime_field12187.call(null,name__12030__auto__,null);
});

sablono.core.datetime_field12187.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.datetime_field12187.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12187);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field12191 = (function sablono$core$datetime_local_field12191(var_args){
var args12192 = [];
var len__6046__auto___12259 = arguments.length;
var i__6047__auto___12260 = (0);
while(true){
if((i__6047__auto___12260 < len__6046__auto___12259)){
args12192.push((arguments[i__6047__auto___12260]));

var G__12261 = (i__6047__auto___12260 + (1));
i__6047__auto___12260 = G__12261;
continue;
} else {
}
break;
}

var G__12194 = args12192.length;
switch (G__12194) {
case 1:
return sablono.core.datetime_local_field12191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field12191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12192.length)].join('')));

}
});

sablono.core.datetime_local_field12191.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.datetime_local_field12191.call(null,name__12030__auto__,null);
});

sablono.core.datetime_local_field12191.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.datetime_local_field12191.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12191);

/**
 * Creates a email input field.
 */
sablono.core.email_field12195 = (function sablono$core$email_field12195(var_args){
var args12196 = [];
var len__6046__auto___12263 = arguments.length;
var i__6047__auto___12264 = (0);
while(true){
if((i__6047__auto___12264 < len__6046__auto___12263)){
args12196.push((arguments[i__6047__auto___12264]));

var G__12265 = (i__6047__auto___12264 + (1));
i__6047__auto___12264 = G__12265;
continue;
} else {
}
break;
}

var G__12198 = args12196.length;
switch (G__12198) {
case 1:
return sablono.core.email_field12195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field12195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12196.length)].join('')));

}
});

sablono.core.email_field12195.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.email_field12195.call(null,name__12030__auto__,null);
});

sablono.core.email_field12195.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.email_field12195.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12195);

/**
 * Creates a file input field.
 */
sablono.core.file_field12199 = (function sablono$core$file_field12199(var_args){
var args12200 = [];
var len__6046__auto___12267 = arguments.length;
var i__6047__auto___12268 = (0);
while(true){
if((i__6047__auto___12268 < len__6046__auto___12267)){
args12200.push((arguments[i__6047__auto___12268]));

var G__12269 = (i__6047__auto___12268 + (1));
i__6047__auto___12268 = G__12269;
continue;
} else {
}
break;
}

var G__12202 = args12200.length;
switch (G__12202) {
case 1:
return sablono.core.file_field12199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field12199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12200.length)].join('')));

}
});

sablono.core.file_field12199.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.file_field12199.call(null,name__12030__auto__,null);
});

sablono.core.file_field12199.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.file_field12199.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12199);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field12203 = (function sablono$core$hidden_field12203(var_args){
var args12204 = [];
var len__6046__auto___12271 = arguments.length;
var i__6047__auto___12272 = (0);
while(true){
if((i__6047__auto___12272 < len__6046__auto___12271)){
args12204.push((arguments[i__6047__auto___12272]));

var G__12273 = (i__6047__auto___12272 + (1));
i__6047__auto___12272 = G__12273;
continue;
} else {
}
break;
}

var G__12206 = args12204.length;
switch (G__12206) {
case 1:
return sablono.core.hidden_field12203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field12203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12204.length)].join('')));

}
});

sablono.core.hidden_field12203.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.hidden_field12203.call(null,name__12030__auto__,null);
});

sablono.core.hidden_field12203.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.hidden_field12203.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12203);

/**
 * Creates a month input field.
 */
sablono.core.month_field12207 = (function sablono$core$month_field12207(var_args){
var args12208 = [];
var len__6046__auto___12275 = arguments.length;
var i__6047__auto___12276 = (0);
while(true){
if((i__6047__auto___12276 < len__6046__auto___12275)){
args12208.push((arguments[i__6047__auto___12276]));

var G__12277 = (i__6047__auto___12276 + (1));
i__6047__auto___12276 = G__12277;
continue;
} else {
}
break;
}

var G__12210 = args12208.length;
switch (G__12210) {
case 1:
return sablono.core.month_field12207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field12207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12208.length)].join('')));

}
});

sablono.core.month_field12207.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.month_field12207.call(null,name__12030__auto__,null);
});

sablono.core.month_field12207.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.month_field12207.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12207);

/**
 * Creates a number input field.
 */
sablono.core.number_field12211 = (function sablono$core$number_field12211(var_args){
var args12212 = [];
var len__6046__auto___12279 = arguments.length;
var i__6047__auto___12280 = (0);
while(true){
if((i__6047__auto___12280 < len__6046__auto___12279)){
args12212.push((arguments[i__6047__auto___12280]));

var G__12281 = (i__6047__auto___12280 + (1));
i__6047__auto___12280 = G__12281;
continue;
} else {
}
break;
}

var G__12214 = args12212.length;
switch (G__12214) {
case 1:
return sablono.core.number_field12211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field12211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12212.length)].join('')));

}
});

sablono.core.number_field12211.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.number_field12211.call(null,name__12030__auto__,null);
});

sablono.core.number_field12211.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.number_field12211.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12211);

/**
 * Creates a password input field.
 */
sablono.core.password_field12215 = (function sablono$core$password_field12215(var_args){
var args12216 = [];
var len__6046__auto___12283 = arguments.length;
var i__6047__auto___12284 = (0);
while(true){
if((i__6047__auto___12284 < len__6046__auto___12283)){
args12216.push((arguments[i__6047__auto___12284]));

var G__12285 = (i__6047__auto___12284 + (1));
i__6047__auto___12284 = G__12285;
continue;
} else {
}
break;
}

var G__12218 = args12216.length;
switch (G__12218) {
case 1:
return sablono.core.password_field12215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field12215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12216.length)].join('')));

}
});

sablono.core.password_field12215.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.password_field12215.call(null,name__12030__auto__,null);
});

sablono.core.password_field12215.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.password_field12215.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12215);

/**
 * Creates a range input field.
 */
sablono.core.range_field12219 = (function sablono$core$range_field12219(var_args){
var args12220 = [];
var len__6046__auto___12287 = arguments.length;
var i__6047__auto___12288 = (0);
while(true){
if((i__6047__auto___12288 < len__6046__auto___12287)){
args12220.push((arguments[i__6047__auto___12288]));

var G__12289 = (i__6047__auto___12288 + (1));
i__6047__auto___12288 = G__12289;
continue;
} else {
}
break;
}

var G__12222 = args12220.length;
switch (G__12222) {
case 1:
return sablono.core.range_field12219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field12219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12220.length)].join('')));

}
});

sablono.core.range_field12219.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.range_field12219.call(null,name__12030__auto__,null);
});

sablono.core.range_field12219.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.range_field12219.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12219);

/**
 * Creates a search input field.
 */
sablono.core.search_field12223 = (function sablono$core$search_field12223(var_args){
var args12224 = [];
var len__6046__auto___12291 = arguments.length;
var i__6047__auto___12292 = (0);
while(true){
if((i__6047__auto___12292 < len__6046__auto___12291)){
args12224.push((arguments[i__6047__auto___12292]));

var G__12293 = (i__6047__auto___12292 + (1));
i__6047__auto___12292 = G__12293;
continue;
} else {
}
break;
}

var G__12226 = args12224.length;
switch (G__12226) {
case 1:
return sablono.core.search_field12223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field12223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12224.length)].join('')));

}
});

sablono.core.search_field12223.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.search_field12223.call(null,name__12030__auto__,null);
});

sablono.core.search_field12223.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.search_field12223.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12223);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field12227 = (function sablono$core$tel_field12227(var_args){
var args12228 = [];
var len__6046__auto___12295 = arguments.length;
var i__6047__auto___12296 = (0);
while(true){
if((i__6047__auto___12296 < len__6046__auto___12295)){
args12228.push((arguments[i__6047__auto___12296]));

var G__12297 = (i__6047__auto___12296 + (1));
i__6047__auto___12296 = G__12297;
continue;
} else {
}
break;
}

var G__12230 = args12228.length;
switch (G__12230) {
case 1:
return sablono.core.tel_field12227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field12227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12228.length)].join('')));

}
});

sablono.core.tel_field12227.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.tel_field12227.call(null,name__12030__auto__,null);
});

sablono.core.tel_field12227.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.tel_field12227.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12227);

/**
 * Creates a text input field.
 */
sablono.core.text_field12231 = (function sablono$core$text_field12231(var_args){
var args12232 = [];
var len__6046__auto___12299 = arguments.length;
var i__6047__auto___12300 = (0);
while(true){
if((i__6047__auto___12300 < len__6046__auto___12299)){
args12232.push((arguments[i__6047__auto___12300]));

var G__12301 = (i__6047__auto___12300 + (1));
i__6047__auto___12300 = G__12301;
continue;
} else {
}
break;
}

var G__12234 = args12232.length;
switch (G__12234) {
case 1:
return sablono.core.text_field12231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field12231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12232.length)].join('')));

}
});

sablono.core.text_field12231.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.text_field12231.call(null,name__12030__auto__,null);
});

sablono.core.text_field12231.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.text_field12231.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12231);

/**
 * Creates a time input field.
 */
sablono.core.time_field12235 = (function sablono$core$time_field12235(var_args){
var args12236 = [];
var len__6046__auto___12303 = arguments.length;
var i__6047__auto___12304 = (0);
while(true){
if((i__6047__auto___12304 < len__6046__auto___12303)){
args12236.push((arguments[i__6047__auto___12304]));

var G__12305 = (i__6047__auto___12304 + (1));
i__6047__auto___12304 = G__12305;
continue;
} else {
}
break;
}

var G__12238 = args12236.length;
switch (G__12238) {
case 1:
return sablono.core.time_field12235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field12235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12236.length)].join('')));

}
});

sablono.core.time_field12235.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.time_field12235.call(null,name__12030__auto__,null);
});

sablono.core.time_field12235.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.time_field12235.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12235);

/**
 * Creates a url input field.
 */
sablono.core.url_field12239 = (function sablono$core$url_field12239(var_args){
var args12240 = [];
var len__6046__auto___12307 = arguments.length;
var i__6047__auto___12308 = (0);
while(true){
if((i__6047__auto___12308 < len__6046__auto___12307)){
args12240.push((arguments[i__6047__auto___12308]));

var G__12309 = (i__6047__auto___12308 + (1));
i__6047__auto___12308 = G__12309;
continue;
} else {
}
break;
}

var G__12242 = args12240.length;
switch (G__12242) {
case 1:
return sablono.core.url_field12239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field12239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12240.length)].join('')));

}
});

sablono.core.url_field12239.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.url_field12239.call(null,name__12030__auto__,null);
});

sablono.core.url_field12239.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.url_field12239.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12239);

/**
 * Creates a week input field.
 */
sablono.core.week_field12243 = (function sablono$core$week_field12243(var_args){
var args12244 = [];
var len__6046__auto___12311 = arguments.length;
var i__6047__auto___12312 = (0);
while(true){
if((i__6047__auto___12312 < len__6046__auto___12311)){
args12244.push((arguments[i__6047__auto___12312]));

var G__12313 = (i__6047__auto___12312 + (1));
i__6047__auto___12312 = G__12313;
continue;
} else {
}
break;
}

var G__12246 = args12244.length;
switch (G__12246) {
case 1:
return sablono.core.week_field12243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field12243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12244.length)].join('')));

}
});

sablono.core.week_field12243.cljs$core$IFn$_invoke$arity$1 = (function (name__12030__auto__){
return sablono.core.week_field12243.call(null,name__12030__auto__,null);
});

sablono.core.week_field12243.cljs$core$IFn$_invoke$arity$2 = (function (name__12030__auto__,value__12031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12030__auto__,value__12031__auto__);
});

sablono.core.week_field12243.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12243);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box12315 = (function sablono$core$check_box12315(var_args){
var args12316 = [];
var len__6046__auto___12319 = arguments.length;
var i__6047__auto___12320 = (0);
while(true){
if((i__6047__auto___12320 < len__6046__auto___12319)){
args12316.push((arguments[i__6047__auto___12320]));

var G__12321 = (i__6047__auto___12320 + (1));
i__6047__auto___12320 = G__12321;
continue;
} else {
}
break;
}

var G__12318 = args12316.length;
switch (G__12318) {
case 1:
return sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12316.length)].join('')));

}
});

sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box12315.call(null,name,null);
});

sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box12315.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box12315.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box12315.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12315);
/**
 * Creates a radio button.
 */
sablono.core.radio_button12323 = (function sablono$core$radio_button12323(var_args){
var args12324 = [];
var len__6046__auto___12327 = arguments.length;
var i__6047__auto___12328 = (0);
while(true){
if((i__6047__auto___12328 < len__6046__auto___12327)){
args12324.push((arguments[i__6047__auto___12328]));

var G__12329 = (i__6047__auto___12328 + (1));
i__6047__auto___12328 = G__12329;
continue;
} else {
}
break;
}

var G__12326 = args12324.length;
switch (G__12326) {
case 1:
return sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12324.length)].join('')));

}
});

sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button12323.call(null,group,null);
});

sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button12323.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button12323.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button12323.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12323);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options12331 = (function sablono$core$select_options12331(var_args){
var args12332 = [];
var len__6046__auto___12343 = arguments.length;
var i__6047__auto___12344 = (0);
while(true){
if((i__6047__auto___12344 < len__6046__auto___12343)){
args12332.push((arguments[i__6047__auto___12344]));

var G__12345 = (i__6047__auto___12344 + (1));
i__6047__auto___12344 = G__12345;
continue;
} else {
}
break;
}

var G__12334 = args12332.length;
switch (G__12334) {
case 1:
return sablono.core.select_options12331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options12331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12332.length)].join('')));

}
});

sablono.core.select_options12331.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options12331.call(null,coll,null);
});

sablono.core.select_options12331.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5760__auto__ = (function sablono$core$iter__12335(s__12336){
return (new cljs.core.LazySeq(null,(function (){
var s__12336__$1 = s__12336;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12336__$1);
if(temp__4425__auto__){
var s__12336__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12336__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__12336__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__12338 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__12337 = (0);
while(true){
if((i__12337 < size__5759__auto__)){
var x = cljs.core._nth.call(null,c__5758__auto__,i__12337);
cljs.core.chunk_append.call(null,b__12338,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12341 = x;
var text = cljs.core.nth.call(null,vec__12341,(0),null);
var val = cljs.core.nth.call(null,vec__12341,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12341,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12331.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__12347 = (i__12337 + (1));
i__12337 = G__12347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),sablono$core$iter__12335.call(null,cljs.core.chunk_rest.call(null,s__12336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),null);
}
} else {
var x = cljs.core.first.call(null,s__12336__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12342 = x;
var text = cljs.core.nth.call(null,vec__12342,(0),null);
var val = cljs.core.nth.call(null,vec__12342,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12342,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12331.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__12335.call(null,cljs.core.rest.call(null,s__12336__$2)));
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

sablono.core.select_options12331.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12331);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12348 = (function sablono$core$drop_down12348(var_args){
var args12349 = [];
var len__6046__auto___12352 = arguments.length;
var i__6047__auto___12353 = (0);
while(true){
if((i__6047__auto___12353 < len__6046__auto___12352)){
args12349.push((arguments[i__6047__auto___12353]));

var G__12354 = (i__6047__auto___12353 + (1));
i__6047__auto___12353 = G__12354;
continue;
} else {
}
break;
}

var G__12351 = args12349.length;
switch (G__12351) {
case 2:
return sablono.core.drop_down12348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12349.length)].join('')));

}
});

sablono.core.drop_down12348.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12348.call(null,name,options,null);
});

sablono.core.drop_down12348.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down12348.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12348);
/**
 * Creates a text area element.
 */
sablono.core.text_area12356 = (function sablono$core$text_area12356(var_args){
var args12357 = [];
var len__6046__auto___12360 = arguments.length;
var i__6047__auto___12361 = (0);
while(true){
if((i__6047__auto___12361 < len__6046__auto___12360)){
args12357.push((arguments[i__6047__auto___12361]));

var G__12362 = (i__6047__auto___12361 + (1));
i__6047__auto___12361 = G__12362;
continue;
} else {
}
break;
}

var G__12359 = args12357.length;
switch (G__12359) {
case 1:
return sablono.core.text_area12356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12357.length)].join('')));

}
});

sablono.core.text_area12356.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12356.call(null,name,null);
});

sablono.core.text_area12356.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area12356.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12356);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12364 = (function sablono$core$label12364(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12364);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12365 = (function sablono$core$submit_button12365(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12365);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12366 = (function sablono$core$reset_button12366(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12366);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12367 = (function sablono$core$form_to12367(var_args){
var args__6053__auto__ = [];
var len__6046__auto___12372 = arguments.length;
var i__6047__auto___12373 = (0);
while(true){
if((i__6047__auto___12373 < len__6046__auto___12372)){
args__6053__auto__.push((arguments[i__6047__auto___12373]));

var G__12374 = (i__6047__auto___12373 + (1));
i__6047__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return sablono.core.form_to12367.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

sablono.core.form_to12367.cljs$core$IFn$_invoke$arity$variadic = (function (p__12370,body){
var vec__12371 = p__12370;
var method = cljs.core.nth.call(null,vec__12371,(0),null);
var action = cljs.core.nth.call(null,vec__12371,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to12367.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12367.cljs$lang$applyTo = (function (seq12368){
var G__12369 = cljs.core.first.call(null,seq12368);
var seq12368__$1 = cljs.core.next.call(null,seq12368);
return sablono.core.form_to12367.cljs$core$IFn$_invoke$arity$variadic(G__12369,seq12368__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12367);
