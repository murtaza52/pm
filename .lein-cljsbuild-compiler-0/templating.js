goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____84154 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84153){
enfocus.core.en_content.call(null,c).call(null,enfocus.core.css_select.call(null,"",pnod84153,cljs.core.PersistentVector.fromArray([".cljs-main"])));
return pnod84153;
}),nods__4501__auto____84154));
return pm.client.templating.doc.call(null);
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__84157__84158 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym84155__84159 = cljs.core.nth.call(null,vec__84157__84158,0,null);
var pnod84156__84160 = cljs.core.nth.call(null,vec__84157__84158,1,null);
var pnod84156__84161 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod84156__84160):pnod84156__84160);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym84155__84159,pnod84156__84161,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym84155__84159,pnod84156__84161);
return enfocus.core.remove_node_return_child.call(null,pnod84156__84161);
} else
{return pnod84156__84161;
}
});
pm.client.templating.set_toolbar = (function set_toolbar(){
return enfocus.core.setTimeout.call(null,(function check__4519__auto__(){
if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{var nods__4501__auto____84163 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84162){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod84162,cljs.core.PersistentVector.fromArray(["header"])));
return pnod84162;
}),nods__4501__auto____84163));
return pm.client.templating.doc.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){
return check__4519__auto__.call(null);
}),10);
}
}),0);
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____84165 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84164){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod84164,cljs.core.PersistentVector.fromArray(["title"])));
return pnod84164;
}),nods__4501__auto____84165));
return pm.client.templating.doc.call(null);
});
