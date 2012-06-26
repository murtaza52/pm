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
var nods__4501__auto____134498 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134497){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod134497,"Takes html string as input and inserts it into the DOM"));
return pnod134497;
}),nods__4501__auto____134498));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__134501__134502 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})]));
var id_sym134499__134503 = cljs.core.nth.call(null,vec__134501__134502,0,null);
var pnod134500__134504 = cljs.core.nth.call(null,vec__134501__134502,1,null);
var pnod134500__134505 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod134500__134504):pnod134500__134504);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym134499__134503,pnod134500__134505,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym134499__134503,pnod134500__134505);
return enfocus.core.remove_node_return_child.call(null,pnod134500__134505);
} else
{return pnod134500__134505;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____134507 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134506){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod134506,cljs.core.PersistentVector.fromArray(["title"])));
return pnod134506;
}),nods__4501__auto____134507));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(){
var nods__4501__auto____134509 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134508){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod134508,cljs.core.PersistentVector.fromArray(["#header"])));
return pnod134508;
}),nods__4501__auto____134509));
return document;
});
