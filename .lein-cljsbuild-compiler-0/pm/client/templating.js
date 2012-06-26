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
var nods__4501__auto____127533 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127532){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod127532,"Takes html string as input and inserts it into the DOM"));
return pnod127532;
}),nods__4501__auto____127533));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__127536__127537 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym127534__127538 = cljs.core.nth.call(null,vec__127536__127537,0,null);
var pnod127535__127539 = cljs.core.nth.call(null,vec__127536__127537,1,null);
var pnod127535__127540 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod127535__127539):pnod127535__127539);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym127534__127538,pnod127535__127540,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym127534__127538,pnod127535__127540);
return enfocus.core.remove_node_return_child.call(null,pnod127535__127540);
} else
{return pnod127535__127540;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____127542 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127541){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod127541,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_html_content.call(null,pm.client.templating.get_html.call(null,"pm/templates/components.html","top-navbar")).call(null,enfocus.core.css_select.call(null,"",pnod127541,cljs.core.PersistentVector.fromArray(["header"])));
return pnod127541;
}),nods__4501__auto____127542));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(title){
var nods__4501__auto____127544 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod127543){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod127543,cljs.core.PersistentVector.fromArray(["header"])));
return pnod127543;
}),nods__4501__auto____127544));
return document;
});
