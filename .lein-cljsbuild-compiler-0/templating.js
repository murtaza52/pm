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
var nods__4501__auto____134485 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134484){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod134484,"Takes html string as input and inserts it into the DOM"));
return pnod134484;
}),nods__4501__auto____134485));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__134488__134489 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})]));
var id_sym134486__134490 = cljs.core.nth.call(null,vec__134488__134489,0,null);
var pnod134487__134491 = cljs.core.nth.call(null,vec__134488__134489,1,null);
var pnod134487__134492 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod134487__134491):pnod134487__134491);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym134486__134490,pnod134487__134492,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym134486__134490,pnod134487__134492);
return enfocus.core.remove_node_return_child.call(null,pnod134487__134492);
} else
{return pnod134487__134492;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____134494 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134493){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod134493,cljs.core.PersistentVector.fromArray(["title"])));
return pnod134493;
}),nods__4501__auto____134494));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(){
var nods__4501__auto____134496 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod134495){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod134495,cljs.core.PersistentVector.fromArray(["#header"])));
return pnod134495;
}),nods__4501__auto____134496));
return document;
});
