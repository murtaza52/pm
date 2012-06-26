goog.provide('pm.client.main');
goog.require('cljs.core');
goog.require('pm.client.templating');
goog.require('pm.client.utils');
goog.require('enfocus.core');
/**
* Set the chrome and redirect to the initial page
*/
pm.client.main.init = (function init(){
pm.client.templating.set_chrome.call(null,"Project Management");
return enfocus.core.setTimeout.call(null,(function check__4519__auto__(){
if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{return pm.client.templating.set_toolbar.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){
return check__4519__auto__.call(null);
}),10);
}
}),0);
});
jayq.core.document_ready.call(null,(function (){
pm.client.main.init.call(null);
return pm.client.utils.set_repl.call(null);
}));
