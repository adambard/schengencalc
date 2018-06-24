// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$);
} else {
var m__5644__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
return React.createFactory(React.createClass({"getDisplayName": (function (){
return cljs.core.name.call(null,display_name);
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState({"value": e.target.value});
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "render": (function (){
var this$ = this;
var props = {};
goog.object.extend(props,this$.props,{"value": (this$.state["value"]), "onChange": (this$["onChange"]), "children": (this$.props["children"])});

return ctor.call(null,props);
})}));
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element.call(null,React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element.call(null,React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element.call(null,React.DOM.textarea,"textarea");
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__6053__auto__ = [];
var len__6046__auto___11462 = arguments.length;
var i__6047__auto___11463 = (0);
while(true){
if((i__6047__auto___11463 < len__6046__auto___11462)){
args__6053__auto__.push((arguments[i__6047__auto___11463]));

var G__11464 = (i__6047__auto___11463 + (1));
i__6047__auto___11463 = G__11464;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return (cljs.core.truth_(sablono.util.wrapped_type_QMARK_.call(null,type))?cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),sablono.interpreter.input,new cljs.core.Keyword(null,"option","option",65132272),sablono.interpreter.option,new cljs.core.Keyword(null,"textarea","textarea",-650375824),sablono.interpreter.textarea], null),cljs.core.keyword.call(null,type)):cljs.core.partial.call(null,React.createElement,cljs.core.name.call(null,type))).call(null,props,(((cljs.core.sequential_QMARK_.call(null,children)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,children))))?cljs.core.first.call(null,children):children));
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq11459){
var G__11460 = cljs.core.first.call(null,seq11459);
var seq11459__$1 = cljs.core.next.call(null,seq11459);
var G__11461 = cljs.core.first.call(null,seq11459__$1);
var seq11459__$2 = cljs.core.next.call(null,seq11459__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__11460,G__11461,seq11459__$2);
});
sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__11466 = sablono.util.normalize_element.call(null,element__$1);
var type = cljs.core.nth.call(null,vec__11466,(0),null);
var attrs = cljs.core.nth.call(null,vec__11466,(1),null);
var content = cljs.core.nth.call(null,vec__11466,(2),null);
var js_attrs = sablono.interpreter.attributes.call(null,attrs);
if((cljs.core.sequential_QMARK_.call(null,content)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,content)))){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,cljs.core.first.call(null,content)));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,content));
} else {
return sablono.interpreter.create_element.call(null,type,js_attrs,null);

}
}
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.interpreter.interpret,s));
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
