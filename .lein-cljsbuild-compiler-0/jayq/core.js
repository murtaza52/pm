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
{var temp__3971__auto____15453 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____15453))
{var cm__15454 = temp__3971__auto____15453;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__15454),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__15455){
var vec__15456__15457 = p__15455;
var context__15458 = cljs.core.nth.call(null,vec__15456__15457,0,null);
if(cljs.core.not.call(null,context__15458))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__15458);
}
};
var $ = function (sel,var_args){
var p__15455 = null;
if (goog.isDef(var_args)) {
  p__15455 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__15455);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__15459){
var sel = cljs.core.first(arglist__15459);
var p__15455 = cljs.core.rest(arglist__15459);
return $__delegate(sel, p__15455);
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
var or__3824__auto____15460 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____15460))
{return or__3824__auto____15460;
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
var G__15461 = null;
var G__15461__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__15461__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__15461 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__15461__2.call(this,_,k);
case 3:
return G__15461__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15461;
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
var attr__delegate = function ($elem,a,p__15462){
var vec__15463__15464 = p__15462;
var v__15465 = cljs.core.nth.call(null,vec__15463__15464,0,null);
var a__15466 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__15465))
{return $elem.attr(a__15466);
} else
{return $elem.attr(a__15466,v__15465);
}
};
var attr = function ($elem,a,var_args){
var p__15462 = null;
if (goog.isDef(var_args)) {
  p__15462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__15462);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__15467){
var $elem = cljs.core.first(arglist__15467);
var a = cljs.core.first(cljs.core.next(arglist__15467));
var p__15462 = cljs.core.rest(cljs.core.next(arglist__15467));
return attr__delegate($elem, a, p__15462);
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
var data__delegate = function ($elem,k,p__15468){
var vec__15469__15470 = p__15468;
var v__15471 = cljs.core.nth.call(null,vec__15469__15470,0,null);
var k__15472 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__15471))
{return $elem.data(k__15472);
} else
{return $elem.data(k__15472,v__15471);
}
};
var data = function ($elem,k,var_args){
var p__15468 = null;
if (goog.isDef(var_args)) {
  p__15468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__15468);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__15473){
var $elem = cljs.core.first(arglist__15473);
var k = cljs.core.first(cljs.core.next(arglist__15473));
var p__15468 = cljs.core.rest(cljs.core.next(arglist__15473));
return data__delegate($elem, k, p__15468);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__15474 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__15474);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__15475 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__15475);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__15476 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__15476);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__15477 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__15477);
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
var hide__delegate = function ($elem,p__15478){
var vec__15479__15480 = p__15478;
var speed__15481 = cljs.core.nth.call(null,vec__15479__15480,0,null);
var on_finish__15482 = cljs.core.nth.call(null,vec__15479__15480,1,null);
return $elem.hide(speed__15481,on_finish__15482);
};
var hide = function ($elem,var_args){
var p__15478 = null;
if (goog.isDef(var_args)) {
  p__15478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__15478);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__15483){
var $elem = cljs.core.first(arglist__15483);
var p__15478 = cljs.core.rest(arglist__15483);
return hide__delegate($elem, p__15478);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__15484){
var vec__15485__15486 = p__15484;
var speed__15487 = cljs.core.nth.call(null,vec__15485__15486,0,null);
var on_finish__15488 = cljs.core.nth.call(null,vec__15485__15486,1,null);
return $elem.show(speed__15487,on_finish__15488);
};
var show = function ($elem,var_args){
var p__15484 = null;
if (goog.isDef(var_args)) {
  p__15484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__15484);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__15489){
var $elem = cljs.core.first(arglist__15489);
var p__15484 = cljs.core.rest(arglist__15489);
return show__delegate($elem, p__15484);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__15490){
var vec__15491__15492 = p__15490;
var speed__15493 = cljs.core.nth.call(null,vec__15491__15492,0,null);
var on_finish__15494 = cljs.core.nth.call(null,vec__15491__15492,1,null);
return $elem.toggle(speed__15493,on_finish__15494);
};
var toggle = function ($elem,var_args){
var p__15490 = null;
if (goog.isDef(var_args)) {
  p__15490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__15490);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__15495){
var $elem = cljs.core.first(arglist__15495);
var p__15490 = cljs.core.rest(arglist__15495);
return toggle__delegate($elem, p__15490);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__15496){
var vec__15497__15498 = p__15496;
var speed__15499 = cljs.core.nth.call(null,vec__15497__15498,0,null);
var on_finish__15500 = cljs.core.nth.call(null,vec__15497__15498,1,null);
return $elem.fadeOut(speed__15499,on_finish__15500);
};
var fade_out = function ($elem,var_args){
var p__15496 = null;
if (goog.isDef(var_args)) {
  p__15496 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__15496);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__15501){
var $elem = cljs.core.first(arglist__15501);
var p__15496 = cljs.core.rest(arglist__15501);
return fade_out__delegate($elem, p__15496);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__15502){
var vec__15503__15504 = p__15502;
var speed__15505 = cljs.core.nth.call(null,vec__15503__15504,0,null);
var on_finish__15506 = cljs.core.nth.call(null,vec__15503__15504,1,null);
return $elem.fadeIn(speed__15505,on_finish__15506);
};
var fade_in = function ($elem,var_args){
var p__15502 = null;
if (goog.isDef(var_args)) {
  p__15502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__15502);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__15507){
var $elem = cljs.core.first(arglist__15507);
var p__15502 = cljs.core.rest(arglist__15507);
return fade_in__delegate($elem, p__15502);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__15508){
var vec__15509__15510 = p__15508;
var speed__15511 = cljs.core.nth.call(null,vec__15509__15510,0,null);
var on_finish__15512 = cljs.core.nth.call(null,vec__15509__15510,1,null);
return $elem.slideUp(speed__15511,on_finish__15512);
};
var slide_up = function ($elem,var_args){
var p__15508 = null;
if (goog.isDef(var_args)) {
  p__15508 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__15508);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__15513){
var $elem = cljs.core.first(arglist__15513);
var p__15508 = cljs.core.rest(arglist__15513);
return slide_up__delegate($elem, p__15508);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__15514){
var vec__15515__15516 = p__15514;
var speed__15517 = cljs.core.nth.call(null,vec__15515__15516,0,null);
var on_finish__15518 = cljs.core.nth.call(null,vec__15515__15516,1,null);
return $elem.slideDown(speed__15517,on_finish__15518);
};
var slide_down = function ($elem,var_args){
var p__15514 = null;
if (goog.isDef(var_args)) {
  p__15514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__15514);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__15519){
var $elem = cljs.core.first(arglist__15519);
var p__15514 = cljs.core.rest(arglist__15519);
return slide_down__delegate($elem, p__15514);
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
var closest__delegate = function ($elem,selector,p__15520){
var vec__15521__15522 = p__15520;
var context__15523 = cljs.core.nth.call(null,vec__15521__15522,0,null);
return $elem.closest(selector,context__15523);
};
var closest = function ($elem,selector,var_args){
var p__15520 = null;
if (goog.isDef(var_args)) {
  p__15520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__15520);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__15524){
var $elem = cljs.core.first(arglist__15524);
var selector = cljs.core.first(cljs.core.next(arglist__15524));
var p__15520 = cljs.core.rest(cljs.core.next(arglist__15524));
return closest__delegate($elem, selector, p__15520);
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
var val__delegate = function ($elem,p__15525){
var vec__15526__15527 = p__15525;
var v__15528 = cljs.core.nth.call(null,vec__15526__15527,0,null);
if(cljs.core.truth_(v__15528))
{return $elem.val(v__15528);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__15525 = null;
if (goog.isDef(var_args)) {
  p__15525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__15525);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__15529){
var $elem = cljs.core.first(arglist__15529);
var p__15525 = cljs.core.rest(arglist__15529);
return val__delegate($elem, p__15525);
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
jayq.core.xhr = (function xhr(p__15530,content,callback){
var vec__15531__15532 = p__15530;
var method__15533 = cljs.core.nth.call(null,vec__15531__15532,0,null);
var uri__15534 = cljs.core.nth.call(null,vec__15531__15532,1,null);
var params__15535 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__15533)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__15534,params__15535);
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
var unbind__delegate = function ($elem,ev,p__15536){
var vec__15537__15538 = p__15536;
var func__15539 = cljs.core.nth.call(null,vec__15537__15538,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__15539);
};
var unbind = function ($elem,ev,var_args){
var p__15536 = null;
if (goog.isDef(var_args)) {
  p__15536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__15536);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__15540){
var $elem = cljs.core.first(arglist__15540);
var ev = cljs.core.first(cljs.core.next(arglist__15540));
var p__15536 = cljs.core.rest(cljs.core.next(arglist__15540));
return unbind__delegate($elem, ev, p__15536);
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
var on__delegate = function ($elem,events,p__15541){
var vec__15542__15543 = p__15541;
var sel__15544 = cljs.core.nth.call(null,vec__15542__15543,0,null);
var data__15545 = cljs.core.nth.call(null,vec__15542__15543,1,null);
var handler__15546 = cljs.core.nth.call(null,vec__15542__15543,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15544),data__15545,handler__15546);
};
var on = function ($elem,events,var_args){
var p__15541 = null;
if (goog.isDef(var_args)) {
  p__15541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__15541);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__15547){
var $elem = cljs.core.first(arglist__15547);
var events = cljs.core.first(cljs.core.next(arglist__15547));
var p__15541 = cljs.core.rest(cljs.core.next(arglist__15547));
return on__delegate($elem, events, p__15541);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__15548){
var vec__15549__15550 = p__15548;
var sel__15551 = cljs.core.nth.call(null,vec__15549__15550,0,null);
var data__15552 = cljs.core.nth.call(null,vec__15549__15550,1,null);
var handler__15553 = cljs.core.nth.call(null,vec__15549__15550,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15551),data__15552,handler__15553);
};
var one = function ($elem,events,var_args){
var p__15548 = null;
if (goog.isDef(var_args)) {
  p__15548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__15548);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__15554){
var $elem = cljs.core.first(arglist__15554);
var events = cljs.core.first(cljs.core.next(arglist__15554));
var p__15548 = cljs.core.rest(cljs.core.next(arglist__15554));
return one__delegate($elem, events, p__15548);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__15555){
var vec__15556__15557 = p__15555;
var sel__15558 = cljs.core.nth.call(null,vec__15556__15557,0,null);
var handler__15559 = cljs.core.nth.call(null,vec__15556__15557,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15558),handler__15559);
};
var off = function ($elem,events,var_args){
var p__15555 = null;
if (goog.isDef(var_args)) {
  p__15555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__15555);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__15560){
var $elem = cljs.core.first(arglist__15560);
var events = cljs.core.first(cljs.core.next(arglist__15560));
var p__15555 = cljs.core.rest(cljs.core.next(arglist__15560));
return off__delegate($elem, events, p__15555);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
