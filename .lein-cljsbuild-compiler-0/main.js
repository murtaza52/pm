goog.provide('pm.client.main');
goog.require('cljs.core');
goog.require('pm.client.templating');
goog.require('pm.client.utils');
goog.require('enfocus.core');
/**
* Set the chrome and redirect to the initial page
*/
pm.client.main.init = (function init(){
return pm.client.templating.set_chrome.call(null,"Project Management");
});
pm.client.utils.onload.call(null,pm.client.utils.set_repl.call(null),pm.client.main.init.call(null));
