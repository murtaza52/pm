goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____11666 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11665){
enfocus.core.en_content.call(null,c).call(null,enfocus.core.css_select.call(null,"",pnod11665,cljs.core.PersistentVector.fromArray([".cljs-main"])));
return pnod11665;
}),nods__4501__auto____11666));
return pm.client.templating.doc.call(null);
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____11668 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11667){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod11667,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_content.call(null,"Hello World").call(null,enfocus.core.css_select.call(null,"",pnod11667,cljs.core.PersistentVector.fromArray(["header"])));
return pnod11667;
}),nods__4501__auto____11668));
return pm.client.templating.doc.call(null);
});
