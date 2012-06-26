goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('fetch.remotes');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.get_html = (function get_html(url,sel){
return fetch.remotes.remote_callback.call(null,"get-template",cljs.core.PersistentVector.fromArray([url,sel]),(function (html_templ){
return html_templ;
}));
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____127520 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127519){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod127519,"Takes html string as input and inserts it into the DOM"));
return pnod127519;
}),nods__4501__auto____127520));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__127523__127524 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym127521__127525 = cljs.core.nth.call(null,vec__127523__127524,0,null);
var pnod127522__127526 = cljs.core.nth.call(null,vec__127523__127524,1,null);
var pnod127522__127527 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod127522__127526):pnod127522__127526);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym127521__127525,pnod127522__127527,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym127521__127525,pnod127522__127527);
return enfocus.core.remove_node_return_child.call(null,pnod127522__127527);
} else
{return pnod127522__127527;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____127529 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127528){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod127528,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_html_content.call(null,pm.client.templating.get_html.call(null,"pm/templates/components.html","top-navbar")).call(null,enfocus.core.css_select.call(null,"",pnod127528,cljs.core.PersistentVector.fromArray(["header"])));
return pnod127528;
}),nods__4501__auto____127529));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(title){
var nods__4501__auto____127531 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127530){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod127530,cljs.core.PersistentVector.fromArray(["header"])));
return pnod127530;
}),nods__4501__auto____127531));
return document;
});
