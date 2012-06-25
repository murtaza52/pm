goog.provide('pm.client.main');
goog.require('cljs.core');
goog.require('pm.client.templating');
goog.require('pm.client.utils');
/**
* Set the chrome and redirect to the initial page
*/
pm.client.main.init = (function init(){
pm.client.templating.set_chrome.call(null,"Project Management");
return pm.client.templating.set_toolbar.call(null);
});
pm.client.utils.onload.call(null,pm.client.utils.set_repl.call(null),pm.client.main.init.call(null));
