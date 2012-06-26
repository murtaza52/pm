goog.provide('pm.client.utils');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
pm.client.utils.state = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'debug"],{"\uFDD0'debug":true}));
pm.client.utils.repl_url = "http://localhost:9000/repl";
pm.client.utils.log = (function log(msg,data){
if(cljs.core.truth_((function (){var and__3822__auto____129730 = console;
if(cljs.core.truth_(and__3822__auto____129730))
{return cljs.core.deref.call(null,pm.client.utils.state).call(null,"\uFDD0'debug");
} else
{return and__3822__auto____129730;
}
})()))
{var d__129731 = ((cljs.core.string_QMARK_.call(null,data))?data:cljs.core.pr_str.call(null,data));
var s__129732 = [cljs.core.str(msg),cljs.core.str(" :: "),cljs.core.str(d__129731)].join('');
return console.log(s__129732);
} else
{return null;
}
});
pm.client.utils.set_repl = (function set_repl(){
if(cljs.core.truth_((function (){var and__3822__auto____129733 = console;
if(cljs.core.truth_(and__3822__auto____129733))
{return cljs.core.deref.call(null,pm.client.utils.state).call(null,"\uFDD0'debug");
} else
{return and__3822__auto____129733;
}
})()))
{return clojure.browser.repl.connect.call(null,pm.client.utils.repl_url);
} else
{return null;
}
});
