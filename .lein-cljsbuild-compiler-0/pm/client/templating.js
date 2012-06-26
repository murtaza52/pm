goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('fetch.remotes');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__7207__auto____17962 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod17961){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod17961,"Takes html string as input and inserts it into the DOM"));
return pnod17961;
}),nods__7207__auto____17962));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__17965__17966 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["#top-navbar"]));
})]));
var id_sym17963__17967 = cljs.core.nth.call(null,vec__17965__17966,0,null);
var pnod17964__17968 = cljs.core.nth.call(null,vec__17965__17966,1,null);
var pnod17964__17969 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod17964__17968):pnod17964__17968);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym17963__17967,pnod17964__17969,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym17963__17967,pnod17964__17969);
return enfocus.core.remove_node_return_child.call(null,pnod17964__17969);
} else
{return pnod17964__17969;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__7207__auto____17971 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod17970){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod17970,cljs.core.PersistentVector.fromArray(["title"])));
return pnod17970;
}),nods__7207__auto____17971));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(){
var nods__7207__auto____17973 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod17972){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod17972,cljs.core.PersistentVector.fromArray(["#header"])));
return pnod17972;
}),nods__7207__auto____17973));
return document;
});
