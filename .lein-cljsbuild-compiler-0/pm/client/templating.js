goog.provide('pm.client.templating');
goog.require('cljs.core');
goog.require('enfocus.core');
pm.client.templating.doc = (function doc(){
return document;
});
pm.client.templating.layout = (function layout(c){
var nods__4501__auto____11670 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11669){
enfocus.core.en_content.call(null,c).call(null,enfocus.core.css_select.call(null,"",pnod11669,cljs.core.PersistentVector.fromArray([".cljs-main"])));
return pnod11669;
}),nods__4501__auto____11670));
return pm.client.templating.doc.call(null);
});
pm.client.templating.set_chrome = (function set_chrome(title){
var nods__4501__auto____11672 = enfocus.core.nodes__GT_coll.call(null,pm.client.templating.doc.call(null));
cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11671){
enfocus.core.en_content.call(null,title).call(null,enfocus.core.css_select.call(null,"",pnod11671,cljs.core.PersistentVector.fromArray(["title"])));
enfocus.core.en_content.call(null,"Hello World").call(null,enfocus.core.css_select.call(null,"",pnod11671,cljs.core.PersistentVector.fromArray(["header"])));
return pnod11671;
}),nods__4501__auto____11672));
return pm.client.templating.doc.call(null);
});
