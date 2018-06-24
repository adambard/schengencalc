// Compiled by ClojureScript 1.7.170 {}
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('hickory.utils');
goog.require('clojure.zip');
goog.require('goog.string');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((!((this$ == null))) && (!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$);
} else {
var m__5644__auto____$1 = (hickory.core.as_hiccup["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HiccupRepresentable.as-hiccup",this$);
}
}
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((!((this$ == null))) && (!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (hickory.core.as_hickory[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$);
} else {
var m__5644__auto____$1 = (hickory.core.as_hickory["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HickoryRepresentable.as-hickory",this$);
}
}
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str(type),cljs.core.str("_NODE")].join('')]);
});
hickory.core.Attribute = hickory.core.node_type.call(null,"ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type.call(null,"COMMENT");
hickory.core.Document = hickory.core.node_type.call(null,"DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type.call(null,"DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type.call(null,"ELEMENT");
hickory.core.Text = hickory.core.node_type.call(null,"TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
t.prototype.cljs$core$ISeqable$ = true;

return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1);
});
});
hickory.core.extend_type_with_seqable.call(null,NodeList);
if(typeof NamedNodeMap !== 'undefined'){
hickory.core.extend_type_with_seqable.call(null,NamedNodeMap);
} else {
}
if(typeof MozNamedAttrMap !== 'undefined'){
hickory.core.extend_type_with_seqable.call(null,MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if(!(cljs.core.empty_QMARK_.call(null,publicId))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return [cljs.core.str("<!DOCTYPE "),cljs.core.str(name),cljs.core.str(">")].join('');
}
});
(hickory.core.HiccupRepresentable["object"] = true);

(hickory.core.as_hiccup["object"] = (function (this$){
var pred__12456 = cljs.core._EQ_;
var expr__12457 = (this$["nodeType"]);
if(cljs.core.truth_(pred__12456.call(null,hickory.core.Attribute,expr__12457))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_(pred__12456.call(null,hickory.core.Comment,expr__12457))){
return [cljs.core.str("<!--"),cljs.core.str((this$["data"])),cljs.core.str("-->")].join('');
} else {
if(cljs.core.truth_(pred__12456.call(null,hickory.core.Document,expr__12457))){
return cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_(pred__12456.call(null,hickory.core.DocumentType,expr__12457))){
return hickory.core.format_doctype.call(null,this$);
} else {
if(cljs.core.truth_(pred__12456.call(null,hickory.core.Element,expr__12457))){
var tag = hickory.utils.lower_case_keyword.call(null,(this$["tagName"]));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_(hickory.utils.unescapable_content.call(null,tag))?cljs.core.map.call(null,((function (tag,pred__12456,expr__12457){
return (function (p1__12455_SHARP_){
return (p1__12455_SHARP_["wholeText"]);
});})(tag,pred__12456,expr__12457))
,(this$["childNodes"])):cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_(pred__12456.call(null,hickory.core.Text,expr__12457))){
return hickory.utils.html_escape.call(null,(this$["wholeText"]));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12457)].join('')));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);

(hickory.core.as_hickory["object"] = (function (this$){
var pred__12459 = cljs.core._EQ_;
var expr__12460 = (this$["nodeType"]);
if(cljs.core.truth_(pred__12459.call(null,hickory.core.Attribute,expr__12460))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_(pred__12459.call(null,hickory.core.Comment,expr__12460))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_(pred__12459.call(null,hickory.core.Document,expr__12460))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_(pred__12459.call(null,hickory.core.DocumentType,expr__12460))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document-type","document-type",-1309437776),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(this$["name"]),new cljs.core.Keyword(null,"publicid","publicid",1557995850),(this$["publicId"]),new cljs.core.Keyword(null,"systemid","systemid",-2052878192),(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_(pred__12459.call(null,hickory.core.Element,expr__12460))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["attributes"])))),new cljs.core.Keyword(null,"tag","tag",-1290361223),hickory.utils.lower_case_keyword.call(null,(this$["tagName"])),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_(pred__12459.call(null,hickory.core.Text,expr__12460))){
return (this$["wholeText"]);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12460)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__4657__auto__ = cljs.core.second.call(null,(function (){var or__4988__auto__ = cljs.core.re_find.call(null,/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.re_find.call(null,/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__4657__auto__)){
var doctype = temp__4657__auto__;
return cljs.core.re_find.call(null,/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if(typeof DOMParser !== 'undefined'){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype.call(null,s))){
} else {
hickory.core.remove_el.call(null,doctype_el);
}

var temp__4657__auto___12462 = cljs.core.first.call(null,(doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__4657__auto___12462)){
var title_el_12463 = temp__4657__auto___12462;
if(cljs.core.empty_QMARK_.call(null,(title_el_12463["text"]))){
hickory.core.remove_el.call(null,title_el_12463);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__4988__auto__ = hickory.core.parse_dom_with_domparser.call(null,s);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return hickory.core.parse_dom_with_write.call(null,s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse.call(null,s)["body"]["childNodes"]);
});
