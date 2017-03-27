// Compiled by ClojureScript 1.7.170 {}
goog.provide('kioo.util');
goog.require('cljs.core');
goog.require('clojure.string');
kioo.util._STAR_component_STAR_ = null;
/**
 * Wrapper component used to mix-in lifecycle methods
 * This was modified from a similar setup in quiescent
 */
kioo.util.WrapComponent = React.createFactory(React.createClass({"componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["didUpdate"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (this$.props["onUpdate"]);
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
return (this$.props["onRender"]);
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12377 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$,prev_props,prev_state);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12377;
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["willUnmount"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return (this$.props["onUnmount"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12378 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12378;
}} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["willReceiveProps"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return (this$.props["onWillReceiveProps"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12379 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$,next_props);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12379;
}} else {
return null;
}
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var temp__4423__auto__ = (this$.props["shouldUpdate"]);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
var _STAR_component_STAR_12380 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$,next_props,next_state);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12380;
}} else {
return cljs.core.not_EQ_.call(null,(this$.props["node"]),(next_props["node"]));
}
}), "render": (function (){
var this$ = this;
var dom_fn = (this$.props["dom-fn"]);
var node = (this$.props["node"]);
return dom_fn.call(null,node);
}), "componentWillUpdate": (function (next_props,next_state){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["willUpdate"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return (this$.props["onWillUpdate"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12381 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$,next_props,next_state);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12381;
}} else {
return null;
}
}), "getInitialState": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["initState"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12382 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12382;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["didMount"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
var or__4988__auto____$1 = (this$.props["onMount"]);
if(cljs.core.truth_(or__4988__auto____$1)){
return or__4988__auto____$1;
} else {
return (this$.props["onRender"]);
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12383 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12383;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__4988__auto__ = (this$.props["willMount"]);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return (this$.props["onWillMount"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_12384 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return f.call(null,this$);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_12384;
}} else {
return null;
}
})}));
kioo.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
kioo.util.camel_case = (function kioo$util$camel_case(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__12386 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__12386,(0),null);
var parts = cljs.core.nthnext.call(null,vec__12386,(1));
if(cljs.core.truth_(kioo.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,clojure.string.capitalize,parts));
}
}
});
kioo.util.attribute_map = cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (p1__12387_SHARP_,p2__12388_SHARP_){
return cljs.core.assoc.call(null,p1__12387_SHARP_,cljs.core.keyword.call(null,cljs.core.name.call(null,p2__12388_SHARP_).toLowerCase()),p2__12388_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"accessKey","accessKey",-2031675627),new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),new cljs.core.Keyword(null,"allowTransparency","allowTransparency",-1615396717),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),new cljs.core.Keyword(null,"cellPadding","cellPadding",1918354169),new cljs.core.Keyword(null,"cellSpacing","cellSpacing",-1305647157),new cljs.core.Keyword(null,"charSet","charSet",2001955676),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),new cljs.core.Keyword(null,"contextMenu","contextMenu",-566126918),new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),new cljs.core.Keyword(null,"encType","encType",1733182873),new cljs.core.Keyword(null,"formEncType","formEncType",1464810152),new cljs.core.Keyword(null,"formNoValidate","formNoValidate",-1882076229),new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),new cljs.core.Keyword(null,"httpEquiv","httpEquiv",789868321),new cljs.core.Keyword(null,"itemProp","itemProp",-772543418),new cljs.core.Keyword(null,"itemScope","itemScope",-1104711718),new cljs.core.Keyword(null,"itemType","itemType",-65449001),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"noValidate","noValidate",1502261891),new cljs.core.Keyword(null,"radioGroup","radioGroup",759101257),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),new cljs.core.Keyword(null,"scrollLeft","scrollLeft",1174126810),new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"srcDoc","srcDoc",1635765309),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930),new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),new cljs.core.Keyword(null,"spreadMethod","spreadMethod",223383336),new cljs.core.Keyword(null,"stopColor","stopColor",265518586),new cljs.core.Keyword(null,"stopOpacity","stopOpacity",-480120864),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477)], true)),new cljs.core.Keyword(null,"accept-charset","accept-charset",-1667839372),new cljs.core.Keyword(null,"acceptCharset","acceptCharset",560792243),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720));
kioo.util.transform_keys = (function kioo$util$transform_keys(attrs){
return cljs.core.reduce.call(null,(function (m,p__12391){
var vec__12392 = p__12391;
var k = cljs.core.nth.call(null,vec__12392,(0),null);
var v = cljs.core.nth.call(null,vec__12392,(1),null);
return cljs.core.assoc.call(null,m,(function (){var or__4988__auto__ = kioo.util.attribute_map.call(null,k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return k;
}
})(),v);
}),cljs.core.PersistentArrayMap.EMPTY,attrs);
});
kioo.util.convert_attrs = (function kioo$util$convert_attrs(attrs){
var style = (cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs))?(function (){var vals = cljs.core.re_seq.call(null,/\s*([^:;]*)[:][\s]*([^;]+)/,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs));
return cljs.core.reduce.call(null,((function (vals){
return (function (m,p__12395){
var vec__12396 = p__12395;
var _ = cljs.core.nth.call(null,vec__12396,(0),null);
var k = cljs.core.nth.call(null,vec__12396,(1),null);
var v = cljs.core.nth.call(null,vec__12396,(2),null);
return cljs.core.assoc.call(null,m,k,v.trim());
});})(vals))
,cljs.core.PersistentArrayMap.EMPTY,vals);
})():null);
var class_name = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
return cljs.core.assoc.call(null,kioo.util.transform_keys.call(null,attrs),new cljs.core.Keyword(null,"style","style",-496642736),style);
});
kioo.util.flatten_nodes = (function kioo$util$flatten_nodes(nodes){
return cljs.core.reduce.call(null,(function (p1__12398_SHARP_,p2__12397_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p2__12397_SHARP_)){
return cljs.core.concat.call(null,p2__12397_SHARP_,p1__12398_SHARP_);
} else {
return cljs.core.conj.call(null,p1__12398_SHARP_,p2__12397_SHARP_);
}
}),cljs.core.List.EMPTY,cljs.core.reverse.call(null,nodes));
});
/**
 * Returns a regular expression that matches the HTML attribute `attr`
 *   and it's value.
 */
kioo.util.attr_pattern = (function kioo$util$attr_pattern(attr){
return cljs.core.re_pattern.call(null,[cljs.core.str("\\s+"),cljs.core.str(cljs.core.name.call(null,attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
 * Strip the HTML attribute `attr` and it's value from the string `s`.
 */
kioo.util.strip_attr = (function kioo$util$strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,kioo.util.attr_pattern.call(null,attr),"");
} else {
return null;
}
});
