goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__14030 = {};
var G__14031__14032 = cljs.core.seq.call(null,m);
if(cljs.core.truth_(G__14031__14032))
{var G__14034__14036 = cljs.core.first.call(null,G__14031__14032);
var vec__14035__14037 = G__14034__14036;
var k__14038 = cljs.core.nth.call(null,vec__14035__14037,0,null);
var v__14039 = cljs.core.nth.call(null,vec__14035__14037,1,null);
var G__14031__14040 = G__14031__14032;
var G__14034__14041 = G__14034__14036;
var G__14031__14042 = G__14031__14040;
while(true){
var vec__14043__14044 = G__14034__14041;
var k__14045 = cljs.core.nth.call(null,vec__14043__14044,0,null);
var v__14046 = cljs.core.nth.call(null,vec__14043__14044,1,null);
var G__14031__14047 = G__14031__14042;
(out__14030[cljs.core.name.call(null,k__14045)] = v__14046);
var temp__3974__auto____14048 = cljs.core.next.call(null,G__14031__14047);
if(cljs.core.truth_(temp__3974__auto____14048))
{var G__14031__14049 = temp__3974__auto____14048;
{
var G__14050 = cljs.core.first.call(null,G__14031__14049);
var G__14051 = G__14031__14049;
G__14034__14041 = G__14050;
G__14031__14042 = G__14051;
continue;
}
} else
{}
break;
}
} else
{}
return out__14030;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__14052 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__14052);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14053){
var v = cljs.core.first(arglist__14053);
var text = cljs.core.rest(arglist__14053);
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
{return cljs.core.reduce.call(null,(function (m,p__14054){
var vec__14055__14056 = p__14054;
var k__14057 = cljs.core.nth.call(null,vec__14055__14056,0,null);
var v__14058 = cljs.core.nth.call(null,vec__14055__14056,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__14057),clj__GT_js.call(null,v__14058));
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
