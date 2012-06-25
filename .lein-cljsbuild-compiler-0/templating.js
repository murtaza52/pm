goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____108813 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108812){
cljs.core.PersistentVector.fromArray([".cljs-main"]).call(null,enfocus.core.css_select.call(null,"",pnod108812,"Takes html string as input and inserts it into the DOM"));
return pnod108812;
}),nods__4501__auto____108813));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/components.html");
pm.client.templating.toolbar = (function toolbar(){
var vec__108816__108817 = ((cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
}).call(null):cljs.core.PersistentVector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/components.html",cljs.core.PersistentVector.fromArray(["top-navbar"]));
})]));
var id_sym108814__108818 = cljs.core.nth.call(null,vec__108816__108817,0,null);
var pnod108815__108819 = cljs.core.nth.call(null,vec__108816__108817,1,null);
var pnod108815__108820 = ((true)?enfocus.core.create_hidden_dom.call(null,pnod108815__108819):pnod108815__108819);
enfocus.core.en_content.call(null,"hi").call(null,enfocus.core.css_select.call(null,id_sym108814__108818,pnod108815__108820,cljs.core.PersistentVector.fromArray(["#hello"])));
if(true)
{enfocus.core.reset_ids.call(null,id_sym108814__108818,pnod108815__108820);
return enfocus.core.remove_node_return_child.call(null,pnod108815__108820);
} else
{return pnod108815__108820;
}
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____108822 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108821){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod108821,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod108821,cljs.core.PersistentVector.fromArray(["header"])));
return pnod108821;
}),nods__4501__auto____108822));
return document;
});
pm.client.templating.set_toolbar = (function set_toolbar(title){
var nods__4501__auto____108824 = enfocus.core.nodes__GT_coll.call(null,document);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod108823){
enfocus.core.en_content.call(null,pm.client.templating.toolbar.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod108823,cljs.core.PersistentVector.fromArray(["header"])));
return pnod108823;
}),nods__4501__auto____108824));
return document;
});
