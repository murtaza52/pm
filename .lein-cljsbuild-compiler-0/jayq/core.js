goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto____13922 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____13922))
{var cm__13923 = temp__3971__auto____13922;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__13923),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__13924){
var vec__13925__13926 = p__13924;
var context__13927 = cljs.core.nth.call(null,vec__13925__13926,0,null);
if(cljs.core.not.call(null,context__13927))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__13927);
}
};
var $ = function (sel,var_args){
var p__13924 = null;
if (goog.isDef(var_args)) {
  p__13924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__13924);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__13928){
var sel = cljs.core.first(arglist__13928);
var p__13924 = cljs.core.rest(arglist__13928);
return $__delegate(sel, p__13924);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,this$,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,this$,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto____13929 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____13929))
{return or__3824__auto____13929;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__13930 = null;
var G__13930__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13930__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13930 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__13930__2.call(this,_,k);
case 3:
return G__13930__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13930;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__13931){
var vec__13932__13933 = p__13931;
var v__13934 = cljs.core.nth.call(null,vec__13932__13933,0,null);
var a__13935 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__13934))
{return $elem.attr(a__13935);
} else
{return $elem.attr(a__13935,v__13934);
}
};
var attr = function ($elem,a,var_args){
var p__13931 = null;
if (goog.isDef(var_args)) {
  p__13931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__13931);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__13936){
var $elem = cljs.core.first(arglist__13936);
var a = cljs.core.first(cljs.core.next(arglist__13936));
var p__13931 = cljs.core.rest(cljs.core.next(arglist__13936));
return attr__delegate($elem, a, p__13931);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__13937){
var vec__13938__13939 = p__13937;
var v__13940 = cljs.core.nth.call(null,vec__13938__13939,0,null);
var k__13941 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__13940))
{return $elem.data(k__13941);
} else
{return $elem.data(k__13941,v__13940);
}
};
var data = function ($elem,k,var_args){
var p__13937 = null;
if (goog.isDef(var_args)) {
  p__13937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__13937);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__13942){
var $elem = cljs.core.first(arglist__13942);
var k = cljs.core.first(cljs.core.next(arglist__13942));
var p__13937 = cljs.core.rest(cljs.core.next(arglist__13942));
return data__delegate($elem, k, p__13937);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__13943 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__13943);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__13944 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__13944);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__13945 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__13945);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__13946 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__13946);
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__13947){
var vec__13948__13949 = p__13947;
var speed__13950 = cljs.core.nth.call(null,vec__13948__13949,0,null);
var on_finish__13951 = cljs.core.nth.call(null,vec__13948__13949,1,null);
return $elem.hide(speed__13950,on_finish__13951);
};
var hide = function ($elem,var_args){
var p__13947 = null;
if (goog.isDef(var_args)) {
  p__13947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__13947);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__13952){
var $elem = cljs.core.first(arglist__13952);
var p__13947 = cljs.core.rest(arglist__13952);
return hide__delegate($elem, p__13947);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__13953){
var vec__13954__13955 = p__13953;
var speed__13956 = cljs.core.nth.call(null,vec__13954__13955,0,null);
var on_finish__13957 = cljs.core.nth.call(null,vec__13954__13955,1,null);
return $elem.show(speed__13956,on_finish__13957);
};
var show = function ($elem,var_args){
var p__13953 = null;
if (goog.isDef(var_args)) {
  p__13953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__13953);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__13958){
var $elem = cljs.core.first(arglist__13958);
var p__13953 = cljs.core.rest(arglist__13958);
return show__delegate($elem, p__13953);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__13959){
var vec__13960__13961 = p__13959;
var speed__13962 = cljs.core.nth.call(null,vec__13960__13961,0,null);
var on_finish__13963 = cljs.core.nth.call(null,vec__13960__13961,1,null);
return $elem.toggle(speed__13962,on_finish__13963);
};
var toggle = function ($elem,var_args){
var p__13959 = null;
if (goog.isDef(var_args)) {
  p__13959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__13959);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__13964){
var $elem = cljs.core.first(arglist__13964);
var p__13959 = cljs.core.rest(arglist__13964);
return toggle__delegate($elem, p__13959);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__13965){
var vec__13966__13967 = p__13965;
var speed__13968 = cljs.core.nth.call(null,vec__13966__13967,0,null);
var on_finish__13969 = cljs.core.nth.call(null,vec__13966__13967,1,null);
return $elem.fadeOut(speed__13968,on_finish__13969);
};
var fade_out = function ($elem,var_args){
var p__13965 = null;
if (goog.isDef(var_args)) {
  p__13965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__13965);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__13970){
var $elem = cljs.core.first(arglist__13970);
var p__13965 = cljs.core.rest(arglist__13970);
return fade_out__delegate($elem, p__13965);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__13971){
var vec__13972__13973 = p__13971;
var speed__13974 = cljs.core.nth.call(null,vec__13972__13973,0,null);
var on_finish__13975 = cljs.core.nth.call(null,vec__13972__13973,1,null);
return $elem.fadeIn(speed__13974,on_finish__13975);
};
var fade_in = function ($elem,var_args){
var p__13971 = null;
if (goog.isDef(var_args)) {
  p__13971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__13971);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__13976){
var $elem = cljs.core.first(arglist__13976);
var p__13971 = cljs.core.rest(arglist__13976);
return fade_in__delegate($elem, p__13971);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__13977){
var vec__13978__13979 = p__13977;
var speed__13980 = cljs.core.nth.call(null,vec__13978__13979,0,null);
var on_finish__13981 = cljs.core.nth.call(null,vec__13978__13979,1,null);
return $elem.slideUp(speed__13980,on_finish__13981);
};
var slide_up = function ($elem,var_args){
var p__13977 = null;
if (goog.isDef(var_args)) {
  p__13977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__13977);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__13982){
var $elem = cljs.core.first(arglist__13982);
var p__13977 = cljs.core.rest(arglist__13982);
return slide_up__delegate($elem, p__13977);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__13983){
var vec__13984__13985 = p__13983;
var speed__13986 = cljs.core.nth.call(null,vec__13984__13985,0,null);
var on_finish__13987 = cljs.core.nth.call(null,vec__13984__13985,1,null);
return $elem.slideDown(speed__13986,on_finish__13987);
};
var slide_down = function ($elem,var_args){
var p__13983 = null;
if (goog.isDef(var_args)) {
  p__13983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__13983);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__13988){
var $elem = cljs.core.first(arglist__13988);
var p__13983 = cljs.core.rest(arglist__13988);
return slide_down__delegate($elem, p__13983);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__13989){
var vec__13990__13991 = p__13989;
var context__13992 = cljs.core.nth.call(null,vec__13990__13991,0,null);
return $elem.closest(selector,context__13992);
};
var closest = function ($elem,selector,var_args){
var p__13989 = null;
if (goog.isDef(var_args)) {
  p__13989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__13989);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__13993){
var $elem = cljs.core.first(arglist__13993);
var selector = cljs.core.first(cljs.core.next(arglist__13993));
var p__13989 = cljs.core.rest(cljs.core.next(arglist__13993));
return closest__delegate($elem, selector, p__13989);
});
closest.cljs$lang$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__13994){
var vec__13995__13996 = p__13994;
var v__13997 = cljs.core.nth.call(null,vec__13995__13996,0,null);
if(cljs.core.truth_(v__13997))
{return $elem.val(v__13997);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__13994 = null;
if (goog.isDef(var_args)) {
  p__13994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__13994);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__13998){
var $elem = cljs.core.first(arglist__13998);
var p__13994 = cljs.core.rest(arglist__13998);
return val__delegate($elem, p__13994);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__13999,content,callback){
var vec__14000__14001 = p__13999;
var method__14002 = cljs.core.nth.call(null,vec__14000__14001,0,null);
var uri__14003 = cljs.core.nth.call(null,vec__14000__14001,1,null);
var params__14004 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__14002)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__14003,params__14004);
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){
return jQuery.ajax(jayq.util.clj__GT_js.call(null,settings));
});
var ajax__2 = (function (url,settings){
return jQuery.ajax(url,jayq.util.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw('Invalid arity: ' + arguments.length);
};
ajax.cljs$lang$arity$1 = ajax__1;
ajax.cljs$lang$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__14005){
var vec__14006__14007 = p__14005;
var func__14008 = cljs.core.nth.call(null,vec__14006__14007,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__14008);
};
var unbind = function ($elem,ev,var_args){
var p__14005 = null;
if (goog.isDef(var_args)) {
  p__14005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__14005);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__14009){
var $elem = cljs.core.first(arglist__14009);
var ev = cljs.core.first(cljs.core.next(arglist__14009));
var p__14005 = cljs.core.rest(cljs.core.next(arglist__14009));
return unbind__delegate($elem, ev, p__14005);
});
unbind.cljs$lang$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__14010){
var vec__14011__14012 = p__14010;
var sel__14013 = cljs.core.nth.call(null,vec__14011__14012,0,null);
var data__14014 = cljs.core.nth.call(null,vec__14011__14012,1,null);
var handler__14015 = cljs.core.nth.call(null,vec__14011__14012,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14013),data__14014,handler__14015);
};
var on = function ($elem,events,var_args){
var p__14010 = null;
if (goog.isDef(var_args)) {
  p__14010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__14010);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__14016){
var $elem = cljs.core.first(arglist__14016);
var events = cljs.core.first(cljs.core.next(arglist__14016));
var p__14010 = cljs.core.rest(cljs.core.next(arglist__14016));
return on__delegate($elem, events, p__14010);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__14017){
var vec__14018__14019 = p__14017;
var sel__14020 = cljs.core.nth.call(null,vec__14018__14019,0,null);
var data__14021 = cljs.core.nth.call(null,vec__14018__14019,1,null);
var handler__14022 = cljs.core.nth.call(null,vec__14018__14019,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14020),data__14021,handler__14022);
};
var one = function ($elem,events,var_args){
var p__14017 = null;
if (goog.isDef(var_args)) {
  p__14017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__14017);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__14023){
var $elem = cljs.core.first(arglist__14023);
var events = cljs.core.first(cljs.core.next(arglist__14023));
var p__14017 = cljs.core.rest(cljs.core.next(arglist__14023));
return one__delegate($elem, events, p__14017);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__14024){
var vec__14025__14026 = p__14024;
var sel__14027 = cljs.core.nth.call(null,vec__14025__14026,0,null);
var handler__14028 = cljs.core.nth.call(null,vec__14025__14026,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14027),handler__14028);
};
var off = function ($elem,events,var_args){
var p__14024 = null;
if (goog.isDef(var_args)) {
  p__14024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__14024);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__14029){
var $elem = cljs.core.first(arglist__14029);
var events = cljs.core.first(cljs.core.next(arglist__14029));
var p__14024 = cljs.core.rest(cljs.core.next(arglist__14029));
return off__delegate($elem, events, p__14024);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
