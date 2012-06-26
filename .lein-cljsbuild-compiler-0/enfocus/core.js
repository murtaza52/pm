goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.fx');
void 0;
void 0;
void 0;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3822__auto____15174 = enfocus.core.debug;
if(cljs.core.truth_(and__3822__auto____15174))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3822__auto____15174;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce.call(null,func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if((nl == null))
{return cljs.core.PersistentVector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.PersistentVector.fromArray([nl]);
} else
{if((window === nl))
{return cljs.core.PersistentVector.fromArray([nl]);
} else
{if((function (){var or__3824__auto____15176 = cljs.core.instance_QMARK_.call(null,Array,nl);
if(or__3824__auto____15176)
{return or__3824__auto____15176;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})())
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{return cljs.core.doall.call(null,(function (){var iter__625__auto____15181 = (function iter__15177(s__15178){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15178__15179 = s__15178;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15178__15179)))
{var x__15180 = cljs.core.first.call(null,s__15178__15179);
return cljs.core.cons.call(null,nl.item(x__15180),iter__15177.call(null,cljs.core.rest.call(null,s__15178__15179)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____15181.call(null,cljs.core.range.call(null,0,nl.length));
})());
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__15175_SHARP_){
if(cljs.core.string_QMARK_.call(null,p1__15175_SHARP_))
{return cljs.core.PersistentVector.fromArray([goog.dom.createTextNode.call(null,p1__15175_SHARP_)]);
} else
{if("\uFDD0'else")
{return enfocus.core.nodes__GT_coll.call(null,p1__15175_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__15182__15183 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
if(cljs.core.truth_(G__15182__15183))
{var G__15185__15187 = cljs.core.first.call(null,G__15182__15183);
var vec__15186__15188 = G__15185__15187;
var attr__15189 = cljs.core.nth.call(null,vec__15186__15188,0,null);
var value__15190 = cljs.core.nth.call(null,vec__15186__15188,1,null);
var G__15182__15191 = G__15182__15183;
var G__15185__15192 = G__15185__15187;
var G__15182__15193 = G__15182__15191;
while(true){
var vec__15194__15195 = G__15185__15192;
var attr__15196 = cljs.core.nth.call(null,vec__15194__15195,0,null);
var value__15197 = cljs.core.nth.call(null,vec__15194__15195,1,null);
var G__15182__15198 = G__15182__15193;
goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__15196),value__15197);
var temp__3974__auto____15199 = cljs.core.next.call(null,G__15182__15198);
if(cljs.core.truth_(temp__3974__auto____15199))
{var G__15182__15200 = temp__3974__auto____15199;
{
var G__15201 = cljs.core.first.call(null,G__15182__15200);
var G__15202 = G__15182__15200;
G__15185__15192 = G__15201;
G__15182__15193 = G__15202;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__15203__15204 = cljs.core.seq.call(null,values);
if(cljs.core.truth_(G__15203__15204))
{var attr__15205 = cljs.core.first.call(null,G__15203__15204);
var G__15203__15206 = G__15203__15204;
while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__15205),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__15205));
}
var temp__3974__auto____15207 = cljs.core.next.call(null,G__15203__15206);
if(cljs.core.truth_(temp__3974__auto____15207))
{var G__15203__15208 = temp__3974__auto____15207;
{
var G__15209 = cljs.core.first.call(null,G__15203__15208);
var G__15210 = G__15203__15208;
attr__15205 = G__15209;
G__15203__15206 = G__15210;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if("\uFDD0'else")
{{
var G__15211 = parent;
var G__15212 = child.parentNode;
parent = G__15211;
child = G__15212;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15213 = e.relatedTarget;
var this$__15214 = e.currentTarget;
if((function (){var and__3822__auto____15215 = cljs.core.not.call(null,(re__15213 === this$__15214));
if(and__3822__auto____15215)
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__15214,re__15213));
} else
{return and__3822__auto____15215;
}
})())
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var G__15216__15217 = cljs.core.seq.call(null,ats);
if(cljs.core.truth_(G__15216__15217))
{var G__15219__15221 = cljs.core.first.call(null,G__15216__15217);
var vec__15220__15222 = G__15219__15221;
var k__15223 = cljs.core.nth.call(null,vec__15220__15222,0,null);
var v__15224 = cljs.core.nth.call(null,vec__15220__15222,1,null);
var G__15216__15225 = G__15216__15217;
var G__15219__15226 = G__15219__15221;
var G__15216__15227 = G__15216__15225;
while(true){
var vec__15228__15229 = G__15219__15226;
var k__15230 = cljs.core.nth.call(null,vec__15228__15229,0,null);
var v__15231 = cljs.core.nth.call(null,vec__15228__15229,1,null);
var G__15216__15232 = G__15216__15227;
add_map_attrs.call(null,elem,k__15230,v__15231);
var temp__3974__auto____15233 = cljs.core.next.call(null,G__15216__15232);
if(cljs.core.truth_(temp__3974__auto____15233))
{var G__15216__15234 = temp__3974__auto____15233;
{
var G__15235 = cljs.core.first.call(null,G__15216__15234);
var G__15236 = G__15216__15234;
G__15219__15226 = G__15235;
G__15216__15227 = G__15236;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
add_map_attrs.cljs$lang$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$lang$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__15237 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);
div__15237.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__15237);
return div__15237;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__15238 = div.childNodes;
var frag__15239 = document.createDocumentFragment();
goog.dom.append.call(null,frag__15239,child__15238);
goog.dom.removeNode.call(null,div);
return frag__15239;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__15241 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__15242 = [cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join('');
return cljs.core.PersistentVector.fromArray([[cljs.core.str(sym__15242)].join(''),text.replace(re__15241,(function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(sym__15242),cljs.core.str(c),cljs.core.str(d)].join('');
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__15243 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__15244 = enfocus.core.nodes__GT_coll.call(null,id_nodes__15243);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15240_SHARP_){
var id__15245 = p1__15240_SHARP_.getAttribute("id");
var rid__15246 = id__15245.replace(sym,"");
return p1__15240_SHARP_.setAttribute("id",rid__15246);
}),nod_col__15244));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__15247 = (new goog.net.XhrIo());
var callback__15254 = (function (req){
var text__15249 = req.getResponseText();
var vec__15248__15250 = enfocus.core.replace_ids.call(null,text__15249);
var sym__15251 = cljs.core.nth.call(null,vec__15248__15250,0,null);
var txt__15252 = cljs.core.nth.call(null,vec__15248__15250,1,null);
var data__15253 = goog.dom.htmlToDocumentFragment.call(null,txt__15252);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.PersistentVector.fromArray([sym__15251,data__15253]));
});
goog.events.listen.call(null,req__15247,goog.net.EventType.COMPLETE,(function (){
callback__15254.call(null,req__15247);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__15247.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__15255 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod__15255))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,nod__15255),cljs.core.second.call(null,nod__15255).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__15256 = enfocus.core.create_sel_str.call(null,sel);
var cache__15257 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str__15256)].join(''));
if(cljs.core.truth_(cache__15257))
{return cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,cache__15257),cljs.core.second.call(null,cache__15257).cloneNode(true)]);
} else
{var vec__15258__15259 = enfocus.core.get_cached_dom.call(null,uri);
var sym__15260 = cljs.core.nth.call(null,vec__15258__15259,0,null);
var tdom__15261 = cljs.core.nth.call(null,vec__15258__15259,1,null);
var dom__15262 = enfocus.core.create_hidden_dom.call(null,tdom__15261);
var tsnip__15263 = enfocus.core.css_select.call(null,sym__15260,dom__15262,sel);
var snip__15264 = ((cljs.core.instance_QMARK_.call(null,Array,tsnip__15263))?cljs.core.first.call(null,tsnip__15263):tsnip__15263);
enfocus.core.remove_node_return_child.call(null,dom__15262);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),[cljs.core.str(uri),cljs.core.str(sel_str__15256)].join(''),cljs.core.PersistentVector.fromArray([sym__15260,snip__15264]));
return cljs.core.PersistentVector.fromArray([sym__15260,snip__15264]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__15265 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__15266 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__15265));
if((cljs.core.count.call(null,result__15266) <= 1))
{return cljs.core.first.call(null,result__15266);
} else
{return result__15266;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__15268 = enfocus.core.nodes__GT_coll.call(null,pnodes);
cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__15268));
if(cljs.core.not.call(null,(chain == null)))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__1 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2 = (function (pnodes,chain){
var pnod_col__15271 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__15272 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__15271));
var partial_cback__15273 = (function (){
cljs.core.swap_BANG_.call(null,cnt__15272,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__15272)))
{if(cljs.core.not.call(null,(callback == null)))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.not.call(null,(chain == null)))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15267_SHARP_){
return func.call(null,p1__15267_SHARP_,partial_cback__15273);
}),pnod_col__15271));
});
trans = function(pnodes,chain){
switch(arguments.length){
case 1:
return trans__1.call(this,pnodes);
case 2:
return trans__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
trans.cljs$lang$arity$1 = trans__1;
trans.cljs$lang$arity$2 = trans__2;
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that handle creating a
* fragment and applying it in some way to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__15274 = enfocus.core.flatten_nodes_coll.call(null,values);
var clone_QMARK___15275 = cljs.core.atom.call(null,false);
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__15276 = document.createDocumentFragment();
var app_func__15278 = (cljs.core.truth_((function (){var or__3824__auto____15277 = cljs.core.deref.call(null,clone_QMARK___15275);
if(cljs.core.truth_(or__3824__auto____15277))
{return or__3824__auto____15277;
} else
{return cljs.core.instance_QMARK_.call(null,DocumentFragment);
}
})())?(function (p1__15269_SHARP_){
return goog.dom.appendChild.call(null,frag__15276,p1__15269_SHARP_.cloneNode(true));
}):(function (p1__15270_SHARP_){
return goog.dom.appendChild.call(null,frag__15276,p1__15270_SHARP_);
}));
cljs.core.doall.call(null,cljs.core.map.call(null,app_func__15278,fnodes__15274));
cljs.core.reset_BANG_.call(null,clone_QMARK___15275,true);
return func.call(null,pnod,frag__15276);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__15279){
var values = cljs.core.seq(arglist__15279);;
return en_content__delegate(values);
});
en_content.cljs$lang$arity$variadic = en_content__delegate;
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__15280 = goog.dom.htmlToDocumentFragment.call(null,txt);
goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__15280);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__15282 = cljs.core.partition.call(null,2,values);
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__15283){
var vec__15284__15285 = p__15283;
var a__15286 = cljs.core.nth.call(null,vec__15284__15285,0,null);
var v__15287 = cljs.core.nth.call(null,vec__15284__15285,1,null);
return pnod.setAttribute(cljs.core.name.call(null,a__15286),v__15287);
}),at_lst__15282));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__15288){
var values = cljs.core.seq(arglist__15288);;
return en_set_attr__delegate(values);
});
en_set_attr.cljs$lang$arity$variadic = en_set_attr__delegate;
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15281_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__15281_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__15289){
var values = cljs.core.seq(arglist__15289);;
return en_remove_attr__delegate(values);
});
en_remove_attr.cljs$lang$arity$variadic = en_remove_attr__delegate;
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass.call(null,el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15290_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__15290_SHARP_);
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__15292){
var values = cljs.core.seq(arglist__15292);;
return en_add_class__delegate(values);
});
en_add_class.cljs$lang$arity$variadic = en_add_class__delegate;
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15291_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__15291_SHARP_);
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__15294){
var values = cljs.core.seq(arglist__15294);;
return en_remove_class__delegate(values);
});
en_remove_class.cljs$lang$arity$variadic = en_remove_class__delegate;
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15293_SHARP_){
return p1__15293_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__15295){
var forms = cljs.core.seq(arglist__15295);;
return en_do__GT___delegate(forms);
});
en_do__GT_.cljs$lang$arity$variadic = en_do__GT___delegate;
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__15296){
var values = cljs.core.seq(arglist__15296);;
return en_append__delegate(values);
});
en_append.cljs$lang$arity$variadic = en_append__delegate;
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__15297 = pnod.firstChild;
return pnod.insertBefore(frag,nod__15297);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__15298){
var values = cljs.core.seq(arglist__15298);;
return en_prepend__delegate(values);
});
en_prepend.cljs$lang$arity$variadic = en_prepend__delegate;
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__15299){
var values = cljs.core.seq(arglist__15299);;
return en_before__delegate(values);
});
en_before.cljs$lang$arity$variadic = en_before__delegate;
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__15300){
var values = cljs.core.seq(arglist__15300);;
return en_after__delegate(values);
});
en_after.cljs$lang$arity$variadic = en_after__delegate;
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__15301){
var values = cljs.core.seq(arglist__15301);;
return en_substitute__delegate(values);
});
en_substitute.cljs$lang$arity$variadic = en_substitute__delegate;
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__15302){
var values = cljs.core.seq(arglist__15302);;
return en_remove_node__delegate(values);
});
en_remove_node.cljs$lang$arity$variadic = en_remove_node__delegate;
return en_remove_node;
})()
;
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__15303 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem__15303,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__15303);
elem__15303;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__15303),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__15304 = document.createDocumentFragment();
goog.dom.append.call(null,frag__15304,pnod.childNodes);
return goog.dom.replaceNode.call(null,frag__15304,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__15305){
var values = cljs.core.seq(arglist__15305);;
return en_set_style__delegate(values);
});
en_set_style.cljs$lang$arity$variadic = en_set_style__delegate;
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__15306){
var values = cljs.core.seq(arglist__15306);;
return en_remove_style__delegate(values);
});
en_remove_style.cljs$lang$arity$variadic = en_remove_style__delegate;
return en_remove_style;
})()
;
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__15307 = (new Object());
obj__15307.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__15308 = enfocus.core.mouse_enter_leave.call(null,func);
callback__15308.listen = func;
callback__15308.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__15308);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__15308);
}
});
obj__15307.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__15309 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15310 = obj.listener;
if(cljs.core.truth_((function (){var and__3822__auto____15312 = (function (){var or__3824__auto____15311 = cljs.core.not.call(null,func);
if(or__3824__auto____15311)
{return or__3824__auto____15311;
} else
{return cljs.core._EQ_.call(null,listener__15310.listen,func);
}
})();
if(cljs.core.truth_(and__3822__auto____15312))
{var or__3824__auto____15313 = cljs.core.not.call(null,opt_scope);
if(or__3824__auto____15313)
{return or__3824__auto____15313;
} else
{return cljs.core._EQ_.call(null,listener__15310.scope,opt_scope);
}
} else
{return and__3822__auto____15312;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__15310);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__15310);
}
} else
{return null;
}
}),listeners__15309));
});
return obj__15307;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseover"),"\uFDD0'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"\uFDD0'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__15314 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((function (){var and__3822__auto____15315 = cljs.core._EQ_.call(null,"\uFDD0'resize",event);
if(and__3822__auto____15315)
{return (window === pnod);
} else
{return and__3822__auto____15315;
}
})())
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper__15314 == null))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__15314,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__15318 = enfocus.core.wrapper_register.call(null,event);
return enfocus.core.chainable_standard.call(null,(function (pnod){
if((wrapper__15318 == null))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__15318,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__15319 = (function (p1__15316_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__15316_SHARP_,"\uFDD0'mouseenter"))?"\uFDD0'mouseover":((cljs.core._EQ_.call(null,p1__15316_SHARP_,"\uFDD0'mouseleave"))?"\uFDD0'mouseout":(("\uFDD0'else")?p1__15316_SHARP_:null))));
});
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15317_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__15319.call(null,p1__15317_SHARP_));
}),event_list));
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__15320){
var event_list = cljs.core.seq(arglist__15320);;
return en_remove_listeners__delegate(event_list);
});
en_remove_listeners.cljs$lang$arity$variadic = en_remove_listeners__delegate;
return en_remove_listeners;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__15321 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.not.call(null,(pcallback == null)))
{goog.events.listen.call(null,anim__15321,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__15321.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__15322 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.not.call(null,(pcallback == null)))
{goog.events.listen.call(null,anim__15322,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__15322.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__15323 = goog.style.getSize.call(null,pnod);
var start__15324 = [csize__15323.width,csize__15323.height];
var wth__15325 = ((cljs.core._EQ_.call(null,"\uFDD0'curwidth",wth))?csize__15323.width:wth);
var hgt__15326 = ((cljs.core._EQ_.call(null,"\uFDD0'curheight",hgt))?csize__15323.height:hgt);
var end__15327 = [wth__15325,hgt__15326];
var anim__15328 = (new goog.fx.dom.Resize(pnod,start__15324,end__15327,ttime,accel));
if(cljs.core.not.call(null,(pcallback == null)))
{goog.events.listen.call(null,anim__15328,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__15328.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__15329 = goog.style.getPosition.call(null,pnod);
var start__15330 = [cpos__15329.x,cpos__15329.y];
var xpos__15331 = ((cljs.core._EQ_.call(null,"\uFDD0'curx"))?cpos__15329.x:xpos);
var ypos__15332 = ((cljs.core._EQ_.call(null,"\uFDD0'cury"))?cpos__15329.y:ypos);
var end__15333 = [xpos__15331,ypos__15332];
var anim__15334 = (new goog.fx.dom.Slide(pnod,start__15330,end__15333,ttime,accel));
if(cljs.core.not.call(null,(pcallback == null)))
{goog.events.listen.call(null,anim__15334,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__15334.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent.call(null,pnod);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col__15335 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__15336 = ((cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__15337 = cljs.core.filter.call(null,ttest__15336,pnod_col__15335);
if((chain == null))
{return trans.call(null,res__15337);
} else
{return trans.call(null,res__15337,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
filt.cljs$lang$arity$1 = filt__1;
filt.cljs$lang$arity$2 = filt__2;
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"\uFDD0'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"\uFDD0'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__15338_SHARP_){
if(cljs.core.symbol_QMARK_.call(null,p1__15338_SHARP_))
{return enfocus.core.css_syms.call(null,p1__15338_SHARP_);
} else
{if(cljs.core.keyword_QMARK_.call(null,p1__15338_SHARP_))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__15338_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__15338_SHARP_))
{return create_sel_str.call(null,p1__15338_SHARP_);
} else
{if(cljs.core.string_QMARK_.call(null,p1__15338_SHARP_))
{return p1__15338_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
create_sel_str.cljs$lang$arity$1 = create_sel_str__1;
create_sel_str.cljs$lang$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
var sel__15339 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__15340 = goog.dom.query.call(null,sel__15339,dom_node);
return ret__15340;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
css_select.cljs$lang$arity$1 = css_select__1;
css_select.cljs$lang$arity$2 = css_select__2;
css_select.cljs$lang$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.PersistentArrayMap.fromArrays(["\uFDD1'first-child","\uFDD1'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute: css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__15341_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__15341_SHARP_)),cljs.core.str("]")].join('');
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__15342){
var kys = cljs.core.seq(arglist__15342);;
return attr_QMARK___delegate(kys);
});
attr_QMARK_.cljs$lang$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___0 = (function (){
return "";
});
var attr_EQ___3 = (function() { 
var G__15343__delegate = function (ky,txt,forms){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,ky)),cljs.core.str("='"),cljs.core.str(txt),cljs.core.str("']"),cljs.core.str(cljs.core.apply.call(null,attr_EQ_,forms))].join('');
};
var G__15343 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15343__delegate.call(this, ky, txt, forms);
};
G__15343.cljs$lang$maxFixedArity = 2;
G__15343.cljs$lang$applyTo = (function (arglist__15344){
var ky = cljs.core.first(arglist__15344);
var txt = cljs.core.first(cljs.core.next(arglist__15344));
var forms = cljs.core.rest(cljs.core.next(arglist__15344));
return G__15343__delegate(ky, txt, forms);
});
G__15343.cljs$lang$arity$variadic = G__15343__delegate;
return G__15343;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case 0:
return attr_EQ___0.call(this);
default:
return attr_EQ___3.cljs$lang$arity$variadic(ky,txt, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3.cljs$lang$applyTo;
attr_EQ_.cljs$lang$arity$0 = attr_EQ___0;
attr_EQ_.cljs$lang$arity$variadic = attr_EQ___3.cljs$lang$arity$variadic;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){
return [cljs.core.str(":nth-child("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_child__2 = (function (x,y){
return [cljs.core.str(":nth-child("),cljs.core.str(x),cljs.core.str("n+"),cljs.core.str(y),cljs.core.str(")")].join('');
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_child.cljs$lang$arity$1 = nth_child__1;
nth_child.cljs$lang$arity$2 = nth_child__2;
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){
return [cljs.core.str(":nth-of-type("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_of_type__2 = (function (x,y){
return [cljs.core.str(":nth-of-type("),cljs.core.str(x),cljs.core.str("n+"),cljs.core.str(y),cljs.core.str(")")].join('');
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_of_type.cljs$lang$arity$1 = nth_of_type__1;
nth_of_type.cljs$lang$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent, counting from the last child
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){
return [cljs.core.str(":nth-last-child("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_last_child__2 = (function (x,y){
return [cljs.core.str(":nth-last-child("),cljs.core.str(x),cljs.core.str("n+"),cljs.core.str(y),cljs.core.str(")")].join('');
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_last_child.cljs$lang$arity$1 = nth_last_child__1;
nth_last_child.cljs$lang$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){
return [cljs.core.str(":nth-last-of-type("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_last_of_type__2 = (function (x,y){
return [cljs.core.str(":nth-last-of-type("),cljs.core.str(x),cljs.core.str("n+"),cljs.core.str(y),cljs.core.str(")")].join('');
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_last_of_type.cljs$lang$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$lang$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
