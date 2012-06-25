goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____84167 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84166){
enfocus.core.en_content.call(null,c).call(null,enfocus.core.css_select.call(null,"",pnod84166,cljs.core.PersistentVector.fromArray([".cljs-main"])));
return pnod84166;
}),nods__4501__auto____84167));
return pm.client.templating.doc.call(null);
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__84170__84171 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym84168__84172 = cljs.core.nth.call(null,vec__84170__84171,0,null);
var pnod84169__84173 = cljs.core.nth.call(null,vec__84170__84171,1,null);
var pnod84169__84174 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod84169__84173):pnod84169__84173);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym84168__84172,pnod84169__84174,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym84168__84172,pnod84169__84174);
return enfocus.core.remove_node_return_child.call(null,pnod84169__84174);
} else
{return pnod84169__84174;
}
});
pm.client.templating.set_toolbar = (function set_toolbar(){
return enfocus.core.setTimeout.call(null,(function check__4519__auto__(){
if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{var nods__4501__auto____84176 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84175){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod84175,cljs.core.PersistentVector.fromArray(["header"])));
return pnod84175;
}),nods__4501__auto____84176));
return pm.client.templating.doc.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){
return check__4519__auto__.call(null);
}),10);
}
}),0);
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____84178 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod84177){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod84177,cljs.core.PersistentVector.fromArray(["title"])));
return pnod84177;
}),nods__4501__auto____84178));
return pm.client.templating.doc.call(null);
});
