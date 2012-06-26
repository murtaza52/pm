goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__15561 = {};
var G__15562__15563 = cljs.core.seq.call(null,m);
if(cljs.core.truth_(G__15562__15563))
{var G__15565__15567 = cljs.core.first.call(null,G__15562__15563);
var vec__15566__15568 = G__15565__15567;
var k__15569 = cljs.core.nth.call(null,vec__15566__15568,0,null);
var v__15570 = cljs.core.nth.call(null,vec__15566__15568,1,null);
var G__15562__15571 = G__15562__15563;
var G__15565__15572 = G__15565__15567;
var G__15562__15573 = G__15562__15571;
while(true){
var vec__15574__15575 = G__15565__15572;
var k__15576 = cljs.core.nth.call(null,vec__15574__15575,0,null);
var v__15577 = cljs.core.nth.call(null,vec__15574__15575,1,null);
var G__15562__15578 = G__15562__15573;
(out__15561[cljs.core.name.call(null,k__15576)] = v__15577);
var temp__3974__auto____15579 = cljs.core.next.call(null,G__15562__15578);
if(cljs.core.truth_(temp__3974__auto____15579))
{var G__15562__15580 = temp__3974__auto____15579;
{
var G__15581 = cljs.core.first.call(null,G__15562__15580);
var G__15582 = G__15562__15580;
G__15565__15572 = G__15581;
G__15562__15573 = G__15582;
continue;
}
} else
{}
break;
}
} else
{}
return out__15561;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__15583 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__15583);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15584){
var v = cljs.core.first(arglist__15584);
var text = cljs.core.rest(arglist__15584);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__15585){
var vec__15586__15587 = p__15585;
var k__15588 = cljs.core.nth.call(null,vec__15586__15587,0,null);
var v__15589 = cljs.core.nth.call(null,vec__15586__15587,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__15588),clj__GT_js.call(null,v__15589));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
