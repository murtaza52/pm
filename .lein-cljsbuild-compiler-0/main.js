goog.provide('pm.client.main');
goog.require('cljs.core');
goog.require('pm.client.templating');
goog.require('jayq.core');
/**
* Set the chrome and redirect to the initial page
*/
pm.client.main.init = (function init(){
return pm.client.templating.set_chrome.call(null,"Project Management");
});
/**
* Function to add form on document.ready
*/
pm.client.main.onload = (function onload(){
return "hello";
});
pm.client.main.init.call(null);
