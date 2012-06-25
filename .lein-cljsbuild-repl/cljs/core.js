goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6587__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6587 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6587__delegate.call(this, array, i, idxs);
};
G__6587.cljs$lang$maxFixedArity = 2;
G__6587.cljs$lang$applyTo = (function (arglist__6588){
var array = cljs.core.first(arglist__6588);
var i = cljs.core.first(cljs.core.next(arglist__6588));
var idxs = cljs.core.rest(cljs.core.next(arglist__6588));
return G__6587__delegate(array, i, idxs);
});
G__6587.cljs$lang$arity$variadic = G__6587__delegate;
return G__6587;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6589 = this$;
if(and__3822__auto____6589)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6589;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6590)
{return or__3824__auto____6590;
} else
{var or__3824__auto____6591 = (cljs.core._invoke["_"]);
if(or__3824__auto____6591)
{return or__3824__auto____6591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6592 = this$;
if(and__3822__auto____6592)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6592;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6593 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
} else
{var or__3824__auto____6594 = (cljs.core._invoke["_"]);
if(or__3824__auto____6594)
{return or__3824__auto____6594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6595 = this$;
if(and__3822__auto____6595)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6595;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6596 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{var or__3824__auto____6597 = (cljs.core._invoke["_"]);
if(or__3824__auto____6597)
{return or__3824__auto____6597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6598 = this$;
if(and__3822__auto____6598)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6598;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6599 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6599)
{return or__3824__auto____6599;
} else
{var or__3824__auto____6600 = (cljs.core._invoke["_"]);
if(or__3824__auto____6600)
{return or__3824__auto____6600;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6601 = this$;
if(and__3822__auto____6601)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6601;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6602 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6602)
{return or__3824__auto____6602;
} else
{var or__3824__auto____6603 = (cljs.core._invoke["_"]);
if(or__3824__auto____6603)
{return or__3824__auto____6603;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6604 = this$;
if(and__3822__auto____6604)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6604;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6605)
{return or__3824__auto____6605;
} else
{var or__3824__auto____6606 = (cljs.core._invoke["_"]);
if(or__3824__auto____6606)
{return or__3824__auto____6606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6607 = this$;
if(and__3822__auto____6607)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6607;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6608 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{var or__3824__auto____6609 = (cljs.core._invoke["_"]);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6610 = this$;
if(and__3822__auto____6610)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6610;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6611 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6611)
{return or__3824__auto____6611;
} else
{var or__3824__auto____6612 = (cljs.core._invoke["_"]);
if(or__3824__auto____6612)
{return or__3824__auto____6612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6613 = this$;
if(and__3822__auto____6613)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6613;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6614 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6614)
{return or__3824__auto____6614;
} else
{var or__3824__auto____6615 = (cljs.core._invoke["_"]);
if(or__3824__auto____6615)
{return or__3824__auto____6615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6616 = this$;
if(and__3822__auto____6616)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6616;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6617)
{return or__3824__auto____6617;
} else
{var or__3824__auto____6618 = (cljs.core._invoke["_"]);
if(or__3824__auto____6618)
{return or__3824__auto____6618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6619 = this$;
if(and__3822__auto____6619)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6619;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6620)
{return or__3824__auto____6620;
} else
{var or__3824__auto____6621 = (cljs.core._invoke["_"]);
if(or__3824__auto____6621)
{return or__3824__auto____6621;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6622 = this$;
if(and__3822__auto____6622)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6622;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6623 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6623)
{return or__3824__auto____6623;
} else
{var or__3824__auto____6624 = (cljs.core._invoke["_"]);
if(or__3824__auto____6624)
{return or__3824__auto____6624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6625 = this$;
if(and__3822__auto____6625)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6625;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6626 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{var or__3824__auto____6627 = (cljs.core._invoke["_"]);
if(or__3824__auto____6627)
{return or__3824__auto____6627;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6628 = this$;
if(and__3822__auto____6628)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6628;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6629 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{var or__3824__auto____6630 = (cljs.core._invoke["_"]);
if(or__3824__auto____6630)
{return or__3824__auto____6630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6631 = this$;
if(and__3822__auto____6631)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6631;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{var or__3824__auto____6633 = (cljs.core._invoke["_"]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6634 = this$;
if(and__3822__auto____6634)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6634;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6635 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6635)
{return or__3824__auto____6635;
} else
{var or__3824__auto____6636 = (cljs.core._invoke["_"]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6637 = this$;
if(and__3822__auto____6637)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6637;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6638 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6638)
{return or__3824__auto____6638;
} else
{var or__3824__auto____6639 = (cljs.core._invoke["_"]);
if(or__3824__auto____6639)
{return or__3824__auto____6639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6640 = this$;
if(and__3822__auto____6640)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6640;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6641 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{var or__3824__auto____6642 = (cljs.core._invoke["_"]);
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6643 = this$;
if(and__3822__auto____6643)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6643;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6644 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{var or__3824__auto____6645 = (cljs.core._invoke["_"]);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6646 = this$;
if(and__3822__auto____6646)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6646;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6647 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6647)
{return or__3824__auto____6647;
} else
{var or__3824__auto____6648 = (cljs.core._invoke["_"]);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6649 = this$;
if(and__3822__auto____6649)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6649;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6650 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{var or__3824__auto____6651 = (cljs.core._invoke["_"]);
if(or__3824__auto____6651)
{return or__3824__auto____6651;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6652 = coll;
if(and__3822__auto____6652)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6652;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6653 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{var or__3824__auto____6654 = (cljs.core._count["_"]);
if(or__3824__auto____6654)
{return or__3824__auto____6654;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6655 = coll;
if(and__3822__auto____6655)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6655;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6656 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{var or__3824__auto____6657 = (cljs.core._empty["_"]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6658 = coll;
if(and__3822__auto____6658)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6658;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6659 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6659)
{return or__3824__auto____6659;
} else
{var or__3824__auto____6660 = (cljs.core._conj["_"]);
if(or__3824__auto____6660)
{return or__3824__auto____6660;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6661 = coll;
if(and__3822__auto____6661)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6661;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6662 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6662)
{return or__3824__auto____6662;
} else
{var or__3824__auto____6663 = (cljs.core._nth["_"]);
if(or__3824__auto____6663)
{return or__3824__auto____6663;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6664 = coll;
if(and__3822__auto____6664)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6664;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6665 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{var or__3824__auto____6666 = (cljs.core._nth["_"]);
if(or__3824__auto____6666)
{return or__3824__auto____6666;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6667 = coll;
if(and__3822__auto____6667)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6667;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6668 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{var or__3824__auto____6669 = (cljs.core._first["_"]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6670 = coll;
if(and__3822__auto____6670)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6670;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6671 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6671)
{return or__3824__auto____6671;
} else
{var or__3824__auto____6672 = (cljs.core._rest["_"]);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6673 = o;
if(and__3822__auto____6673)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6673;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6674 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____6674)
{return or__3824__auto____6674;
} else
{var or__3824__auto____6675 = (cljs.core._lookup["_"]);
if(or__3824__auto____6675)
{return or__3824__auto____6675;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6676 = o;
if(and__3822__auto____6676)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6676;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6677 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{var or__3824__auto____6678 = (cljs.core._lookup["_"]);
if(or__3824__auto____6678)
{return or__3824__auto____6678;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6679 = coll;
if(and__3822__auto____6679)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6679;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6680 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{var or__3824__auto____6681 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6682 = coll;
if(and__3822__auto____6682)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6682;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6683 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6683)
{return or__3824__auto____6683;
} else
{var or__3824__auto____6684 = (cljs.core._assoc["_"]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6685 = coll;
if(and__3822__auto____6685)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6685;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6686 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6686)
{return or__3824__auto____6686;
} else
{var or__3824__auto____6687 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6687)
{return or__3824__auto____6687;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6688 = coll;
if(and__3822__auto____6688)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6688;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6689 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._key["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6691 = coll;
if(and__3822__auto____6691)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6691;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6692 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{var or__3824__auto____6693 = (cljs.core._val["_"]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6694 = coll;
if(and__3822__auto____6694)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6694;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6695 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{var or__3824__auto____6696 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6697 = coll;
if(and__3822__auto____6697)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6697;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6698 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{var or__3824__auto____6699 = (cljs.core._peek["_"]);
if(or__3824__auto____6699)
{return or__3824__auto____6699;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6700 = coll;
if(and__3822__auto____6700)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6700;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6701 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{var or__3824__auto____6702 = (cljs.core._pop["_"]);
if(or__3824__auto____6702)
{return or__3824__auto____6702;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6703 = coll;
if(and__3822__auto____6703)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6703;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6704 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{var or__3824__auto____6705 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6706 = o;
if(and__3822__auto____6706)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6706;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6707 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3824__auto____6707)
{return or__3824__auto____6707;
} else
{var or__3824__auto____6708 = (cljs.core._deref["_"]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6709 = o;
if(and__3822__auto____6709)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6709;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6710 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{var or__3824__auto____6711 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6711)
{return or__3824__auto____6711;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6712 = o;
if(and__3822__auto____6712)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6712;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6713 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{var or__3824__auto____6714 = (cljs.core._meta["_"]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6715 = o;
if(and__3822__auto____6715)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6715;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6716 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{var or__3824__auto____6717 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6718 = coll;
if(and__3822__auto____6718)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6718;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6719 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6719)
{return or__3824__auto____6719;
} else
{var or__3824__auto____6720 = (cljs.core._reduce["_"]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6721 = coll;
if(and__3822__auto____6721)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6721;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6722 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{var or__3824__auto____6723 = (cljs.core._reduce["_"]);
if(or__3824__auto____6723)
{return or__3824__auto____6723;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6724 = coll;
if(and__3822__auto____6724)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6724;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6725 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6725)
{return or__3824__auto____6725;
} else
{var or__3824__auto____6726 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6726)
{return or__3824__auto____6726;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6727 = o;
if(and__3822__auto____6727)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6727;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6728 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{var or__3824__auto____6729 = (cljs.core._equiv["_"]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6730 = o;
if(and__3822__auto____6730)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6730;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6731 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{var or__3824__auto____6732 = (cljs.core._hash["_"]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6733 = o;
if(and__3822__auto____6733)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6733;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6734 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
} else
{var or__3824__auto____6735 = (cljs.core._seq["_"]);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6736 = coll;
if(and__3822__auto____6736)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6736;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6737 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{var or__3824__auto____6738 = (cljs.core._rseq["_"]);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6739 = coll;
if(and__3822__auto____6739)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6739;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6740 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{var or__3824__auto____6741 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6742 = coll;
if(and__3822__auto____6742)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6742;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6743 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{var or__3824__auto____6744 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6745 = coll;
if(and__3822__auto____6745)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6745;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6746 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{var or__3824__auto____6747 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6748 = coll;
if(and__3822__auto____6748)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6748;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6749 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6749)
{return or__3824__auto____6749;
} else
{var or__3824__auto____6750 = (cljs.core._comparator["_"]);
if(or__3824__auto____6750)
{return or__3824__auto____6750;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6751 = o;
if(and__3822__auto____6751)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6751;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6752 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{var or__3824__auto____6753 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6754 = d;
if(and__3822__auto____6754)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6754;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6755 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{var or__3824__auto____6756 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6757 = this$;
if(and__3822__auto____6757)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6757;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6758 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6758)
{return or__3824__auto____6758;
} else
{var or__3824__auto____6759 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6760 = this$;
if(and__3822__auto____6760)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6760;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6761 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{var or__3824__auto____6762 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6763 = this$;
if(and__3822__auto____6763)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6763;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6764 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{var or__3824__auto____6765 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6765)
{return or__3824__auto____6765;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6766 = coll;
if(and__3822__auto____6766)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6766;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6767 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3824__auto____6767)
{return or__3824__auto____6767;
} else
{var or__3824__auto____6768 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6769 = tcoll;
if(and__3822__auto____6769)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6769;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6770 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
} else
{var or__3824__auto____6771 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6772 = tcoll;
if(and__3822__auto____6772)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6772;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6773 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6773)
{return or__3824__auto____6773;
} else
{var or__3824__auto____6774 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6774)
{return or__3824__auto____6774;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6775 = tcoll;
if(and__3822__auto____6775)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6775;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6776 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{var or__3824__auto____6777 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6778 = tcoll;
if(and__3822__auto____6778)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6778;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6779 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{var or__3824__auto____6780 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6781 = tcoll;
if(and__3822__auto____6781)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6781;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6782 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6782)
{return or__3824__auto____6782;
} else
{var or__3824__auto____6783 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6784 = tcoll;
if(and__3822__auto____6784)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6784;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6785 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{var or__3824__auto____6786 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6787 = tcoll;
if(and__3822__auto____6787)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6787;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6788 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{var or__3824__auto____6789 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6790 = (x === y);
if(or__3824__auto____6790)
{return or__3824__auto____6790;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6791__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6792 = y;
var G__6793 = cljs.core.first.call(null,more);
var G__6794 = cljs.core.next.call(null,more);
x = G__6792;
y = G__6793;
more = G__6794;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6791 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6791__delegate.call(this, x, y, more);
};
G__6791.cljs$lang$maxFixedArity = 2;
G__6791.cljs$lang$applyTo = (function (arglist__6795){
var x = cljs.core.first(arglist__6795);
var y = cljs.core.first(cljs.core.next(arglist__6795));
var more = cljs.core.rest(cljs.core.next(arglist__6795));
return G__6791__delegate(x, y, more);
});
G__6791.cljs$lang$arity$variadic = G__6791__delegate;
return G__6791;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3824__auto____6796 = (x == null);
if(or__3824__auto____6796)
{return or__3824__auto____6796;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6797 = null;
var G__6797__2 = (function (o,k){
return null;
});
var G__6797__3 = (function (o,k,not_found){
return not_found;
});
G__6797 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6797__2.call(this,o,k);
case 3:
return G__6797__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6797;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6798 = null;
var G__6798__2 = (function (_,f){
return f.call(null);
});
var G__6798__3 = (function (_,f,start){
return start;
});
G__6798 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6798__2.call(this,_,f);
case 3:
return G__6798__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6798;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6799 = null;
var G__6799__2 = (function (_,n){
return null;
});
var G__6799__3 = (function (_,n,not_found){
return not_found;
});
G__6799 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6799__2.call(this,_,n);
case 3:
return G__6799__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6799;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__6800 = cljs.core._nth.call(null,cicoll,0);
var n__6801 = 1;
while(true){
if((n__6801 < cljs.core._count.call(null,cicoll)))
{var nval__6802 = f.call(null,val__6800,cljs.core._nth.call(null,cicoll,n__6801));
if(cljs.core.reduced_QMARK_.call(null,nval__6802))
{return cljs.core.deref.call(null,nval__6802);
} else
{{
var G__6809 = nval__6802;
var G__6810 = (n__6801 + 1);
val__6800 = G__6809;
n__6801 = G__6810;
continue;
}
}
} else
{return val__6800;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__6803 = val;
var n__6804 = 0;
while(true){
if((n__6804 < cljs.core._count.call(null,cicoll)))
{var nval__6805 = f.call(null,val__6803,cljs.core._nth.call(null,cicoll,n__6804));
if(cljs.core.reduced_QMARK_.call(null,nval__6805))
{return cljs.core.deref.call(null,nval__6805);
} else
{{
var G__6811 = nval__6805;
var G__6812 = (n__6804 + 1);
val__6803 = G__6811;
n__6804 = G__6812;
continue;
}
}
} else
{return val__6803;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__6806 = val;
var n__6807 = idx;
while(true){
if((n__6807 < cljs.core._count.call(null,cicoll)))
{var nval__6808 = f.call(null,val__6806,cljs.core._nth.call(null,cicoll,n__6807));
if(cljs.core.reduced_QMARK_.call(null,nval__6808))
{return cljs.core.deref.call(null,nval__6808);
} else
{{
var G__6813 = nval__6808;
var G__6814 = (n__6807 + 1);
val__6806 = G__6813;
n__6807 = G__6814;
continue;
}
}
} else
{return val__6806;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6815 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6816 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6817 = this;
var this$__6818 = this;
return cljs.core.pr_str.call(null,this$__6818);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6819 = this;
if(cljs.core.counted_QMARK_.call(null,this__6819.a))
{return cljs.core.ci_reduce.call(null,this__6819.a,f,(this__6819.a[this__6819.i]),(this__6819.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6819.a[this__6819.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6820 = this;
if(cljs.core.counted_QMARK_.call(null,this__6820.a))
{return cljs.core.ci_reduce.call(null,this__6820.a,f,start,this__6820.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6821 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6822 = this;
return (this__6822.a.length - this__6822.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6823 = this;
return (this__6823.a[this__6823.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6824 = this;
if(((this__6824.i + 1) < this__6824.a.length))
{return (new cljs.core.IndexedSeq(this__6824.a,(this__6824.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6825 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6826 = this;
var i__6827 = (n + this__6826.i);
if((i__6827 < this__6826.a.length))
{return (this__6826.a[i__6827]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6828 = this;
var i__6829 = (n + this__6828.i);
if((i__6829 < this__6828.a.length))
{return (this__6828.a[i__6829]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6830 = null;
var G__6830__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6830__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6830 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6830__2.call(this,array,f);
case 3:
return G__6830__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6830;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6831 = null;
var G__6831__2 = (function (array,k){
return (array[k]);
});
var G__6831__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6831 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6831__2.call(this,array,k);
case 3:
return G__6831__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6831;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6832 = null;
var G__6832__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6832__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6832 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6832__2.call(this,array,n);
case 3:
return G__6832__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6832;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll != null))
{if((function (){var G__6833__6834 = coll;
if((G__6833__6834 != null))
{if((function (){var or__3824__auto____6835 = (G__6833__6834.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{return G__6833__6834.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6833__6834.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6833__6834);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6833__6834);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__6836__6837 = coll;
if((G__6836__6837 != null))
{if((function (){var or__3824__auto____6838 = (G__6836__6837.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6838)
{return or__3824__auto____6838;
} else
{return G__6836__6837.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6836__6837.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6836__6837);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6836__6837);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6839 = cljs.core.seq.call(null,coll);
if((s__6839 != null))
{return cljs.core._first.call(null,s__6839);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__6840__6841 = coll;
if((G__6840__6841 != null))
{if((function (){var or__3824__auto____6842 = (G__6840__6841.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{return G__6840__6841.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6840__6841.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6840__6841);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6840__6841);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6843 = cljs.core.seq.call(null,coll);
if((s__6843 != null))
{return cljs.core._rest.call(null,s__6843);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__6844__6845 = coll;
if((G__6844__6845 != null))
{if((function (){var or__3824__auto____6846 = (G__6844__6845.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6846)
{return or__3824__auto____6846;
} else
{return G__6844__6845.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6844__6845.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6844__6845);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6844__6845);
}
})())
{var coll__6847 = cljs.core._rest.call(null,coll);
if((coll__6847 != null))
{if((function (){var G__6848__6849 = coll__6847;
if((G__6848__6849 != null))
{if((function (){var or__3824__auto____6850 = (G__6848__6849.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{return G__6848__6849.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6848__6849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6848__6849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6848__6849);
}
})())
{return coll__6847;
} else
{return cljs.core._seq.call(null,coll__6847);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__6851 = cljs.core.next.call(null,s);
s = G__6851;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6852__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6853 = conj.call(null,coll,x);
var G__6854 = cljs.core.first.call(null,xs);
var G__6855 = cljs.core.next.call(null,xs);
coll = G__6853;
x = G__6854;
xs = G__6855;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6852 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6852__delegate.call(this, coll, x, xs);
};
G__6852.cljs$lang$maxFixedArity = 2;
G__6852.cljs$lang$applyTo = (function (arglist__6856){
var coll = cljs.core.first(arglist__6856);
var x = cljs.core.first(cljs.core.next(arglist__6856));
var xs = cljs.core.rest(cljs.core.next(arglist__6856));
return G__6852__delegate(coll, x, xs);
});
G__6852.cljs$lang$arity$variadic = G__6852__delegate;
return G__6852;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6857 = cljs.core.seq.call(null,coll);
var acc__6858 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6857))
{return (acc__6858 + cljs.core._count.call(null,s__6857));
} else
{{
var G__6859 = cljs.core.next.call(null,s__6857);
var G__6860 = (acc__6858 + 1);
s__6857 = G__6859;
acc__6858 = G__6860;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll != null))
{if((function (){var G__6861__6862 = coll;
if((G__6861__6862 != null))
{if((function (){var or__3824__auto____6863 = (G__6861__6862.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6863)
{return or__3824__auto____6863;
} else
{return G__6861__6862.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6861__6862.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6861__6862);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6861__6862);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
} else
{return null;
}
});
var nth__3 = (function (coll,n,not_found){
if((coll != null))
{if((function (){var G__6864__6865 = coll;
if((G__6864__6865 != null))
{if((function (){var or__3824__auto____6866 = (G__6864__6865.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{return G__6864__6865.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6864__6865.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6864__6865);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6864__6865);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6868__delegate = function (coll,k,v,kvs){
while(true){
var ret__6867 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6869 = ret__6867;
var G__6870 = cljs.core.first.call(null,kvs);
var G__6871 = cljs.core.second.call(null,kvs);
var G__6872 = cljs.core.nnext.call(null,kvs);
coll = G__6869;
k = G__6870;
v = G__6871;
kvs = G__6872;
continue;
}
} else
{return ret__6867;
}
break;
}
};
var G__6868 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6868__delegate.call(this, coll, k, v, kvs);
};
G__6868.cljs$lang$maxFixedArity = 3;
G__6868.cljs$lang$applyTo = (function (arglist__6873){
var coll = cljs.core.first(arglist__6873);
var k = cljs.core.first(cljs.core.next(arglist__6873));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6873)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6873)));
return G__6868__delegate(coll, k, v, kvs);
});
G__6868.cljs$lang$arity$variadic = G__6868__delegate;
return G__6868;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6875__delegate = function (coll,k,ks){
while(true){
var ret__6874 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6876 = ret__6874;
var G__6877 = cljs.core.first.call(null,ks);
var G__6878 = cljs.core.next.call(null,ks);
coll = G__6876;
k = G__6877;
ks = G__6878;
continue;
}
} else
{return ret__6874;
}
break;
}
};
var G__6875 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6875__delegate.call(this, coll, k, ks);
};
G__6875.cljs$lang$maxFixedArity = 2;
G__6875.cljs$lang$applyTo = (function (arglist__6879){
var coll = cljs.core.first(arglist__6879);
var k = cljs.core.first(cljs.core.next(arglist__6879));
var ks = cljs.core.rest(cljs.core.next(arglist__6879));
return G__6875__delegate(coll, k, ks);
});
G__6875.cljs$lang$arity$variadic = G__6875__delegate;
return G__6875;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6880__6881 = o;
if((G__6880__6881 != null))
{if((function (){var or__3824__auto____6882 = (G__6880__6881.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{return G__6880__6881.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6880__6881.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6880__6881);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6880__6881);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6884__delegate = function (coll,k,ks){
while(true){
var ret__6883 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6885 = ret__6883;
var G__6886 = cljs.core.first.call(null,ks);
var G__6887 = cljs.core.next.call(null,ks);
coll = G__6885;
k = G__6886;
ks = G__6887;
continue;
}
} else
{return ret__6883;
}
break;
}
};
var G__6884 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6884__delegate.call(this, coll, k, ks);
};
G__6884.cljs$lang$maxFixedArity = 2;
G__6884.cljs$lang$applyTo = (function (arglist__6888){
var coll = cljs.core.first(arglist__6888);
var k = cljs.core.first(cljs.core.next(arglist__6888));
var ks = cljs.core.rest(cljs.core.next(arglist__6888));
return G__6884__delegate(coll, k, ks);
});
G__6884.cljs$lang$arity$variadic = G__6884__delegate;
return G__6884;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6889__6890 = x;
if((G__6889__6890 != null))
{if((function (){var or__3824__auto____6891 = (G__6889__6890.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{return G__6889__6890.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6889__6890.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6889__6890);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6889__6890);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6892__6893 = x;
if((G__6892__6893 != null))
{if((function (){var or__3824__auto____6894 = (G__6892__6893.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____6894)
{return or__3824__auto____6894;
} else
{return G__6892__6893.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6892__6893.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6892__6893);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6892__6893);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6895__6896 = x;
if((G__6895__6896 != null))
{if((function (){var or__3824__auto____6897 = (G__6895__6896.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{return G__6895__6896.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6895__6896.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6895__6896);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6895__6896);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6898__6899 = x;
if((G__6898__6899 != null))
{if((function (){var or__3824__auto____6900 = (G__6898__6899.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{return G__6898__6899.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6898__6899.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6898__6899);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6898__6899);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6901__6902 = x;
if((G__6901__6902 != null))
{if((function (){var or__3824__auto____6903 = (G__6901__6902.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6903)
{return or__3824__auto____6903;
} else
{return G__6901__6902.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6901__6902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6901__6902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6901__6902);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6904__6905 = x;
if((G__6904__6905 != null))
{if((function (){var or__3824__auto____6906 = (G__6904__6905.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{return G__6904__6905.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6904__6905.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6904__6905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6904__6905);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6907__6908 = x;
if((G__6907__6908 != null))
{if((function (){var or__3824__auto____6909 = (G__6907__6908.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____6909)
{return or__3824__auto____6909;
} else
{return G__6907__6908.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6907__6908.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6907__6908);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6907__6908);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6910__6911 = x;
if((G__6910__6911 != null))
{if((function (){var or__3824__auto____6912 = (G__6910__6911.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{return G__6910__6911.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6910__6911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6910__6911);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6910__6911);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6913__6914 = x;
if((G__6913__6914 != null))
{if((function (){var or__3824__auto____6915 = (G__6913__6914.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3824__auto____6915)
{return or__3824__auto____6915;
} else
{return G__6913__6914.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6913__6914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6913__6914);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6913__6914);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6916__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6916 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6916__delegate.call(this, keyvals);
};
G__6916.cljs$lang$maxFixedArity = 0;
G__6916.cljs$lang$applyTo = (function (arglist__6917){
var keyvals = cljs.core.seq(arglist__6917);;
return G__6916__delegate(keyvals);
});
G__6916.cljs$lang$arity$variadic = G__6916__delegate;
return G__6916;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6918 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__6918.push(key);
}));
return keys__6918;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6919 = i;
var j__6920 = j;
var len__6921 = len;
while(true){
if((len__6921 === 0))
{return to;
} else
{(to[j__6920] = (from[i__6919]));
{
var G__6922 = (i__6919 + 1);
var G__6923 = (j__6920 + 1);
var G__6924 = (len__6921 - 1);
i__6919 = G__6922;
j__6920 = G__6923;
len__6921 = G__6924;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6925 = (i + (len - 1));
var j__6926 = (j + (len - 1));
var len__6927 = len;
while(true){
if((len__6927 === 0))
{return to;
} else
{(to[j__6926] = (from[i__6925]));
{
var G__6928 = (i__6925 - 1);
var G__6929 = (j__6926 - 1);
var G__6930 = (len__6927 - 1);
i__6925 = G__6928;
j__6926 = G__6929;
len__6927 = G__6930;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6931__6932 = s;
if((G__6931__6932 != null))
{if((function (){var or__3824__auto____6933 = (G__6931__6932.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{return G__6931__6932.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6931__6932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6931__6932);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6931__6932);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6934__6935 = s;
if((G__6934__6935 != null))
{if((function (){var or__3824__auto____6936 = (G__6934__6935.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3824__auto____6936)
{return or__3824__auto____6936;
} else
{return G__6934__6935.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6934__6935.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6934__6935);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6934__6935);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6937 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____6937))
{return cljs.core.not.call(null,(function (){var or__3824__auto____6938 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6937;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6939 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____6939))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6939;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6940 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____6940))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6940;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6941 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{var G__6942__6943 = f;
if((G__6942__6943 != null))
{if((function (){var or__3824__auto____6944 = (G__6942__6943.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{return G__6942__6943.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6942__6943.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6942__6943);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6942__6943);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6945 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6945)
{return (n == n.toFixed());
} else
{return and__3822__auto____6945;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6946 = coll;
if(cljs.core.truth_(and__3822__auto____6946))
{var and__3822__auto____6947 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6947)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6947;
}
} else
{return and__3822__auto____6946;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6952__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__6948 = cljs.core.set([y,x]);
var xs__6949 = more;
while(true){
var x__6950 = cljs.core.first.call(null,xs__6949);
var etc__6951 = cljs.core.next.call(null,xs__6949);
if(cljs.core.truth_(xs__6949))
{if(cljs.core.contains_QMARK_.call(null,s__6948,x__6950))
{return false;
} else
{{
var G__6953 = cljs.core.conj.call(null,s__6948,x__6950);
var G__6954 = etc__6951;
s__6948 = G__6953;
xs__6949 = G__6954;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6952 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6952__delegate.call(this, x, y, more);
};
G__6952.cljs$lang$maxFixedArity = 2;
G__6952.cljs$lang$applyTo = (function (arglist__6955){
var x = cljs.core.first(arglist__6955);
var y = cljs.core.first(cljs.core.next(arglist__6955));
var more = cljs.core.rest(cljs.core.next(arglist__6955));
return G__6952__delegate(x, y, more);
});
G__6952.cljs$lang$arity$variadic = G__6952__delegate;
return G__6952;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6956 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6956))
{return r__6956;
} else
{if(cljs.core.truth_(r__6956))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__6957 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__6957,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6957);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6958 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____6958))
{var s__6959 = temp__3971__auto____6958;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6959),cljs.core.next.call(null,s__6959));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6960 = val;
var coll__6961 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__6961))
{var nval__6962 = f.call(null,val__6960,cljs.core.first.call(null,coll__6961));
if(cljs.core.reduced_QMARK_.call(null,nval__6962))
{return cljs.core.deref.call(null,nval__6962);
} else
{{
var G__6963 = nval__6962;
var G__6964 = cljs.core.next.call(null,coll__6961);
val__6960 = G__6963;
coll__6961 = G__6964;
continue;
}
}
} else
{return val__6960;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6965__6966 = coll;
if((G__6965__6966 != null))
{if((function (){var or__3824__auto____6967 = (G__6965__6966.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{return G__6965__6966.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6965__6966.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6965__6966);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6965__6966);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6968__6969 = coll;
if((G__6968__6969 != null))
{if((function (){var or__3824__auto____6970 = (G__6968__6969.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{return G__6968__6969.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6968__6969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6968__6969);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6968__6969);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6971 = this;
return this__6971.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6972__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6972 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6972__delegate.call(this, x, y, more);
};
G__6972.cljs$lang$maxFixedArity = 2;
G__6972.cljs$lang$applyTo = (function (arglist__6973){
var x = cljs.core.first(arglist__6973);
var y = cljs.core.first(cljs.core.next(arglist__6973));
var more = cljs.core.rest(cljs.core.next(arglist__6973));
return G__6972__delegate(x, y, more);
});
G__6972.cljs$lang$arity$variadic = G__6972__delegate;
return G__6972;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6974__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6974 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6974__delegate.call(this, x, y, more);
};
G__6974.cljs$lang$maxFixedArity = 2;
G__6974.cljs$lang$applyTo = (function (arglist__6975){
var x = cljs.core.first(arglist__6975);
var y = cljs.core.first(cljs.core.next(arglist__6975));
var more = cljs.core.rest(cljs.core.next(arglist__6975));
return G__6974__delegate(x, y, more);
});
G__6974.cljs$lang$arity$variadic = G__6974__delegate;
return G__6974;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6976__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6976 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6976__delegate.call(this, x, y, more);
};
G__6976.cljs$lang$maxFixedArity = 2;
G__6976.cljs$lang$applyTo = (function (arglist__6977){
var x = cljs.core.first(arglist__6977);
var y = cljs.core.first(cljs.core.next(arglist__6977));
var more = cljs.core.rest(cljs.core.next(arglist__6977));
return G__6976__delegate(x, y, more);
});
G__6976.cljs$lang$arity$variadic = G__6976__delegate;
return G__6976;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6978__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6978 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6978__delegate.call(this, x, y, more);
};
G__6978.cljs$lang$maxFixedArity = 2;
G__6978.cljs$lang$applyTo = (function (arglist__6979){
var x = cljs.core.first(arglist__6979);
var y = cljs.core.first(cljs.core.next(arglist__6979));
var more = cljs.core.rest(cljs.core.next(arglist__6979));
return G__6978__delegate(x, y, more);
});
G__6978.cljs$lang$arity$variadic = G__6978__delegate;
return G__6978;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6980__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6981 = y;
var G__6982 = cljs.core.first.call(null,more);
var G__6983 = cljs.core.next.call(null,more);
x = G__6981;
y = G__6982;
more = G__6983;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6980__delegate.call(this, x, y, more);
};
G__6980.cljs$lang$maxFixedArity = 2;
G__6980.cljs$lang$applyTo = (function (arglist__6984){
var x = cljs.core.first(arglist__6984);
var y = cljs.core.first(cljs.core.next(arglist__6984));
var more = cljs.core.rest(cljs.core.next(arglist__6984));
return G__6980__delegate(x, y, more);
});
G__6980.cljs$lang$arity$variadic = G__6980__delegate;
return G__6980;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6985__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6986 = y;
var G__6987 = cljs.core.first.call(null,more);
var G__6988 = cljs.core.next.call(null,more);
x = G__6986;
y = G__6987;
more = G__6988;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6985 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6985__delegate.call(this, x, y, more);
};
G__6985.cljs$lang$maxFixedArity = 2;
G__6985.cljs$lang$applyTo = (function (arglist__6989){
var x = cljs.core.first(arglist__6989);
var y = cljs.core.first(cljs.core.next(arglist__6989));
var more = cljs.core.rest(cljs.core.next(arglist__6989));
return G__6985__delegate(x, y, more);
});
G__6985.cljs$lang$arity$variadic = G__6985__delegate;
return G__6985;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6990__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6991 = y;
var G__6992 = cljs.core.first.call(null,more);
var G__6993 = cljs.core.next.call(null,more);
x = G__6991;
y = G__6992;
more = G__6993;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6990 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6990__delegate.call(this, x, y, more);
};
G__6990.cljs$lang$maxFixedArity = 2;
G__6990.cljs$lang$applyTo = (function (arglist__6994){
var x = cljs.core.first(arglist__6994);
var y = cljs.core.first(cljs.core.next(arglist__6994));
var more = cljs.core.rest(cljs.core.next(arglist__6994));
return G__6990__delegate(x, y, more);
});
G__6990.cljs$lang$arity$variadic = G__6990__delegate;
return G__6990;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6995__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__6996 = y;
var G__6997 = cljs.core.first.call(null,more);
var G__6998 = cljs.core.next.call(null,more);
x = G__6996;
y = G__6997;
more = G__6998;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6995__delegate.call(this, x, y, more);
};
G__6995.cljs$lang$maxFixedArity = 2;
G__6995.cljs$lang$applyTo = (function (arglist__6999){
var x = cljs.core.first(arglist__6999);
var y = cljs.core.first(cljs.core.next(arglist__6999));
var more = cljs.core.rest(cljs.core.next(arglist__6999));
return G__6995__delegate(x, y, more);
});
G__6995.cljs$lang$arity$variadic = G__6995__delegate;
return G__6995;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7000__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7000 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7000__delegate.call(this, x, y, more);
};
G__7000.cljs$lang$maxFixedArity = 2;
G__7000.cljs$lang$applyTo = (function (arglist__7001){
var x = cljs.core.first(arglist__7001);
var y = cljs.core.first(cljs.core.next(arglist__7001));
var more = cljs.core.rest(cljs.core.next(arglist__7001));
return G__7000__delegate(x, y, more);
});
G__7000.cljs$lang$arity$variadic = G__7000__delegate;
return G__7000;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7002__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7002 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7002__delegate.call(this, x, y, more);
};
G__7002.cljs$lang$maxFixedArity = 2;
G__7002.cljs$lang$applyTo = (function (arglist__7003){
var x = cljs.core.first(arglist__7003);
var y = cljs.core.first(cljs.core.next(arglist__7003));
var more = cljs.core.rest(cljs.core.next(arglist__7003));
return G__7002__delegate(x, y, more);
});
G__7002.cljs$lang$arity$variadic = G__7002__delegate;
return G__7002;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7004 = (n % d);
return cljs.core.fix.call(null,((n - rem__7004) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7005 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7005));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__7006 = 0;
var n__7007 = n;
while(true){
if((n__7007 === 0))
{return c__7006;
} else
{{
var G__7008 = (c__7006 + 1);
var G__7009 = (n__7007 & (n__7007 - 1));
c__7006 = G__7008;
n__7007 = G__7009;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7010__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7011 = y;
var G__7012 = cljs.core.first.call(null,more);
var G__7013 = cljs.core.next.call(null,more);
x = G__7011;
y = G__7012;
more = G__7013;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7010 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7010__delegate.call(this, x, y, more);
};
G__7010.cljs$lang$maxFixedArity = 2;
G__7010.cljs$lang$applyTo = (function (arglist__7014){
var x = cljs.core.first(arglist__7014);
var y = cljs.core.first(cljs.core.next(arglist__7014));
var more = cljs.core.rest(cljs.core.next(arglist__7014));
return G__7010__delegate(x, y, more);
});
G__7010.cljs$lang$arity$variadic = G__7010__delegate;
return G__7010;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7015 = n;
var xs__7016 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7017 = xs__7016;
if(cljs.core.truth_(and__3822__auto____7017))
{return (n__7015 > 0);
} else
{return and__3822__auto____7017;
}
})()))
{{
var G__7018 = (n__7015 - 1);
var G__7019 = cljs.core.next.call(null,xs__7016);
n__7015 = G__7018;
xs__7016 = G__7019;
continue;
}
} else
{return xs__7016;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7020__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7021 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7022 = cljs.core.next.call(null,more);
sb = G__7021;
more = G__7022;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7020 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7020__delegate.call(this, x, ys);
};
G__7020.cljs$lang$maxFixedArity = 1;
G__7020.cljs$lang$applyTo = (function (arglist__7023){
var x = cljs.core.first(arglist__7023);
var ys = cljs.core.rest(arglist__7023);
return G__7020__delegate(x, ys);
});
G__7020.cljs$lang$arity$variadic = G__7020__delegate;
return G__7020;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7024__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7025 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7026 = cljs.core.next.call(null,more);
sb = G__7025;
more = G__7026;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7024 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7024__delegate.call(this, x, ys);
};
G__7024.cljs$lang$maxFixedArity = 1;
G__7024.cljs$lang$applyTo = (function (arglist__7027){
var x = cljs.core.first(arglist__7027);
var ys = cljs.core.rest(arglist__7027);
return G__7024__delegate(x, ys);
});
G__7024.cljs$lang$arity$variadic = G__7024__delegate;
return G__7024;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7028 = cljs.core.seq.call(null,x);
var ys__7029 = cljs.core.seq.call(null,y);
while(true){
if((xs__7028 == null))
{return (ys__7029 == null);
} else
{if((ys__7029 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7028),cljs.core.first.call(null,ys__7029)))
{{
var G__7030 = cljs.core.next.call(null,xs__7028);
var G__7031 = cljs.core.next.call(null,ys__7029);
xs__7028 = G__7030;
ys__7029 = G__7031;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7032_SHARP_,p2__7033_SHARP_){
return cljs.core.hash_combine.call(null,p1__7032_SHARP_,cljs.core.hash.call(null,p2__7033_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7034 = 0;
var s__7035 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__7035))
{var e__7036 = cljs.core.first.call(null,s__7035);
{
var G__7037 = ((h__7034 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7036)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7036)))) % 4503599627370496);
var G__7038 = cljs.core.next.call(null,s__7035);
h__7034 = G__7037;
s__7035 = G__7038;
continue;
}
} else
{return h__7034;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7039 = 0;
var s__7040 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__7040))
{var e__7041 = cljs.core.first.call(null,s__7040);
{
var G__7042 = ((h__7039 + cljs.core.hash.call(null,e__7041)) % 4503599627370496);
var G__7043 = cljs.core.next.call(null,s__7040);
h__7039 = G__7042;
s__7040 = G__7043;
continue;
}
} else
{return h__7039;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7044__7045 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__7044__7045))
{var G__7047__7049 = cljs.core.first.call(null,G__7044__7045);
var vec__7048__7050 = G__7047__7049;
var key_name__7051 = cljs.core.nth.call(null,vec__7048__7050,0,null);
var f__7052 = cljs.core.nth.call(null,vec__7048__7050,1,null);
var G__7044__7053 = G__7044__7045;
var G__7047__7054 = G__7047__7049;
var G__7044__7055 = G__7044__7053;
while(true){
var vec__7056__7057 = G__7047__7054;
var key_name__7058 = cljs.core.nth.call(null,vec__7056__7057,0,null);
var f__7059 = cljs.core.nth.call(null,vec__7056__7057,1,null);
var G__7044__7060 = G__7044__7055;
var str_name__7061 = cljs.core.name.call(null,key_name__7058);
obj[str_name__7061] = f__7059;
var temp__3974__auto____7062 = cljs.core.next.call(null,G__7044__7060);
if(cljs.core.truth_(temp__3974__auto____7062))
{var G__7044__7063 = temp__3974__auto____7062;
{
var G__7064 = cljs.core.first.call(null,G__7044__7063);
var G__7065 = G__7044__7063;
G__7047__7054 = G__7064;
G__7044__7055 = G__7065;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7066 = this;
var h__272__auto____7067 = this__7066.__hash;
if((h__272__auto____7067 != null))
{return h__272__auto____7067;
} else
{var h__272__auto____7068 = cljs.core.hash_coll.call(null,coll);
this__7066.__hash = h__272__auto____7068;
return h__272__auto____7068;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7069 = this;
return (new cljs.core.List(this__7069.meta,o,coll,(this__7069.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__7070 = this;
var this$__7071 = this;
return cljs.core.pr_str.call(null,this$__7071);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7072 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7073 = this;
return this__7073.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7074 = this;
return this__7074.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7075 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7076 = this;
return this__7076.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7077 = this;
return this__7077.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7078 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7079 = this;
return (new cljs.core.List(meta,this__7079.first,this__7079.rest,this__7079.count,this__7079.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7080 = this;
return this__7080.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7081 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7082 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7083 = this;
return (new cljs.core.List(this__7083.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7084 = this;
var this$__7085 = this;
return cljs.core.pr_str.call(null,this$__7085);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7086 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7087 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7088 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7089 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7090 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7091 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7092 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7093 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7094 = this;
return this__7094.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7095 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7096__7097 = coll;
if((G__7096__7097 != null))
{if((function (){var or__3824__auto____7098 = (G__7096__7097.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3824__auto____7098)
{return or__3824__auto____7098;
} else
{return G__7096__7097.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7096__7097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7096__7097);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7096__7097);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__7099){
var items = cljs.core.seq(arglist__7099);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7100 = this;
var h__272__auto____7101 = this__7100.__hash;
if((h__272__auto____7101 != null))
{return h__272__auto____7101;
} else
{var h__272__auto____7102 = cljs.core.hash_coll.call(null,coll);
this__7100.__hash = h__272__auto____7102;
return h__272__auto____7102;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7103 = this;
return (new cljs.core.Cons(null,o,coll,this__7103.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__7104 = this;
var this$__7105 = this;
return cljs.core.pr_str.call(null,this$__7105);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7106 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7107 = this;
return this__7107.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7108 = this;
if((this__7108.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7108.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7109 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7110 = this;
return (new cljs.core.Cons(meta,this__7110.first,this__7110.rest,this__7110.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7111 = this;
return this__7111.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7112 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7112.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7113 = (coll == null);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{var G__7114__7115 = coll;
if((G__7114__7115 != null))
{if((function (){var or__3824__auto____7116 = (G__7114__7115.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7116)
{return or__3824__auto____7116;
} else
{return G__7114__7115.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7114__7115.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7114__7115);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7114__7115);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7117__7118 = x;
if((G__7117__7118 != null))
{if((function (){var or__3824__auto____7119 = (G__7117__7118.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7119)
{return or__3824__auto____7119;
} else
{return G__7117__7118.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7117__7118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7117__7118);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7117__7118);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7120 = null;
var G__7120__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7120__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7120 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7120__2.call(this,string,f);
case 3:
return G__7120__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7120;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7121 = null;
var G__7121__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7121__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7121 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7121__2.call(this,string,k);
case 3:
return G__7121__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7121;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7122 = null;
var G__7122__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7122__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7122 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7122__2.call(this,string,n);
case 3:
return G__7122__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7122;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7131 = null;
var G__7131__2 = (function (tsym7125,coll){
var tsym7125__7127 = this;
var this$__7128 = tsym7125__7127;
return cljs.core.get.call(null,coll,this$__7128.toString());
});
var G__7131__3 = (function (tsym7126,coll,not_found){
var tsym7126__7129 = this;
var this$__7130 = tsym7126__7129;
return cljs.core.get.call(null,coll,this$__7130.toString(),not_found);
});
G__7131 = function(tsym7126,coll,not_found){
switch(arguments.length){
case 2:
return G__7131__2.call(this,tsym7126,coll);
case 3:
return G__7131__3.call(this,tsym7126,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7131;
})()
;
String.prototype.apply = (function (tsym7123,args7124){
return tsym7123.call.apply(tsym7123,[tsym7123].concat(cljs.core.aclone.call(null,args7124)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7132 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__7132;
} else
{lazy_seq.x = x__7132.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7133 = this;
var h__272__auto____7134 = this__7133.__hash;
if((h__272__auto____7134 != null))
{return h__272__auto____7134;
} else
{var h__272__auto____7135 = cljs.core.hash_coll.call(null,coll);
this__7133.__hash = h__272__auto____7135;
return h__272__auto____7135;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7136 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7137 = this;
var this$__7138 = this;
return cljs.core.pr_str.call(null,this$__7138);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7139 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7140 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7141 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7142 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7143 = this;
return (new cljs.core.LazySeq(meta,this__7143.realized,this__7143.x,this__7143.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7144 = this;
return this__7144.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7145 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7145.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7146 = [];
var s__7147 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7147)))
{ary__7146.push(cljs.core.first.call(null,s__7147));
{
var G__7148 = cljs.core.next.call(null,s__7147);
s__7147 = G__7148;
continue;
}
} else
{return ary__7146;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7149 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7150 = 0;
var xs__7151 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__7151))
{(ret__7149[i__7150] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7151)));
{
var G__7152 = (i__7150 + 1);
var G__7153 = cljs.core.next.call(null,xs__7151);
i__7150 = G__7152;
xs__7151 = G__7153;
continue;
}
} else
{}
break;
}
return ret__7149;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7154 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7155 = cljs.core.seq.call(null,init_val_or_seq);
var i__7156 = 0;
var s__7157 = s__7155;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7158 = s__7157;
if(cljs.core.truth_(and__3822__auto____7158))
{return (i__7156 < size);
} else
{return and__3822__auto____7158;
}
})()))
{(a__7154[i__7156] = cljs.core.first.call(null,s__7157));
{
var G__7161 = (i__7156 + 1);
var G__7162 = cljs.core.next.call(null,s__7157);
i__7156 = G__7161;
s__7157 = G__7162;
continue;
}
} else
{return a__7154;
}
break;
}
} else
{var n__593__auto____7159 = size;
var i__7160 = 0;
while(true){
if((i__7160 < n__593__auto____7159))
{(a__7154[i__7160] = init_val_or_seq);
{
var G__7163 = (i__7160 + 1);
i__7160 = G__7163;
continue;
}
} else
{}
break;
}
return a__7154;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7164 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7165 = cljs.core.seq.call(null,init_val_or_seq);
var i__7166 = 0;
var s__7167 = s__7165;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7168 = s__7167;
if(cljs.core.truth_(and__3822__auto____7168))
{return (i__7166 < size);
} else
{return and__3822__auto____7168;
}
})()))
{(a__7164[i__7166] = cljs.core.first.call(null,s__7167));
{
var G__7171 = (i__7166 + 1);
var G__7172 = cljs.core.next.call(null,s__7167);
i__7166 = G__7171;
s__7167 = G__7172;
continue;
}
} else
{return a__7164;
}
break;
}
} else
{var n__593__auto____7169 = size;
var i__7170 = 0;
while(true){
if((i__7170 < n__593__auto____7169))
{(a__7164[i__7170] = init_val_or_seq);
{
var G__7173 = (i__7170 + 1);
i__7170 = G__7173;
continue;
}
} else
{}
break;
}
return a__7164;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7174 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7175 = cljs.core.seq.call(null,init_val_or_seq);
var i__7176 = 0;
var s__7177 = s__7175;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7178 = s__7177;
if(cljs.core.truth_(and__3822__auto____7178))
{return (i__7176 < size);
} else
{return and__3822__auto____7178;
}
})()))
{(a__7174[i__7176] = cljs.core.first.call(null,s__7177));
{
var G__7181 = (i__7176 + 1);
var G__7182 = cljs.core.next.call(null,s__7177);
i__7176 = G__7181;
s__7177 = G__7182;
continue;
}
} else
{return a__7174;
}
break;
}
} else
{var n__593__auto____7179 = size;
var i__7180 = 0;
while(true){
if((i__7180 < n__593__auto____7179))
{(a__7174[i__7180] = init_val_or_seq);
{
var G__7183 = (i__7180 + 1);
i__7180 = G__7183;
continue;
}
} else
{}
break;
}
return a__7174;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7184 = s;
var i__7185 = n;
var sum__7186 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7187 = (i__7185 > 0);
if(and__3822__auto____7187)
{return cljs.core.seq.call(null,s__7184);
} else
{return and__3822__auto____7187;
}
})()))
{{
var G__7188 = cljs.core.next.call(null,s__7184);
var G__7189 = (i__7185 - 1);
var G__7190 = (sum__7186 + 1);
s__7184 = G__7188;
i__7185 = G__7189;
sum__7186 = G__7190;
continue;
}
} else
{return sum__7186;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7191 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__7191))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7191),concat.call(null,cljs.core.rest.call(null,s__7191),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__7194__delegate = function (x,y,zs){
var cat__7193 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7192 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__7192))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7192),cat.call(null,cljs.core.rest.call(null,xys__7192),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__7193.call(null,concat.call(null,x,y),zs);
};
var G__7194 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7194__delegate.call(this, x, y, zs);
};
G__7194.cljs$lang$maxFixedArity = 2;
G__7194.cljs$lang$applyTo = (function (arglist__7195){
var x = cljs.core.first(arglist__7195);
var y = cljs.core.first(cljs.core.next(arglist__7195));
var zs = cljs.core.rest(cljs.core.next(arglist__7195));
return G__7194__delegate(x, y, zs);
});
G__7194.cljs$lang$arity$variadic = G__7194__delegate;
return G__7194;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7196__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7196 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7196__delegate.call(this, a, b, c, d, more);
};
G__7196.cljs$lang$maxFixedArity = 4;
G__7196.cljs$lang$applyTo = (function (arglist__7197){
var a = cljs.core.first(arglist__7197);
var b = cljs.core.first(cljs.core.next(arglist__7197));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7197)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7197))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7197))));
return G__7196__delegate(a, b, c, d, more);
});
G__7196.cljs$lang$arity$variadic = G__7196__delegate;
return G__7196;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7198 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7199 = cljs.core._first.call(null,args__7198);
var args__7200 = cljs.core._rest.call(null,args__7198);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7199);
} else
{return f.call(null,a__7199);
}
} else
{var b__7201 = cljs.core._first.call(null,args__7200);
var args__7202 = cljs.core._rest.call(null,args__7200);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7199,b__7201);
} else
{return f.call(null,a__7199,b__7201);
}
} else
{var c__7203 = cljs.core._first.call(null,args__7202);
var args__7204 = cljs.core._rest.call(null,args__7202);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7199,b__7201,c__7203);
} else
{return f.call(null,a__7199,b__7201,c__7203);
}
} else
{var d__7205 = cljs.core._first.call(null,args__7204);
var args__7206 = cljs.core._rest.call(null,args__7204);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7199,b__7201,c__7203,d__7205);
} else
{return f.call(null,a__7199,b__7201,c__7203,d__7205);
}
} else
{var e__7207 = cljs.core._first.call(null,args__7206);
var args__7208 = cljs.core._rest.call(null,args__7206);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7199,b__7201,c__7203,d__7205,e__7207);
} else
{return f.call(null,a__7199,b__7201,c__7203,d__7205,e__7207);
}
} else
{var f__7209 = cljs.core._first.call(null,args__7208);
var args__7210 = cljs.core._rest.call(null,args__7208);
if((argc === 6))
{if(f__7209.cljs$lang$arity$6)
{return f__7209.cljs$lang$arity$6(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209);
}
} else
{var g__7211 = cljs.core._first.call(null,args__7210);
var args__7212 = cljs.core._rest.call(null,args__7210);
if((argc === 7))
{if(f__7209.cljs$lang$arity$7)
{return f__7209.cljs$lang$arity$7(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211);
}
} else
{var h__7213 = cljs.core._first.call(null,args__7212);
var args__7214 = cljs.core._rest.call(null,args__7212);
if((argc === 8))
{if(f__7209.cljs$lang$arity$8)
{return f__7209.cljs$lang$arity$8(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213);
}
} else
{var i__7215 = cljs.core._first.call(null,args__7214);
var args__7216 = cljs.core._rest.call(null,args__7214);
if((argc === 9))
{if(f__7209.cljs$lang$arity$9)
{return f__7209.cljs$lang$arity$9(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215);
}
} else
{var j__7217 = cljs.core._first.call(null,args__7216);
var args__7218 = cljs.core._rest.call(null,args__7216);
if((argc === 10))
{if(f__7209.cljs$lang$arity$10)
{return f__7209.cljs$lang$arity$10(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217);
}
} else
{var k__7219 = cljs.core._first.call(null,args__7218);
var args__7220 = cljs.core._rest.call(null,args__7218);
if((argc === 11))
{if(f__7209.cljs$lang$arity$11)
{return f__7209.cljs$lang$arity$11(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219);
}
} else
{var l__7221 = cljs.core._first.call(null,args__7220);
var args__7222 = cljs.core._rest.call(null,args__7220);
if((argc === 12))
{if(f__7209.cljs$lang$arity$12)
{return f__7209.cljs$lang$arity$12(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221);
}
} else
{var m__7223 = cljs.core._first.call(null,args__7222);
var args__7224 = cljs.core._rest.call(null,args__7222);
if((argc === 13))
{if(f__7209.cljs$lang$arity$13)
{return f__7209.cljs$lang$arity$13(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223);
}
} else
{var n__7225 = cljs.core._first.call(null,args__7224);
var args__7226 = cljs.core._rest.call(null,args__7224);
if((argc === 14))
{if(f__7209.cljs$lang$arity$14)
{return f__7209.cljs$lang$arity$14(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225);
}
} else
{var o__7227 = cljs.core._first.call(null,args__7226);
var args__7228 = cljs.core._rest.call(null,args__7226);
if((argc === 15))
{if(f__7209.cljs$lang$arity$15)
{return f__7209.cljs$lang$arity$15(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227);
}
} else
{var p__7229 = cljs.core._first.call(null,args__7228);
var args__7230 = cljs.core._rest.call(null,args__7228);
if((argc === 16))
{if(f__7209.cljs$lang$arity$16)
{return f__7209.cljs$lang$arity$16(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229);
}
} else
{var q__7231 = cljs.core._first.call(null,args__7230);
var args__7232 = cljs.core._rest.call(null,args__7230);
if((argc === 17))
{if(f__7209.cljs$lang$arity$17)
{return f__7209.cljs$lang$arity$17(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231);
}
} else
{var r__7233 = cljs.core._first.call(null,args__7232);
var args__7234 = cljs.core._rest.call(null,args__7232);
if((argc === 18))
{if(f__7209.cljs$lang$arity$18)
{return f__7209.cljs$lang$arity$18(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233);
}
} else
{var s__7235 = cljs.core._first.call(null,args__7234);
var args__7236 = cljs.core._rest.call(null,args__7234);
if((argc === 19))
{if(f__7209.cljs$lang$arity$19)
{return f__7209.cljs$lang$arity$19(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233,s__7235);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233,s__7235);
}
} else
{var t__7237 = cljs.core._first.call(null,args__7236);
var args__7238 = cljs.core._rest.call(null,args__7236);
if((argc === 20))
{if(f__7209.cljs$lang$arity$20)
{return f__7209.cljs$lang$arity$20(a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233,s__7235,t__7237);
} else
{return f__7209.call(null,a__7199,b__7201,c__7203,d__7205,e__7207,f__7209,g__7211,h__7213,i__7215,j__7217,k__7219,l__7221,m__7223,n__7225,o__7227,p__7229,q__7231,r__7233,s__7235,t__7237);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7239 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7240 = cljs.core.bounded_count.call(null,args,(fixed_arity__7239 + 1));
if((bc__7240 <= fixed_arity__7239))
{return cljs.core.apply_to.call(null,f,bc__7240,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7241 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7242 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7243 = cljs.core.bounded_count.call(null,arglist__7241,(fixed_arity__7242 + 1));
if((bc__7243 <= fixed_arity__7242))
{return cljs.core.apply_to.call(null,f,bc__7243,arglist__7241);
} else
{return f.cljs$lang$applyTo(arglist__7241);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7241));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7244 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7245 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7246 = cljs.core.bounded_count.call(null,arglist__7244,(fixed_arity__7245 + 1));
if((bc__7246 <= fixed_arity__7245))
{return cljs.core.apply_to.call(null,f,bc__7246,arglist__7244);
} else
{return f.cljs$lang$applyTo(arglist__7244);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7244));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7247 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7248 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7249 = cljs.core.bounded_count.call(null,arglist__7247,(fixed_arity__7248 + 1));
if((bc__7249 <= fixed_arity__7248))
{return cljs.core.apply_to.call(null,f,bc__7249,arglist__7247);
} else
{return f.cljs$lang$applyTo(arglist__7247);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7247));
}
});
var apply__6 = (function() { 
var G__7253__delegate = function (f,a,b,c,d,args){
var arglist__7250 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7251 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7252 = cljs.core.bounded_count.call(null,arglist__7250,(fixed_arity__7251 + 1));
if((bc__7252 <= fixed_arity__7251))
{return cljs.core.apply_to.call(null,f,bc__7252,arglist__7250);
} else
{return f.cljs$lang$applyTo(arglist__7250);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7250));
}
};
var G__7253 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7253__delegate.call(this, f, a, b, c, d, args);
};
G__7253.cljs$lang$maxFixedArity = 5;
G__7253.cljs$lang$applyTo = (function (arglist__7254){
var f = cljs.core.first(arglist__7254);
var a = cljs.core.first(cljs.core.next(arglist__7254));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7254)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7254))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7254)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7254)))));
return G__7253__delegate(f, a, b, c, d, args);
});
G__7253.cljs$lang$arity$variadic = G__7253__delegate;
return G__7253;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7255){
var obj = cljs.core.first(arglist__7255);
var f = cljs.core.first(cljs.core.next(arglist__7255));
var args = cljs.core.rest(cljs.core.next(arglist__7255));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7256__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7256 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7256__delegate.call(this, x, y, more);
};
G__7256.cljs$lang$maxFixedArity = 2;
G__7256.cljs$lang$applyTo = (function (arglist__7257){
var x = cljs.core.first(arglist__7257);
var y = cljs.core.first(cljs.core.next(arglist__7257));
var more = cljs.core.rest(cljs.core.next(arglist__7257));
return G__7256__delegate(x, y, more);
});
G__7256.cljs$lang$arity$variadic = G__7256__delegate;
return G__7256;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7258 = pred;
var G__7259 = cljs.core.next.call(null,coll);
pred = G__7258;
coll = G__7259;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3824__auto____7260 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7260))
{return or__3824__auto____7260;
} else
{{
var G__7261 = pred;
var G__7262 = cljs.core.next.call(null,coll);
pred = G__7261;
coll = G__7262;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7263 = null;
var G__7263__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7263__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7263__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7263__3 = (function() { 
var G__7264__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7264 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7264__delegate.call(this, x, y, zs);
};
G__7264.cljs$lang$maxFixedArity = 2;
G__7264.cljs$lang$applyTo = (function (arglist__7265){
var x = cljs.core.first(arglist__7265);
var y = cljs.core.first(cljs.core.next(arglist__7265));
var zs = cljs.core.rest(cljs.core.next(arglist__7265));
return G__7264__delegate(x, y, zs);
});
G__7264.cljs$lang$arity$variadic = G__7264__delegate;
return G__7264;
})()
;
G__7263 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7263__0.call(this);
case 1:
return G__7263__1.call(this,x);
case 2:
return G__7263__2.call(this,x,y);
default:
return G__7263__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7263.cljs$lang$maxFixedArity = 2;
G__7263.cljs$lang$applyTo = G__7263__3.cljs$lang$applyTo;
return G__7263;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7266__delegate = function (args){
return x;
};
var G__7266 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7266__delegate.call(this, args);
};
G__7266.cljs$lang$maxFixedArity = 0;
G__7266.cljs$lang$applyTo = (function (arglist__7267){
var args = cljs.core.seq(arglist__7267);;
return G__7266__delegate(args);
});
G__7266.cljs$lang$arity$variadic = G__7266__delegate;
return G__7266;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7271 = null;
var G__7271__0 = (function (){
return f.call(null,g.call(null));
});
var G__7271__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7271__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7271__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7271__4 = (function() { 
var G__7272__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7272 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7272__delegate.call(this, x, y, z, args);
};
G__7272.cljs$lang$maxFixedArity = 3;
G__7272.cljs$lang$applyTo = (function (arglist__7273){
var x = cljs.core.first(arglist__7273);
var y = cljs.core.first(cljs.core.next(arglist__7273));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7273)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7273)));
return G__7272__delegate(x, y, z, args);
});
G__7272.cljs$lang$arity$variadic = G__7272__delegate;
return G__7272;
})()
;
G__7271 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7271__0.call(this);
case 1:
return G__7271__1.call(this,x);
case 2:
return G__7271__2.call(this,x,y);
case 3:
return G__7271__3.call(this,x,y,z);
default:
return G__7271__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7271.cljs$lang$maxFixedArity = 3;
G__7271.cljs$lang$applyTo = G__7271__4.cljs$lang$applyTo;
return G__7271;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7274 = null;
var G__7274__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7274__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7274__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7274__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7274__4 = (function() { 
var G__7275__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7275 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7275__delegate.call(this, x, y, z, args);
};
G__7275.cljs$lang$maxFixedArity = 3;
G__7275.cljs$lang$applyTo = (function (arglist__7276){
var x = cljs.core.first(arglist__7276);
var y = cljs.core.first(cljs.core.next(arglist__7276));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7276)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7276)));
return G__7275__delegate(x, y, z, args);
});
G__7275.cljs$lang$arity$variadic = G__7275__delegate;
return G__7275;
})()
;
G__7274 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7274__0.call(this);
case 1:
return G__7274__1.call(this,x);
case 2:
return G__7274__2.call(this,x,y);
case 3:
return G__7274__3.call(this,x,y,z);
default:
return G__7274__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7274.cljs$lang$maxFixedArity = 3;
G__7274.cljs$lang$applyTo = G__7274__4.cljs$lang$applyTo;
return G__7274;
})()
});
var comp__4 = (function() { 
var G__7277__delegate = function (f1,f2,f3,fs){
var fs__7268 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7278__delegate = function (args){
var ret__7269 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7268),args);
var fs__7270 = cljs.core.next.call(null,fs__7268);
while(true){
if(cljs.core.truth_(fs__7270))
{{
var G__7279 = cljs.core.first.call(null,fs__7270).call(null,ret__7269);
var G__7280 = cljs.core.next.call(null,fs__7270);
ret__7269 = G__7279;
fs__7270 = G__7280;
continue;
}
} else
{return ret__7269;
}
break;
}
};
var G__7278 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7278__delegate.call(this, args);
};
G__7278.cljs$lang$maxFixedArity = 0;
G__7278.cljs$lang$applyTo = (function (arglist__7281){
var args = cljs.core.seq(arglist__7281);;
return G__7278__delegate(args);
});
G__7278.cljs$lang$arity$variadic = G__7278__delegate;
return G__7278;
})()
;
};
var G__7277 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7277__delegate.call(this, f1, f2, f3, fs);
};
G__7277.cljs$lang$maxFixedArity = 3;
G__7277.cljs$lang$applyTo = (function (arglist__7282){
var f1 = cljs.core.first(arglist__7282);
var f2 = cljs.core.first(cljs.core.next(arglist__7282));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7282)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7282)));
return G__7277__delegate(f1, f2, f3, fs);
});
G__7277.cljs$lang$arity$variadic = G__7277__delegate;
return G__7277;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7283__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7283 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7283__delegate.call(this, args);
};
G__7283.cljs$lang$maxFixedArity = 0;
G__7283.cljs$lang$applyTo = (function (arglist__7284){
var args = cljs.core.seq(arglist__7284);;
return G__7283__delegate(args);
});
G__7283.cljs$lang$arity$variadic = G__7283__delegate;
return G__7283;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7285__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7285 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7285__delegate.call(this, args);
};
G__7285.cljs$lang$maxFixedArity = 0;
G__7285.cljs$lang$applyTo = (function (arglist__7286){
var args = cljs.core.seq(arglist__7286);;
return G__7285__delegate(args);
});
G__7285.cljs$lang$arity$variadic = G__7285__delegate;
return G__7285;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7287__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7287 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7287__delegate.call(this, args);
};
G__7287.cljs$lang$maxFixedArity = 0;
G__7287.cljs$lang$applyTo = (function (arglist__7288){
var args = cljs.core.seq(arglist__7288);;
return G__7287__delegate(args);
});
G__7287.cljs$lang$arity$variadic = G__7287__delegate;
return G__7287;
})()
;
});
var partial__5 = (function() { 
var G__7289__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7290__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7290 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7290__delegate.call(this, args);
};
G__7290.cljs$lang$maxFixedArity = 0;
G__7290.cljs$lang$applyTo = (function (arglist__7291){
var args = cljs.core.seq(arglist__7291);;
return G__7290__delegate(args);
});
G__7290.cljs$lang$arity$variadic = G__7290__delegate;
return G__7290;
})()
;
};
var G__7289 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7289__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7289.cljs$lang$maxFixedArity = 4;
G__7289.cljs$lang$applyTo = (function (arglist__7292){
var f = cljs.core.first(arglist__7292);
var arg1 = cljs.core.first(cljs.core.next(arglist__7292));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7292)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7292))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7292))));
return G__7289__delegate(f, arg1, arg2, arg3, more);
});
G__7289.cljs$lang$arity$variadic = G__7289__delegate;
return G__7289;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7293 = null;
var G__7293__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7293__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7293__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7293__4 = (function() { 
var G__7294__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7294 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7294__delegate.call(this, a, b, c, ds);
};
G__7294.cljs$lang$maxFixedArity = 3;
G__7294.cljs$lang$applyTo = (function (arglist__7295){
var a = cljs.core.first(arglist__7295);
var b = cljs.core.first(cljs.core.next(arglist__7295));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7295)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7295)));
return G__7294__delegate(a, b, c, ds);
});
G__7294.cljs$lang$arity$variadic = G__7294__delegate;
return G__7294;
})()
;
G__7293 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7293__1.call(this,a);
case 2:
return G__7293__2.call(this,a,b);
case 3:
return G__7293__3.call(this,a,b,c);
default:
return G__7293__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7293.cljs$lang$maxFixedArity = 3;
G__7293.cljs$lang$applyTo = G__7293__4.cljs$lang$applyTo;
return G__7293;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7296 = null;
var G__7296__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7296__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7296__4 = (function() { 
var G__7297__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7297 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7297__delegate.call(this, a, b, c, ds);
};
G__7297.cljs$lang$maxFixedArity = 3;
G__7297.cljs$lang$applyTo = (function (arglist__7298){
var a = cljs.core.first(arglist__7298);
var b = cljs.core.first(cljs.core.next(arglist__7298));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7298)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7298)));
return G__7297__delegate(a, b, c, ds);
});
G__7297.cljs$lang$arity$variadic = G__7297__delegate;
return G__7297;
})()
;
G__7296 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7296__2.call(this,a,b);
case 3:
return G__7296__3.call(this,a,b,c);
default:
return G__7296__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7296.cljs$lang$maxFixedArity = 3;
G__7296.cljs$lang$applyTo = G__7296__4.cljs$lang$applyTo;
return G__7296;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7299 = null;
var G__7299__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7299__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7299__4 = (function() { 
var G__7300__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7300 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7300__delegate.call(this, a, b, c, ds);
};
G__7300.cljs$lang$maxFixedArity = 3;
G__7300.cljs$lang$applyTo = (function (arglist__7301){
var a = cljs.core.first(arglist__7301);
var b = cljs.core.first(cljs.core.next(arglist__7301));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7301)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7301)));
return G__7300__delegate(a, b, c, ds);
});
G__7300.cljs$lang$arity$variadic = G__7300__delegate;
return G__7300;
})()
;
G__7299 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7299__2.call(this,a,b);
case 3:
return G__7299__3.call(this,a,b,c);
default:
return G__7299__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7299.cljs$lang$maxFixedArity = 3;
G__7299.cljs$lang$applyTo = G__7299__4.cljs$lang$applyTo;
return G__7299;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7304 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7302 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7302))
{var s__7303 = temp__3974__auto____7302;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7303)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7303)));
} else
{return null;
}
})));
});
return mapi__7304.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7305 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7305))
{var s__7306 = temp__3974__auto____7305;
var x__7307 = f.call(null,cljs.core.first.call(null,s__7306));
if((x__7307 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7306));
} else
{return cljs.core.cons.call(null,x__7307,keep.call(null,f,cljs.core.rest.call(null,s__7306)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7317 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7314 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7314))
{var s__7315 = temp__3974__auto____7314;
var x__7316 = f.call(null,idx,cljs.core.first.call(null,s__7315));
if((x__7316 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7315));
} else
{return cljs.core.cons.call(null,x__7316,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7315)));
}
} else
{return null;
}
})));
});
return keepi__7317.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7324 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7324))
{return p.call(null,y);
} else
{return and__3822__auto____7324;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7325 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7325))
{var and__3822__auto____7326 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7326))
{return p.call(null,z);
} else
{return and__3822__auto____7326;
}
} else
{return and__3822__auto____7325;
}
})());
});
var ep1__4 = (function() { 
var G__7362__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7327 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7327))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7327;
}
})());
};
var G__7362 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7362__delegate.call(this, x, y, z, args);
};
G__7362.cljs$lang$maxFixedArity = 3;
G__7362.cljs$lang$applyTo = (function (arglist__7363){
var x = cljs.core.first(arglist__7363);
var y = cljs.core.first(cljs.core.next(arglist__7363));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7363)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7363)));
return G__7362__delegate(x, y, z, args);
});
G__7362.cljs$lang$arity$variadic = G__7362__delegate;
return G__7362;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7328 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7328))
{return p2.call(null,x);
} else
{return and__3822__auto____7328;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7329 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7329))
{var and__3822__auto____7330 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7330))
{var and__3822__auto____7331 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7331))
{return p2.call(null,y);
} else
{return and__3822__auto____7331;
}
} else
{return and__3822__auto____7330;
}
} else
{return and__3822__auto____7329;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7332 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7332))
{var and__3822__auto____7333 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7333))
{var and__3822__auto____7334 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7334))
{var and__3822__auto____7335 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7335))
{var and__3822__auto____7336 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7336))
{return p2.call(null,z);
} else
{return and__3822__auto____7336;
}
} else
{return and__3822__auto____7335;
}
} else
{return and__3822__auto____7334;
}
} else
{return and__3822__auto____7333;
}
} else
{return and__3822__auto____7332;
}
})());
});
var ep2__4 = (function() { 
var G__7364__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7337 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7337))
{return cljs.core.every_QMARK_.call(null,(function (p1__7308_SHARP_){
var and__3822__auto____7338 = p1.call(null,p1__7308_SHARP_);
if(cljs.core.truth_(and__3822__auto____7338))
{return p2.call(null,p1__7308_SHARP_);
} else
{return and__3822__auto____7338;
}
}),args);
} else
{return and__3822__auto____7337;
}
})());
};
var G__7364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7364__delegate.call(this, x, y, z, args);
};
G__7364.cljs$lang$maxFixedArity = 3;
G__7364.cljs$lang$applyTo = (function (arglist__7365){
var x = cljs.core.first(arglist__7365);
var y = cljs.core.first(cljs.core.next(arglist__7365));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7365)));
return G__7364__delegate(x, y, z, args);
});
G__7364.cljs$lang$arity$variadic = G__7364__delegate;
return G__7364;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7339 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7339))
{var and__3822__auto____7340 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7340))
{return p3.call(null,x);
} else
{return and__3822__auto____7340;
}
} else
{return and__3822__auto____7339;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7341 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7341))
{var and__3822__auto____7342 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7342))
{var and__3822__auto____7343 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7343))
{var and__3822__auto____7344 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7344))
{var and__3822__auto____7345 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7345))
{return p3.call(null,y);
} else
{return and__3822__auto____7345;
}
} else
{return and__3822__auto____7344;
}
} else
{return and__3822__auto____7343;
}
} else
{return and__3822__auto____7342;
}
} else
{return and__3822__auto____7341;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7346 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7346))
{var and__3822__auto____7347 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7347))
{var and__3822__auto____7348 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7348))
{var and__3822__auto____7349 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7349))
{var and__3822__auto____7350 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7350))
{var and__3822__auto____7351 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7351))
{var and__3822__auto____7352 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7352))
{var and__3822__auto____7353 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7353))
{return p3.call(null,z);
} else
{return and__3822__auto____7353;
}
} else
{return and__3822__auto____7352;
}
} else
{return and__3822__auto____7351;
}
} else
{return and__3822__auto____7350;
}
} else
{return and__3822__auto____7349;
}
} else
{return and__3822__auto____7348;
}
} else
{return and__3822__auto____7347;
}
} else
{return and__3822__auto____7346;
}
})());
});
var ep3__4 = (function() { 
var G__7366__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7354 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7354))
{return cljs.core.every_QMARK_.call(null,(function (p1__7309_SHARP_){
var and__3822__auto____7355 = p1.call(null,p1__7309_SHARP_);
if(cljs.core.truth_(and__3822__auto____7355))
{var and__3822__auto____7356 = p2.call(null,p1__7309_SHARP_);
if(cljs.core.truth_(and__3822__auto____7356))
{return p3.call(null,p1__7309_SHARP_);
} else
{return and__3822__auto____7356;
}
} else
{return and__3822__auto____7355;
}
}),args);
} else
{return and__3822__auto____7354;
}
})());
};
var G__7366 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7366__delegate.call(this, x, y, z, args);
};
G__7366.cljs$lang$maxFixedArity = 3;
G__7366.cljs$lang$applyTo = (function (arglist__7367){
var x = cljs.core.first(arglist__7367);
var y = cljs.core.first(cljs.core.next(arglist__7367));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7367)));
return G__7366__delegate(x, y, z, args);
});
G__7366.cljs$lang$arity$variadic = G__7366__delegate;
return G__7366;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7368__delegate = function (p1,p2,p3,ps){
var ps__7357 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7310_SHARP_){
return p1__7310_SHARP_.call(null,x);
}),ps__7357);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7311_SHARP_){
var and__3822__auto____7358 = p1__7311_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7358))
{return p1__7311_SHARP_.call(null,y);
} else
{return and__3822__auto____7358;
}
}),ps__7357);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7312_SHARP_){
var and__3822__auto____7359 = p1__7312_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7359))
{var and__3822__auto____7360 = p1__7312_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7360))
{return p1__7312_SHARP_.call(null,z);
} else
{return and__3822__auto____7360;
}
} else
{return and__3822__auto____7359;
}
}),ps__7357);
});
var epn__4 = (function() { 
var G__7369__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7361 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7361))
{return cljs.core.every_QMARK_.call(null,(function (p1__7313_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7313_SHARP_,args);
}),ps__7357);
} else
{return and__3822__auto____7361;
}
})());
};
var G__7369 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7369__delegate.call(this, x, y, z, args);
};
G__7369.cljs$lang$maxFixedArity = 3;
G__7369.cljs$lang$applyTo = (function (arglist__7370){
var x = cljs.core.first(arglist__7370);
var y = cljs.core.first(cljs.core.next(arglist__7370));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7370)));
return G__7369__delegate(x, y, z, args);
});
G__7369.cljs$lang$arity$variadic = G__7369__delegate;
return G__7369;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7368 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7368__delegate.call(this, p1, p2, p3, ps);
};
G__7368.cljs$lang$maxFixedArity = 3;
G__7368.cljs$lang$applyTo = (function (arglist__7371){
var p1 = cljs.core.first(arglist__7371);
var p2 = cljs.core.first(cljs.core.next(arglist__7371));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7371)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7371)));
return G__7368__delegate(p1, p2, p3, ps);
});
G__7368.cljs$lang$arity$variadic = G__7368__delegate;
return G__7368;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7373 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7373))
{return or__3824__auto____7373;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7374 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7374))
{return or__3824__auto____7374;
} else
{var or__3824__auto____7375 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7375))
{return or__3824__auto____7375;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7411__delegate = function (x,y,z,args){
var or__3824__auto____7376 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7376))
{return or__3824__auto____7376;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7411__delegate.call(this, x, y, z, args);
};
G__7411.cljs$lang$maxFixedArity = 3;
G__7411.cljs$lang$applyTo = (function (arglist__7412){
var x = cljs.core.first(arglist__7412);
var y = cljs.core.first(cljs.core.next(arglist__7412));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7412)));
return G__7411__delegate(x, y, z, args);
});
G__7411.cljs$lang$arity$variadic = G__7411__delegate;
return G__7411;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7377 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7377))
{return or__3824__auto____7377;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7378 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7378))
{return or__3824__auto____7378;
} else
{var or__3824__auto____7379 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7379))
{return or__3824__auto____7379;
} else
{var or__3824__auto____7380 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7380))
{return or__3824__auto____7380;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7381 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7381))
{return or__3824__auto____7381;
} else
{var or__3824__auto____7382 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7382))
{return or__3824__auto____7382;
} else
{var or__3824__auto____7383 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7383))
{return or__3824__auto____7383;
} else
{var or__3824__auto____7384 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7384))
{return or__3824__auto____7384;
} else
{var or__3824__auto____7385 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7385))
{return or__3824__auto____7385;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7413__delegate = function (x,y,z,args){
var or__3824__auto____7386 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7386))
{return or__3824__auto____7386;
} else
{return cljs.core.some.call(null,(function (p1__7318_SHARP_){
var or__3824__auto____7387 = p1.call(null,p1__7318_SHARP_);
if(cljs.core.truth_(or__3824__auto____7387))
{return or__3824__auto____7387;
} else
{return p2.call(null,p1__7318_SHARP_);
}
}),args);
}
};
var G__7413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7413__delegate.call(this, x, y, z, args);
};
G__7413.cljs$lang$maxFixedArity = 3;
G__7413.cljs$lang$applyTo = (function (arglist__7414){
var x = cljs.core.first(arglist__7414);
var y = cljs.core.first(cljs.core.next(arglist__7414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7414)));
return G__7413__delegate(x, y, z, args);
});
G__7413.cljs$lang$arity$variadic = G__7413__delegate;
return G__7413;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7388 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7388))
{return or__3824__auto____7388;
} else
{var or__3824__auto____7389 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7389))
{return or__3824__auto____7389;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7390 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7390))
{return or__3824__auto____7390;
} else
{var or__3824__auto____7391 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7391))
{return or__3824__auto____7391;
} else
{var or__3824__auto____7392 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7392))
{return or__3824__auto____7392;
} else
{var or__3824__auto____7393 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7393))
{return or__3824__auto____7393;
} else
{var or__3824__auto____7394 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7394))
{return or__3824__auto____7394;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7395 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7395))
{return or__3824__auto____7395;
} else
{var or__3824__auto____7396 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7396))
{return or__3824__auto____7396;
} else
{var or__3824__auto____7397 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7397))
{return or__3824__auto____7397;
} else
{var or__3824__auto____7398 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7398))
{return or__3824__auto____7398;
} else
{var or__3824__auto____7399 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7399))
{return or__3824__auto____7399;
} else
{var or__3824__auto____7400 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7400))
{return or__3824__auto____7400;
} else
{var or__3824__auto____7401 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7401))
{return or__3824__auto____7401;
} else
{var or__3824__auto____7402 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7402))
{return or__3824__auto____7402;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7415__delegate = function (x,y,z,args){
var or__3824__auto____7403 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7403))
{return or__3824__auto____7403;
} else
{return cljs.core.some.call(null,(function (p1__7319_SHARP_){
var or__3824__auto____7404 = p1.call(null,p1__7319_SHARP_);
if(cljs.core.truth_(or__3824__auto____7404))
{return or__3824__auto____7404;
} else
{var or__3824__auto____7405 = p2.call(null,p1__7319_SHARP_);
if(cljs.core.truth_(or__3824__auto____7405))
{return or__3824__auto____7405;
} else
{return p3.call(null,p1__7319_SHARP_);
}
}
}),args);
}
};
var G__7415 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7415__delegate.call(this, x, y, z, args);
};
G__7415.cljs$lang$maxFixedArity = 3;
G__7415.cljs$lang$applyTo = (function (arglist__7416){
var x = cljs.core.first(arglist__7416);
var y = cljs.core.first(cljs.core.next(arglist__7416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7416)));
return G__7415__delegate(x, y, z, args);
});
G__7415.cljs$lang$arity$variadic = G__7415__delegate;
return G__7415;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7417__delegate = function (p1,p2,p3,ps){
var ps__7406 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7320_SHARP_){
return p1__7320_SHARP_.call(null,x);
}),ps__7406);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7321_SHARP_){
var or__3824__auto____7407 = p1__7321_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7407))
{return or__3824__auto____7407;
} else
{return p1__7321_SHARP_.call(null,y);
}
}),ps__7406);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7322_SHARP_){
var or__3824__auto____7408 = p1__7322_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7408))
{return or__3824__auto____7408;
} else
{var or__3824__auto____7409 = p1__7322_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7409))
{return or__3824__auto____7409;
} else
{return p1__7322_SHARP_.call(null,z);
}
}
}),ps__7406);
});
var spn__4 = (function() { 
var G__7418__delegate = function (x,y,z,args){
var or__3824__auto____7410 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7410))
{return or__3824__auto____7410;
} else
{return cljs.core.some.call(null,(function (p1__7323_SHARP_){
return cljs.core.some.call(null,p1__7323_SHARP_,args);
}),ps__7406);
}
};
var G__7418 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7418__delegate.call(this, x, y, z, args);
};
G__7418.cljs$lang$maxFixedArity = 3;
G__7418.cljs$lang$applyTo = (function (arglist__7419){
var x = cljs.core.first(arglist__7419);
var y = cljs.core.first(cljs.core.next(arglist__7419));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7419)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7419)));
return G__7418__delegate(x, y, z, args);
});
G__7418.cljs$lang$arity$variadic = G__7418__delegate;
return G__7418;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7417 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7417__delegate.call(this, p1, p2, p3, ps);
};
G__7417.cljs$lang$maxFixedArity = 3;
G__7417.cljs$lang$applyTo = (function (arglist__7420){
var p1 = cljs.core.first(arglist__7420);
var p2 = cljs.core.first(cljs.core.next(arglist__7420));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7420)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7420)));
return G__7417__delegate(p1, p2, p3, ps);
});
G__7417.cljs$lang$arity$variadic = G__7417__delegate;
return G__7417;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7421 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7421))
{var s__7422 = temp__3974__auto____7421;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7422)),map.call(null,f,cljs.core.rest.call(null,s__7422)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7423 = cljs.core.seq.call(null,c1);
var s2__7424 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____7425 = s1__7423;
if(cljs.core.truth_(and__3822__auto____7425))
{return s2__7424;
} else
{return and__3822__auto____7425;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7423),cljs.core.first.call(null,s2__7424)),map.call(null,f,cljs.core.rest.call(null,s1__7423),cljs.core.rest.call(null,s2__7424)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7426 = cljs.core.seq.call(null,c1);
var s2__7427 = cljs.core.seq.call(null,c2);
var s3__7428 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3822__auto____7429 = s1__7426;
if(cljs.core.truth_(and__3822__auto____7429))
{var and__3822__auto____7430 = s2__7427;
if(cljs.core.truth_(and__3822__auto____7430))
{return s3__7428;
} else
{return and__3822__auto____7430;
}
} else
{return and__3822__auto____7429;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7426),cljs.core.first.call(null,s2__7427),cljs.core.first.call(null,s3__7428)),map.call(null,f,cljs.core.rest.call(null,s1__7426),cljs.core.rest.call(null,s2__7427),cljs.core.rest.call(null,s3__7428)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__7433__delegate = function (f,c1,c2,c3,colls){
var step__7432 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7431 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7431))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7431),step.call(null,map.call(null,cljs.core.rest,ss__7431)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__7372_SHARP_){
return cljs.core.apply.call(null,f,p1__7372_SHARP_);
}),step__7432.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7433 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7433__delegate.call(this, f, c1, c2, c3, colls);
};
G__7433.cljs$lang$maxFixedArity = 4;
G__7433.cljs$lang$applyTo = (function (arglist__7434){
var f = cljs.core.first(arglist__7434);
var c1 = cljs.core.first(cljs.core.next(arglist__7434));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7434)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
return G__7433__delegate(f, c1, c2, c3, colls);
});
G__7433.cljs$lang$arity$variadic = G__7433__delegate;
return G__7433;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7435 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7435))
{var s__7436 = temp__3974__auto____7435;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7436),take.call(null,(n - 1),cljs.core.rest.call(null,s__7436)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7439 = (function (n,coll){
while(true){
var s__7437 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7438 = (n > 0);
if(and__3822__auto____7438)
{return s__7437;
} else
{return and__3822__auto____7438;
}
})()))
{{
var G__7440 = (n - 1);
var G__7441 = cljs.core.rest.call(null,s__7437);
n = G__7440;
coll = G__7441;
continue;
}
} else
{return s__7437;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7439.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7442 = cljs.core.seq.call(null,coll);
var lead__7443 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__7443))
{{
var G__7444 = cljs.core.next.call(null,s__7442);
var G__7445 = cljs.core.next.call(null,lead__7443);
s__7442 = G__7444;
lead__7443 = G__7445;
continue;
}
} else
{return s__7442;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7448 = (function (pred,coll){
while(true){
var s__7446 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7447 = s__7446;
if(cljs.core.truth_(and__3822__auto____7447))
{return pred.call(null,cljs.core.first.call(null,s__7446));
} else
{return and__3822__auto____7447;
}
})()))
{{
var G__7449 = pred;
var G__7450 = cljs.core.rest.call(null,s__7446);
pred = G__7449;
coll = G__7450;
continue;
}
} else
{return s__7446;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7448.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7451 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7451))
{var s__7452 = temp__3974__auto____7451;
return cljs.core.concat.call(null,s__7452,cycle.call(null,s__7452));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7453 = cljs.core.seq.call(null,c1);
var s2__7454 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____7455 = s1__7453;
if(cljs.core.truth_(and__3822__auto____7455))
{return s2__7454;
} else
{return and__3822__auto____7455;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7453),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7454),interleave.call(null,cljs.core.rest.call(null,s1__7453),cljs.core.rest.call(null,s2__7454))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__7457__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7456 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7456))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7456),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7456)));
} else
{return null;
}
})));
};
var G__7457 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7457__delegate.call(this, c1, c2, colls);
};
G__7457.cljs$lang$maxFixedArity = 2;
G__7457.cljs$lang$applyTo = (function (arglist__7458){
var c1 = cljs.core.first(arglist__7458);
var c2 = cljs.core.first(cljs.core.next(arglist__7458));
var colls = cljs.core.rest(cljs.core.next(arglist__7458));
return G__7457__delegate(c1, c2, colls);
});
G__7457.cljs$lang$arity$variadic = G__7457__delegate;
return G__7457;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7461 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7459 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____7459))
{var coll__7460 = temp__3971__auto____7459;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7460),cat.call(null,cljs.core.rest.call(null,coll__7460),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__7461.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7462__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7462 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7462__delegate.call(this, f, coll, colls);
};
G__7462.cljs$lang$maxFixedArity = 2;
G__7462.cljs$lang$applyTo = (function (arglist__7463){
var f = cljs.core.first(arglist__7463);
var coll = cljs.core.first(cljs.core.next(arglist__7463));
var colls = cljs.core.rest(cljs.core.next(arglist__7463));
return G__7462__delegate(f, coll, colls);
});
G__7462.cljs$lang$arity$variadic = G__7462__delegate;
return G__7462;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7464 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7464))
{var s__7465 = temp__3974__auto____7464;
var f__7466 = cljs.core.first.call(null,s__7465);
var r__7467 = cljs.core.rest.call(null,s__7465);
if(cljs.core.truth_(pred.call(null,f__7466)))
{return cljs.core.cons.call(null,f__7466,filter.call(null,pred,r__7467));
} else
{return filter.call(null,pred,r__7467);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7469 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__7469.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7468_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7468_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7470__7471 = to;
if((G__7470__7471 != null))
{if((function (){var or__3824__auto____7472 = (G__7470__7471.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____7472)
{return or__3824__auto____7472;
} else
{return G__7470__7471.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7470__7471.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7470__7471);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7470__7471);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7473__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7473 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7473__delegate.call(this, f, c1, c2, c3, colls);
};
G__7473.cljs$lang$maxFixedArity = 4;
G__7473.cljs$lang$applyTo = (function (arglist__7474){
var f = cljs.core.first(arglist__7474);
var c1 = cljs.core.first(cljs.core.next(arglist__7474));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7474)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7474))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7474))));
return G__7473__delegate(f, c1, c2, c3, colls);
});
G__7473.cljs$lang$arity$variadic = G__7473__delegate;
return G__7473;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7475 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7475))
{var s__7476 = temp__3974__auto____7475;
var p__7477 = cljs.core.take.call(null,n,s__7476);
if((n === cljs.core.count.call(null,p__7477)))
{return cljs.core.cons.call(null,p__7477,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7476)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7478 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____7478))
{var s__7479 = temp__3974__auto____7478;
var p__7480 = cljs.core.take.call(null,n,s__7479);
if((n === cljs.core.count.call(null,p__7480)))
{return cljs.core.cons.call(null,p__7480,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7479)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7480,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7481 = cljs.core.lookup_sentinel;
var m__7482 = m;
var ks__7483 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__7483))
{var m__7484 = cljs.core.get.call(null,m__7482,cljs.core.first.call(null,ks__7483),sentinel__7481);
if((sentinel__7481 === m__7484))
{return not_found;
} else
{{
var G__7485 = sentinel__7481;
var G__7486 = m__7484;
var G__7487 = cljs.core.next.call(null,ks__7483);
sentinel__7481 = G__7485;
m__7482 = G__7486;
ks__7483 = G__7487;
continue;
}
}
} else
{return m__7482;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7488,v){
var vec__7489__7490 = p__7488;
var k__7491 = cljs.core.nth.call(null,vec__7489__7490,0,null);
var ks__7492 = cljs.core.nthnext.call(null,vec__7489__7490,1);
if(cljs.core.truth_(ks__7492))
{return cljs.core.assoc.call(null,m,k__7491,assoc_in.call(null,cljs.core.get.call(null,m,k__7491),ks__7492,v));
} else
{return cljs.core.assoc.call(null,m,k__7491,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7493,f,args){
var vec__7494__7495 = p__7493;
var k__7496 = cljs.core.nth.call(null,vec__7494__7495,0,null);
var ks__7497 = cljs.core.nthnext.call(null,vec__7494__7495,1);
if(cljs.core.truth_(ks__7497))
{return cljs.core.assoc.call(null,m,k__7496,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__7496),ks__7497,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7496,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__7496),args));
}
};
var update_in = function (m,p__7493,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7493, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7498){
var m = cljs.core.first(arglist__7498);
var p__7493 = cljs.core.first(cljs.core.next(arglist__7498));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7498)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7498)));
return update_in__delegate(m, p__7493, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7503 = this;
var h__272__auto____7504 = this__7503.__hash;
if((h__272__auto____7504 != null))
{return h__272__auto____7504;
} else
{var h__272__auto____7505 = cljs.core.hash_coll.call(null,coll);
this__7503.__hash = h__272__auto____7505;
return h__272__auto____7505;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7506 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7507 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7508 = this;
var new_array__7509 = cljs.core.aclone.call(null,this__7508.array);
(new_array__7509[k] = v);
return (new cljs.core.Vector(this__7508.meta,new_array__7509,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__7538 = null;
var G__7538__2 = (function (tsym7501,k){
var this__7510 = this;
var tsym7501__7511 = this;
var coll__7512 = tsym7501__7511;
return cljs.core._lookup.call(null,coll__7512,k);
});
var G__7538__3 = (function (tsym7502,k,not_found){
var this__7513 = this;
var tsym7502__7514 = this;
var coll__7515 = tsym7502__7514;
return cljs.core._lookup.call(null,coll__7515,k,not_found);
});
G__7538 = function(tsym7502,k,not_found){
switch(arguments.length){
case 2:
return G__7538__2.call(this,tsym7502,k);
case 3:
return G__7538__3.call(this,tsym7502,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7538;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym7499,args7500){
return tsym7499.call.apply(tsym7499,[tsym7499].concat(cljs.core.aclone.call(null,args7500)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7516 = this;
var new_array__7517 = cljs.core.aclone.call(null,this__7516.array);
new_array__7517.push(o);
return (new cljs.core.Vector(this__7516.meta,new_array__7517,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7518 = this;
var this$__7519 = this;
return cljs.core.pr_str.call(null,this$__7519);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7520 = this;
return cljs.core.ci_reduce.call(null,this__7520.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7521 = this;
return cljs.core.ci_reduce.call(null,this__7521.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7522 = this;
if((this__7522.array.length > 0))
{var vector_seq__7523 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7522.array.length))
{return cljs.core.cons.call(null,(this__7522.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__7523.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7524 = this;
return this__7524.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7525 = this;
var count__7526 = this__7525.array.length;
if((count__7526 > 0))
{return (this__7525.array[(count__7526 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7527 = this;
if((this__7527.array.length > 0))
{var new_array__7528 = cljs.core.aclone.call(null,this__7527.array);
new_array__7528.pop();
return (new cljs.core.Vector(this__7527.meta,new_array__7528,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7529 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7530 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7531 = this;
return (new cljs.core.Vector(meta,this__7531.array,this__7531.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7532 = this;
return this__7532.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7534 = this;
if((function (){var and__3822__auto____7535 = (0 <= n);
if(and__3822__auto____7535)
{return (n < this__7534.array.length);
} else
{return and__3822__auto____7535;
}
})())
{return (this__7534.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7536 = this;
if((function (){var and__3822__auto____7537 = (0 <= n);
if(and__3822__auto____7537)
{return (n < this__7536.array.length);
} else
{return and__3822__auto____7537;
}
})())
{return (this__7536.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7533 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7533.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__363__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7539 = pv.cnt;
if((cnt__7539 < 32))
{return 0;
} else
{return (((cnt__7539 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7540 = level;
var ret__7541 = node;
while(true){
if((ll__7540 === 0))
{return ret__7541;
} else
{var embed__7542 = ret__7541;
var r__7543 = cljs.core.pv_fresh_node.call(null,edit);
var ___7544 = cljs.core.pv_aset.call(null,r__7543,0,embed__7542);
{
var G__7545 = (ll__7540 - 5);
var G__7546 = r__7543;
ll__7540 = G__7545;
ret__7541 = G__7546;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7547 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7548 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7547,subidx__7548,tailnode);
return ret__7547;
} else
{var temp__3971__auto____7549 = cljs.core.pv_aget.call(null,parent,subidx__7548);
if(cljs.core.truth_(temp__3971__auto____7549))
{var child__7550 = temp__3971__auto____7549;
var node_to_insert__7551 = push_tail.call(null,pv,(level - 5),child__7550,tailnode);
cljs.core.pv_aset.call(null,ret__7547,subidx__7548,node_to_insert__7551);
return ret__7547;
} else
{var node_to_insert__7552 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7547,subidx__7548,node_to_insert__7552);
return ret__7547;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7553 = (0 <= i);
if(and__3822__auto____7553)
{return (i < pv.cnt);
} else
{return and__3822__auto____7553;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7554 = pv.root;
var level__7555 = pv.shift;
while(true){
if((level__7555 > 0))
{{
var G__7556 = cljs.core.pv_aget.call(null,node__7554,((i >>> level__7555) & 31));
var G__7557 = (level__7555 - 5);
node__7554 = G__7556;
level__7555 = G__7557;
continue;
}
} else
{return node__7554.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7558 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7558,(i & 31),val);
return ret__7558;
} else
{var subidx__7559 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7558,subidx__7559,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7559),i,val));
return ret__7558;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7560 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7561 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7560));
if((function (){var and__3822__auto____7562 = (new_child__7561 == null);
if(and__3822__auto____7562)
{return (subidx__7560 === 0);
} else
{return and__3822__auto____7562;
}
})())
{return null;
} else
{var ret__7563 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7563,subidx__7560,new_child__7561);
return ret__7563;
}
} else
{if((subidx__7560 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7564 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7564,subidx__7560,null);
return ret__7564;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__7565 = cljs.core._count.call(null,v);
if((c__7565 > 0))
{if((void 0 === cljs.core.t7566))
{
/**
* @constructor
*/
cljs.core.t7566 = (function (c,offset,v,vector_seq,__meta__297__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__297__auto__ = __meta__297__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t7566.cljs$lang$type = true;
cljs.core.t7566.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.t7566");
});
cljs.core.t7566.prototype.cljs$core$ISeqable$ = true;
cljs.core.t7566.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__7567 = this;
return vseq;
});
cljs.core.t7566.prototype.cljs$core$ISeq$ = true;
cljs.core.t7566.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7568 = this;
return cljs.core._nth.call(null,this__7568.v,this__7568.offset);
});
cljs.core.t7566.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7569 = this;
var offset__7570 = (this__7569.offset + 1);
if((offset__7570 < this__7569.c))
{return this__7569.vector_seq.call(null,this__7569.v,offset__7570);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t7566.prototype.cljs$core$ASeq$ = true;
cljs.core.t7566.prototype.cljs$core$IEquiv$ = true;
cljs.core.t7566.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__7571 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t7566.prototype.cljs$core$ISequential$ = true;
cljs.core.t7566.prototype.cljs$core$IPrintable$ = true;
cljs.core.t7566.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__7572 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t7566.prototype.cljs$core$IMeta$ = true;
cljs.core.t7566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___298__auto__){
var this__7573 = this;
return this__7573.__meta__297__auto__;
});
cljs.core.t7566.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t7566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___298__auto__,__meta__297__auto__){
var this__7574 = this;
return (new cljs.core.t7566(this__7574.c,this__7574.offset,this__7574.v,this__7574.vector_seq,__meta__297__auto__));
});
cljs.core.t7566;
} else
{}
return (new cljs.core.t7566(c__7565,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7579 = this;
return (new cljs.core.TransientVector(this__7579.cnt,this__7579.shift,cljs.core.tv_editable_root.call(null,this__7579.root),cljs.core.tv_editable_tail.call(null,this__7579.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7580 = this;
var h__272__auto____7581 = this__7580.__hash;
if((h__272__auto____7581 != null))
{return h__272__auto____7581;
} else
{var h__272__auto____7582 = cljs.core.hash_coll.call(null,coll);
this__7580.__hash = h__272__auto____7582;
return h__272__auto____7582;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7583 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7584 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7585 = this;
if((function (){var and__3822__auto____7586 = (0 <= k);
if(and__3822__auto____7586)
{return (k < this__7585.cnt);
} else
{return and__3822__auto____7586;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7587 = cljs.core.aclone.call(null,this__7585.tail);
(new_tail__7587[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7585.meta,this__7585.cnt,this__7585.shift,this__7585.root,new_tail__7587,null));
} else
{return (new cljs.core.PersistentVector(this__7585.meta,this__7585.cnt,this__7585.shift,cljs.core.do_assoc.call(null,coll,this__7585.shift,this__7585.root,k,v),this__7585.tail,null));
}
} else
{if((k === this__7585.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7585.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__7632 = null;
var G__7632__2 = (function (tsym7577,k){
var this__7588 = this;
var tsym7577__7589 = this;
var coll__7590 = tsym7577__7589;
return cljs.core._lookup.call(null,coll__7590,k);
});
var G__7632__3 = (function (tsym7578,k,not_found){
var this__7591 = this;
var tsym7578__7592 = this;
var coll__7593 = tsym7578__7592;
return cljs.core._lookup.call(null,coll__7593,k,not_found);
});
G__7632 = function(tsym7578,k,not_found){
switch(arguments.length){
case 2:
return G__7632__2.call(this,tsym7578,k);
case 3:
return G__7632__3.call(this,tsym7578,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7632;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym7575,args7576){
return tsym7575.call.apply(tsym7575,[tsym7575].concat(cljs.core.aclone.call(null,args7576)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7594 = this;
var step_init__7595 = [0,init];
var i__7596 = 0;
while(true){
if((i__7596 < this__7594.cnt))
{var arr__7597 = cljs.core.array_for.call(null,v,i__7596);
var len__7598 = arr__7597.length;
var init__7602 = (function (){var j__7599 = 0;
var init__7600 = (step_init__7595[1]);
while(true){
if((j__7599 < len__7598))
{var init__7601 = f.call(null,init__7600,(j__7599 + i__7596),(arr__7597[j__7599]));
if(cljs.core.reduced_QMARK_.call(null,init__7601))
{return init__7601;
} else
{{
var G__7633 = (j__7599 + 1);
var G__7634 = init__7601;
j__7599 = G__7633;
init__7600 = G__7634;
continue;
}
}
} else
{(step_init__7595[0] = len__7598);
(step_init__7595[1] = init__7600);
return init__7600;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7602))
{return cljs.core.deref.call(null,init__7602);
} else
{{
var G__7635 = (i__7596 + (step_init__7595[0]));
i__7596 = G__7635;
continue;
}
}
} else
{return (step_init__7595[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7603 = this;
if(((this__7603.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7604 = cljs.core.aclone.call(null,this__7603.tail);
new_tail__7604.push(o);
return (new cljs.core.PersistentVector(this__7603.meta,(this__7603.cnt + 1),this__7603.shift,this__7603.root,new_tail__7604,null));
} else
{var root_overflow_QMARK___7605 = ((this__7603.cnt >>> 5) > (1 << this__7603.shift));
var new_shift__7606 = ((root_overflow_QMARK___7605)?(this__7603.shift + 5):this__7603.shift);
var new_root__7608 = ((root_overflow_QMARK___7605)?(function (){var n_r__7607 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7607,0,this__7603.root);
cljs.core.pv_aset.call(null,n_r__7607,1,cljs.core.new_path.call(null,null,this__7603.shift,(new cljs.core.VectorNode(null,this__7603.tail))));
return n_r__7607;
})():cljs.core.push_tail.call(null,coll,this__7603.shift,this__7603.root,(new cljs.core.VectorNode(null,this__7603.tail))));
return (new cljs.core.PersistentVector(this__7603.meta,(this__7603.cnt + 1),new_shift__7606,new_root__7608,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7609 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7610 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7611 = this;
var this$__7612 = this;
return cljs.core.pr_str.call(null,this$__7612);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7613 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7614 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7615 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7616 = this;
return this__7616.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7617 = this;
if((this__7617.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__7617.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7618 = this;
if((this__7618.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7618.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7618.meta);
} else
{if((1 < (this__7618.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__7618.meta,(this__7618.cnt - 1),this__7618.shift,this__7618.root,this__7618.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7619 = cljs.core.array_for.call(null,coll,(this__7618.cnt - 2));
var nr__7620 = cljs.core.pop_tail.call(null,coll,this__7618.shift,this__7618.root);
var new_root__7621 = (((nr__7620 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7620);
var cnt_1__7622 = (this__7618.cnt - 1);
if((function (){var and__3822__auto____7623 = (5 < this__7618.shift);
if(and__3822__auto____7623)
{return (cljs.core.pv_aget.call(null,new_root__7621,1) == null);
} else
{return and__3822__auto____7623;
}
})())
{return (new cljs.core.PersistentVector(this__7618.meta,cnt_1__7622,(this__7618.shift - 5),cljs.core.pv_aget.call(null,new_root__7621,0),new_tail__7619,null));
} else
{return (new cljs.core.PersistentVector(this__7618.meta,cnt_1__7622,this__7618.shift,new_root__7621,new_tail__7619,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7625 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7626 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7627 = this;
return (new cljs.core.PersistentVector(meta,this__7627.cnt,this__7627.shift,this__7627.root,this__7627.tail,this__7627.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7628 = this;
return this__7628.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7629 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7630 = this;
if((function (){var and__3822__auto____7631 = (0 <= n);
if(and__3822__auto____7631)
{return (n < this__7630.cnt);
} else
{return and__3822__auto____7631;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7624 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7624.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__7636 = cljs.core.seq.call(null,xs);
var out__7637 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__7636))
{{
var G__7638 = cljs.core.next.call(null,xs__7636);
var G__7639 = cljs.core.conj_BANG_.call(null,out__7637,cljs.core.first.call(null,xs__7636));
xs__7636 = G__7638;
out__7637 = G__7639;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7637);
}
break;
}
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7640){
var args = cljs.core.seq(arglist__7640);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7645 = this;
var h__272__auto____7646 = this__7645.__hash;
if((h__272__auto____7646 != null))
{return h__272__auto____7646;
} else
{var h__272__auto____7647 = cljs.core.hash_coll.call(null,coll);
this__7645.__hash = h__272__auto____7647;
return h__272__auto____7647;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7648 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7649 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__7650 = this;
var v_pos__7651 = (this__7650.start + key);
return (new cljs.core.Subvec(this__7650.meta,cljs.core._assoc.call(null,this__7650.v,v_pos__7651,val),this__7650.start,((this__7650.end > (v_pos__7651 + 1)) ? this__7650.end : (v_pos__7651 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__7675 = null;
var G__7675__2 = (function (tsym7643,k){
var this__7652 = this;
var tsym7643__7653 = this;
var coll__7654 = tsym7643__7653;
return cljs.core._lookup.call(null,coll__7654,k);
});
var G__7675__3 = (function (tsym7644,k,not_found){
var this__7655 = this;
var tsym7644__7656 = this;
var coll__7657 = tsym7644__7656;
return cljs.core._lookup.call(null,coll__7657,k,not_found);
});
G__7675 = function(tsym7644,k,not_found){
switch(arguments.length){
case 2:
return G__7675__2.call(this,tsym7644,k);
case 3:
return G__7675__3.call(this,tsym7644,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7675;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym7641,args7642){
return tsym7641.call.apply(tsym7641,[tsym7641].concat(cljs.core.aclone.call(null,args7642)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7658 = this;
return (new cljs.core.Subvec(this__7658.meta,cljs.core._assoc_n.call(null,this__7658.v,this__7658.end,o),this__7658.start,(this__7658.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__7659 = this;
var this$__7660 = this;
return cljs.core.pr_str.call(null,this$__7660);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7661 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7662 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7663 = this;
var subvec_seq__7664 = (function subvec_seq(i){
if((i === this__7663.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7663.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__7664.call(null,this__7663.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7665 = this;
return (this__7665.end - this__7665.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7666 = this;
return cljs.core._nth.call(null,this__7666.v,(this__7666.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7667 = this;
if((this__7667.start === this__7667.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7667.meta,this__7667.v,this__7667.start,(this__7667.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7668 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7669 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7670 = this;
return (new cljs.core.Subvec(meta,this__7670.v,this__7670.start,this__7670.end,this__7670.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7671 = this;
return this__7671.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7673 = this;
return cljs.core._nth.call(null,this__7673.v,(this__7673.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7674 = this;
return cljs.core._nth.call(null,this__7674.v,(this__7674.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7672 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7672.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__7676 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__7676,0,tl.length);
return ret__7676;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__7677 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__7678 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7677,subidx__7678,(((level === 5))?tail_node:(function (){var child__7679 = cljs.core.pv_aget.call(null,ret__7677,subidx__7678);
if((child__7679 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__7679,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__7677;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__7680 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__7681 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7682 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__7680,subidx__7681));
if((function (){var and__3822__auto____7683 = (new_child__7682 == null);
if(and__3822__auto____7683)
{return (subidx__7681 === 0);
} else
{return and__3822__auto____7683;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__7680,subidx__7681,new_child__7682);
return node__7680;
}
} else
{if((subidx__7681 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__7680,subidx__7681,null);
return node__7680;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____7684 = (0 <= i);
if(and__3822__auto____7684)
{return (i < tv.cnt);
} else
{return and__3822__auto____7684;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__7685 = tv.root;
var node__7686 = root__7685;
var level__7687 = tv.shift;
while(true){
if((level__7687 > 0))
{{
var G__7688 = cljs.core.tv_ensure_editable.call(null,root__7685.edit,cljs.core.pv_aget.call(null,node__7686,((i >>> level__7687) & 31)));
var G__7689 = (level__7687 - 5);
node__7686 = G__7688;
level__7687 = G__7689;
continue;
}
} else
{return node__7686.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__7727 = null;
var G__7727__2 = (function (tsym7692,k){
var this__7694 = this;
var tsym7692__7695 = this;
var coll__7696 = tsym7692__7695;
return cljs.core._lookup.call(null,coll__7696,k);
});
var G__7727__3 = (function (tsym7693,k,not_found){
var this__7697 = this;
var tsym7693__7698 = this;
var coll__7699 = tsym7693__7698;
return cljs.core._lookup.call(null,coll__7699,k,not_found);
});
G__7727 = function(tsym7693,k,not_found){
switch(arguments.length){
case 2:
return G__7727__2.call(this,tsym7693,k);
case 3:
return G__7727__3.call(this,tsym7693,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7727;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym7690,args7691){
return tsym7690.call.apply(tsym7690,[tsym7690].concat(cljs.core.aclone.call(null,args7691)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7700 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7701 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7702 = this;
if(cljs.core.truth_(this__7702.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7703 = this;
if((function (){var and__3822__auto____7704 = (0 <= n);
if(and__3822__auto____7704)
{return (n < this__7703.cnt);
} else
{return and__3822__auto____7704;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7705 = this;
if(cljs.core.truth_(this__7705.root.edit))
{return this__7705.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__7706 = this;
if(cljs.core.truth_(this__7706.root.edit))
{if((function (){var and__3822__auto____7707 = (0 <= n);
if(and__3822__auto____7707)
{return (n < this__7706.cnt);
} else
{return and__3822__auto____7707;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__7706.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__7710 = (function go(level,node){
var node__7708 = cljs.core.tv_ensure_editable.call(null,this__7706.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__7708,(n & 31),val);
return node__7708;
} else
{var subidx__7709 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__7708,subidx__7709,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__7708,subidx__7709)));
return node__7708;
}
}).call(null,this__7706.shift,this__7706.root);
this__7706.root = new_root__7710;
return tcoll;
}
} else
{if((n === this__7706.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__7706.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__7711 = this;
if(cljs.core.truth_(this__7711.root.edit))
{if((this__7711.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7711.cnt))
{this__7711.cnt = 0;
return tcoll;
} else
{if((((this__7711.cnt - 1) & 31) > 0))
{this__7711.cnt = (this__7711.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__7712 = cljs.core.editable_array_for.call(null,tcoll,(this__7711.cnt - 2));
var new_root__7714 = (function (){var nr__7713 = cljs.core.tv_pop_tail.call(null,tcoll,this__7711.shift,this__7711.root);
if((nr__7713 != null))
{return nr__7713;
} else
{return (new cljs.core.VectorNode(this__7711.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____7715 = (5 < this__7711.shift);
if(and__3822__auto____7715)
{return (cljs.core.pv_aget.call(null,new_root__7714,1) == null);
} else
{return and__3822__auto____7715;
}
})())
{var new_root__7716 = cljs.core.tv_ensure_editable.call(null,this__7711.root.edit,cljs.core.pv_aget.call(null,new_root__7714,0));
this__7711.root = new_root__7716;
this__7711.shift = (this__7711.shift - 5);
this__7711.cnt = (this__7711.cnt - 1);
this__7711.tail = new_tail__7712;
return tcoll;
} else
{this__7711.root = new_root__7714;
this__7711.cnt = (this__7711.cnt - 1);
this__7711.tail = new_tail__7712;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__7717 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__7718 = this;
if(cljs.core.truth_(this__7718.root.edit))
{if(((this__7718.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__7718.tail[(this__7718.cnt & 31)] = o);
this__7718.cnt = (this__7718.cnt + 1);
return tcoll;
} else
{var tail_node__7719 = (new cljs.core.VectorNode(this__7718.root.edit,this__7718.tail));
var new_tail__7720 = cljs.core.make_array.call(null,32);
(new_tail__7720[0] = o);
this__7718.tail = new_tail__7720;
if(((this__7718.cnt >>> 5) > (1 << this__7718.shift)))
{var new_root_array__7721 = cljs.core.make_array.call(null,32);
var new_shift__7722 = (this__7718.shift + 5);
(new_root_array__7721[0] = this__7718.root);
(new_root_array__7721[1] = cljs.core.new_path.call(null,this__7718.root.edit,this__7718.shift,tail_node__7719));
this__7718.root = (new cljs.core.VectorNode(this__7718.root.edit,new_root_array__7721));
this__7718.shift = new_shift__7722;
this__7718.cnt = (this__7718.cnt + 1);
return tcoll;
} else
{var new_root__7723 = cljs.core.tv_push_tail.call(null,tcoll,this__7718.shift,this__7718.root,tail_node__7719);
this__7718.root = new_root__7723;
this__7718.cnt = (this__7718.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__7724 = this;
if(cljs.core.truth_(this__7724.root.edit))
{this__7724.root.edit = null;
var len__7725 = (this__7724.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__7726 = cljs.core.make_array.call(null,len__7725);
cljs.core.array_copy.call(null,this__7724.tail,0,trimmed_tail__7726,0,len__7725);
return (new cljs.core.PersistentVector(null,this__7724.cnt,this__7724.shift,this__7724.root,trimmed_tail__7726,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7728 = this;
var h__272__auto____7729 = this__7728.__hash;
if((h__272__auto____7729 != null))
{return h__272__auto____7729;
} else
{var h__272__auto____7730 = cljs.core.hash_coll.call(null,coll);
this__7728.__hash = h__272__auto____7730;
return h__272__auto____7730;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7731 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__7732 = this;
var this$__7733 = this;
return cljs.core.pr_str.call(null,this$__7733);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7734 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7735 = this;
return cljs.core._first.call(null,this__7735.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7736 = this;
var temp__3971__auto____7737 = cljs.core.next.call(null,this__7736.front);
if(cljs.core.truth_(temp__3971__auto____7737))
{var f1__7738 = temp__3971__auto____7737;
return (new cljs.core.PersistentQueueSeq(this__7736.meta,f1__7738,this__7736.rear,null));
} else
{if((this__7736.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7736.meta,this__7736.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7739 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7740 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7740.front,this__7740.rear,this__7740.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7741 = this;
return this__7741.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7742 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7742.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7743 = this;
var h__272__auto____7744 = this__7743.__hash;
if((h__272__auto____7744 != null))
{return h__272__auto____7744;
} else
{var h__272__auto____7745 = cljs.core.hash_coll.call(null,coll);
this__7743.__hash = h__272__auto____7745;
return h__272__auto____7745;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7746 = this;
if(cljs.core.truth_(this__7746.front))
{return (new cljs.core.PersistentQueue(this__7746.meta,(this__7746.count + 1),this__7746.front,cljs.core.conj.call(null,(function (){var or__3824__auto____7747 = this__7746.rear;
if(cljs.core.truth_(or__3824__auto____7747))
{return or__3824__auto____7747;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__7746.meta,(this__7746.count + 1),cljs.core.conj.call(null,this__7746.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__7748 = this;
var this$__7749 = this;
return cljs.core.pr_str.call(null,this$__7749);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7750 = this;
var rear__7751 = cljs.core.seq.call(null,this__7750.rear);
if(cljs.core.truth_((function (){var or__3824__auto____7752 = this__7750.front;
if(cljs.core.truth_(or__3824__auto____7752))
{return or__3824__auto____7752;
} else
{return rear__7751;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7750.front,cljs.core.seq.call(null,rear__7751),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7753 = this;
return this__7753.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7754 = this;
return cljs.core._first.call(null,this__7754.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7755 = this;
if(cljs.core.truth_(this__7755.front))
{var temp__3971__auto____7756 = cljs.core.next.call(null,this__7755.front);
if(cljs.core.truth_(temp__3971__auto____7756))
{var f1__7757 = temp__3971__auto____7756;
return (new cljs.core.PersistentQueue(this__7755.meta,(this__7755.count - 1),f1__7757,this__7755.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__7755.meta,(this__7755.count - 1),cljs.core.seq.call(null,this__7755.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7758 = this;
return cljs.core.first.call(null,this__7758.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7759 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7761 = this;
return (new cljs.core.PersistentQueue(meta,this__7761.count,this__7761.front,this__7761.rear,this__7761.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7762 = this;
return this__7762.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7763 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__7764 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__7765 = array.length;
var i__7766 = 0;
while(true){
if((i__7766 < len__7765))
{if(cljs.core._EQ_.call(null,k,(array[i__7766])))
{return i__7766;
} else
{{
var G__7767 = (i__7766 + incr);
i__7766 = G__7767;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____7768 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____7768))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____7768;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__7769 = cljs.core.hash.call(null,a);
var b__7770 = cljs.core.hash.call(null,b);
if((a__7769 < b__7770))
{return -1;
} else
{if((a__7769 > b__7770))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__7772 = m.keys;
var len__7773 = ks__7772.length;
var so__7774 = m.strobj;
var out__7775 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__7776 = 0;
var out__7777 = cljs.core.transient$.call(null,out__7775);
while(true){
if((i__7776 < len__7773))
{var k__7778 = (ks__7772[i__7776]);
{
var G__7779 = (i__7776 + 1);
var G__7780 = cljs.core.assoc_BANG_.call(null,out__7777,k__7778,(so__7774[k__7778]));
i__7776 = G__7779;
out__7777 = G__7780;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__7777,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7785 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7786 = this;
var h__272__auto____7787 = this__7786.__hash;
if((h__272__auto____7787 != null))
{return h__272__auto____7787;
} else
{var h__272__auto____7788 = cljs.core.hash_imap.call(null,coll);
this__7786.__hash = h__272__auto____7788;
return h__272__auto____7788;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7789 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7790 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7790.strobj,(this__7790.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7791 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___7792 = this__7791.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___7792))
{var new_strobj__7793 = goog.object.clone.call(null,this__7791.strobj);
(new_strobj__7793[k] = v);
return (new cljs.core.ObjMap(this__7791.meta,this__7791.keys,new_strobj__7793,(this__7791.update_count + 1),null));
} else
{if((this__7791.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__7794 = goog.object.clone.call(null,this__7791.strobj);
var new_keys__7795 = cljs.core.aclone.call(null,this__7791.keys);
(new_strobj__7794[k] = v);
new_keys__7795.push(k);
return (new cljs.core.ObjMap(this__7791.meta,new_keys__7795,new_strobj__7794,(this__7791.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7796 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7796.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__7816 = null;
var G__7816__2 = (function (tsym7783,k){
var this__7797 = this;
var tsym7783__7798 = this;
var coll__7799 = tsym7783__7798;
return cljs.core._lookup.call(null,coll__7799,k);
});
var G__7816__3 = (function (tsym7784,k,not_found){
var this__7800 = this;
var tsym7784__7801 = this;
var coll__7802 = tsym7784__7801;
return cljs.core._lookup.call(null,coll__7802,k,not_found);
});
G__7816 = function(tsym7784,k,not_found){
switch(arguments.length){
case 2:
return G__7816__2.call(this,tsym7784,k);
case 3:
return G__7816__3.call(this,tsym7784,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7816;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym7781,args7782){
return tsym7781.call.apply(tsym7781,[tsym7781].concat(cljs.core.aclone.call(null,args7782)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__7803 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__7804 = this;
var this$__7805 = this;
return cljs.core.pr_str.call(null,this$__7805);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7806 = this;
if((this__7806.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__7771_SHARP_){
return cljs.core.vector.call(null,p1__7771_SHARP_,(this__7806.strobj[p1__7771_SHARP_]));
}),this__7806.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7807 = this;
return this__7807.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7808 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7809 = this;
return (new cljs.core.ObjMap(meta,this__7809.keys,this__7809.strobj,this__7809.update_count,this__7809.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7810 = this;
return this__7810.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7811 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7811.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7812 = this;
if(cljs.core.truth_((function (){var and__3822__auto____7813 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____7813))
{return this__7812.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____7813;
}
})()))
{var new_keys__7814 = cljs.core.aclone.call(null,this__7812.keys);
var new_strobj__7815 = goog.object.clone.call(null,this__7812.strobj);
new_keys__7814.splice(cljs.core.scan_array.call(null,1,k,new_keys__7814),1);
cljs.core.js_delete.call(null,new_strobj__7815,k);
return (new cljs.core.ObjMap(this__7812.meta,new_keys__7814,new_strobj__7815,(this__7812.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7822 = this;
var h__272__auto____7823 = this__7822.__hash;
if((h__272__auto____7823 != null))
{return h__272__auto____7823;
} else
{var h__272__auto____7824 = cljs.core.hash_imap.call(null,coll);
this__7822.__hash = h__272__auto____7824;
return h__272__auto____7824;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7825 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7826 = this;
var bucket__7827 = (this__7826.hashobj[cljs.core.hash.call(null,k)]);
var i__7828 = (cljs.core.truth_(bucket__7827)?cljs.core.scan_array.call(null,2,k,bucket__7827):null);
if(cljs.core.truth_(i__7828))
{return (bucket__7827[(i__7828 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7829 = this;
var h__7830 = cljs.core.hash.call(null,k);
var bucket__7831 = (this__7829.hashobj[h__7830]);
if(cljs.core.truth_(bucket__7831))
{var new_bucket__7832 = cljs.core.aclone.call(null,bucket__7831);
var new_hashobj__7833 = goog.object.clone.call(null,this__7829.hashobj);
(new_hashobj__7833[h__7830] = new_bucket__7832);
var temp__3971__auto____7834 = cljs.core.scan_array.call(null,2,k,new_bucket__7832);
if(cljs.core.truth_(temp__3971__auto____7834))
{var i__7835 = temp__3971__auto____7834;
(new_bucket__7832[(i__7835 + 1)] = v);
return (new cljs.core.HashMap(this__7829.meta,this__7829.count,new_hashobj__7833,null));
} else
{new_bucket__7832.push(k,v);
return (new cljs.core.HashMap(this__7829.meta,(this__7829.count + 1),new_hashobj__7833,null));
}
} else
{var new_hashobj__7836 = goog.object.clone.call(null,this__7829.hashobj);
(new_hashobj__7836[h__7830] = [k,v]);
return (new cljs.core.HashMap(this__7829.meta,(this__7829.count + 1),new_hashobj__7836,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7837 = this;
var bucket__7838 = (this__7837.hashobj[cljs.core.hash.call(null,k)]);
var i__7839 = (cljs.core.truth_(bucket__7838)?cljs.core.scan_array.call(null,2,k,bucket__7838):null);
if(cljs.core.truth_(i__7839))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__7862 = null;
var G__7862__2 = (function (tsym7820,k){
var this__7840 = this;
var tsym7820__7841 = this;
var coll__7842 = tsym7820__7841;
return cljs.core._lookup.call(null,coll__7842,k);
});
var G__7862__3 = (function (tsym7821,k,not_found){
var this__7843 = this;
var tsym7821__7844 = this;
var coll__7845 = tsym7821__7844;
return cljs.core._lookup.call(null,coll__7845,k,not_found);
});
G__7862 = function(tsym7821,k,not_found){
switch(arguments.length){
case 2:
return G__7862__2.call(this,tsym7821,k);
case 3:
return G__7862__3.call(this,tsym7821,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7862;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym7818,args7819){
return tsym7818.call.apply(tsym7818,[tsym7818].concat(cljs.core.aclone.call(null,args7819)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__7846 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__7847 = this;
var this$__7848 = this;
return cljs.core.pr_str.call(null,this$__7848);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7849 = this;
if((this__7849.count > 0))
{var hashes__7850 = cljs.core.js_keys.call(null,this__7849.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__7817_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__7849.hashobj[p1__7817_SHARP_])));
}),hashes__7850);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7851 = this;
return this__7851.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7853 = this;
return (new cljs.core.HashMap(meta,this__7853.count,this__7853.hashobj,this__7853.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7854 = this;
return this__7854.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7855 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__7855.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7856 = this;
var h__7857 = cljs.core.hash.call(null,k);
var bucket__7858 = (this__7856.hashobj[h__7857]);
var i__7859 = (cljs.core.truth_(bucket__7858)?cljs.core.scan_array.call(null,2,k,bucket__7858):null);
if(cljs.core.not.call(null,i__7859))
{return coll;
} else
{var new_hashobj__7860 = goog.object.clone.call(null,this__7856.hashobj);
if((3 > bucket__7858.length))
{cljs.core.js_delete.call(null,new_hashobj__7860,h__7857);
} else
{var new_bucket__7861 = cljs.core.aclone.call(null,bucket__7858);
new_bucket__7861.splice(i__7859,2);
(new_hashobj__7860[h__7857] = new_bucket__7861);
}
return (new cljs.core.HashMap(this__7856.meta,(this__7856.count - 1),new_hashobj__7860,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__7863 = ks.length;
var i__7864 = 0;
var out__7865 = cljs.core.HashMap.EMPTY;
while(true){
if((i__7864 < len__7863))
{{
var G__7866 = (i__7864 + 1);
var G__7867 = cljs.core.assoc.call(null,out__7865,(ks[i__7864]),(vs[i__7864]));
i__7864 = G__7866;
out__7865 = G__7867;
continue;
}
} else
{return out__7865;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__7868 = m.arr;
var len__7869 = arr__7868.length;
var i__7870 = 0;
while(true){
if((len__7869 <= i__7870))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__7868[i__7870]),k))
{return i__7870;
} else
{if("\uFDD0'else")
{{
var G__7871 = (i__7870 + 2);
i__7870 = G__7871;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7876 = this;
return (new cljs.core.TransientArrayMap({},this__7876.arr.length,cljs.core.aclone.call(null,this__7876.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7877 = this;
var h__272__auto____7878 = this__7877.__hash;
if((h__272__auto____7878 != null))
{return h__272__auto____7878;
} else
{var h__272__auto____7879 = cljs.core.hash_imap.call(null,coll);
this__7877.__hash = h__272__auto____7879;
return h__272__auto____7879;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7880 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7881 = this;
var idx__7882 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7882 === -1))
{return not_found;
} else
{return (this__7881.arr[(idx__7882 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7883 = this;
var idx__7884 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7884 === -1))
{if((this__7883.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__7883.meta,(this__7883.cnt + 1),(function (){var G__7885__7886 = cljs.core.aclone.call(null,this__7883.arr);
G__7885__7886.push(k);
G__7885__7886.push(v);
return G__7885__7886;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__7883.arr[(idx__7884 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__7883.meta,this__7883.cnt,(function (){var G__7887__7888 = cljs.core.aclone.call(null,this__7883.arr);
(G__7887__7888[(idx__7884 + 1)] = v);
return G__7887__7888;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7889 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__7919 = null;
var G__7919__2 = (function (tsym7874,k){
var this__7890 = this;
var tsym7874__7891 = this;
var coll__7892 = tsym7874__7891;
return cljs.core._lookup.call(null,coll__7892,k);
});
var G__7919__3 = (function (tsym7875,k,not_found){
var this__7893 = this;
var tsym7875__7894 = this;
var coll__7895 = tsym7875__7894;
return cljs.core._lookup.call(null,coll__7895,k,not_found);
});
G__7919 = function(tsym7875,k,not_found){
switch(arguments.length){
case 2:
return G__7919__2.call(this,tsym7875,k);
case 3:
return G__7919__3.call(this,tsym7875,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7919;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym7872,args7873){
return tsym7872.call.apply(tsym7872,[tsym7872].concat(cljs.core.aclone.call(null,args7873)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__7896 = this;
var len__7897 = this__7896.arr.length;
var i__7898 = 0;
var init__7899 = init;
while(true){
if((i__7898 < len__7897))
{var init__7900 = f.call(null,init__7899,(this__7896.arr[i__7898]),(this__7896.arr[(i__7898 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__7900))
{return cljs.core.deref.call(null,init__7900);
} else
{{
var G__7920 = (i__7898 + 2);
var G__7921 = init__7900;
i__7898 = G__7920;
init__7899 = G__7921;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__7901 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__7902 = this;
var this$__7903 = this;
return cljs.core.pr_str.call(null,this$__7903);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7904 = this;
if((this__7904.cnt > 0))
{var len__7905 = this__7904.arr.length;
var array_map_seq__7906 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__7905))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__7904.arr[i]),(this__7904.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__7906.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7907 = this;
return this__7907.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7908 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7909 = this;
return (new cljs.core.PersistentArrayMap(meta,this__7909.cnt,this__7909.arr,this__7909.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7910 = this;
return this__7910.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7911 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7911.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7912 = this;
var idx__7913 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7913 >= 0))
{var len__7914 = this__7912.arr.length;
var new_len__7915 = (len__7914 - 2);
if((new_len__7915 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__7916 = cljs.core.make_array.call(null,new_len__7915);
var s__7917 = 0;
var d__7918 = 0;
while(true){
if((s__7917 >= len__7914))
{return (new cljs.core.PersistentArrayMap(this__7912.meta,(this__7912.cnt - 1),new_arr__7916,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__7912.arr[s__7917])))
{{
var G__7922 = (s__7917 + 2);
var G__7923 = d__7918;
s__7917 = G__7922;
d__7918 = G__7923;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__7916[d__7918] = (this__7912.arr[s__7917]));
(new_arr__7916[(d__7918 + 1)] = (this__7912.arr[(s__7917 + 1)]));
{
var G__7924 = (s__7917 + 2);
var G__7925 = (d__7918 + 2);
s__7917 = G__7924;
d__7918 = G__7925;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__7926 = cljs.core.count.call(null,ks);
var i__7927 = 0;
var out__7928 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__7927 < len__7926))
{{
var G__7929 = (i__7927 + 1);
var G__7930 = cljs.core.assoc_BANG_.call(null,out__7928,(ks[i__7927]),(vs[i__7927]));
i__7927 = G__7929;
out__7928 = G__7930;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7928);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__7931 = this;
if(cljs.core.truth_(this__7931.editable_QMARK_))
{var idx__7932 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__7932 >= 0))
{(this__7931.arr[idx__7932] = (this__7931.arr[(this__7931.len - 2)]));
(this__7931.arr[(idx__7932 + 1)] = (this__7931.arr[(this__7931.len - 1)]));
var G__7933__7934 = this__7931.arr;
G__7933__7934.pop();
G__7933__7934.pop();
G__7933__7934;
this__7931.len = (this__7931.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__7935 = this;
if(cljs.core.truth_(this__7935.editable_QMARK_))
{var idx__7936 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__7936 === -1))
{if(((this__7935.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__7935.len = (this__7935.len + 2);
this__7935.arr.push(key);
this__7935.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__7935.len,this__7935.arr),key,val);
}
} else
{if((val === (this__7935.arr[(idx__7936 + 1)])))
{return tcoll;
} else
{(this__7935.arr[(idx__7936 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__7937 = this;
if(cljs.core.truth_(this__7937.editable_QMARK_))
{if((function (){var G__7938__7939 = o;
if((G__7938__7939 != null))
{if((function (){var or__3824__auto____7940 = (G__7938__7939.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7940)
{return or__3824__auto____7940;
} else
{return G__7938__7939.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__7938__7939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__7938__7939);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__7938__7939);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__7941 = cljs.core.seq.call(null,o);
var tcoll__7942 = tcoll;
while(true){
var temp__3971__auto____7943 = cljs.core.first.call(null,es__7941);
if(cljs.core.truth_(temp__3971__auto____7943))
{var e__7944 = temp__3971__auto____7943;
{
var G__7950 = cljs.core.next.call(null,es__7941);
var G__7951 = cljs.core._assoc_BANG_.call(null,tcoll__7942,cljs.core.key.call(null,e__7944),cljs.core.val.call(null,e__7944));
es__7941 = G__7950;
tcoll__7942 = G__7951;
continue;
}
} else
{return tcoll__7942;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__7945 = this;
if(cljs.core.truth_(this__7945.editable_QMARK_))
{this__7945.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__7945.len,2),this__7945.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__7946 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__7947 = this;
if(cljs.core.truth_(this__7947.editable_QMARK_))
{var idx__7948 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__7948 === -1))
{return not_found;
} else
{return (this__7947.arr[(idx__7948 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__7949 = this;
if(cljs.core.truth_(this__7949.editable_QMARK_))
{return cljs.core.quot.call(null,this__7949.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__7952 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__7953 = 0;
while(true){
if((i__7953 < len))
{{
var G__7954 = cljs.core.assoc_BANG_.call(null,out__7952,(arr[i__7953]),(arr[(i__7953 + 1)]));
var G__7955 = (i__7953 + 2);
out__7952 = G__7954;
i__7953 = G__7955;
continue;
}
} else
{return out__7952;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__7956__7957 = cljs.core.aclone.call(null,arr);
(G__7956__7957[i] = a);
return G__7956__7957;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__7958__7959 = cljs.core.aclone.call(null,arr);
(G__7958__7959[i] = a);
(G__7958__7959[j] = b);
return G__7958__7959;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__7960 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__7960,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__7960,(2 * i),(new_arr__7960.length - (2 * i)));
return new_arr__7960;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__7961 = inode.ensure_editable(edit);
(editable__7961.arr[i] = a);
return editable__7961;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__7962 = inode.ensure_editable(edit);
(editable__7962.arr[i] = a);
(editable__7962.arr[j] = b);
return editable__7962;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__7963 = arr.length;
var i__7964 = 0;
var init__7965 = init;
while(true){
if((i__7964 < len__7963))
{var init__7968 = (function (){var k__7966 = (arr[i__7964]);
if((k__7966 != null))
{return f.call(null,init__7965,k__7966,(arr[(i__7964 + 1)]));
} else
{var node__7967 = (arr[(i__7964 + 1)]);
if((node__7967 != null))
{return node__7967.kv_reduce(f,init__7965);
} else
{return init__7965;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7968))
{return cljs.core.deref.call(null,init__7968);
} else
{{
var G__7969 = (i__7964 + 2);
var G__7970 = init__7968;
i__7964 = G__7969;
init__7965 = G__7970;
continue;
}
}
} else
{return init__7965;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__7971 = this;
var inode__7972 = this;
if((this__7971.bitmap === bit))
{return null;
} else
{var editable__7973 = inode__7972.ensure_editable(e);
var earr__7974 = editable__7973.arr;
var len__7975 = earr__7974.length;
editable__7973.bitmap = (bit ^ editable__7973.bitmap);
cljs.core.array_copy.call(null,earr__7974,(2 * (i + 1)),earr__7974,(2 * i),(len__7975 - (2 * (i + 1))));
(earr__7974[(len__7975 - 2)] = null);
(earr__7974[(len__7975 - 1)] = null);
return editable__7973;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__7976 = this;
var inode__7977 = this;
var bit__7978 = (1 << ((hash >>> shift) & 0x01f));
var idx__7979 = cljs.core.bitmap_indexed_node_index.call(null,this__7976.bitmap,bit__7978);
if(((this__7976.bitmap & bit__7978) === 0))
{var n__7980 = cljs.core.bit_count.call(null,this__7976.bitmap);
if(((2 * n__7980) < this__7976.arr.length))
{var editable__7981 = inode__7977.ensure_editable(edit);
var earr__7982 = editable__7981.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__7982,(2 * idx__7979),earr__7982,(2 * (idx__7979 + 1)),(2 * (n__7980 - idx__7979)));
(earr__7982[(2 * idx__7979)] = key);
(earr__7982[((2 * idx__7979) + 1)] = val);
editable__7981.bitmap = (editable__7981.bitmap | bit__7978);
return editable__7981;
} else
{if((n__7980 >= 16))
{var nodes__7983 = cljs.core.make_array.call(null,32);
var jdx__7984 = ((hash >>> shift) & 0x01f);
(nodes__7983[jdx__7984] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__7985 = 0;
var j__7986 = 0;
while(true){
if((i__7985 < 32))
{if((((this__7976.bitmap >>> i__7985) & 1) === 0))
{{
var G__8039 = (i__7985 + 1);
var G__8040 = j__7986;
i__7985 = G__8039;
j__7986 = G__8040;
continue;
}
} else
{(nodes__7983[i__7985] = (((null != (this__7976.arr[j__7986])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__7976.arr[j__7986])),(this__7976.arr[j__7986]),(this__7976.arr[(j__7986 + 1)]),added_leaf_QMARK_):(this__7976.arr[(j__7986 + 1)])));
{
var G__8041 = (i__7985 + 1);
var G__8042 = (j__7986 + 2);
i__7985 = G__8041;
j__7986 = G__8042;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__7980 + 1),nodes__7983));
} else
{if("\uFDD0'else")
{var new_arr__7987 = cljs.core.make_array.call(null,(2 * (n__7980 + 4)));
cljs.core.array_copy.call(null,this__7976.arr,0,new_arr__7987,0,(2 * idx__7979));
(new_arr__7987[(2 * idx__7979)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__7987[((2 * idx__7979) + 1)] = val);
cljs.core.array_copy.call(null,this__7976.arr,(2 * idx__7979),new_arr__7987,(2 * (idx__7979 + 1)),(2 * (n__7980 - idx__7979)));
var editable__7988 = inode__7977.ensure_editable(edit);
editable__7988.arr = new_arr__7987;
editable__7988.bitmap = (editable__7988.bitmap | bit__7978);
return editable__7988;
} else
{return null;
}
}
}
} else
{var key_or_nil__7989 = (this__7976.arr[(2 * idx__7979)]);
var val_or_node__7990 = (this__7976.arr[((2 * idx__7979) + 1)]);
if((null == key_or_nil__7989))
{var n__7991 = val_or_node__7990.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__7991 === val_or_node__7990))
{return inode__7977;
} else
{return cljs.core.edit_and_set.call(null,inode__7977,edit,((2 * idx__7979) + 1),n__7991);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__7989))
{if((val === val_or_node__7990))
{return inode__7977;
} else
{return cljs.core.edit_and_set.call(null,inode__7977,edit,((2 * idx__7979) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__7977,edit,(2 * idx__7979),null,((2 * idx__7979) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__7989,val_or_node__7990,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__7992 = this;
var inode__7993 = this;
return cljs.core.create_inode_seq.call(null,this__7992.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__7994 = this;
var inode__7995 = this;
var bit__7996 = (1 << ((hash >>> shift) & 0x01f));
if(((this__7994.bitmap & bit__7996) === 0))
{return inode__7995;
} else
{var idx__7997 = cljs.core.bitmap_indexed_node_index.call(null,this__7994.bitmap,bit__7996);
var key_or_nil__7998 = (this__7994.arr[(2 * idx__7997)]);
var val_or_node__7999 = (this__7994.arr[((2 * idx__7997) + 1)]);
if((null == key_or_nil__7998))
{var n__8000 = val_or_node__7999.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8000 === val_or_node__7999))
{return inode__7995;
} else
{if((null != n__8000))
{return cljs.core.edit_and_set.call(null,inode__7995,edit,((2 * idx__7997) + 1),n__8000);
} else
{if((this__7994.bitmap === bit__7996))
{return null;
} else
{if("\uFDD0'else")
{return inode__7995.edit_and_remove_pair(edit,bit__7996,idx__7997);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__7998))
{(removed_leaf_QMARK_[0] = true);
return inode__7995.edit_and_remove_pair(edit,bit__7996,idx__7997);
} else
{if("\uFDD0'else")
{return inode__7995;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8001 = this;
var inode__8002 = this;
if((e === this__8001.edit))
{return inode__8002;
} else
{var n__8003 = cljs.core.bit_count.call(null,this__8001.bitmap);
var new_arr__8004 = cljs.core.make_array.call(null,(((n__8003 < 0))?4:(2 * (n__8003 + 1))));
cljs.core.array_copy.call(null,this__8001.arr,0,new_arr__8004,0,(2 * n__8003));
return (new cljs.core.BitmapIndexedNode(e,this__8001.bitmap,new_arr__8004));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8005 = this;
var inode__8006 = this;
return cljs.core.inode_kv_reduce.call(null,this__8005.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__8043 = null;
var G__8043__3 = (function (shift,hash,key){
var this__8007 = this;
var inode__8008 = this;
var bit__8009 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8007.bitmap & bit__8009) === 0))
{return null;
} else
{var idx__8010 = cljs.core.bitmap_indexed_node_index.call(null,this__8007.bitmap,bit__8009);
var key_or_nil__8011 = (this__8007.arr[(2 * idx__8010)]);
var val_or_node__8012 = (this__8007.arr[((2 * idx__8010) + 1)]);
if((null == key_or_nil__8011))
{return val_or_node__8012.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8011))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8011,val_or_node__8012]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__8043__4 = (function (shift,hash,key,not_found){
var this__8013 = this;
var inode__8014 = this;
var bit__8015 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8013.bitmap & bit__8015) === 0))
{return not_found;
} else
{var idx__8016 = cljs.core.bitmap_indexed_node_index.call(null,this__8013.bitmap,bit__8015);
var key_or_nil__8017 = (this__8013.arr[(2 * idx__8016)]);
var val_or_node__8018 = (this__8013.arr[((2 * idx__8016) + 1)]);
if((null == key_or_nil__8017))
{return val_or_node__8018.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8017))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8017,val_or_node__8018]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__8043 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8043__3.call(this,shift,hash,key);
case 4:
return G__8043__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8043;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8019 = this;
var inode__8020 = this;
var bit__8021 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8019.bitmap & bit__8021) === 0))
{return inode__8020;
} else
{var idx__8022 = cljs.core.bitmap_indexed_node_index.call(null,this__8019.bitmap,bit__8021);
var key_or_nil__8023 = (this__8019.arr[(2 * idx__8022)]);
var val_or_node__8024 = (this__8019.arr[((2 * idx__8022) + 1)]);
if((null == key_or_nil__8023))
{var n__8025 = val_or_node__8024.inode_without((shift + 5),hash,key);
if((n__8025 === val_or_node__8024))
{return inode__8020;
} else
{if((null != n__8025))
{return (new cljs.core.BitmapIndexedNode(null,this__8019.bitmap,cljs.core.clone_and_set.call(null,this__8019.arr,((2 * idx__8022) + 1),n__8025)));
} else
{if((this__8019.bitmap === bit__8021))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8019.bitmap ^ bit__8021),cljs.core.remove_pair.call(null,this__8019.arr,idx__8022)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8023))
{return (new cljs.core.BitmapIndexedNode(null,(this__8019.bitmap ^ bit__8021),cljs.core.remove_pair.call(null,this__8019.arr,idx__8022)));
} else
{if("\uFDD0'else")
{return inode__8020;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8026 = this;
var inode__8027 = this;
var bit__8028 = (1 << ((hash >>> shift) & 0x01f));
var idx__8029 = cljs.core.bitmap_indexed_node_index.call(null,this__8026.bitmap,bit__8028);
if(((this__8026.bitmap & bit__8028) === 0))
{var n__8030 = cljs.core.bit_count.call(null,this__8026.bitmap);
if((n__8030 >= 16))
{var nodes__8031 = cljs.core.make_array.call(null,32);
var jdx__8032 = ((hash >>> shift) & 0x01f);
(nodes__8031[jdx__8032] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8033 = 0;
var j__8034 = 0;
while(true){
if((i__8033 < 32))
{if((((this__8026.bitmap >>> i__8033) & 1) === 0))
{{
var G__8044 = (i__8033 + 1);
var G__8045 = j__8034;
i__8033 = G__8044;
j__8034 = G__8045;
continue;
}
} else
{(nodes__8031[i__8033] = (((null != (this__8026.arr[j__8034])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8026.arr[j__8034])),(this__8026.arr[j__8034]),(this__8026.arr[(j__8034 + 1)]),added_leaf_QMARK_):(this__8026.arr[(j__8034 + 1)])));
{
var G__8046 = (i__8033 + 1);
var G__8047 = (j__8034 + 2);
i__8033 = G__8046;
j__8034 = G__8047;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8030 + 1),nodes__8031));
} else
{var new_arr__8035 = cljs.core.make_array.call(null,(2 * (n__8030 + 1)));
cljs.core.array_copy.call(null,this__8026.arr,0,new_arr__8035,0,(2 * idx__8029));
(new_arr__8035[(2 * idx__8029)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__8035[((2 * idx__8029) + 1)] = val);
cljs.core.array_copy.call(null,this__8026.arr,(2 * idx__8029),new_arr__8035,(2 * (idx__8029 + 1)),(2 * (n__8030 - idx__8029)));
return (new cljs.core.BitmapIndexedNode(null,(this__8026.bitmap | bit__8028),new_arr__8035));
}
} else
{var key_or_nil__8036 = (this__8026.arr[(2 * idx__8029)]);
var val_or_node__8037 = (this__8026.arr[((2 * idx__8029) + 1)]);
if((null == key_or_nil__8036))
{var n__8038 = val_or_node__8037.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8038 === val_or_node__8037))
{return inode__8027;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8026.bitmap,cljs.core.clone_and_set.call(null,this__8026.arr,((2 * idx__8029) + 1),n__8038)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8036))
{if((val === val_or_node__8037))
{return inode__8027;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8026.bitmap,cljs.core.clone_and_set.call(null,this__8026.arr,((2 * idx__8029) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__8026.bitmap,cljs.core.clone_and_set.call(null,this__8026.arr,(2 * idx__8029),null,((2 * idx__8029) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8036,val_or_node__8037,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8048 = array_node.arr;
var len__8049 = (2 * (array_node.cnt - 1));
var new_arr__8050 = cljs.core.make_array.call(null,len__8049);
var i__8051 = 0;
var j__8052 = 1;
var bitmap__8053 = 0;
while(true){
if((i__8051 < len__8049))
{if((function (){var and__3822__auto____8054 = (i__8051 != idx);
if(and__3822__auto____8054)
{return (null != (arr__8048[i__8051]));
} else
{return and__3822__auto____8054;
}
})())
{(new_arr__8050[j__8052] = (arr__8048[i__8051]));
{
var G__8055 = (i__8051 + 1);
var G__8056 = (j__8052 + 2);
var G__8057 = (bitmap__8053 | (1 << i__8051));
i__8051 = G__8055;
j__8052 = G__8056;
bitmap__8053 = G__8057;
continue;
}
} else
{{
var G__8058 = (i__8051 + 1);
var G__8059 = j__8052;
var G__8060 = bitmap__8053;
i__8051 = G__8058;
j__8052 = G__8059;
bitmap__8053 = G__8060;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8053,new_arr__8050));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8061 = this;
var inode__8062 = this;
var idx__8063 = ((hash >>> shift) & 0x01f);
var node__8064 = (this__8061.arr[idx__8063]);
if((null == node__8064))
{return (new cljs.core.ArrayNode(null,(this__8061.cnt + 1),cljs.core.clone_and_set.call(null,this__8061.arr,idx__8063,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8065 = node__8064.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8065 === node__8064))
{return inode__8062;
} else
{return (new cljs.core.ArrayNode(null,this__8061.cnt,cljs.core.clone_and_set.call(null,this__8061.arr,idx__8063,n__8065)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8066 = this;
var inode__8067 = this;
var idx__8068 = ((hash >>> shift) & 0x01f);
var node__8069 = (this__8066.arr[idx__8068]);
if((null != node__8069))
{var n__8070 = node__8069.inode_without((shift + 5),hash,key);
if((n__8070 === node__8069))
{return inode__8067;
} else
{if((n__8070 == null))
{if((this__8066.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8067,null,idx__8068);
} else
{return (new cljs.core.ArrayNode(null,(this__8066.cnt - 1),cljs.core.clone_and_set.call(null,this__8066.arr,idx__8068,n__8070)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8066.cnt,cljs.core.clone_and_set.call(null,this__8066.arr,idx__8068,n__8070)));
} else
{return null;
}
}
}
} else
{return inode__8067;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__8102 = null;
var G__8102__3 = (function (shift,hash,key){
var this__8071 = this;
var inode__8072 = this;
var idx__8073 = ((hash >>> shift) & 0x01f);
var node__8074 = (this__8071.arr[idx__8073]);
if((null != node__8074))
{return node__8074.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__8102__4 = (function (shift,hash,key,not_found){
var this__8075 = this;
var inode__8076 = this;
var idx__8077 = ((hash >>> shift) & 0x01f);
var node__8078 = (this__8075.arr[idx__8077]);
if((null != node__8078))
{return node__8078.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__8102 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8102__3.call(this,shift,hash,key);
case 4:
return G__8102__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8102;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8079 = this;
var inode__8080 = this;
return cljs.core.create_array_node_seq.call(null,this__8079.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8081 = this;
var inode__8082 = this;
if((e === this__8081.edit))
{return inode__8082;
} else
{return (new cljs.core.ArrayNode(e,this__8081.cnt,cljs.core.aclone.call(null,this__8081.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8083 = this;
var inode__8084 = this;
var idx__8085 = ((hash >>> shift) & 0x01f);
var node__8086 = (this__8083.arr[idx__8085]);
if((null == node__8086))
{var editable__8087 = cljs.core.edit_and_set.call(null,inode__8084,edit,idx__8085,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8087.cnt = (editable__8087.cnt + 1);
return editable__8087;
} else
{var n__8088 = node__8086.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8088 === node__8086))
{return inode__8084;
} else
{return cljs.core.edit_and_set.call(null,inode__8084,edit,idx__8085,n__8088);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8089 = this;
var inode__8090 = this;
var idx__8091 = ((hash >>> shift) & 0x01f);
var node__8092 = (this__8089.arr[idx__8091]);
if((null == node__8092))
{return inode__8090;
} else
{var n__8093 = node__8092.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8093 === node__8092))
{return inode__8090;
} else
{if((null == n__8093))
{if((this__8089.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8090,edit,idx__8091);
} else
{var editable__8094 = cljs.core.edit_and_set.call(null,inode__8090,edit,idx__8091,n__8093);
editable__8094.cnt = (editable__8094.cnt - 1);
return editable__8094;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8090,edit,idx__8091,n__8093);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8095 = this;
var inode__8096 = this;
var len__8097 = this__8095.arr.length;
var i__8098 = 0;
var init__8099 = init;
while(true){
if((i__8098 < len__8097))
{var node__8100 = (this__8095.arr[i__8098]);
if((node__8100 != null))
{var init__8101 = node__8100.kv_reduce(f,init__8099);
if(cljs.core.reduced_QMARK_.call(null,init__8101))
{return cljs.core.deref.call(null,init__8101);
} else
{{
var G__8103 = (i__8098 + 1);
var G__8104 = init__8101;
i__8098 = G__8103;
init__8099 = G__8104;
continue;
}
}
} else
{return null;
}
} else
{return init__8099;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8105 = (2 * cnt);
var i__8106 = 0;
while(true){
if((i__8106 < lim__8105))
{if(cljs.core._EQ_.call(null,key,(arr[i__8106])))
{return i__8106;
} else
{{
var G__8107 = (i__8106 + 2);
i__8106 = G__8107;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8108 = this;
var inode__8109 = this;
if((hash === this__8108.collision_hash))
{var idx__8110 = cljs.core.hash_collision_node_find_index.call(null,this__8108.arr,this__8108.cnt,key);
if((idx__8110 === -1))
{var len__8111 = this__8108.arr.length;
var new_arr__8112 = cljs.core.make_array.call(null,(len__8111 + 2));
cljs.core.array_copy.call(null,this__8108.arr,0,new_arr__8112,0,len__8111);
(new_arr__8112[len__8111] = key);
(new_arr__8112[(len__8111 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__8108.collision_hash,(this__8108.cnt + 1),new_arr__8112));
} else
{if(cljs.core._EQ_.call(null,(this__8108.arr[idx__8110]),val))
{return inode__8109;
} else
{return (new cljs.core.HashCollisionNode(null,this__8108.collision_hash,this__8108.cnt,cljs.core.clone_and_set.call(null,this__8108.arr,(idx__8110 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8108.collision_hash >>> shift) & 0x01f)),[null,inode__8109])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8113 = this;
var inode__8114 = this;
var idx__8115 = cljs.core.hash_collision_node_find_index.call(null,this__8113.arr,this__8113.cnt,key);
if((idx__8115 === -1))
{return inode__8114;
} else
{if((this__8113.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8113.collision_hash,(this__8113.cnt - 1),cljs.core.remove_pair.call(null,this__8113.arr,cljs.core.quot.call(null,idx__8115,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__8142 = null;
var G__8142__3 = (function (shift,hash,key){
var this__8116 = this;
var inode__8117 = this;
var idx__8118 = cljs.core.hash_collision_node_find_index.call(null,this__8116.arr,this__8116.cnt,key);
if((idx__8118 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__8116.arr[idx__8118])))
{return cljs.core.PersistentVector.fromArray([(this__8116.arr[idx__8118]),(this__8116.arr[(idx__8118 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__8142__4 = (function (shift,hash,key,not_found){
var this__8119 = this;
var inode__8120 = this;
var idx__8121 = cljs.core.hash_collision_node_find_index.call(null,this__8119.arr,this__8119.cnt,key);
if((idx__8121 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__8119.arr[idx__8121])))
{return cljs.core.PersistentVector.fromArray([(this__8119.arr[idx__8121]),(this__8119.arr[(idx__8121 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__8142 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__8142__3.call(this,shift,hash,key);
case 4:
return G__8142__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8142;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8122 = this;
var inode__8123 = this;
return cljs.core.create_inode_seq.call(null,this__8122.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__8143 = null;
var G__8143__1 = (function (e){
var this__8124 = this;
var inode__8125 = this;
if((e === this__8124.edit))
{return inode__8125;
} else
{var new_arr__8126 = cljs.core.make_array.call(null,(2 * (this__8124.cnt + 1)));
cljs.core.array_copy.call(null,this__8124.arr,0,new_arr__8126,0,(2 * this__8124.cnt));
return (new cljs.core.HashCollisionNode(e,this__8124.collision_hash,this__8124.cnt,new_arr__8126));
}
});
var G__8143__3 = (function (e,count,array){
var this__8127 = this;
var inode__8128 = this;
if((e === this__8127.edit))
{this__8127.arr = array;
this__8127.cnt = count;
return inode__8128;
} else
{return (new cljs.core.HashCollisionNode(this__8127.edit,this__8127.collision_hash,count,array));
}
});
G__8143 = function(e,count,array){
switch(arguments.length){
case 1:
return G__8143__1.call(this,e);
case 3:
return G__8143__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8143;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8129 = this;
var inode__8130 = this;
if((hash === this__8129.collision_hash))
{var idx__8131 = cljs.core.hash_collision_node_find_index.call(null,this__8129.arr,this__8129.cnt,key);
if((idx__8131 === -1))
{if((this__8129.arr.length > (2 * this__8129.cnt)))
{var editable__8132 = cljs.core.edit_and_set.call(null,inode__8130,edit,(2 * this__8129.cnt),key,((2 * this__8129.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__8132.cnt = (editable__8132.cnt + 1);
return editable__8132;
} else
{var len__8133 = this__8129.arr.length;
var new_arr__8134 = cljs.core.make_array.call(null,(len__8133 + 2));
cljs.core.array_copy.call(null,this__8129.arr,0,new_arr__8134,0,len__8133);
(new_arr__8134[len__8133] = key);
(new_arr__8134[(len__8133 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__8130.ensure_editable(edit,(this__8129.cnt + 1),new_arr__8134);
}
} else
{if(((this__8129.arr[(idx__8131 + 1)]) === val))
{return inode__8130;
} else
{return cljs.core.edit_and_set.call(null,inode__8130,edit,(idx__8131 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8129.collision_hash >>> shift) & 0x01f)),[null,inode__8130,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8135 = this;
var inode__8136 = this;
var idx__8137 = cljs.core.hash_collision_node_find_index.call(null,this__8135.arr,this__8135.cnt,key);
if((idx__8137 === -1))
{return inode__8136;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8135.cnt === 1))
{return null;
} else
{var editable__8138 = inode__8136.ensure_editable(edit);
var earr__8139 = editable__8138.arr;
(earr__8139[idx__8137] = (earr__8139[((2 * this__8135.cnt) - 2)]));
(earr__8139[(idx__8137 + 1)] = (earr__8139[((2 * this__8135.cnt) - 1)]));
(earr__8139[((2 * this__8135.cnt) - 1)] = null);
(earr__8139[((2 * this__8135.cnt) - 2)] = null);
editable__8138.cnt = (editable__8138.cnt - 1);
return editable__8138;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8140 = this;
var inode__8141 = this;
return cljs.core.inode_kv_reduce.call(null,this__8140.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8144 = cljs.core.hash.call(null,key1);
if((key1hash__8144 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8144,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8145 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8144,key1,val1,added_leaf_QMARK___8145).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8145);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8146 = cljs.core.hash.call(null,key1);
if((key1hash__8146 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8146,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8147 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8146,key1,val1,added_leaf_QMARK___8147).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8147);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8148 = this;
var h__272__auto____8149 = this__8148.__hash;
if((h__272__auto____8149 != null))
{return h__272__auto____8149;
} else
{var h__272__auto____8150 = cljs.core.hash_coll.call(null,coll);
this__8148.__hash = h__272__auto____8150;
return h__272__auto____8150;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8151 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8152 = this;
var this$__8153 = this;
return cljs.core.pr_str.call(null,this$__8153);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8154 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8155 = this;
if((this__8155.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8155.nodes[this__8155.i]),(this__8155.nodes[(this__8155.i + 1)])]);
} else
{return cljs.core.first.call(null,this__8155.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8156 = this;
if((this__8156.s == null))
{return cljs.core.create_inode_seq.call(null,this__8156.nodes,(this__8156.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8156.nodes,this__8156.i,cljs.core.next.call(null,this__8156.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8157 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8158 = this;
return (new cljs.core.NodeSeq(meta,this__8158.nodes,this__8158.i,this__8158.s,this__8158.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8159 = this;
return this__8159.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8160 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8160.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8161 = nodes.length;
var j__8162 = i;
while(true){
if((j__8162 < len__8161))
{if((null != (nodes[j__8162])))
{return (new cljs.core.NodeSeq(null,nodes,j__8162,null,null));
} else
{var temp__3971__auto____8163 = (nodes[(j__8162 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8163))
{var node__8164 = temp__3971__auto____8163;
var temp__3971__auto____8165 = node__8164.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8165))
{var node_seq__8166 = temp__3971__auto____8165;
return (new cljs.core.NodeSeq(null,nodes,(j__8162 + 2),node_seq__8166,null));
} else
{{
var G__8167 = (j__8162 + 2);
j__8162 = G__8167;
continue;
}
}
} else
{{
var G__8168 = (j__8162 + 2);
j__8162 = G__8168;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8169 = this;
var h__272__auto____8170 = this__8169.__hash;
if((h__272__auto____8170 != null))
{return h__272__auto____8170;
} else
{var h__272__auto____8171 = cljs.core.hash_coll.call(null,coll);
this__8169.__hash = h__272__auto____8171;
return h__272__auto____8171;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8172 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8173 = this;
var this$__8174 = this;
return cljs.core.pr_str.call(null,this$__8174);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8175 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8176 = this;
return cljs.core.first.call(null,this__8176.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8177 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8177.nodes,this__8177.i,cljs.core.next.call(null,this__8177.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8178 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8179 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8179.nodes,this__8179.i,this__8179.s,this__8179.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8180 = this;
return this__8180.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8181 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8181.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8182 = nodes.length;
var j__8183 = i;
while(true){
if((j__8183 < len__8182))
{var temp__3971__auto____8184 = (nodes[j__8183]);
if(cljs.core.truth_(temp__3971__auto____8184))
{var nj__8185 = temp__3971__auto____8184;
var temp__3971__auto____8186 = nj__8185.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8186))
{var ns__8187 = temp__3971__auto____8186;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8183 + 1),ns__8187,null));
} else
{{
var G__8188 = (j__8183 + 1);
j__8183 = G__8188;
continue;
}
}
} else
{{
var G__8189 = (j__8183 + 1);
j__8183 = G__8189;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8194 = this;
return (new cljs.core.TransientHashMap({},this__8194.root,this__8194.cnt,this__8194.has_nil_QMARK_,this__8194.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8195 = this;
var h__272__auto____8196 = this__8195.__hash;
if((h__272__auto____8196 != null))
{return h__272__auto____8196;
} else
{var h__272__auto____8197 = cljs.core.hash_imap.call(null,coll);
this__8195.__hash = h__272__auto____8197;
return h__272__auto____8197;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8198 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8199 = this;
if((k == null))
{if(cljs.core.truth_(this__8199.has_nil_QMARK_))
{return this__8199.nil_val;
} else
{return not_found;
}
} else
{if((this__8199.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__8199.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8200 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3822__auto____8201 = this__8200.has_nil_QMARK_;
if(cljs.core.truth_(and__3822__auto____8201))
{return (v === this__8200.nil_val);
} else
{return and__3822__auto____8201;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8200.meta,(cljs.core.truth_(this__8200.has_nil_QMARK_)?this__8200.cnt:(this__8200.cnt + 1)),this__8200.root,true,v,null));
}
} else
{var added_leaf_QMARK___8202 = [false];
var new_root__8203 = (((this__8200.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8200.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8202);
if((new_root__8203 === this__8200.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8200.meta,(cljs.core.truth_((added_leaf_QMARK___8202[0]))?(this__8200.cnt + 1):this__8200.cnt),new_root__8203,this__8200.has_nil_QMARK_,this__8200.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8204 = this;
if((k == null))
{return this__8204.has_nil_QMARK_;
} else
{if((this__8204.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__8204.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8225 = null;
var G__8225__2 = (function (tsym8192,k){
var this__8205 = this;
var tsym8192__8206 = this;
var coll__8207 = tsym8192__8206;
return cljs.core._lookup.call(null,coll__8207,k);
});
var G__8225__3 = (function (tsym8193,k,not_found){
var this__8208 = this;
var tsym8193__8209 = this;
var coll__8210 = tsym8193__8209;
return cljs.core._lookup.call(null,coll__8210,k,not_found);
});
G__8225 = function(tsym8193,k,not_found){
switch(arguments.length){
case 2:
return G__8225__2.call(this,tsym8193,k);
case 3:
return G__8225__3.call(this,tsym8193,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8225;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym8190,args8191){
return tsym8190.call.apply(tsym8190,[tsym8190].concat(cljs.core.aclone.call(null,args8191)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8211 = this;
var init__8212 = (cljs.core.truth_(this__8211.has_nil_QMARK_)?f.call(null,init,null,this__8211.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8212))
{return cljs.core.deref.call(null,init__8212);
} else
{if((null != this__8211.root))
{return this__8211.root.kv_reduce(f,init__8212);
} else
{if("\uFDD0'else")
{return init__8212;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8213 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8214 = this;
var this$__8215 = this;
return cljs.core.pr_str.call(null,this$__8215);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8216 = this;
if((this__8216.cnt > 0))
{var s__8217 = (((null != this__8216.root))?this__8216.root.inode_seq():null);
if(cljs.core.truth_(this__8216.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8216.nil_val]),s__8217);
} else
{return s__8217;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8218 = this;
return this__8218.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8219 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8220 = this;
return (new cljs.core.PersistentHashMap(meta,this__8220.cnt,this__8220.root,this__8220.has_nil_QMARK_,this__8220.nil_val,this__8220.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8221 = this;
return this__8221.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8222 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8222.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8223 = this;
if((k == null))
{if(cljs.core.truth_(this__8223.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__8223.meta,(this__8223.cnt - 1),this__8223.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8223.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8224 = this__8223.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8224 === this__8223.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8223.meta,(this__8223.cnt - 1),new_root__8224,this__8223.has_nil_QMARK_,this__8223.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8226 = ks.length;
var i__8227 = 0;
var out__8228 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8227 < len__8226))
{{
var G__8229 = (i__8227 + 1);
var G__8230 = cljs.core.assoc_BANG_.call(null,out__8228,(ks[i__8227]),(vs[i__8227]));
i__8227 = G__8229;
out__8228 = G__8230;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8228);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8231 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8232 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8233 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8234 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8235 = this;
if((k == null))
{if(cljs.core.truth_(this__8235.has_nil_QMARK_))
{return this__8235.nil_val;
} else
{return null;
}
} else
{if((this__8235.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__8235.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8236 = this;
if((k == null))
{if(cljs.core.truth_(this__8236.has_nil_QMARK_))
{return this__8236.nil_val;
} else
{return not_found;
}
} else
{if((this__8236.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__8236.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8237 = this;
if(cljs.core.truth_(this__8237.edit))
{return this__8237.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8238 = this;
var tcoll__8239 = this;
if(cljs.core.truth_(this__8238.edit))
{if((function (){var G__8240__8241 = o;
if((G__8240__8241 != null))
{if((function (){var or__3824__auto____8242 = (G__8240__8241.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8242)
{return or__3824__auto____8242;
} else
{return G__8240__8241.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8240__8241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8240__8241);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8240__8241);
}
})())
{return tcoll__8239.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8243 = cljs.core.seq.call(null,o);
var tcoll__8244 = tcoll__8239;
while(true){
var temp__3971__auto____8245 = cljs.core.first.call(null,es__8243);
if(cljs.core.truth_(temp__3971__auto____8245))
{var e__8246 = temp__3971__auto____8245;
{
var G__8257 = cljs.core.next.call(null,es__8243);
var G__8258 = tcoll__8244.assoc_BANG_(cljs.core.key.call(null,e__8246),cljs.core.val.call(null,e__8246));
es__8243 = G__8257;
tcoll__8244 = G__8258;
continue;
}
} else
{return tcoll__8244;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8247 = this;
var tcoll__8248 = this;
if(cljs.core.truth_(this__8247.edit))
{if((k == null))
{if((this__8247.nil_val === v))
{} else
{this__8247.nil_val = v;
}
if(cljs.core.truth_(this__8247.has_nil_QMARK_))
{} else
{this__8247.count = (this__8247.count + 1);
this__8247.has_nil_QMARK_ = true;
}
return tcoll__8248;
} else
{var added_leaf_QMARK___8249 = [false];
var node__8250 = (((this__8247.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8247.root).inode_assoc_BANG_(this__8247.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8249);
if((node__8250 === this__8247.root))
{} else
{this__8247.root = node__8250;
}
if(cljs.core.truth_((added_leaf_QMARK___8249[0])))
{this__8247.count = (this__8247.count + 1);
} else
{}
return tcoll__8248;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8251 = this;
var tcoll__8252 = this;
if(cljs.core.truth_(this__8251.edit))
{if((k == null))
{if(cljs.core.truth_(this__8251.has_nil_QMARK_))
{this__8251.has_nil_QMARK_ = false;
this__8251.nil_val = null;
this__8251.count = (this__8251.count - 1);
return tcoll__8252;
} else
{return tcoll__8252;
}
} else
{if((this__8251.root == null))
{return tcoll__8252;
} else
{var removed_leaf_QMARK___8253 = [false];
var node__8254 = this__8251.root.inode_without_BANG_(this__8251.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8253);
if((node__8254 === this__8251.root))
{} else
{this__8251.root = node__8254;
}
if(cljs.core.truth_((removed_leaf_QMARK___8253[0])))
{this__8251.count = (this__8251.count - 1);
} else
{}
return tcoll__8252;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8255 = this;
var tcoll__8256 = this;
if(cljs.core.truth_(this__8255.edit))
{this__8255.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8255.count,this__8255.root,this__8255.has_nil_QMARK_,this__8255.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8259 = node;
var stack__8260 = stack;
while(true){
if((t__8259 != null))
{{
var G__8261 = (cljs.core.truth_(ascending_QMARK_)?t__8259.left:t__8259.right);
var G__8262 = cljs.core.conj.call(null,stack__8260,t__8259);
t__8259 = G__8261;
stack__8260 = G__8262;
continue;
}
} else
{return stack__8260;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8263 = this;
var h__272__auto____8264 = this__8263.__hash;
if((h__272__auto____8264 != null))
{return h__272__auto____8264;
} else
{var h__272__auto____8265 = cljs.core.hash_coll.call(null,coll);
this__8263.__hash = h__272__auto____8265;
return h__272__auto____8265;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8266 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8267 = this;
var this$__8268 = this;
return cljs.core.pr_str.call(null,this$__8268);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8269 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8270 = this;
if((this__8270.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8270.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8271 = this;
return cljs.core.peek.call(null,this__8271.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8272 = this;
var t__8273 = cljs.core.peek.call(null,this__8272.stack);
var next_stack__8274 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__8272.ascending_QMARK_)?t__8273.right:t__8273.left),cljs.core.pop.call(null,this__8272.stack),this__8272.ascending_QMARK_);
if((next_stack__8274 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8274,this__8272.ascending_QMARK_,(this__8272.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8275 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8276 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8276.stack,this__8276.ascending_QMARK_,this__8276.cnt,this__8276.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8277 = this;
return this__8277.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8278 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8278)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8278;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8279 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8279)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8279;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8280 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8280))
{return cljs.core.deref.call(null,init__8280);
} else
{var init__8281 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__8280):init__8280);
if(cljs.core.reduced_QMARK_.call(null,init__8281))
{return cljs.core.deref.call(null,init__8281);
} else
{var init__8282 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__8281):init__8281);
if(cljs.core.reduced_QMARK_.call(null,init__8282))
{return cljs.core.deref.call(null,init__8282);
} else
{return init__8282;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8287 = this;
var h__272__auto____8288 = this__8287.__hash;
if((h__272__auto____8288 != null))
{return h__272__auto____8288;
} else
{var h__272__auto____8289 = cljs.core.hash_coll.call(null,coll);
this__8287.__hash = h__272__auto____8289;
return h__272__auto____8289;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8290 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8291 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8292 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8292.key,this__8292.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__8339 = null;
var G__8339__2 = (function (tsym8285,k){
var this__8293 = this;
var tsym8285__8294 = this;
var node__8295 = tsym8285__8294;
return cljs.core._lookup.call(null,node__8295,k);
});
var G__8339__3 = (function (tsym8286,k,not_found){
var this__8296 = this;
var tsym8286__8297 = this;
var node__8298 = tsym8286__8297;
return cljs.core._lookup.call(null,node__8298,k,not_found);
});
G__8339 = function(tsym8286,k,not_found){
switch(arguments.length){
case 2:
return G__8339__2.call(this,tsym8286,k);
case 3:
return G__8339__3.call(this,tsym8286,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8339;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym8283,args8284){
return tsym8283.call.apply(tsym8283,[tsym8283].concat(cljs.core.aclone.call(null,args8284)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8299 = this;
return cljs.core.PersistentVector.fromArray([this__8299.key,this__8299.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8300 = this;
return this__8300.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8301 = this;
return this__8301.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8302 = this;
var node__8303 = this;
return ins.balance_right(node__8303);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8304 = this;
var node__8305 = this;
return (new cljs.core.RedNode(this__8304.key,this__8304.val,this__8304.left,this__8304.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8306 = this;
var node__8307 = this;
return cljs.core.balance_right_del.call(null,this__8306.key,this__8306.val,this__8306.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8308 = this;
var node__8309 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8310 = this;
var node__8311 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8311,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8312 = this;
var node__8313 = this;
return cljs.core.balance_left_del.call(null,this__8312.key,this__8312.val,del,this__8312.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8314 = this;
var node__8315 = this;
return ins.balance_left(node__8315);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8316 = this;
var node__8317 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8317,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8340 = null;
var G__8340__0 = (function (){
var this__8320 = this;
var this$__8321 = this;
return cljs.core.pr_str.call(null,this$__8321);
});
G__8340 = function(){
switch(arguments.length){
case 0:
return G__8340__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8340;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8322 = this;
var node__8323 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8323,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8324 = this;
var node__8325 = this;
return node__8325;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8326 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8327 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8328 = this;
return cljs.core.list.call(null,this__8328.key,this__8328.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8330 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8331 = this;
return this__8331.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8332 = this;
return cljs.core.PersistentVector.fromArray([this__8332.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8333 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8333.key,this__8333.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8334 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8335 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8335.key,this__8335.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8336 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8337 = this;
if((n === 0))
{return this__8337.key;
} else
{if((n === 1))
{return this__8337.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8338 = this;
if((n === 0))
{return this__8338.key;
} else
{if((n === 1))
{return this__8338.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8329 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8345 = this;
var h__272__auto____8346 = this__8345.__hash;
if((h__272__auto____8346 != null))
{return h__272__auto____8346;
} else
{var h__272__auto____8347 = cljs.core.hash_coll.call(null,coll);
this__8345.__hash = h__272__auto____8347;
return h__272__auto____8347;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8348 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8349 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8350 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8350.key,this__8350.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__8397 = null;
var G__8397__2 = (function (tsym8343,k){
var this__8351 = this;
var tsym8343__8352 = this;
var node__8353 = tsym8343__8352;
return cljs.core._lookup.call(null,node__8353,k);
});
var G__8397__3 = (function (tsym8344,k,not_found){
var this__8354 = this;
var tsym8344__8355 = this;
var node__8356 = tsym8344__8355;
return cljs.core._lookup.call(null,node__8356,k,not_found);
});
G__8397 = function(tsym8344,k,not_found){
switch(arguments.length){
case 2:
return G__8397__2.call(this,tsym8344,k);
case 3:
return G__8397__3.call(this,tsym8344,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8397;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym8341,args8342){
return tsym8341.call.apply(tsym8341,[tsym8341].concat(cljs.core.aclone.call(null,args8342)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8357 = this;
return cljs.core.PersistentVector.fromArray([this__8357.key,this__8357.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8358 = this;
return this__8358.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8359 = this;
return this__8359.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8360 = this;
var node__8361 = this;
return (new cljs.core.RedNode(this__8360.key,this__8360.val,this__8360.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8362 = this;
var node__8363 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8364 = this;
var node__8365 = this;
return (new cljs.core.RedNode(this__8364.key,this__8364.val,this__8364.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8366 = this;
var node__8367 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8368 = this;
var node__8369 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8369,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8370 = this;
var node__8371 = this;
return (new cljs.core.RedNode(this__8370.key,this__8370.val,del,this__8370.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8372 = this;
var node__8373 = this;
return (new cljs.core.RedNode(this__8372.key,this__8372.val,ins,this__8372.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8374 = this;
var node__8375 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8374.left))
{return (new cljs.core.RedNode(this__8374.key,this__8374.val,this__8374.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8374.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8374.right))
{return (new cljs.core.RedNode(this__8374.right.key,this__8374.right.val,(new cljs.core.BlackNode(this__8374.key,this__8374.val,this__8374.left,this__8374.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8374.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8375,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8398 = null;
var G__8398__0 = (function (){
var this__8378 = this;
var this$__8379 = this;
return cljs.core.pr_str.call(null,this$__8379);
});
G__8398 = function(){
switch(arguments.length){
case 0:
return G__8398__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8398;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8380 = this;
var node__8381 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8380.right))
{return (new cljs.core.RedNode(this__8380.key,this__8380.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8380.left,null)),this__8380.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8380.left))
{return (new cljs.core.RedNode(this__8380.left.key,this__8380.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8380.left.left,null)),(new cljs.core.BlackNode(this__8380.key,this__8380.val,this__8380.left.right,this__8380.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8381,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8382 = this;
var node__8383 = this;
return (new cljs.core.BlackNode(this__8382.key,this__8382.val,this__8382.left,this__8382.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8384 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8385 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8386 = this;
return cljs.core.list.call(null,this__8386.key,this__8386.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8388 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8389 = this;
return this__8389.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8390 = this;
return cljs.core.PersistentVector.fromArray([this__8390.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8391 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8391.key,this__8391.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8392 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8393 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8393.key,this__8393.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8394 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8395 = this;
if((n === 0))
{return this__8395.key;
} else
{if((n === 1))
{return this__8395.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8396 = this;
if((n === 0))
{return this__8396.key;
} else
{if((n === 1))
{return this__8396.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8387 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8399 = comp.call(null,k,tree.key);
if((c__8399 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8399 < 0))
{var ins__8400 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__8400 != null))
{return tree.add_left(ins__8400);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8401 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__8401 != null))
{return tree.add_right(ins__8401);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8402 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8402))
{return (new cljs.core.RedNode(app__8402.key,app__8402.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8402.left)),(new cljs.core.RedNode(right.key,right.val,app__8402.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8402,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8403 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8403))
{return (new cljs.core.RedNode(app__8403.key,app__8403.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8403.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8403.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8403,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__8404 = comp.call(null,k,tree.key);
if((c__8404 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8404 < 0))
{var del__8405 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8406 = (del__8405 != null);
if(or__3824__auto____8406)
{return or__3824__auto____8406;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8405,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8405,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8407 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8408 = (del__8407 != null);
if(or__3824__auto____8408)
{return or__3824__auto____8408;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8407);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8407,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8409 = tree.key;
var c__8410 = comp.call(null,k,tk__8409);
if((c__8410 === 0))
{return tree.replace(tk__8409,v,tree.left,tree.right);
} else
{if((c__8410 < 0))
{return tree.replace(tk__8409,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8409,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8415 = this;
var h__272__auto____8416 = this__8415.__hash;
if((h__272__auto____8416 != null))
{return h__272__auto____8416;
} else
{var h__272__auto____8417 = cljs.core.hash_imap.call(null,coll);
this__8415.__hash = h__272__auto____8417;
return h__272__auto____8417;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8418 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8419 = this;
var n__8420 = coll.entry_at(k);
if((n__8420 != null))
{return n__8420.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8421 = this;
var found__8422 = [null];
var t__8423 = cljs.core.tree_map_add.call(null,this__8421.comp,this__8421.tree,k,v,found__8422);
if((t__8423 == null))
{var found_node__8424 = cljs.core.nth.call(null,found__8422,0);
if(cljs.core._EQ_.call(null,v,found_node__8424.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8421.comp,cljs.core.tree_map_replace.call(null,this__8421.comp,this__8421.tree,k,v),this__8421.cnt,this__8421.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8421.comp,t__8423.blacken(),(this__8421.cnt + 1),this__8421.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8425 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8457 = null;
var G__8457__2 = (function (tsym8413,k){
var this__8426 = this;
var tsym8413__8427 = this;
var coll__8428 = tsym8413__8427;
return cljs.core._lookup.call(null,coll__8428,k);
});
var G__8457__3 = (function (tsym8414,k,not_found){
var this__8429 = this;
var tsym8414__8430 = this;
var coll__8431 = tsym8414__8430;
return cljs.core._lookup.call(null,coll__8431,k,not_found);
});
G__8457 = function(tsym8414,k,not_found){
switch(arguments.length){
case 2:
return G__8457__2.call(this,tsym8414,k);
case 3:
return G__8457__3.call(this,tsym8414,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8457;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym8411,args8412){
return tsym8411.call.apply(tsym8411,[tsym8411].concat(cljs.core.aclone.call(null,args8412)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8432 = this;
if((this__8432.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__8432.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8433 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8434 = this;
if((this__8434.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8434.tree,false,this__8434.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8435 = this;
var this$__8436 = this;
return cljs.core.pr_str.call(null,this$__8436);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8437 = this;
var coll__8438 = this;
var t__8439 = this__8437.tree;
while(true){
if((t__8439 != null))
{var c__8440 = this__8437.comp.call(null,k,t__8439.key);
if((c__8440 === 0))
{return t__8439;
} else
{if((c__8440 < 0))
{{
var G__8458 = t__8439.left;
t__8439 = G__8458;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8459 = t__8439.right;
t__8439 = G__8459;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8441 = this;
if((this__8441.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8441.tree,ascending_QMARK_,this__8441.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8442 = this;
if((this__8442.cnt > 0))
{var stack__8443 = null;
var t__8444 = this__8442.tree;
while(true){
if((t__8444 != null))
{var c__8445 = this__8442.comp.call(null,k,t__8444.key);
if((c__8445 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8443,t__8444),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8445 < 0))
{{
var G__8460 = cljs.core.conj.call(null,stack__8443,t__8444);
var G__8461 = t__8444.left;
stack__8443 = G__8460;
t__8444 = G__8461;
continue;
}
} else
{{
var G__8462 = stack__8443;
var G__8463 = t__8444.right;
stack__8443 = G__8462;
t__8444 = G__8463;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8445 > 0))
{{
var G__8464 = cljs.core.conj.call(null,stack__8443,t__8444);
var G__8465 = t__8444.right;
stack__8443 = G__8464;
t__8444 = G__8465;
continue;
}
} else
{{
var G__8466 = stack__8443;
var G__8467 = t__8444.left;
stack__8443 = G__8466;
t__8444 = G__8467;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8443 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8443,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8446 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8447 = this;
return this__8447.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8448 = this;
if((this__8448.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8448.tree,true,this__8448.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8449 = this;
return this__8449.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8450 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8451 = this;
return (new cljs.core.PersistentTreeMap(this__8451.comp,this__8451.tree,this__8451.cnt,meta,this__8451.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8455 = this;
return this__8455.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8456 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8456.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8452 = this;
var found__8453 = [null];
var t__8454 = cljs.core.tree_map_remove.call(null,this__8452.comp,this__8452.tree,k,found__8453);
if((t__8454 == null))
{if((cljs.core.nth.call(null,found__8453,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8452.comp,null,0,this__8452.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8452.comp,t__8454.blacken(),(this__8452.cnt - 1),this__8452.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__8468 = cljs.core.seq.call(null,keyvals);
var out__8469 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__8468))
{{
var G__8470 = cljs.core.nnext.call(null,in$__8468);
var G__8471 = cljs.core.assoc_BANG_.call(null,out__8469,cljs.core.first.call(null,in$__8468),cljs.core.second.call(null,in$__8468));
in$__8468 = G__8470;
out__8469 = G__8471;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8469);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8472){
var keyvals = cljs.core.seq(arglist__8472);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8473){
var keyvals = cljs.core.seq(arglist__8473);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__8474 = cljs.core.seq.call(null,keyvals);
var out__8475 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__8474))
{{
var G__8476 = cljs.core.nnext.call(null,in$__8474);
var G__8477 = cljs.core.assoc.call(null,out__8475,cljs.core.first.call(null,in$__8474),cljs.core.second.call(null,in$__8474));
in$__8474 = G__8476;
out__8475 = G__8477;
continue;
}
} else
{return out__8475;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8478){
var keyvals = cljs.core.seq(arglist__8478);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__8479 = cljs.core.seq.call(null,keyvals);
var out__8480 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__8479))
{{
var G__8481 = cljs.core.nnext.call(null,in$__8479);
var G__8482 = cljs.core.assoc.call(null,out__8480,cljs.core.first.call(null,in$__8479),cljs.core.second.call(null,in$__8479));
in$__8479 = G__8481;
out__8480 = G__8482;
continue;
}
} else
{return out__8480;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__8483){
var comparator = cljs.core.first(arglist__8483);
var keyvals = cljs.core.rest(arglist__8483);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__8484_SHARP_,p2__8485_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____8486 = p1__8484_SHARP_;
if(cljs.core.truth_(or__3824__auto____8486))
{return or__3824__auto____8486;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8485_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8487){
var maps = cljs.core.seq(arglist__8487);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__8490 = (function (m,e){
var k__8488 = cljs.core.first.call(null,e);
var v__8489 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__8488))
{return cljs.core.assoc.call(null,m,k__8488,f.call(null,cljs.core.get.call(null,m,k__8488),v__8489));
} else
{return cljs.core.assoc.call(null,m,k__8488,v__8489);
}
});
var merge2__8492 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8490,(function (){var or__3824__auto____8491 = m1;
if(cljs.core.truth_(or__3824__auto____8491))
{return or__3824__auto____8491;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__8492,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8493){
var f = cljs.core.first(arglist__8493);
var maps = cljs.core.rest(arglist__8493);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8494 = cljs.core.ObjMap.fromObject([],{});
var keys__8495 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__8495))
{var key__8496 = cljs.core.first.call(null,keys__8495);
var entry__8497 = cljs.core.get.call(null,map,key__8496,"\uFDD0'user/not-found");
{
var G__8498 = ((cljs.core.not_EQ_.call(null,entry__8497,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8494,key__8496,entry__8497):ret__8494);
var G__8499 = cljs.core.next.call(null,keys__8495);
ret__8494 = G__8498;
keys__8495 = G__8499;
continue;
}
} else
{return ret__8494;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8505 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__8505.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8506 = this;
var h__272__auto____8507 = this__8506.__hash;
if((h__272__auto____8507 != null))
{return h__272__auto____8507;
} else
{var h__272__auto____8508 = cljs.core.hash_iset.call(null,coll);
this__8506.__hash = h__272__auto____8508;
return h__272__auto____8508;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8509 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8510 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8510.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8529 = null;
var G__8529__2 = (function (tsym8503,k){
var this__8511 = this;
var tsym8503__8512 = this;
var coll__8513 = tsym8503__8512;
return cljs.core._lookup.call(null,coll__8513,k);
});
var G__8529__3 = (function (tsym8504,k,not_found){
var this__8514 = this;
var tsym8504__8515 = this;
var coll__8516 = tsym8504__8515;
return cljs.core._lookup.call(null,coll__8516,k,not_found);
});
G__8529 = function(tsym8504,k,not_found){
switch(arguments.length){
case 2:
return G__8529__2.call(this,tsym8504,k);
case 3:
return G__8529__3.call(this,tsym8504,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8529;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym8501,args8502){
return tsym8501.call.apply(tsym8501,[tsym8501].concat(cljs.core.aclone.call(null,args8502)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8517 = this;
return (new cljs.core.PersistentHashSet(this__8517.meta,cljs.core.assoc.call(null,this__8517.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__8518 = this;
var this$__8519 = this;
return cljs.core.pr_str.call(null,this$__8519);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8520 = this;
return cljs.core.keys.call(null,this__8520.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8521 = this;
return (new cljs.core.PersistentHashSet(this__8521.meta,cljs.core.dissoc.call(null,this__8521.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8522 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8523 = this;
var and__3822__auto____8524 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8524)
{var and__3822__auto____8525 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8525)
{return cljs.core.every_QMARK_.call(null,(function (p1__8500_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8500_SHARP_);
}),other);
} else
{return and__3822__auto____8525;
}
} else
{return and__3822__auto____8524;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8526 = this;
return (new cljs.core.PersistentHashSet(meta,this__8526.hash_map,this__8526.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8527 = this;
return this__8527.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8528 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__8528.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__8547 = null;
var G__8547__2 = (function (tsym8533,k){
var this__8535 = this;
var tsym8533__8536 = this;
var tcoll__8537 = tsym8533__8536;
if((cljs.core._lookup.call(null,this__8535.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__8547__3 = (function (tsym8534,k,not_found){
var this__8538 = this;
var tsym8534__8539 = this;
var tcoll__8540 = tsym8534__8539;
if((cljs.core._lookup.call(null,this__8538.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__8547 = function(tsym8534,k,not_found){
switch(arguments.length){
case 2:
return G__8547__2.call(this,tsym8534,k);
case 3:
return G__8547__3.call(this,tsym8534,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8547;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym8531,args8532){
return tsym8531.call.apply(tsym8531,[tsym8531].concat(cljs.core.aclone.call(null,args8532)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__8541 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__8542 = this;
if((cljs.core._lookup.call(null,this__8542.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8543 = this;
return cljs.core.count.call(null,this__8543.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__8544 = this;
this__8544.transient_map = cljs.core.dissoc_BANG_.call(null,this__8544.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8545 = this;
this__8545.transient_map = cljs.core.assoc_BANG_.call(null,this__8545.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8546 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__8546.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8552 = this;
var h__272__auto____8553 = this__8552.__hash;
if((h__272__auto____8553 != null))
{return h__272__auto____8553;
} else
{var h__272__auto____8554 = cljs.core.hash_iset.call(null,coll);
this__8552.__hash = h__272__auto____8554;
return h__272__auto____8554;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8555 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8556 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8556.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__8580 = null;
var G__8580__2 = (function (tsym8550,k){
var this__8557 = this;
var tsym8550__8558 = this;
var coll__8559 = tsym8550__8558;
return cljs.core._lookup.call(null,coll__8559,k);
});
var G__8580__3 = (function (tsym8551,k,not_found){
var this__8560 = this;
var tsym8551__8561 = this;
var coll__8562 = tsym8551__8561;
return cljs.core._lookup.call(null,coll__8562,k,not_found);
});
G__8580 = function(tsym8551,k,not_found){
switch(arguments.length){
case 2:
return G__8580__2.call(this,tsym8551,k);
case 3:
return G__8580__3.call(this,tsym8551,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8580;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym8548,args8549){
return tsym8548.call.apply(tsym8548,[tsym8548].concat(cljs.core.aclone.call(null,args8549)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8563 = this;
return (new cljs.core.PersistentTreeSet(this__8563.meta,cljs.core.assoc.call(null,this__8563.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8564 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__8564.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__8565 = this;
var this$__8566 = this;
return cljs.core.pr_str.call(null,this$__8566);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8567 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__8567.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8568 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__8568.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8569 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8570 = this;
return cljs.core._comparator.call(null,this__8570.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8571 = this;
return cljs.core.keys.call(null,this__8571.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8572 = this;
return (new cljs.core.PersistentTreeSet(this__8572.meta,cljs.core.dissoc.call(null,this__8572.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8573 = this;
return cljs.core.count.call(null,this__8573.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8574 = this;
var and__3822__auto____8575 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8575)
{var and__3822__auto____8576 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8576)
{return cljs.core.every_QMARK_.call(null,(function (p1__8530_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8530_SHARP_);
}),other);
} else
{return and__3822__auto____8576;
}
} else
{return and__3822__auto____8575;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8577 = this;
return (new cljs.core.PersistentTreeSet(meta,this__8577.tree_map,this__8577.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8578 = this;
return this__8578.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8579 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__8579.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8581 = cljs.core.seq.call(null,coll);
var out__8582 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__8581)))
{{
var G__8583 = cljs.core.next.call(null,in$__8581);
var G__8584 = cljs.core.conj_BANG_.call(null,out__8582,cljs.core.first.call(null,in$__8581));
in$__8581 = G__8583;
out__8582 = G__8584;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8582);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__8585){
var keys = cljs.core.seq(arglist__8585);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__8587){
var comparator = cljs.core.first(arglist__8587);
var keys = cljs.core.rest(arglist__8587);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__8588 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____8589 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____8589))
{var e__8590 = temp__3971__auto____8589;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8590));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8588,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8586_SHARP_){
var temp__3971__auto____8591 = cljs.core.find.call(null,smap,p1__8586_SHARP_);
if(cljs.core.truth_(temp__3971__auto____8591))
{var e__8592 = temp__3971__auto____8591;
return cljs.core.second.call(null,e__8592);
} else
{return p1__8586_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8600 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8593,seen){
while(true){
var vec__8594__8595 = p__8593;
var f__8596 = cljs.core.nth.call(null,vec__8594__8595,0,null);
var xs__8597 = vec__8594__8595;
var temp__3974__auto____8598 = cljs.core.seq.call(null,xs__8597);
if(cljs.core.truth_(temp__3974__auto____8598))
{var s__8599 = temp__3974__auto____8598;
if(cljs.core.contains_QMARK_.call(null,seen,f__8596))
{{
var G__8601 = cljs.core.rest.call(null,s__8599);
var G__8602 = seen;
p__8593 = G__8601;
seen = G__8602;
continue;
}
} else
{return cljs.core.cons.call(null,f__8596,step.call(null,cljs.core.rest.call(null,s__8599),cljs.core.conj.call(null,seen,f__8596)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__8600.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8603 = cljs.core.PersistentVector.fromArray([]);
var s__8604 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8604)))
{{
var G__8605 = cljs.core.conj.call(null,ret__8603,cljs.core.first.call(null,s__8604));
var G__8606 = cljs.core.next.call(null,s__8604);
ret__8603 = G__8605;
s__8604 = G__8606;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8603);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____8607 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____8607)
{return or__3824__auto____8607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__8608 = x.lastIndexOf("/");
if((i__8608 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8608 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____8609 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____8609)
{return or__3824__auto____8609;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__8610 = x.lastIndexOf("/");
if((i__8610 > -1))
{return cljs.core.subs.call(null,x,2,i__8610);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__8613 = cljs.core.ObjMap.fromObject([],{});
var ks__8614 = cljs.core.seq.call(null,keys);
var vs__8615 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8616 = ks__8614;
if(cljs.core.truth_(and__3822__auto____8616))
{return vs__8615;
} else
{return and__3822__auto____8616;
}
})()))
{{
var G__8617 = cljs.core.assoc.call(null,map__8613,cljs.core.first.call(null,ks__8614),cljs.core.first.call(null,vs__8615));
var G__8618 = cljs.core.next.call(null,ks__8614);
var G__8619 = cljs.core.next.call(null,vs__8615);
map__8613 = G__8617;
ks__8614 = G__8618;
vs__8615 = G__8619;
continue;
}
} else
{return map__8613;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__8622__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8611_SHARP_,p2__8612_SHARP_){
return max_key.call(null,k,p1__8611_SHARP_,p2__8612_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8622 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8622__delegate.call(this, k, x, y, more);
};
G__8622.cljs$lang$maxFixedArity = 3;
G__8622.cljs$lang$applyTo = (function (arglist__8623){
var k = cljs.core.first(arglist__8623);
var x = cljs.core.first(cljs.core.next(arglist__8623));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8623)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8623)));
return G__8622__delegate(k, x, y, more);
});
G__8622.cljs$lang$arity$variadic = G__8622__delegate;
return G__8622;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__8624__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8620_SHARP_,p2__8621_SHARP_){
return min_key.call(null,k,p1__8620_SHARP_,p2__8621_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8624 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8624__delegate.call(this, k, x, y, more);
};
G__8624.cljs$lang$maxFixedArity = 3;
G__8624.cljs$lang$applyTo = (function (arglist__8625){
var k = cljs.core.first(arglist__8625);
var x = cljs.core.first(cljs.core.next(arglist__8625));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8625)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8625)));
return G__8624__delegate(k, x, y, more);
});
G__8624.cljs$lang$arity$variadic = G__8624__delegate;
return G__8624;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8626 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____8626))
{var s__8627 = temp__3974__auto____8626;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8627),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8627)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8628 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____8628))
{var s__8629 = temp__3974__auto____8628;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8629))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8629),take_while.call(null,pred,cljs.core.rest.call(null,s__8629)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__8630 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__8630.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__8631 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____8632 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____8632))
{var vec__8633__8634 = temp__3974__auto____8632;
var e__8635 = cljs.core.nth.call(null,vec__8633__8634,0,null);
var s__8636 = vec__8633__8634;
if(cljs.core.truth_(include__8631.call(null,e__8635)))
{return s__8636;
} else
{return cljs.core.next.call(null,s__8636);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__8631,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____8637 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____8637))
{var vec__8638__8639 = temp__3974__auto____8637;
var e__8640 = cljs.core.nth.call(null,vec__8638__8639,0,null);
var s__8641 = vec__8638__8639;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__8640))?s__8641:cljs.core.next.call(null,s__8641)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__8642 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____8643 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____8643))
{var vec__8644__8645 = temp__3974__auto____8643;
var e__8646 = cljs.core.nth.call(null,vec__8644__8645,0,null);
var s__8647 = vec__8644__8645;
if(cljs.core.truth_(include__8642.call(null,e__8646)))
{return s__8647;
} else
{return cljs.core.next.call(null,s__8647);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__8642,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____8648 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____8648))
{var vec__8649__8650 = temp__3974__auto____8648;
var e__8651 = cljs.core.nth.call(null,vec__8649__8650,0,null);
var s__8652 = vec__8649__8650;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__8651))?s__8652:cljs.core.next.call(null,s__8652)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__8653 = this;
var h__272__auto____8654 = this__8653.__hash;
if((h__272__auto____8654 != null))
{return h__272__auto____8654;
} else
{var h__272__auto____8655 = cljs.core.hash_coll.call(null,rng);
this__8653.__hash = h__272__auto____8655;
return h__272__auto____8655;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__8656 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__8657 = this;
var this$__8658 = this;
return cljs.core.pr_str.call(null,this$__8658);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__8659 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__8660 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__8661 = this;
var comp__8662 = (((this__8661.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__8662.call(null,this__8661.start,this__8661.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__8663 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__8663.end - this__8663.start) / this__8663.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__8664 = this;
return this__8664.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__8665 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8665.meta,(this__8665.start + this__8665.step),this__8665.end,this__8665.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__8666 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__8667 = this;
return (new cljs.core.Range(meta,this__8667.start,this__8667.end,this__8667.step,this__8667.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__8668 = this;
return this__8668.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__8669 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__8669.start + (n * this__8669.step));
} else
{if((function (){var and__3822__auto____8670 = (this__8669.start > this__8669.end);
if(and__3822__auto____8670)
{return (this__8669.step === 0);
} else
{return and__3822__auto____8670;
}
})())
{return this__8669.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__8671 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__8671.start + (n * this__8671.step));
} else
{if((function (){var and__3822__auto____8672 = (this__8671.start > this__8671.end);
if(and__3822__auto____8672)
{return (this__8671.step === 0);
} else
{return and__3822__auto____8672;
}
})())
{return this__8671.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__8673 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8673.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8674 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____8674))
{var s__8675 = temp__3974__auto____8674;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8675),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8675)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8677 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____8677))
{var s__8678 = temp__3974__auto____8677;
var fst__8679 = cljs.core.first.call(null,s__8678);
var fv__8680 = f.call(null,fst__8679);
var run__8681 = cljs.core.cons.call(null,fst__8679,cljs.core.take_while.call(null,(function (p1__8676_SHARP_){
return cljs.core._EQ_.call(null,fv__8680,f.call(null,p1__8676_SHARP_));
}),cljs.core.next.call(null,s__8678)));
return cljs.core.cons.call(null,run__8681,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8681),s__8678))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8692 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____8692))
{var s__8693 = temp__3971__auto____8692;
return reductions.call(null,f,cljs.core.first.call(null,s__8693),cljs.core.rest.call(null,s__8693));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8694 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____8694))
{var s__8695 = temp__3974__auto____8694;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8695)),cljs.core.rest.call(null,s__8695));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__8697 = null;
var G__8697__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8697__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8697__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8697__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8697__4 = (function() { 
var G__8698__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8698__delegate.call(this, x, y, z, args);
};
G__8698.cljs$lang$maxFixedArity = 3;
G__8698.cljs$lang$applyTo = (function (arglist__8699){
var x = cljs.core.first(arglist__8699);
var y = cljs.core.first(cljs.core.next(arglist__8699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8699)));
return G__8698__delegate(x, y, z, args);
});
G__8698.cljs$lang$arity$variadic = G__8698__delegate;
return G__8698;
})()
;
G__8697 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8697__0.call(this);
case 1:
return G__8697__1.call(this,x);
case 2:
return G__8697__2.call(this,x,y);
case 3:
return G__8697__3.call(this,x,y,z);
default:
return G__8697__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8697.cljs$lang$maxFixedArity = 3;
G__8697.cljs$lang$applyTo = G__8697__4.cljs$lang$applyTo;
return G__8697;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__8700 = null;
var G__8700__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8700__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8700__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8700__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8700__4 = (function() { 
var G__8701__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8701 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8701__delegate.call(this, x, y, z, args);
};
G__8701.cljs$lang$maxFixedArity = 3;
G__8701.cljs$lang$applyTo = (function (arglist__8702){
var x = cljs.core.first(arglist__8702);
var y = cljs.core.first(cljs.core.next(arglist__8702));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8702)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8702)));
return G__8701__delegate(x, y, z, args);
});
G__8701.cljs$lang$arity$variadic = G__8701__delegate;
return G__8701;
})()
;
G__8700 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8700__0.call(this);
case 1:
return G__8700__1.call(this,x);
case 2:
return G__8700__2.call(this,x,y);
case 3:
return G__8700__3.call(this,x,y,z);
default:
return G__8700__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8700.cljs$lang$maxFixedArity = 3;
G__8700.cljs$lang$applyTo = G__8700__4.cljs$lang$applyTo;
return G__8700;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__8703 = null;
var G__8703__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8703__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8703__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8703__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8703__4 = (function() { 
var G__8704__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8704 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8704__delegate.call(this, x, y, z, args);
};
G__8704.cljs$lang$maxFixedArity = 3;
G__8704.cljs$lang$applyTo = (function (arglist__8705){
var x = cljs.core.first(arglist__8705);
var y = cljs.core.first(cljs.core.next(arglist__8705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8705)));
return G__8704__delegate(x, y, z, args);
});
G__8704.cljs$lang$arity$variadic = G__8704__delegate;
return G__8704;
})()
;
G__8703 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8703__0.call(this);
case 1:
return G__8703__1.call(this,x);
case 2:
return G__8703__2.call(this,x,y);
case 3:
return G__8703__3.call(this,x,y,z);
default:
return G__8703__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8703.cljs$lang$maxFixedArity = 3;
G__8703.cljs$lang$applyTo = G__8703__4.cljs$lang$applyTo;
return G__8703;
})()
});
var juxt__4 = (function() { 
var G__8706__delegate = function (f,g,h,fs){
var fs__8696 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__8707 = null;
var G__8707__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__8682_SHARP_,p2__8683_SHARP_){
return cljs.core.conj.call(null,p1__8682_SHARP_,p2__8683_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8707__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8684_SHARP_,p2__8685_SHARP_){
return cljs.core.conj.call(null,p1__8684_SHARP_,p2__8685_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8707__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8686_SHARP_,p2__8687_SHARP_){
return cljs.core.conj.call(null,p1__8686_SHARP_,p2__8687_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8707__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8688_SHARP_,p2__8689_SHARP_){
return cljs.core.conj.call(null,p1__8688_SHARP_,p2__8689_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
});
var G__8707__4 = (function() { 
var G__8708__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8690_SHARP_,p2__8691_SHARP_){
return cljs.core.conj.call(null,p1__8690_SHARP_,cljs.core.apply.call(null,p2__8691_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__8696);
};
var G__8708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8708__delegate.call(this, x, y, z, args);
};
G__8708.cljs$lang$maxFixedArity = 3;
G__8708.cljs$lang$applyTo = (function (arglist__8709){
var x = cljs.core.first(arglist__8709);
var y = cljs.core.first(cljs.core.next(arglist__8709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8709)));
return G__8708__delegate(x, y, z, args);
});
G__8708.cljs$lang$arity$variadic = G__8708__delegate;
return G__8708;
})()
;
G__8707 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8707__0.call(this);
case 1:
return G__8707__1.call(this,x);
case 2:
return G__8707__2.call(this,x,y);
case 3:
return G__8707__3.call(this,x,y,z);
default:
return G__8707__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8707.cljs$lang$maxFixedArity = 3;
G__8707.cljs$lang$applyTo = G__8707__4.cljs$lang$applyTo;
return G__8707;
})()
};
var G__8706 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8706__delegate.call(this, f, g, h, fs);
};
G__8706.cljs$lang$maxFixedArity = 3;
G__8706.cljs$lang$applyTo = (function (arglist__8710){
var f = cljs.core.first(arglist__8710);
var g = cljs.core.first(cljs.core.next(arglist__8710));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8710)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8710)));
return G__8706__delegate(f, g, h, fs);
});
G__8706.cljs$lang$arity$variadic = G__8706__delegate;
return G__8706;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8712 = cljs.core.next.call(null,coll);
coll = G__8712;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8711 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3822__auto____8711))
{return (n > 0);
} else
{return and__3822__auto____8711;
}
})()))
{{
var G__8713 = (n - 1);
var G__8714 = cljs.core.next.call(null,coll);
n = G__8713;
coll = G__8714;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__8715 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8715),s))
{if((cljs.core.count.call(null,matches__8715) === 1))
{return cljs.core.first.call(null,matches__8715);
} else
{return cljs.core.vec.call(null,matches__8715);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__8716 = re.exec(s);
if((matches__8716 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__8716) === 1))
{return cljs.core.first.call(null,matches__8716);
} else
{return cljs.core.vec.call(null,matches__8716);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8717 = cljs.core.re_find.call(null,re,s);
var match_idx__8718 = s.search(re);
var match_str__8719 = ((cljs.core.coll_QMARK_.call(null,match_data__8717))?cljs.core.first.call(null,match_data__8717):match_data__8717);
var post_match__8720 = cljs.core.subs.call(null,s,(match_idx__8718 + cljs.core.count.call(null,match_str__8719)));
if(cljs.core.truth_(match_data__8717))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8717,re_seq.call(null,re,post_match__8720));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8722__8723 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8724 = cljs.core.nth.call(null,vec__8722__8723,0,null);
var flags__8725 = cljs.core.nth.call(null,vec__8722__8723,1,null);
var pattern__8726 = cljs.core.nth.call(null,vec__8722__8723,2,null);
return (new RegExp(pattern__8726,flags__8725));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8721_SHARP_){
return print_one.call(null,p1__8721_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____8727 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3822__auto____8727))
{var and__3822__auto____8731 = (function (){var G__8728__8729 = obj;
if((G__8728__8729 != null))
{if((function (){var or__3824__auto____8730 = (G__8728__8729.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____8730)
{return or__3824__auto____8730;
} else
{return G__8728__8729.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8728__8729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8728__8729);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8728__8729);
}
})();
if(cljs.core.truth_(and__3822__auto____8731))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____8731;
}
} else
{return and__3822__auto____8727;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3822__auto____8732 = (obj != null);
if(and__3822__auto____8732)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____8732;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__8733__8734 = obj;
if((G__8733__8734 != null))
{if((function (){var or__3824__auto____8735 = (G__8733__8734.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3824__auto____8735)
{return or__3824__auto____8735;
} else
{return G__8733__8734.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__8733__8734.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__8733__8734);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__8733__8734);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__8736 = cljs.core.first.call(null,objs);
var sb__8737 = (new goog.string.StringBuffer());
var G__8738__8739 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__8738__8739))
{var obj__8740 = cljs.core.first.call(null,G__8738__8739);
var G__8738__8741 = G__8738__8739;
while(true){
if((obj__8740 === first_obj__8736))
{} else
{sb__8737.append(" ");
}
var G__8742__8743 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8740,opts));
if(cljs.core.truth_(G__8742__8743))
{var string__8744 = cljs.core.first.call(null,G__8742__8743);
var G__8742__8745 = G__8742__8743;
while(true){
sb__8737.append(string__8744);
var temp__3974__auto____8746 = cljs.core.next.call(null,G__8742__8745);
if(cljs.core.truth_(temp__3974__auto____8746))
{var G__8742__8747 = temp__3974__auto____8746;
{
var G__8750 = cljs.core.first.call(null,G__8742__8747);
var G__8751 = G__8742__8747;
string__8744 = G__8750;
G__8742__8745 = G__8751;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____8748 = cljs.core.next.call(null,G__8738__8741);
if(cljs.core.truth_(temp__3974__auto____8748))
{var G__8738__8749 = temp__3974__auto____8748;
{
var G__8752 = cljs.core.first.call(null,G__8738__8749);
var G__8753 = G__8738__8749;
obj__8740 = G__8752;
G__8738__8741 = G__8753;
continue;
}
} else
{}
break;
}
} else
{}
return sb__8737;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__8754 = cljs.core.pr_sb.call(null,objs,opts);
sb__8754.append("\n");
return [cljs.core.str(sb__8754)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8755 = cljs.core.first.call(null,objs);
var G__8756__8757 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__8756__8757))
{var obj__8758 = cljs.core.first.call(null,G__8756__8757);
var G__8756__8759 = G__8756__8757;
while(true){
if((obj__8758 === first_obj__8755))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8760__8761 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8758,opts));
if(cljs.core.truth_(G__8760__8761))
{var string__8762 = cljs.core.first.call(null,G__8760__8761);
var G__8760__8763 = G__8760__8761;
while(true){
cljs.core.string_print.call(null,string__8762);
var temp__3974__auto____8764 = cljs.core.next.call(null,G__8760__8763);
if(cljs.core.truth_(temp__3974__auto____8764))
{var G__8760__8765 = temp__3974__auto____8764;
{
var G__8768 = cljs.core.first.call(null,G__8760__8765);
var G__8769 = G__8760__8765;
string__8762 = G__8768;
G__8760__8763 = G__8769;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____8766 = cljs.core.next.call(null,G__8756__8759);
if(cljs.core.truth_(temp__3974__auto____8766))
{var G__8756__8767 = temp__3974__auto____8766;
{
var G__8770 = cljs.core.first.call(null,G__8756__8767);
var G__8771 = G__8756__8767;
obj__8758 = G__8770;
G__8756__8759 = G__8771;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__8772){
var objs = cljs.core.seq(arglist__8772);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__8773){
var objs = cljs.core.seq(arglist__8773);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__8774){
var objs = cljs.core.seq(arglist__8774);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__8775){
var objs = cljs.core.seq(arglist__8775);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__8776){
var objs = cljs.core.seq(arglist__8776);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__8777){
var objs = cljs.core.seq(arglist__8777);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__8778){
var objs = cljs.core.seq(arglist__8778);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__8779){
var objs = cljs.core.seq(arglist__8779);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8780 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8780,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8781 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8781,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8782 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8782,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____8783 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____8783))
{var nspc__8784 = temp__3974__auto____8783;
return [cljs.core.str(nspc__8784),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____8785 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____8785))
{var nspc__8786 = temp__3974__auto____8785;
return [cljs.core.str(nspc__8786),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8787 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8787,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8788 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8788,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__8789 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__8790 = this;
var G__8791__8792 = cljs.core.seq.call(null,this__8790.watches);
if(cljs.core.truth_(G__8791__8792))
{var G__8794__8796 = cljs.core.first.call(null,G__8791__8792);
var vec__8795__8797 = G__8794__8796;
var key__8798 = cljs.core.nth.call(null,vec__8795__8797,0,null);
var f__8799 = cljs.core.nth.call(null,vec__8795__8797,1,null);
var G__8791__8800 = G__8791__8792;
var G__8794__8801 = G__8794__8796;
var G__8791__8802 = G__8791__8800;
while(true){
var vec__8803__8804 = G__8794__8801;
var key__8805 = cljs.core.nth.call(null,vec__8803__8804,0,null);
var f__8806 = cljs.core.nth.call(null,vec__8803__8804,1,null);
var G__8791__8807 = G__8791__8802;
f__8806.call(null,key__8805,this$,oldval,newval);
var temp__3974__auto____8808 = cljs.core.next.call(null,G__8791__8807);
if(cljs.core.truth_(temp__3974__auto____8808))
{var G__8791__8809 = temp__3974__auto____8808;
{
var G__8816 = cljs.core.first.call(null,G__8791__8809);
var G__8817 = G__8791__8809;
G__8794__8801 = G__8816;
G__8791__8802 = G__8817;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__8810 = this;
return this$.watches = cljs.core.assoc.call(null,this__8810.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__8811 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8811.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__8812 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8812.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__8813 = this;
return this__8813.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__8814 = this;
return this__8814.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8815 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__8824__delegate = function (x,p__8818){
var map__8819__8820 = p__8818;
var map__8819__8821 = ((cljs.core.seq_QMARK_.call(null,map__8819__8820))?cljs.core.apply.call(null,cljs.core.hash_map,map__8819__8820):map__8819__8820);
var validator__8822 = cljs.core.get.call(null,map__8819__8821,"\uFDD0'validator");
var meta__8823 = cljs.core.get.call(null,map__8819__8821,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__8823,validator__8822,null));
};
var G__8824 = function (x,var_args){
var p__8818 = null;
if (goog.isDef(var_args)) {
  p__8818 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8824__delegate.call(this, x, p__8818);
};
G__8824.cljs$lang$maxFixedArity = 1;
G__8824.cljs$lang$applyTo = (function (arglist__8825){
var x = cljs.core.first(arglist__8825);
var p__8818 = cljs.core.rest(arglist__8825);
return G__8824__delegate(x, p__8818);
});
G__8824.cljs$lang$arity$variadic = G__8824__delegate;
return G__8824;
})()
;
atom = function(x,var_args){
var p__8818 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____8826 = a.validator;
if(cljs.core.truth_(temp__3974__auto____8826))
{var validate__8827 = temp__3974__auto____8826;
if(cljs.core.truth_(validate__8827.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5917))))].join('')));
}
} else
{}
var old_value__8828 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8828,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__8829__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8829 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8829__delegate.call(this, a, f, x, y, z, more);
};
G__8829.cljs$lang$maxFixedArity = 5;
G__8829.cljs$lang$applyTo = (function (arglist__8830){
var a = cljs.core.first(arglist__8830);
var f = cljs.core.first(cljs.core.next(arglist__8830));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8830)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8830))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8830)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8830)))));
return G__8829__delegate(a, f, x, y, z, more);
});
G__8829.cljs$lang$arity$variadic = G__8829__delegate;
return G__8829;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8831){
var iref = cljs.core.first(arglist__8831);
var f = cljs.core.first(cljs.core.next(arglist__8831));
var args = cljs.core.rest(cljs.core.next(arglist__8831));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__8832 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__8832.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__8833 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__8833.state,(function (p__8834){
var curr_state__8835 = p__8834;
var curr_state__8836 = ((cljs.core.seq_QMARK_.call(null,curr_state__8835))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__8835):curr_state__8835);
var done__8837 = cljs.core.get.call(null,curr_state__8836,"\uFDD0'done");
if(cljs.core.truth_(done__8837))
{return curr_state__8836;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__8833.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__8838__8839 = options;
var map__8838__8840 = ((cljs.core.seq_QMARK_.call(null,map__8838__8839))?cljs.core.apply.call(null,cljs.core.hash_map,map__8838__8839):map__8838__8839);
var keywordize_keys__8841 = cljs.core.get.call(null,map__8838__8840,"\uFDD0'keywordize-keys");
var keyfn__8842 = (cljs.core.truth_(keywordize_keys__8841)?cljs.core.keyword:cljs.core.str);
var f__8848 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__533__auto____8847 = (function iter__8843(s__8844){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8844__8845 = s__8844;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8844__8845)))
{var k__8846 = cljs.core.first.call(null,s__8844__8845);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__8842.call(null,k__8846),thisfn.call(null,(x[k__8846]))]),iter__8843.call(null,cljs.core.rest.call(null,s__8844__8845)));
} else
{return null;
}
break;
}
})));
});
return iter__533__auto____8847.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__8848.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8849){
var x = cljs.core.first(arglist__8849);
var options = cljs.core.rest(arglist__8849);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__8850 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__8854__delegate = function (args){
var temp__3971__auto____8851 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8850),args);
if(cljs.core.truth_(temp__3971__auto____8851))
{var v__8852 = temp__3971__auto____8851;
return v__8852;
} else
{var ret__8853 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__8850,cljs.core.assoc,args,ret__8853);
return ret__8853;
}
};
var G__8854 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8854__delegate.call(this, args);
};
G__8854.cljs$lang$maxFixedArity = 0;
G__8854.cljs$lang$applyTo = (function (arglist__8855){
var args = cljs.core.seq(arglist__8855);;
return G__8854__delegate(args);
});
G__8854.cljs$lang$arity$variadic = G__8854__delegate;
return G__8854;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__8856 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__8856))
{{
var G__8857 = ret__8856;
f = G__8857;
continue;
}
} else
{return ret__8856;
}
break;
}
});
var trampoline__2 = (function() { 
var G__8858__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8858 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8858__delegate.call(this, f, args);
};
G__8858.cljs$lang$maxFixedArity = 1;
G__8858.cljs$lang$applyTo = (function (arglist__8859){
var f = cljs.core.first(arglist__8859);
var args = cljs.core.rest(arglist__8859);
return G__8858__delegate(f, args);
});
G__8858.cljs$lang$arity$variadic = G__8858__delegate;
return G__8858;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__8860 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__8860,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8860,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____8861 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____8861)
{return or__3824__auto____8861;
} else
{var or__3824__auto____8862 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3824__auto____8862)
{return or__3824__auto____8862;
} else
{var and__3822__auto____8863 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____8863)
{var and__3822__auto____8864 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____8864)
{var and__3822__auto____8865 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____8865)
{var ret__8866 = true;
var i__8867 = 0;
while(true){
if((function (){var or__3824__auto____8868 = cljs.core.not.call(null,ret__8866);
if(or__3824__auto____8868)
{return or__3824__auto____8868;
} else
{return (i__8867 === cljs.core.count.call(null,parent));
}
})())
{return ret__8866;
} else
{{
var G__8869 = isa_QMARK_.call(null,h,child.call(null,i__8867),parent.call(null,i__8867));
var G__8870 = (i__8867 + 1);
ret__8866 = G__8869;
i__8867 = G__8870;
continue;
}
}
break;
}
} else
{return and__3822__auto____8865;
}
} else
{return and__3822__auto____8864;
}
} else
{return and__3822__auto____8863;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6201))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6205))))].join('')));
}
var tp__8874 = "\uFDD0'parents".call(null,h);
var td__8875 = "\uFDD0'descendants".call(null,h);
var ta__8876 = "\uFDD0'ancestors".call(null,h);
var tf__8877 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____8878 = ((cljs.core.contains_QMARK_.call(null,tp__8874.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__8876.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__8876.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8874,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8877.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8875,parent,ta__8876),"\uFDD0'descendants":tf__8877.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8876,tag,td__8875)});
})());
if(cljs.core.truth_(or__3824__auto____8878))
{return or__3824__auto____8878;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__8879 = "\uFDD0'parents".call(null,h);
var childsParents__8880 = (cljs.core.truth_(parentMap__8879.call(null,tag))?cljs.core.disj.call(null,parentMap__8879.call(null,tag),parent):cljs.core.set([]));
var newParents__8881 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8880))?cljs.core.assoc.call(null,parentMap__8879,tag,childsParents__8880):cljs.core.dissoc.call(null,parentMap__8879,tag));
var deriv_seq__8882 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8871_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8871_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8871_SHARP_),cljs.core.second.call(null,p1__8871_SHARP_)));
}),cljs.core.seq.call(null,newParents__8881)));
if(cljs.core.contains_QMARK_.call(null,parentMap__8879.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__8872_SHARP_,p2__8873_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8872_SHARP_,p2__8873_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8882));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__8883 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____8885 = (cljs.core.truth_((function (){var and__3822__auto____8884 = xprefs__8883;
if(cljs.core.truth_(and__3822__auto____8884))
{return xprefs__8883.call(null,y);
} else
{return and__3822__auto____8884;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____8885))
{return or__3824__auto____8885;
} else
{var or__3824__auto____8887 = (function (){var ps__8886 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__8886) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8886),prefer_table)))
{} else
{}
{
var G__8890 = cljs.core.rest.call(null,ps__8886);
ps__8886 = G__8890;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____8887))
{return or__3824__auto____8887;
} else
{var or__3824__auto____8889 = (function (){var ps__8888 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__8888) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8888),y,prefer_table)))
{} else
{}
{
var G__8891 = cljs.core.rest.call(null,ps__8888);
ps__8888 = G__8891;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____8889))
{return or__3824__auto____8889;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____8892 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____8892))
{return or__3824__auto____8892;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8901 = cljs.core.reduce.call(null,(function (be,p__8893){
var vec__8894__8895 = p__8893;
var k__8896 = cljs.core.nth.call(null,vec__8894__8895,0,null);
var ___8897 = cljs.core.nth.call(null,vec__8894__8895,1,null);
var e__8898 = vec__8894__8895;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8896))
{var be2__8900 = (cljs.core.truth_((function (){var or__3824__auto____8899 = (be == null);
if(or__3824__auto____8899)
{return or__3824__auto____8899;
} else
{return cljs.core.dominates.call(null,k__8896,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8898:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8900),k__8896,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__8896),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__8900)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__8900;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__8901))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8901));
return cljs.core.second.call(null,best_entry__8901);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____8902 = mf;
if(and__3822__auto____8902)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____8902;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____8903 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8903)
{return or__3824__auto____8903;
} else
{var or__3824__auto____8904 = (cljs.core._reset["_"]);
if(or__3824__auto____8904)
{return or__3824__auto____8904;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____8905 = mf;
if(and__3822__auto____8905)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____8905;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____8906 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8906)
{return or__3824__auto____8906;
} else
{var or__3824__auto____8907 = (cljs.core._add_method["_"]);
if(or__3824__auto____8907)
{return or__3824__auto____8907;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____8908 = mf;
if(and__3822__auto____8908)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____8908;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____8909 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8909)
{return or__3824__auto____8909;
} else
{var or__3824__auto____8910 = (cljs.core._remove_method["_"]);
if(or__3824__auto____8910)
{return or__3824__auto____8910;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____8911 = mf;
if(and__3822__auto____8911)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____8911;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____8912 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8912)
{return or__3824__auto____8912;
} else
{var or__3824__auto____8913 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____8913)
{return or__3824__auto____8913;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____8914 = mf;
if(and__3822__auto____8914)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____8914;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____8915 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8915)
{return or__3824__auto____8915;
} else
{var or__3824__auto____8916 = (cljs.core._get_method["_"]);
if(or__3824__auto____8916)
{return or__3824__auto____8916;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____8917 = mf;
if(and__3822__auto____8917)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____8917;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____8918 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8918)
{return or__3824__auto____8918;
} else
{var or__3824__auto____8919 = (cljs.core._methods["_"]);
if(or__3824__auto____8919)
{return or__3824__auto____8919;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____8920 = mf;
if(and__3822__auto____8920)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____8920;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____8921 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8921)
{return or__3824__auto____8921;
} else
{var or__3824__auto____8922 = (cljs.core._prefers["_"]);
if(or__3824__auto____8922)
{return or__3824__auto____8922;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____8923 = mf;
if(and__3822__auto____8923)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____8923;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____8924 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3824__auto____8924)
{return or__3824__auto____8924;
} else
{var or__3824__auto____8925 = (cljs.core._dispatch["_"]);
if(or__3824__auto____8925)
{return or__3824__auto____8925;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8926 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8927 = cljs.core._get_method.call(null,mf,dispatch_val__8926);
if(cljs.core.truth_(target_fn__8927))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__8926)].join('')));
}
return cljs.core.apply.call(null,target_fn__8927,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__362__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__8928 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__8929 = this;
cljs.core.swap_BANG_.call(null,this__8929.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8929.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8929.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8929.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__8930 = this;
cljs.core.swap_BANG_.call(null,this__8930.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8930.method_cache,this__8930.method_table,this__8930.cached_hierarchy,this__8930.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__8931 = this;
cljs.core.swap_BANG_.call(null,this__8931.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8931.method_cache,this__8931.method_table,this__8931.cached_hierarchy,this__8931.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__8932 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8932.cached_hierarchy),cljs.core.deref.call(null,this__8932.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__8932.method_cache,this__8932.method_table,this__8932.cached_hierarchy,this__8932.hierarchy);
}
var temp__3971__auto____8933 = cljs.core.deref.call(null,this__8932.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____8933))
{var target_fn__8934 = temp__3971__auto____8933;
return target_fn__8934;
} else
{var temp__3971__auto____8935 = cljs.core.find_and_cache_best_method.call(null,this__8932.name,dispatch_val,this__8932.hierarchy,this__8932.method_table,this__8932.prefer_table,this__8932.method_cache,this__8932.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____8935))
{var target_fn__8936 = temp__3971__auto____8935;
return target_fn__8936;
} else
{return cljs.core.deref.call(null,this__8932.method_table).call(null,this__8932.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8937 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8937.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__8937.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__8937.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8937.method_cache,this__8937.method_table,this__8937.cached_hierarchy,this__8937.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__8938 = this;
return cljs.core.deref.call(null,this__8938.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__8939 = this;
return cljs.core.deref.call(null,this__8939.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__8940 = this;
return cljs.core.do_dispatch.call(null,mf,this__8940.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8941__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8941 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8941__delegate.call(this, _, args);
};
G__8941.cljs$lang$maxFixedArity = 1;
G__8941.cljs$lang$applyTo = (function (arglist__8942){
var _ = cljs.core.first(arglist__8942);
var args = cljs.core.rest(arglist__8942);
return G__8941__delegate(_, args);
});
G__8941.cljs$lang$arity$variadic = G__8941__delegate;
return G__8941;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
