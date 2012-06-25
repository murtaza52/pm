goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____108826 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108825){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod108825,"Takes html string as input and inserts it into the DOM"));
return pnod108825;
}),nods__4501__auto____108826));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__108829__108830 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym108827__108831 = cljs.core.nth.call(null,vec__108829__108830,0,null);
var pnod108828__108832 = cljs.core.nth.call(null,vec__108829__108830,1,null);
var pnod108828__108833 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod108828__108832):pnod108828__108832);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym108827__108831,pnod108828__108833,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym108827__108831,pnod108828__108833);
return enfocus.core.remove_node_return_child.call(null,pnod108828__108833);
} else
{return pnod108828__108833;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____108835 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108834){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod108834,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod108834,cljs.core.PersistentVector.fromArray(["header"])));
return pnod108834;
}),nods__4501__auto____108835));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(title){
var nods__4501__auto____108837 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108836){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod108836,cljs.core.PersistentVector.fromArray(["header"])));
return pnod108836;
}),nods__4501__auto____108837));
return document;
});
