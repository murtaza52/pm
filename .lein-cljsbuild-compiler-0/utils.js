goog.provide('pm.client.utils');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
pm.client.utils.state = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug"],{"\uFDD0'debug":true}));
pm.client.utils.repl_url = "http://localhost:9000/repl";
pm.client.utils.log = (function log(msg,data){
if(cljs.core.truth_((function (){var and__3822__auto____45029 = console;
if(cljs.core.truth_(and__3822__auto____45029))
{return cljs.core.deref.call(null,pm.client.utils.state).call(null,"\uFDD0'debug");
} else
{return and__3822__auto____45029;
}
})()))
{var d__45030 = ((cljs.core.string_QMARK_.call(null,data))?data:cljs.core.pr_str.call(null,data));
var s__45031 = [cljs.core.str(msg),cljs.core.str(" :: "),cljs.core.str(d__45030)].join('');
return console.log(s__45031);
} else
{return null;
}
});
pm.client.utils.set_repl = (function set_repl(){
if(cljs.core.truth_((function (){var and__3822__auto____45032 = console;
if(cljs.core.truth_(and__3822__auto____45032))
{return cljs.core.deref.call(null,pm.client.utils.state).call(null,"\uFDD0'debug");
} else
{return and__3822__auto____45032;
}
})()))
{return clojure.browser.repl.connect.call(null,pm.client.utils.repl_url);
} else
{return null;
}
});
/**
* Function to add form on document.ready
* @param {...*} var_args
*/
pm.client.utils.onload = (function() { 
var onload__delegate = function (forms){
return cljs.core.apply.call(null,jayq.core.$,forms);
};
var onload = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return onload__delegate.call(this, forms);
};
onload.cljs$lang$maxFixedArity = 0;
onload.cljs$lang$applyTo = (function (arglist__45033){
var forms = cljs.core.seq(arglist__45033);;
return onload__delegate(forms);
});
onload.cljs$lang$arity$variadic = onload__delegate;
return onload;
})()
;
