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
var G__12818__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__12818 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12818__delegate.call(this, array, i, idxs);
};
G__12818.cljs$lang$maxFixedArity = 2;
G__12818.cljs$lang$applyTo = (function (arglist__12819){
var array = cljs.core.first(arglist__12819);
var i = cljs.core.first(cljs.core.next(arglist__12819));
var idxs = cljs.core.rest(cljs.core.next(arglist__12819));
return G__12818__delegate(array, i, idxs);
});
G__12818.cljs$lang$arity$variadic = G__12818__delegate;
return G__12818;
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
if((function (){var and__3822__auto____12820 = this$;
if(and__3822__auto____12820)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____12820;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____12821 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12821)
{return or__3824__auto____12821;
} else
{var or__3824__auto____12822 = (cljs.core._invoke["_"]);
if(or__3824__auto____12822)
{return or__3824__auto____12822;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____12823 = this$;
if(and__3822__auto____12823)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____12823;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____12824 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12824)
{return or__3824__auto____12824;
} else
{var or__3824__auto____12825 = (cljs.core._invoke["_"]);
if(or__3824__auto____12825)
{return or__3824__auto____12825;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____12826 = this$;
if(and__3822__auto____12826)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____12826;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____12827 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12827)
{return or__3824__auto____12827;
} else
{var or__3824__auto____12828 = (cljs.core._invoke["_"]);
if(or__3824__auto____12828)
{return or__3824__auto____12828;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____12829 = this$;
if(and__3822__auto____12829)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____12829;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____12830 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12830)
{return or__3824__auto____12830;
} else
{var or__3824__auto____12831 = (cljs.core._invoke["_"]);
if(or__3824__auto____12831)
{return or__3824__auto____12831;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____12832 = this$;
if(and__3822__auto____12832)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____12832;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____12833 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12833)
{return or__3824__auto____12833;
} else
{var or__3824__auto____12834 = (cljs.core._invoke["_"]);
if(or__3824__auto____12834)
{return or__3824__auto____12834;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____12835 = this$;
if(and__3822__auto____12835)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____12835;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____12836 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12836)
{return or__3824__auto____12836;
} else
{var or__3824__auto____12837 = (cljs.core._invoke["_"]);
if(or__3824__auto____12837)
{return or__3824__auto____12837;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____12838 = this$;
if(and__3822__auto____12838)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____12838;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____12839 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12839)
{return or__3824__auto____12839;
} else
{var or__3824__auto____12840 = (cljs.core._invoke["_"]);
if(or__3824__auto____12840)
{return or__3824__auto____12840;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____12841 = this$;
if(and__3822__auto____12841)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____12841;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____12842 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12842)
{return or__3824__auto____12842;
} else
{var or__3824__auto____12843 = (cljs.core._invoke["_"]);
if(or__3824__auto____12843)
{return or__3824__auto____12843;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____12844 = this$;
if(and__3822__auto____12844)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____12844;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____12845 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12845)
{return or__3824__auto____12845;
} else
{var or__3824__auto____12846 = (cljs.core._invoke["_"]);
if(or__3824__auto____12846)
{return or__3824__auto____12846;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____12847 = this$;
if(and__3822__auto____12847)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____12847;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____12848 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12848)
{return or__3824__auto____12848;
} else
{var or__3824__auto____12849 = (cljs.core._invoke["_"]);
if(or__3824__auto____12849)
{return or__3824__auto____12849;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____12850 = this$;
if(and__3822__auto____12850)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____12850;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____12851 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12851)
{return or__3824__auto____12851;
} else
{var or__3824__auto____12852 = (cljs.core._invoke["_"]);
if(or__3824__auto____12852)
{return or__3824__auto____12852;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____12853 = this$;
if(and__3822__auto____12853)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____12853;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____12854 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12854)
{return or__3824__auto____12854;
} else
{var or__3824__auto____12855 = (cljs.core._invoke["_"]);
if(or__3824__auto____12855)
{return or__3824__auto____12855;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____12856 = this$;
if(and__3822__auto____12856)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____12856;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____12857 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12857)
{return or__3824__auto____12857;
} else
{var or__3824__auto____12858 = (cljs.core._invoke["_"]);
if(or__3824__auto____12858)
{return or__3824__auto____12858;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____12859 = this$;
if(and__3822__auto____12859)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____12859;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____12860 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12860)
{return or__3824__auto____12860;
} else
{var or__3824__auto____12861 = (cljs.core._invoke["_"]);
if(or__3824__auto____12861)
{return or__3824__auto____12861;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____12862 = this$;
if(and__3822__auto____12862)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____12862;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____12863 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12863)
{return or__3824__auto____12863;
} else
{var or__3824__auto____12864 = (cljs.core._invoke["_"]);
if(or__3824__auto____12864)
{return or__3824__auto____12864;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____12865 = this$;
if(and__3822__auto____12865)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____12865;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____12866 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12866)
{return or__3824__auto____12866;
} else
{var or__3824__auto____12867 = (cljs.core._invoke["_"]);
if(or__3824__auto____12867)
{return or__3824__auto____12867;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____12868 = this$;
if(and__3822__auto____12868)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____12868;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____12869 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12869)
{return or__3824__auto____12869;
} else
{var or__3824__auto____12870 = (cljs.core._invoke["_"]);
if(or__3824__auto____12870)
{return or__3824__auto____12870;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____12871 = this$;
if(and__3822__auto____12871)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____12871;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____12872 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12872)
{return or__3824__auto____12872;
} else
{var or__3824__auto____12873 = (cljs.core._invoke["_"]);
if(or__3824__auto____12873)
{return or__3824__auto____12873;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____12874 = this$;
if(and__3822__auto____12874)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____12874;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____12875 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12875)
{return or__3824__auto____12875;
} else
{var or__3824__auto____12876 = (cljs.core._invoke["_"]);
if(or__3824__auto____12876)
{return or__3824__auto____12876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____12877 = this$;
if(and__3822__auto____12877)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____12877;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____12878 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12878)
{return or__3824__auto____12878;
} else
{var or__3824__auto____12879 = (cljs.core._invoke["_"]);
if(or__3824__auto____12879)
{return or__3824__auto____12879;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____12880 = this$;
if(and__3822__auto____12880)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____12880;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____12881 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12881)
{return or__3824__auto____12881;
} else
{var or__3824__auto____12882 = (cljs.core._invoke["_"]);
if(or__3824__auto____12882)
{return or__3824__auto____12882;
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
if((function (){var and__3822__auto____12883 = coll;
if(and__3822__auto____12883)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____12883;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____12884 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12884)
{return or__3824__auto____12884;
} else
{var or__3824__auto____12885 = (cljs.core._count["_"]);
if(or__3824__auto____12885)
{return or__3824__auto____12885;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____12886 = coll;
if(and__3822__auto____12886)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____12886;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____12887 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12887)
{return or__3824__auto____12887;
} else
{var or__3824__auto____12888 = (cljs.core._empty["_"]);
if(or__3824__auto____12888)
{return or__3824__auto____12888;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____12889 = coll;
if(and__3822__auto____12889)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____12889;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____12890 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12890)
{return or__3824__auto____12890;
} else
{var or__3824__auto____12891 = (cljs.core._conj["_"]);
if(or__3824__auto____12891)
{return or__3824__auto____12891;
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
if((function (){var and__3822__auto____12892 = coll;
if(and__3822__auto____12892)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____12892;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____12893 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12893)
{return or__3824__auto____12893;
} else
{var or__3824__auto____12894 = (cljs.core._nth["_"]);
if(or__3824__auto____12894)
{return or__3824__auto____12894;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____12895 = coll;
if(and__3822__auto____12895)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____12895;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____12896 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12896)
{return or__3824__auto____12896;
} else
{var or__3824__auto____12897 = (cljs.core._nth["_"]);
if(or__3824__auto____12897)
{return or__3824__auto____12897;
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
if((function (){var and__3822__auto____12898 = coll;
if(and__3822__auto____12898)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____12898;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____12899 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12899)
{return or__3824__auto____12899;
} else
{var or__3824__auto____12900 = (cljs.core._first["_"]);
if(or__3824__auto____12900)
{return or__3824__auto____12900;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____12901 = coll;
if(and__3822__auto____12901)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____12901;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____12902 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12902)
{return or__3824__auto____12902;
} else
{var or__3824__auto____12903 = (cljs.core._rest["_"]);
if(or__3824__auto____12903)
{return or__3824__auto____12903;
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
if((function (){var and__3822__auto____12904 = o;
if(and__3822__auto____12904)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____12904;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____12905 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____12905)
{return or__3824__auto____12905;
} else
{var or__3824__auto____12906 = (cljs.core._lookup["_"]);
if(or__3824__auto____12906)
{return or__3824__auto____12906;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____12907 = o;
if(and__3822__auto____12907)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____12907;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____12908 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____12908)
{return or__3824__auto____12908;
} else
{var or__3824__auto____12909 = (cljs.core._lookup["_"]);
if(or__3824__auto____12909)
{return or__3824__auto____12909;
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
if((function (){var and__3822__auto____12910 = coll;
if(and__3822__auto____12910)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____12910;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____12911 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12911)
{return or__3824__auto____12911;
} else
{var or__3824__auto____12912 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____12912)
{return or__3824__auto____12912;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____12913 = coll;
if(and__3822__auto____12913)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____12913;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____12914 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12914)
{return or__3824__auto____12914;
} else
{var or__3824__auto____12915 = (cljs.core._assoc["_"]);
if(or__3824__auto____12915)
{return or__3824__auto____12915;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____12916 = coll;
if(and__3822__auto____12916)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____12916;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____12917 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12917)
{return or__3824__auto____12917;
} else
{var or__3824__auto____12918 = (cljs.core._dissoc["_"]);
if(or__3824__auto____12918)
{return or__3824__auto____12918;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____12919 = coll;
if(and__3822__auto____12919)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____12919;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____12920 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12920)
{return or__3824__auto____12920;
} else
{var or__3824__auto____12921 = (cljs.core._key["_"]);
if(or__3824__auto____12921)
{return or__3824__auto____12921;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____12922 = coll;
if(and__3822__auto____12922)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____12922;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____12923 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12923)
{return or__3824__auto____12923;
} else
{var or__3824__auto____12924 = (cljs.core._val["_"]);
if(or__3824__auto____12924)
{return or__3824__auto____12924;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____12925 = coll;
if(and__3822__auto____12925)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____12925;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____12926 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12926)
{return or__3824__auto____12926;
} else
{var or__3824__auto____12927 = (cljs.core._disjoin["_"]);
if(or__3824__auto____12927)
{return or__3824__auto____12927;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____12928 = coll;
if(and__3822__auto____12928)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____12928;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____12929 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12929)
{return or__3824__auto____12929;
} else
{var or__3824__auto____12930 = (cljs.core._peek["_"]);
if(or__3824__auto____12930)
{return or__3824__auto____12930;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____12931 = coll;
if(and__3822__auto____12931)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____12931;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____12932 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12932)
{return or__3824__auto____12932;
} else
{var or__3824__auto____12933 = (cljs.core._pop["_"]);
if(or__3824__auto____12933)
{return or__3824__auto____12933;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____12934 = coll;
if(and__3822__auto____12934)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____12934;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____12935 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12935)
{return or__3824__auto____12935;
} else
{var or__3824__auto____12936 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____12936)
{return or__3824__auto____12936;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____12937 = o;
if(and__3822__auto____12937)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____12937;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____12938 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3824__auto____12938)
{return or__3824__auto____12938;
} else
{var or__3824__auto____12939 = (cljs.core._deref["_"]);
if(or__3824__auto____12939)
{return or__3824__auto____12939;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____12940 = o;
if(and__3822__auto____12940)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____12940;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____12941 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3824__auto____12941)
{return or__3824__auto____12941;
} else
{var or__3824__auto____12942 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____12942)
{return or__3824__auto____12942;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____12943 = o;
if(and__3822__auto____12943)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____12943;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____12944 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____12944)
{return or__3824__auto____12944;
} else
{var or__3824__auto____12945 = (cljs.core._meta["_"]);
if(or__3824__auto____12945)
{return or__3824__auto____12945;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____12946 = o;
if(and__3822__auto____12946)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____12946;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____12947 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____12947)
{return or__3824__auto____12947;
} else
{var or__3824__auto____12948 = (cljs.core._with_meta["_"]);
if(or__3824__auto____12948)
{return or__3824__auto____12948;
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
if((function (){var and__3822__auto____12949 = coll;
if(and__3822__auto____12949)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____12949;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____12950 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12950)
{return or__3824__auto____12950;
} else
{var or__3824__auto____12951 = (cljs.core._reduce["_"]);
if(or__3824__auto____12951)
{return or__3824__auto____12951;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____12952 = coll;
if(and__3822__auto____12952)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____12952;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____12953 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12953)
{return or__3824__auto____12953;
} else
{var or__3824__auto____12954 = (cljs.core._reduce["_"]);
if(or__3824__auto____12954)
{return or__3824__auto____12954;
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
if((function (){var and__3822__auto____12955 = coll;
if(and__3822__auto____12955)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____12955;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____12956 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12956)
{return or__3824__auto____12956;
} else
{var or__3824__auto____12957 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____12957)
{return or__3824__auto____12957;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____12958 = o;
if(and__3822__auto____12958)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____12958;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____12959 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3824__auto____12959)
{return or__3824__auto____12959;
} else
{var or__3824__auto____12960 = (cljs.core._equiv["_"]);
if(or__3824__auto____12960)
{return or__3824__auto____12960;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____12961 = o;
if(and__3822__auto____12961)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____12961;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____12962 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3824__auto____12962)
{return or__3824__auto____12962;
} else
{var or__3824__auto____12963 = (cljs.core._hash["_"]);
if(or__3824__auto____12963)
{return or__3824__auto____12963;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____12964 = o;
if(and__3822__auto____12964)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____12964;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____12965 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____12965)
{return or__3824__auto____12965;
} else
{var or__3824__auto____12966 = (cljs.core._seq["_"]);
if(or__3824__auto____12966)
{return or__3824__auto____12966;
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
if((function (){var and__3822__auto____12967 = coll;
if(and__3822__auto____12967)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____12967;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____12968 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12968)
{return or__3824__auto____12968;
} else
{var or__3824__auto____12969 = (cljs.core._rseq["_"]);
if(or__3824__auto____12969)
{return or__3824__auto____12969;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____12970 = coll;
if(and__3822__auto____12970)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____12970;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____12971 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12971)
{return or__3824__auto____12971;
} else
{var or__3824__auto____12972 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____12972)
{return or__3824__auto____12972;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____12973 = coll;
if(and__3822__auto____12973)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____12973;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____12974 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12974)
{return or__3824__auto____12974;
} else
{var or__3824__auto____12975 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____12975)
{return or__3824__auto____12975;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____12976 = coll;
if(and__3822__auto____12976)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____12976;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____12977 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12977)
{return or__3824__auto____12977;
} else
{var or__3824__auto____12978 = (cljs.core._entry_key["_"]);
if(or__3824__auto____12978)
{return or__3824__auto____12978;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____12979 = coll;
if(and__3822__auto____12979)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____12979;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____12980 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12980)
{return or__3824__auto____12980;
} else
{var or__3824__auto____12981 = (cljs.core._comparator["_"]);
if(or__3824__auto____12981)
{return or__3824__auto____12981;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____12982 = o;
if(and__3822__auto____12982)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____12982;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____12983 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____12983)
{return or__3824__auto____12983;
} else
{var or__3824__auto____12984 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____12984)
{return or__3824__auto____12984;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____12985 = d;
if(and__3822__auto____12985)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____12985;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____12986 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3824__auto____12986)
{return or__3824__auto____12986;
} else
{var or__3824__auto____12987 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____12987)
{return or__3824__auto____12987;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____12988 = this$;
if(and__3822__auto____12988)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____12988;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____12989 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12989)
{return or__3824__auto____12989;
} else
{var or__3824__auto____12990 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____12990)
{return or__3824__auto____12990;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____12991 = this$;
if(and__3822__auto____12991)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____12991;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____12992 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12992)
{return or__3824__auto____12992;
} else
{var or__3824__auto____12993 = (cljs.core._add_watch["_"]);
if(or__3824__auto____12993)
{return or__3824__auto____12993;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____12994 = this$;
if(and__3822__auto____12994)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____12994;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____12995 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____12995)
{return or__3824__auto____12995;
} else
{var or__3824__auto____12996 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____12996)
{return or__3824__auto____12996;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____12997 = coll;
if(and__3822__auto____12997)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____12997;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____12998 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3824__auto____12998)
{return or__3824__auto____12998;
} else
{var or__3824__auto____12999 = (cljs.core._as_transient["_"]);
if(or__3824__auto____12999)
{return or__3824__auto____12999;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____13000 = tcoll;
if(and__3822__auto____13000)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____13000;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____13001 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13001)
{return or__3824__auto____13001;
} else
{var or__3824__auto____13002 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____13002)
{return or__3824__auto____13002;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____13003 = tcoll;
if(and__3822__auto____13003)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____13003;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____13004 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13004)
{return or__3824__auto____13004;
} else
{var or__3824__auto____13005 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____13005)
{return or__3824__auto____13005;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____13006 = tcoll;
if(and__3822__auto____13006)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____13006;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____13007 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13007)
{return or__3824__auto____13007;
} else
{var or__3824__auto____13008 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____13008)
{return or__3824__auto____13008;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____13009 = tcoll;
if(and__3822__auto____13009)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____13009;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____13010 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13010)
{return or__3824__auto____13010;
} else
{var or__3824__auto____13011 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____13011)
{return or__3824__auto____13011;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____13012 = tcoll;
if(and__3822__auto____13012)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____13012;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____13013 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13013)
{return or__3824__auto____13013;
} else
{var or__3824__auto____13014 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____13014)
{return or__3824__auto____13014;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____13015 = tcoll;
if(and__3822__auto____13015)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____13015;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____13016 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13016)
{return or__3824__auto____13016;
} else
{var or__3824__auto____13017 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____13017)
{return or__3824__auto____13017;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____13018 = tcoll;
if(and__3822__auto____13018)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____13018;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____13019 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____13019)
{return or__3824__auto____13019;
} else
{var or__3824__auto____13020 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____13020)
{return or__3824__auto____13020;
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
var or__3824__auto____13021 = (x === y);
if(or__3824__auto____13021)
{return or__3824__auto____13021;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__13022__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13023 = y;
var G__13024 = cljs.core.first.call(null,more);
var G__13025 = cljs.core.next.call(null,more);
x = G__13023;
y = G__13024;
more = G__13025;
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
var G__13022 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13022__delegate.call(this, x, y, more);
};
G__13022.cljs$lang$maxFixedArity = 2;
G__13022.cljs$lang$applyTo = (function (arglist__13026){
var x = cljs.core.first(arglist__13026);
var y = cljs.core.first(cljs.core.next(arglist__13026));
var more = cljs.core.rest(cljs.core.next(arglist__13026));
return G__13022__delegate(x, y, more);
});
G__13022.cljs$lang$arity$variadic = G__13022__delegate;
return G__13022;
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
if((function (){var or__3824__auto____13027 = (x == null);
if(or__3824__auto____13027)
{return or__3824__auto____13027;
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
var G__13028 = null;
var G__13028__2 = (function (o,k){
return null;
});
var G__13028__3 = (function (o,k,not_found){
return not_found;
});
G__13028 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__13028__2.call(this,o,k);
case 3:
return G__13028__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13028;
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
var G__13029 = null;
var G__13029__2 = (function (_,f){
return f.call(null);
});
var G__13029__3 = (function (_,f,start){
return start;
});
G__13029 = function(_,f,start){
switch(arguments.length){
case 2:
return G__13029__2.call(this,_,f);
case 3:
return G__13029__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13029;
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
var G__13030 = null;
var G__13030__2 = (function (_,n){
return null;
});
var G__13030__3 = (function (_,n,not_found){
return not_found;
});
G__13030 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__13030__2.call(this,_,n);
case 3:
return G__13030__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13030;
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
{var val__13031 = cljs.core._nth.call(null,cicoll,0);
var n__13032 = 1;
while(true){
if((n__13032 < cljs.core._count.call(null,cicoll)))
{var nval__13033 = f.call(null,val__13031,cljs.core._nth.call(null,cicoll,n__13032));
if(cljs.core.reduced_QMARK_.call(null,nval__13033))
{return cljs.core.deref.call(null,nval__13033);
} else
{{
var G__13040 = nval__13033;
var G__13041 = (n__13032 + 1);
val__13031 = G__13040;
n__13032 = G__13041;
continue;
}
}
} else
{return val__13031;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__13034 = val;
var n__13035 = 0;
while(true){
if((n__13035 < cljs.core._count.call(null,cicoll)))
{var nval__13036 = f.call(null,val__13034,cljs.core._nth.call(null,cicoll,n__13035));
if(cljs.core.reduced_QMARK_.call(null,nval__13036))
{return cljs.core.deref.call(null,nval__13036);
} else
{{
var G__13042 = nval__13036;
var G__13043 = (n__13035 + 1);
val__13034 = G__13042;
n__13035 = G__13043;
continue;
}
}
} else
{return val__13034;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__13037 = val;
var n__13038 = idx;
while(true){
if((n__13038 < cljs.core._count.call(null,cicoll)))
{var nval__13039 = f.call(null,val__13037,cljs.core._nth.call(null,cicoll,n__13038));
if(cljs.core.reduced_QMARK_.call(null,nval__13039))
{return cljs.core.deref.call(null,nval__13039);
} else
{{
var G__13044 = nval__13039;
var G__13045 = (n__13038 + 1);
val__13037 = G__13044;
n__13038 = G__13045;
continue;
}
}
} else
{return val__13037;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13046 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13047 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__13048 = this;
var this$__13049 = this;
return cljs.core.pr_str.call(null,this$__13049);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__13050 = this;
if(cljs.core.counted_QMARK_.call(null,this__13050.a))
{return cljs.core.ci_reduce.call(null,this__13050.a,f,(this__13050.a[this__13050.i]),(this__13050.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__13050.a[this__13050.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__13051 = this;
if(cljs.core.counted_QMARK_.call(null,this__13051.a))
{return cljs.core.ci_reduce.call(null,this__13051.a,f,start,this__13051.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13052 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__13053 = this;
return (this__13053.a.length - this__13053.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__13054 = this;
return (this__13054.a[this__13054.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__13055 = this;
if(((this__13055.i + 1) < this__13055.a.length))
{return (new cljs.core.IndexedSeq(this__13055.a,(this__13055.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13057 = this;
var i__13058 = (n + this__13057.i);
if((i__13058 < this__13057.a.length))
{return (this__13057.a[i__13058]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13059 = this;
var i__13060 = (n + this__13059.i);
if((i__13060 < this__13059.a.length))
{return (this__13059.a[i__13060]);
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
var G__13061 = null;
var G__13061__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__13061__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__13061 = function(array,f,start){
switch(arguments.length){
case 2:
return G__13061__2.call(this,array,f);
case 3:
return G__13061__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13061;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__13062 = null;
var G__13062__2 = (function (array,k){
return (array[k]);
});
var G__13062__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__13062 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__13062__2.call(this,array,k);
case 3:
return G__13062__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13062;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__13063 = null;
var G__13063__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__13063__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__13063 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__13063__2.call(this,array,n);
case 3:
return G__13063__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13063;
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
{if((function (){var G__13064__13065 = coll;
if((G__13064__13065 != null))
{if((function (){var or__3824__auto____13066 = (G__13064__13065.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____13066)
{return or__3824__auto____13066;
} else
{return G__13064__13065.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__13064__13065.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__13064__13065);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__13064__13065);
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
{if((function (){var G__13067__13068 = coll;
if((G__13067__13068 != null))
{if((function (){var or__3824__auto____13069 = (G__13067__13068.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____13069)
{return or__3824__auto____13069;
} else
{return G__13067__13068.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__13067__13068.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13067__13068);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13067__13068);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__13070 = cljs.core.seq.call(null,coll);
if((s__13070 != null))
{return cljs.core._first.call(null,s__13070);
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
{if((function (){var G__13071__13072 = coll;
if((G__13071__13072 != null))
{if((function (){var or__3824__auto____13073 = (G__13071__13072.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____13073)
{return or__3824__auto____13073;
} else
{return G__13071__13072.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__13071__13072.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13071__13072);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13071__13072);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__13074 = cljs.core.seq.call(null,coll);
if((s__13074 != null))
{return cljs.core._rest.call(null,s__13074);
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
{if((function (){var G__13075__13076 = coll;
if((G__13075__13076 != null))
{if((function (){var or__3824__auto____13077 = (G__13075__13076.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____13077)
{return or__3824__auto____13077;
} else
{return G__13075__13076.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__13075__13076.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13075__13076);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13075__13076);
}
})())
{var coll__13078 = cljs.core._rest.call(null,coll);
if((coll__13078 != null))
{if((function (){var G__13079__13080 = coll__13078;
if((G__13079__13080 != null))
{if((function (){var or__3824__auto____13081 = (G__13079__13080.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____13081)
{return or__3824__auto____13081;
} else
{return G__13079__13080.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__13079__13080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__13079__13080);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__13079__13080);
}
})())
{return coll__13078;
} else
{return cljs.core._seq.call(null,coll__13078);
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
var G__13082 = cljs.core.next.call(null,s);
s = G__13082;
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
var G__13083__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__13084 = conj.call(null,coll,x);
var G__13085 = cljs.core.first.call(null,xs);
var G__13086 = cljs.core.next.call(null,xs);
coll = G__13084;
x = G__13085;
xs = G__13086;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__13083 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13083__delegate.call(this, coll, x, xs);
};
G__13083.cljs$lang$maxFixedArity = 2;
G__13083.cljs$lang$applyTo = (function (arglist__13087){
var coll = cljs.core.first(arglist__13087);
var x = cljs.core.first(cljs.core.next(arglist__13087));
var xs = cljs.core.rest(cljs.core.next(arglist__13087));
return G__13083__delegate(coll, x, xs);
});
G__13083.cljs$lang$arity$variadic = G__13083__delegate;
return G__13083;
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
var s__13088 = cljs.core.seq.call(null,coll);
var acc__13089 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__13088))
{return (acc__13089 + cljs.core._count.call(null,s__13088));
} else
{{
var G__13090 = cljs.core.next.call(null,s__13088);
var G__13091 = (acc__13089 + 1);
s__13088 = G__13090;
acc__13089 = G__13091;
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
{if((function (){var G__13092__13093 = coll;
if((G__13092__13093 != null))
{if((function (){var or__3824__auto____13094 = (G__13092__13093.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____13094)
{return or__3824__auto____13094;
} else
{return G__13092__13093.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__13092__13093.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13092__13093);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13092__13093);
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
{if((function (){var G__13095__13096 = coll;
if((G__13095__13096 != null))
{if((function (){var or__3824__auto____13097 = (G__13095__13096.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____13097)
{return or__3824__auto____13097;
} else
{return G__13095__13096.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__13095__13096.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13095__13096);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13095__13096);
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
var G__13099__delegate = function (coll,k,v,kvs){
while(true){
var ret__13098 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__13100 = ret__13098;
var G__13101 = cljs.core.first.call(null,kvs);
var G__13102 = cljs.core.second.call(null,kvs);
var G__13103 = cljs.core.nnext.call(null,kvs);
coll = G__13100;
k = G__13101;
v = G__13102;
kvs = G__13103;
continue;
}
} else
{return ret__13098;
}
break;
}
};
var G__13099 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13099__delegate.call(this, coll, k, v, kvs);
};
G__13099.cljs$lang$maxFixedArity = 3;
G__13099.cljs$lang$applyTo = (function (arglist__13104){
var coll = cljs.core.first(arglist__13104);
var k = cljs.core.first(cljs.core.next(arglist__13104));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13104)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13104)));
return G__13099__delegate(coll, k, v, kvs);
});
G__13099.cljs$lang$arity$variadic = G__13099__delegate;
return G__13099;
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
var G__13106__delegate = function (coll,k,ks){
while(true){
var ret__13105 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__13107 = ret__13105;
var G__13108 = cljs.core.first.call(null,ks);
var G__13109 = cljs.core.next.call(null,ks);
coll = G__13107;
k = G__13108;
ks = G__13109;
continue;
}
} else
{return ret__13105;
}
break;
}
};
var G__13106 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13106__delegate.call(this, coll, k, ks);
};
G__13106.cljs$lang$maxFixedArity = 2;
G__13106.cljs$lang$applyTo = (function (arglist__13110){
var coll = cljs.core.first(arglist__13110);
var k = cljs.core.first(cljs.core.next(arglist__13110));
var ks = cljs.core.rest(cljs.core.next(arglist__13110));
return G__13106__delegate(coll, k, ks);
});
G__13106.cljs$lang$arity$variadic = G__13106__delegate;
return G__13106;
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
if((function (){var G__13111__13112 = o;
if((G__13111__13112 != null))
{if((function (){var or__3824__auto____13113 = (G__13111__13112.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____13113)
{return or__3824__auto____13113;
} else
{return G__13111__13112.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13111__13112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13111__13112);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13111__13112);
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
var G__13115__delegate = function (coll,k,ks){
while(true){
var ret__13114 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__13116 = ret__13114;
var G__13117 = cljs.core.first.call(null,ks);
var G__13118 = cljs.core.next.call(null,ks);
coll = G__13116;
k = G__13117;
ks = G__13118;
continue;
}
} else
{return ret__13114;
}
break;
}
};
var G__13115 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13115__delegate.call(this, coll, k, ks);
};
G__13115.cljs$lang$maxFixedArity = 2;
G__13115.cljs$lang$applyTo = (function (arglist__13119){
var coll = cljs.core.first(arglist__13119);
var k = cljs.core.first(cljs.core.next(arglist__13119));
var ks = cljs.core.rest(cljs.core.next(arglist__13119));
return G__13115__delegate(coll, k, ks);
});
G__13115.cljs$lang$arity$variadic = G__13115__delegate;
return G__13115;
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
{var G__13120__13121 = x;
if((G__13120__13121 != null))
{if((function (){var or__3824__auto____13122 = (G__13120__13121.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____13122)
{return or__3824__auto____13122;
} else
{return G__13120__13121.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__13120__13121.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__13120__13121);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__13120__13121);
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
{var G__13123__13124 = x;
if((G__13123__13124 != null))
{if((function (){var or__3824__auto____13125 = (G__13123__13124.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13125)
{return or__3824__auto____13125;
} else
{return G__13123__13124.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__13123__13124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__13123__13124);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__13123__13124);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__13126__13127 = x;
if((G__13126__13127 != null))
{if((function (){var or__3824__auto____13128 = (G__13126__13127.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____13128)
{return or__3824__auto____13128;
} else
{return G__13126__13127.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__13126__13127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__13126__13127);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__13126__13127);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__13129__13130 = x;
if((G__13129__13130 != null))
{if((function (){var or__3824__auto____13131 = (G__13129__13130.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____13131)
{return or__3824__auto____13131;
} else
{return G__13129__13130.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__13129__13130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__13129__13130);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__13129__13130);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__13132__13133 = x;
if((G__13132__13133 != null))
{if((function (){var or__3824__auto____13134 = (G__13132__13133.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____13134)
{return or__3824__auto____13134;
} else
{return G__13132__13133.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__13132__13133.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__13132__13133);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__13132__13133);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__13135__13136 = x;
if((G__13135__13136 != null))
{if((function (){var or__3824__auto____13137 = (G__13135__13136.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____13137)
{return or__3824__auto____13137;
} else
{return G__13135__13136.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__13135__13136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13135__13136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__13135__13136);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__13138__13139 = x;
if((G__13138__13139 != null))
{if((function (){var or__3824__auto____13140 = (G__13138__13139.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____13140)
{return or__3824__auto____13140;
} else
{return G__13138__13139.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__13138__13139.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13138__13139);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13138__13139);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__13141__13142 = x;
if((G__13141__13142 != null))
{if((function (){var or__3824__auto____13143 = (G__13141__13142.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____13143)
{return or__3824__auto____13143;
} else
{return G__13141__13142.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__13141__13142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__13141__13142);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__13141__13142);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__13144__13145 = x;
if((G__13144__13145 != null))
{if((function (){var or__3824__auto____13146 = (G__13144__13145.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3824__auto____13146)
{return or__3824__auto____13146;
} else
{return G__13144__13145.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__13144__13145.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__13144__13145);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__13144__13145);
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
var G__13147__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__13147 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13147__delegate.call(this, keyvals);
};
G__13147.cljs$lang$maxFixedArity = 0;
G__13147.cljs$lang$applyTo = (function (arglist__13148){
var keyvals = cljs.core.seq(arglist__13148);;
return G__13147__delegate(keyvals);
});
G__13147.cljs$lang$arity$variadic = G__13147__delegate;
return G__13147;
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
var keys__13149 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__13149.push(key);
}));
return keys__13149;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__13150 = i;
var j__13151 = j;
var len__13152 = len;
while(true){
if((len__13152 === 0))
{return to;
} else
{(to[j__13151] = (from[i__13150]));
{
var G__13153 = (i__13150 + 1);
var G__13154 = (j__13151 + 1);
var G__13155 = (len__13152 - 1);
i__13150 = G__13153;
j__13151 = G__13154;
len__13152 = G__13155;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__13156 = (i + (len - 1));
var j__13157 = (j + (len - 1));
var len__13158 = len;
while(true){
if((len__13158 === 0))
{return to;
} else
{(to[j__13157] = (from[i__13156]));
{
var G__13159 = (i__13156 - 1);
var G__13160 = (j__13157 - 1);
var G__13161 = (len__13158 - 1);
i__13156 = G__13159;
j__13157 = G__13160;
len__13158 = G__13161;
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
{var G__13162__13163 = s;
if((G__13162__13163 != null))
{if((function (){var or__3824__auto____13164 = (G__13162__13163.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____13164)
{return or__3824__auto____13164;
} else
{return G__13162__13163.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__13162__13163.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13162__13163);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13162__13163);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__13165__13166 = s;
if((G__13165__13166 != null))
{if((function (){var or__3824__auto____13167 = (G__13165__13166.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3824__auto____13167)
{return or__3824__auto____13167;
} else
{return G__13165__13166.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13165__13166.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13165__13166);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13165__13166);
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
var and__3822__auto____13168 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____13168))
{return cljs.core.not.call(null,(function (){var or__3824__auto____13169 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____13169)
{return or__3824__auto____13169;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____13168;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____13170 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____13170))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____13170;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____13171 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____13171))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____13171;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____13172 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____13172)
{return or__3824__auto____13172;
} else
{var G__13173__13174 = f;
if((G__13173__13174 != null))
{if((function (){var or__3824__auto____13175 = (G__13173__13174.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____13175)
{return or__3824__auto____13175;
} else
{return G__13173__13174.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__13173__13174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__13173__13174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__13173__13174);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____13176 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____13176)
{return (n == n.toFixed());
} else
{return and__3822__auto____13176;
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
if(cljs.core.truth_((function (){var and__3822__auto____13177 = coll;
if(cljs.core.truth_(and__3822__auto____13177))
{var and__3822__auto____13178 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____13178)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____13178;
}
} else
{return and__3822__auto____13177;
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
var G__13183__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__13179 = cljs.core.set([y,x]);
var xs__13180 = more;
while(true){
var x__13181 = cljs.core.first.call(null,xs__13180);
var etc__13182 = cljs.core.next.call(null,xs__13180);
if(cljs.core.truth_(xs__13180))
{if(cljs.core.contains_QMARK_.call(null,s__13179,x__13181))
{return false;
} else
{{
var G__13184 = cljs.core.conj.call(null,s__13179,x__13181);
var G__13185 = etc__13182;
s__13179 = G__13184;
xs__13180 = G__13185;
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
var G__13183 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13183__delegate.call(this, x, y, more);
};
G__13183.cljs$lang$maxFixedArity = 2;
G__13183.cljs$lang$applyTo = (function (arglist__13186){
var x = cljs.core.first(arglist__13186);
var y = cljs.core.first(cljs.core.next(arglist__13186));
var more = cljs.core.rest(cljs.core.next(arglist__13186));
return G__13183__delegate(x, y, more);
});
G__13183.cljs$lang$arity$variadic = G__13183__delegate;
return G__13183;
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
var r__13187 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__13187))
{return r__13187;
} else
{if(cljs.core.truth_(r__13187))
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
{var a__13188 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__13188,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__13188);
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
var temp__3971__auto____13189 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____13189))
{var s__13190 = temp__3971__auto____13189;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__13190),cljs.core.next.call(null,s__13190));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__13191 = val;
var coll__13192 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__13192))
{var nval__13193 = f.call(null,val__13191,cljs.core.first.call(null,coll__13192));
if(cljs.core.reduced_QMARK_.call(null,nval__13193))
{return cljs.core.deref.call(null,nval__13193);
} else
{{
var G__13194 = nval__13193;
var G__13195 = cljs.core.next.call(null,coll__13192);
val__13191 = G__13194;
coll__13192 = G__13195;
continue;
}
}
} else
{return val__13191;
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
if((function (){var G__13196__13197 = coll;
if((G__13196__13197 != null))
{if((function (){var or__3824__auto____13198 = (G__13196__13197.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____13198)
{return or__3824__auto____13198;
} else
{return G__13196__13197.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__13196__13197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13196__13197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13196__13197);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__13199__13200 = coll;
if((G__13199__13200 != null))
{if((function (){var or__3824__auto____13201 = (G__13199__13200.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____13201)
{return or__3824__auto____13201;
} else
{return G__13199__13200.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__13199__13200.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13199__13200);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__13199__13200);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__13202 = this;
return this__13202.val;
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
var G__13203__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__13203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13203__delegate.call(this, x, y, more);
};
G__13203.cljs$lang$maxFixedArity = 2;
G__13203.cljs$lang$applyTo = (function (arglist__13204){
var x = cljs.core.first(arglist__13204);
var y = cljs.core.first(cljs.core.next(arglist__13204));
var more = cljs.core.rest(cljs.core.next(arglist__13204));
return G__13203__delegate(x, y, more);
});
G__13203.cljs$lang$arity$variadic = G__13203__delegate;
return G__13203;
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
var G__13205__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__13205 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13205__delegate.call(this, x, y, more);
};
G__13205.cljs$lang$maxFixedArity = 2;
G__13205.cljs$lang$applyTo = (function (arglist__13206){
var x = cljs.core.first(arglist__13206);
var y = cljs.core.first(cljs.core.next(arglist__13206));
var more = cljs.core.rest(cljs.core.next(arglist__13206));
return G__13205__delegate(x, y, more);
});
G__13205.cljs$lang$arity$variadic = G__13205__delegate;
return G__13205;
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
var G__13207__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__13207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13207__delegate.call(this, x, y, more);
};
G__13207.cljs$lang$maxFixedArity = 2;
G__13207.cljs$lang$applyTo = (function (arglist__13208){
var x = cljs.core.first(arglist__13208);
var y = cljs.core.first(cljs.core.next(arglist__13208));
var more = cljs.core.rest(cljs.core.next(arglist__13208));
return G__13207__delegate(x, y, more);
});
G__13207.cljs$lang$arity$variadic = G__13207__delegate;
return G__13207;
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
var G__13209__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__13209 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13209__delegate.call(this, x, y, more);
};
G__13209.cljs$lang$maxFixedArity = 2;
G__13209.cljs$lang$applyTo = (function (arglist__13210){
var x = cljs.core.first(arglist__13210);
var y = cljs.core.first(cljs.core.next(arglist__13210));
var more = cljs.core.rest(cljs.core.next(arglist__13210));
return G__13209__delegate(x, y, more);
});
G__13209.cljs$lang$arity$variadic = G__13209__delegate;
return G__13209;
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
var G__13211__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13212 = y;
var G__13213 = cljs.core.first.call(null,more);
var G__13214 = cljs.core.next.call(null,more);
x = G__13212;
y = G__13213;
more = G__13214;
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
var G__13211 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13211__delegate.call(this, x, y, more);
};
G__13211.cljs$lang$maxFixedArity = 2;
G__13211.cljs$lang$applyTo = (function (arglist__13215){
var x = cljs.core.first(arglist__13215);
var y = cljs.core.first(cljs.core.next(arglist__13215));
var more = cljs.core.rest(cljs.core.next(arglist__13215));
return G__13211__delegate(x, y, more);
});
G__13211.cljs$lang$arity$variadic = G__13211__delegate;
return G__13211;
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
var G__13216__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13217 = y;
var G__13218 = cljs.core.first.call(null,more);
var G__13219 = cljs.core.next.call(null,more);
x = G__13217;
y = G__13218;
more = G__13219;
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
var G__13216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13216__delegate.call(this, x, y, more);
};
G__13216.cljs$lang$maxFixedArity = 2;
G__13216.cljs$lang$applyTo = (function (arglist__13220){
var x = cljs.core.first(arglist__13220);
var y = cljs.core.first(cljs.core.next(arglist__13220));
var more = cljs.core.rest(cljs.core.next(arglist__13220));
return G__13216__delegate(x, y, more);
});
G__13216.cljs$lang$arity$variadic = G__13216__delegate;
return G__13216;
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
var G__13221__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13222 = y;
var G__13223 = cljs.core.first.call(null,more);
var G__13224 = cljs.core.next.call(null,more);
x = G__13222;
y = G__13223;
more = G__13224;
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
var G__13221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13221__delegate.call(this, x, y, more);
};
G__13221.cljs$lang$maxFixedArity = 2;
G__13221.cljs$lang$applyTo = (function (arglist__13225){
var x = cljs.core.first(arglist__13225);
var y = cljs.core.first(cljs.core.next(arglist__13225));
var more = cljs.core.rest(cljs.core.next(arglist__13225));
return G__13221__delegate(x, y, more);
});
G__13221.cljs$lang$arity$variadic = G__13221__delegate;
return G__13221;
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
var G__13226__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13227 = y;
var G__13228 = cljs.core.first.call(null,more);
var G__13229 = cljs.core.next.call(null,more);
x = G__13227;
y = G__13228;
more = G__13229;
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
var G__13226 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13226__delegate.call(this, x, y, more);
};
G__13226.cljs$lang$maxFixedArity = 2;
G__13226.cljs$lang$applyTo = (function (arglist__13230){
var x = cljs.core.first(arglist__13230);
var y = cljs.core.first(cljs.core.next(arglist__13230));
var more = cljs.core.rest(cljs.core.next(arglist__13230));
return G__13226__delegate(x, y, more);
});
G__13226.cljs$lang$arity$variadic = G__13226__delegate;
return G__13226;
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
var G__13231__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__13231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13231__delegate.call(this, x, y, more);
};
G__13231.cljs$lang$maxFixedArity = 2;
G__13231.cljs$lang$applyTo = (function (arglist__13232){
var x = cljs.core.first(arglist__13232);
var y = cljs.core.first(cljs.core.next(arglist__13232));
var more = cljs.core.rest(cljs.core.next(arglist__13232));
return G__13231__delegate(x, y, more);
});
G__13231.cljs$lang$arity$variadic = G__13231__delegate;
return G__13231;
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
var G__13233__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__13233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13233__delegate.call(this, x, y, more);
};
G__13233.cljs$lang$maxFixedArity = 2;
G__13233.cljs$lang$applyTo = (function (arglist__13234){
var x = cljs.core.first(arglist__13234);
var y = cljs.core.first(cljs.core.next(arglist__13234));
var more = cljs.core.rest(cljs.core.next(arglist__13234));
return G__13233__delegate(x, y, more);
});
G__13233.cljs$lang$arity$variadic = G__13233__delegate;
return G__13233;
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
var rem__13235 = (n % d);
return cljs.core.fix.call(null,((n - rem__13235) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__13236 = cljs.core.quot.call(null,n,d);
return (n - (d * q__13236));
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
var c__13237 = 0;
var n__13238 = n;
while(true){
if((n__13238 === 0))
{return c__13237;
} else
{{
var G__13239 = (c__13237 + 1);
var G__13240 = (n__13238 & (n__13238 - 1));
c__13237 = G__13239;
n__13238 = G__13240;
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
var G__13241__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__13242 = y;
var G__13243 = cljs.core.first.call(null,more);
var G__13244 = cljs.core.next.call(null,more);
x = G__13242;
y = G__13243;
more = G__13244;
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
var G__13241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13241__delegate.call(this, x, y, more);
};
G__13241.cljs$lang$maxFixedArity = 2;
G__13241.cljs$lang$applyTo = (function (arglist__13245){
var x = cljs.core.first(arglist__13245);
var y = cljs.core.first(cljs.core.next(arglist__13245));
var more = cljs.core.rest(cljs.core.next(arglist__13245));
return G__13241__delegate(x, y, more);
});
G__13241.cljs$lang$arity$variadic = G__13241__delegate;
return G__13241;
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
var n__13246 = n;
var xs__13247 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13248 = xs__13247;
if(cljs.core.truth_(and__3822__auto____13248))
{return (n__13246 > 0);
} else
{return and__3822__auto____13248;
}
})()))
{{
var G__13249 = (n__13246 - 1);
var G__13250 = cljs.core.next.call(null,xs__13247);
n__13246 = G__13249;
xs__13247 = G__13250;
continue;
}
} else
{return xs__13247;
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
var G__13251__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__13252 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__13253 = cljs.core.next.call(null,more);
sb = G__13252;
more = G__13253;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__13251 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13251__delegate.call(this, x, ys);
};
G__13251.cljs$lang$maxFixedArity = 1;
G__13251.cljs$lang$applyTo = (function (arglist__13254){
var x = cljs.core.first(arglist__13254);
var ys = cljs.core.rest(arglist__13254);
return G__13251__delegate(x, ys);
});
G__13251.cljs$lang$arity$variadic = G__13251__delegate;
return G__13251;
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
var G__13255__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__13256 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__13257 = cljs.core.next.call(null,more);
sb = G__13256;
more = G__13257;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__13255 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13255__delegate.call(this, x, ys);
};
G__13255.cljs$lang$maxFixedArity = 1;
G__13255.cljs$lang$applyTo = (function (arglist__13258){
var x = cljs.core.first(arglist__13258);
var ys = cljs.core.rest(arglist__13258);
return G__13255__delegate(x, ys);
});
G__13255.cljs$lang$arity$variadic = G__13255__delegate;
return G__13255;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__13259 = cljs.core.seq.call(null,x);
var ys__13260 = cljs.core.seq.call(null,y);
while(true){
if((xs__13259 == null))
{return (ys__13260 == null);
} else
{if((ys__13260 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__13259),cljs.core.first.call(null,ys__13260)))
{{
var G__13261 = cljs.core.next.call(null,xs__13259);
var G__13262 = cljs.core.next.call(null,ys__13260);
xs__13259 = G__13261;
ys__13260 = G__13262;
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
return cljs.core.reduce.call(null,(function (p1__13263_SHARP_,p2__13264_SHARP_){
return cljs.core.hash_combine.call(null,p1__13263_SHARP_,cljs.core.hash.call(null,p2__13264_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__13265 = 0;
var s__13266 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__13266))
{var e__13267 = cljs.core.first.call(null,s__13266);
{
var G__13268 = ((h__13265 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__13267)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__13267)))) % 4503599627370496);
var G__13269 = cljs.core.next.call(null,s__13266);
h__13265 = G__13268;
s__13266 = G__13269;
continue;
}
} else
{return h__13265;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__13270 = 0;
var s__13271 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__13271))
{var e__13272 = cljs.core.first.call(null,s__13271);
{
var G__13273 = ((h__13270 + cljs.core.hash.call(null,e__13272)) % 4503599627370496);
var G__13274 = cljs.core.next.call(null,s__13271);
h__13270 = G__13273;
s__13271 = G__13274;
continue;
}
} else
{return h__13270;
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
var G__13275__13276 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__13275__13276))
{var G__13278__13280 = cljs.core.first.call(null,G__13275__13276);
var vec__13279__13281 = G__13278__13280;
var key_name__13282 = cljs.core.nth.call(null,vec__13279__13281,0,null);
var f__13283 = cljs.core.nth.call(null,vec__13279__13281,1,null);
var G__13275__13284 = G__13275__13276;
var G__13278__13285 = G__13278__13280;
var G__13275__13286 = G__13275__13284;
while(true){
var vec__13287__13288 = G__13278__13285;
var key_name__13289 = cljs.core.nth.call(null,vec__13287__13288,0,null);
var f__13290 = cljs.core.nth.call(null,vec__13287__13288,1,null);
var G__13275__13291 = G__13275__13286;
var str_name__13292 = cljs.core.name.call(null,key_name__13289);
obj[str_name__13292] = f__13290;
var temp__3974__auto____13293 = cljs.core.next.call(null,G__13275__13291);
if(cljs.core.truth_(temp__3974__auto____13293))
{var G__13275__13294 = temp__3974__auto____13293;
{
var G__13295 = cljs.core.first.call(null,G__13275__13294);
var G__13296 = G__13275__13294;
G__13278__13285 = G__13295;
G__13275__13286 = G__13296;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13297 = this;
var h__364__auto____13298 = this__13297.__hash;
if((h__364__auto____13298 != null))
{return h__364__auto____13298;
} else
{var h__364__auto____13299 = cljs.core.hash_coll.call(null,coll);
this__13297.__hash = h__364__auto____13299;
return h__364__auto____13299;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13300 = this;
return (new cljs.core.List(this__13300.meta,o,coll,(this__13300.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__13301 = this;
var this$__13302 = this;
return cljs.core.pr_str.call(null,this$__13302);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13303 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13304 = this;
return this__13304.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13305 = this;
return this__13305.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13306 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13307 = this;
return this__13307.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13308 = this;
return this__13308.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13309 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13310 = this;
return (new cljs.core.List(meta,this__13310.first,this__13310.rest,this__13310.count,this__13310.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13311 = this;
return this__13311.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13312 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13313 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13314 = this;
return (new cljs.core.List(this__13314.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__13315 = this;
var this$__13316 = this;
return cljs.core.pr_str.call(null,this$__13316);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13317 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13318 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13319 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13320 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13321 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13322 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13323 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13324 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13325 = this;
return this__13325.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13326 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__13327__13328 = coll;
if((G__13327__13328 != null))
{if((function (){var or__3824__auto____13329 = (G__13327__13328.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3824__auto____13329)
{return or__3824__auto____13329;
} else
{return G__13327__13328.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__13327__13328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__13327__13328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__13327__13328);
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
list.cljs$lang$applyTo = (function (arglist__13330){
var items = cljs.core.seq(arglist__13330);;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13331 = this;
var h__364__auto____13332 = this__13331.__hash;
if((h__364__auto____13332 != null))
{return h__364__auto____13332;
} else
{var h__364__auto____13333 = cljs.core.hash_coll.call(null,coll);
this__13331.__hash = h__364__auto____13333;
return h__364__auto____13333;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13334 = this;
return (new cljs.core.Cons(null,o,coll,this__13334.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__13335 = this;
var this$__13336 = this;
return cljs.core.pr_str.call(null,this$__13336);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13337 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13338 = this;
return this__13338.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13339 = this;
if((this__13339.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__13339.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13341 = this;
return (new cljs.core.Cons(meta,this__13341.first,this__13341.rest,this__13341.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13342 = this;
return this__13342.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13343 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13343.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____13344 = (coll == null);
if(or__3824__auto____13344)
{return or__3824__auto____13344;
} else
{var G__13345__13346 = coll;
if((G__13345__13346 != null))
{if((function (){var or__3824__auto____13347 = (G__13345__13346.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____13347)
{return or__3824__auto____13347;
} else
{return G__13345__13346.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__13345__13346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13345__13346);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__13345__13346);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__13348__13349 = x;
if((G__13348__13349 != null))
{if((function (){var or__3824__auto____13350 = (G__13348__13349.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____13350)
{return or__3824__auto____13350;
} else
{return G__13348__13349.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__13348__13349.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__13348__13349);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__13348__13349);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__13351 = null;
var G__13351__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__13351__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__13351 = function(string,f,start){
switch(arguments.length){
case 2:
return G__13351__2.call(this,string,f);
case 3:
return G__13351__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13351;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__13352 = null;
var G__13352__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__13352__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__13352 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__13352__2.call(this,string,k);
case 3:
return G__13352__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13352;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__13353 = null;
var G__13353__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__13353__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__13353 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__13353__2.call(this,string,n);
case 3:
return G__13353__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13353;
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
var G__13362 = null;
var G__13362__2 = (function (tsym13356,coll){
var tsym13356__13358 = this;
var this$__13359 = tsym13356__13358;
return cljs.core.get.call(null,coll,this$__13359.toString());
});
var G__13362__3 = (function (tsym13357,coll,not_found){
var tsym13357__13360 = this;
var this$__13361 = tsym13357__13360;
return cljs.core.get.call(null,coll,this$__13361.toString(),not_found);
});
G__13362 = function(tsym13357,coll,not_found){
switch(arguments.length){
case 2:
return G__13362__2.call(this,tsym13357,coll);
case 3:
return G__13362__3.call(this,tsym13357,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13362;
})()
;
String.prototype.apply = (function (tsym13354,args13355){
return tsym13354.call.apply(tsym13354,[tsym13354].concat(cljs.core.aclone.call(null,args13355)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__13363 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__13363;
} else
{lazy_seq.x = x__13363.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13364 = this;
var h__364__auto____13365 = this__13364.__hash;
if((h__364__auto____13365 != null))
{return h__364__auto____13365;
} else
{var h__364__auto____13366 = cljs.core.hash_coll.call(null,coll);
this__13364.__hash = h__364__auto____13366;
return h__364__auto____13366;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13367 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__13368 = this;
var this$__13369 = this;
return cljs.core.pr_str.call(null,this$__13369);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13370 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13371 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13372 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13374 = this;
return (new cljs.core.LazySeq(meta,this__13374.realized,this__13374.x,this__13374.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13375 = this;
return this__13375.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13376 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13376.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__13377 = [];
var s__13378 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13378)))
{ary__13377.push(cljs.core.first.call(null,s__13378));
{
var G__13379 = cljs.core.next.call(null,s__13378);
s__13378 = G__13379;
continue;
}
} else
{return ary__13377;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__13380 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__13381 = 0;
var xs__13382 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__13382))
{(ret__13380[i__13381] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__13382)));
{
var G__13383 = (i__13381 + 1);
var G__13384 = cljs.core.next.call(null,xs__13382);
i__13381 = G__13383;
xs__13382 = G__13384;
continue;
}
} else
{}
break;
}
return ret__13380;
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
var a__13385 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__13386 = cljs.core.seq.call(null,init_val_or_seq);
var i__13387 = 0;
var s__13388 = s__13386;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13389 = s__13388;
if(cljs.core.truth_(and__3822__auto____13389))
{return (i__13387 < size);
} else
{return and__3822__auto____13389;
}
})()))
{(a__13385[i__13387] = cljs.core.first.call(null,s__13388));
{
var G__13392 = (i__13387 + 1);
var G__13393 = cljs.core.next.call(null,s__13388);
i__13387 = G__13392;
s__13388 = G__13393;
continue;
}
} else
{return a__13385;
}
break;
}
} else
{var n__685__auto____13390 = size;
var i__13391 = 0;
while(true){
if((i__13391 < n__685__auto____13390))
{(a__13385[i__13391] = init_val_or_seq);
{
var G__13394 = (i__13391 + 1);
i__13391 = G__13394;
continue;
}
} else
{}
break;
}
return a__13385;
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
var a__13395 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__13396 = cljs.core.seq.call(null,init_val_or_seq);
var i__13397 = 0;
var s__13398 = s__13396;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13399 = s__13398;
if(cljs.core.truth_(and__3822__auto____13399))
{return (i__13397 < size);
} else
{return and__3822__auto____13399;
}
})()))
{(a__13395[i__13397] = cljs.core.first.call(null,s__13398));
{
var G__13402 = (i__13397 + 1);
var G__13403 = cljs.core.next.call(null,s__13398);
i__13397 = G__13402;
s__13398 = G__13403;
continue;
}
} else
{return a__13395;
}
break;
}
} else
{var n__685__auto____13400 = size;
var i__13401 = 0;
while(true){
if((i__13401 < n__685__auto____13400))
{(a__13395[i__13401] = init_val_or_seq);
{
var G__13404 = (i__13401 + 1);
i__13401 = G__13404;
continue;
}
} else
{}
break;
}
return a__13395;
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
var a__13405 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__13406 = cljs.core.seq.call(null,init_val_or_seq);
var i__13407 = 0;
var s__13408 = s__13406;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13409 = s__13408;
if(cljs.core.truth_(and__3822__auto____13409))
{return (i__13407 < size);
} else
{return and__3822__auto____13409;
}
})()))
{(a__13405[i__13407] = cljs.core.first.call(null,s__13408));
{
var G__13412 = (i__13407 + 1);
var G__13413 = cljs.core.next.call(null,s__13408);
i__13407 = G__13412;
s__13408 = G__13413;
continue;
}
} else
{return a__13405;
}
break;
}
} else
{var n__685__auto____13410 = size;
var i__13411 = 0;
while(true){
if((i__13411 < n__685__auto____13410))
{(a__13405[i__13411] = init_val_or_seq);
{
var G__13414 = (i__13411 + 1);
i__13411 = G__13414;
continue;
}
} else
{}
break;
}
return a__13405;
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
{var s__13415 = s;
var i__13416 = n;
var sum__13417 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13418 = (i__13416 > 0);
if(and__3822__auto____13418)
{return cljs.core.seq.call(null,s__13415);
} else
{return and__3822__auto____13418;
}
})()))
{{
var G__13419 = cljs.core.next.call(null,s__13415);
var G__13420 = (i__13416 - 1);
var G__13421 = (sum__13417 + 1);
s__13415 = G__13419;
i__13416 = G__13420;
sum__13417 = G__13421;
continue;
}
} else
{return sum__13417;
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
var s__13422 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__13422))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13422),concat.call(null,cljs.core.rest.call(null,s__13422),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__13425__delegate = function (x,y,zs){
var cat__13424 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__13423 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__13423))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__13423),cat.call(null,cljs.core.rest.call(null,xys__13423),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__13424.call(null,concat.call(null,x,y),zs);
};
var G__13425 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13425__delegate.call(this, x, y, zs);
};
G__13425.cljs$lang$maxFixedArity = 2;
G__13425.cljs$lang$applyTo = (function (arglist__13426){
var x = cljs.core.first(arglist__13426);
var y = cljs.core.first(cljs.core.next(arglist__13426));
var zs = cljs.core.rest(cljs.core.next(arglist__13426));
return G__13425__delegate(x, y, zs);
});
G__13425.cljs$lang$arity$variadic = G__13425__delegate;
return G__13425;
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
var G__13427__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__13427 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13427__delegate.call(this, a, b, c, d, more);
};
G__13427.cljs$lang$maxFixedArity = 4;
G__13427.cljs$lang$applyTo = (function (arglist__13428){
var a = cljs.core.first(arglist__13428);
var b = cljs.core.first(cljs.core.next(arglist__13428));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13428)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13428))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13428))));
return G__13427__delegate(a, b, c, d, more);
});
G__13427.cljs$lang$arity$variadic = G__13427__delegate;
return G__13427;
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
var args__13429 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__13430 = cljs.core._first.call(null,args__13429);
var args__13431 = cljs.core._rest.call(null,args__13429);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__13430);
} else
{return f.call(null,a__13430);
}
} else
{var b__13432 = cljs.core._first.call(null,args__13431);
var args__13433 = cljs.core._rest.call(null,args__13431);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__13430,b__13432);
} else
{return f.call(null,a__13430,b__13432);
}
} else
{var c__13434 = cljs.core._first.call(null,args__13433);
var args__13435 = cljs.core._rest.call(null,args__13433);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__13430,b__13432,c__13434);
} else
{return f.call(null,a__13430,b__13432,c__13434);
}
} else
{var d__13436 = cljs.core._first.call(null,args__13435);
var args__13437 = cljs.core._rest.call(null,args__13435);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__13430,b__13432,c__13434,d__13436);
} else
{return f.call(null,a__13430,b__13432,c__13434,d__13436);
}
} else
{var e__13438 = cljs.core._first.call(null,args__13437);
var args__13439 = cljs.core._rest.call(null,args__13437);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__13430,b__13432,c__13434,d__13436,e__13438);
} else
{return f.call(null,a__13430,b__13432,c__13434,d__13436,e__13438);
}
} else
{var f__13440 = cljs.core._first.call(null,args__13439);
var args__13441 = cljs.core._rest.call(null,args__13439);
if((argc === 6))
{if(f__13440.cljs$lang$arity$6)
{return f__13440.cljs$lang$arity$6(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440);
}
} else
{var g__13442 = cljs.core._first.call(null,args__13441);
var args__13443 = cljs.core._rest.call(null,args__13441);
if((argc === 7))
{if(f__13440.cljs$lang$arity$7)
{return f__13440.cljs$lang$arity$7(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442);
}
} else
{var h__13444 = cljs.core._first.call(null,args__13443);
var args__13445 = cljs.core._rest.call(null,args__13443);
if((argc === 8))
{if(f__13440.cljs$lang$arity$8)
{return f__13440.cljs$lang$arity$8(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444);
}
} else
{var i__13446 = cljs.core._first.call(null,args__13445);
var args__13447 = cljs.core._rest.call(null,args__13445);
if((argc === 9))
{if(f__13440.cljs$lang$arity$9)
{return f__13440.cljs$lang$arity$9(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446);
}
} else
{var j__13448 = cljs.core._first.call(null,args__13447);
var args__13449 = cljs.core._rest.call(null,args__13447);
if((argc === 10))
{if(f__13440.cljs$lang$arity$10)
{return f__13440.cljs$lang$arity$10(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448);
}
} else
{var k__13450 = cljs.core._first.call(null,args__13449);
var args__13451 = cljs.core._rest.call(null,args__13449);
if((argc === 11))
{if(f__13440.cljs$lang$arity$11)
{return f__13440.cljs$lang$arity$11(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450);
}
} else
{var l__13452 = cljs.core._first.call(null,args__13451);
var args__13453 = cljs.core._rest.call(null,args__13451);
if((argc === 12))
{if(f__13440.cljs$lang$arity$12)
{return f__13440.cljs$lang$arity$12(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452);
}
} else
{var m__13454 = cljs.core._first.call(null,args__13453);
var args__13455 = cljs.core._rest.call(null,args__13453);
if((argc === 13))
{if(f__13440.cljs$lang$arity$13)
{return f__13440.cljs$lang$arity$13(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454);
}
} else
{var n__13456 = cljs.core._first.call(null,args__13455);
var args__13457 = cljs.core._rest.call(null,args__13455);
if((argc === 14))
{if(f__13440.cljs$lang$arity$14)
{return f__13440.cljs$lang$arity$14(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456);
}
} else
{var o__13458 = cljs.core._first.call(null,args__13457);
var args__13459 = cljs.core._rest.call(null,args__13457);
if((argc === 15))
{if(f__13440.cljs$lang$arity$15)
{return f__13440.cljs$lang$arity$15(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458);
}
} else
{var p__13460 = cljs.core._first.call(null,args__13459);
var args__13461 = cljs.core._rest.call(null,args__13459);
if((argc === 16))
{if(f__13440.cljs$lang$arity$16)
{return f__13440.cljs$lang$arity$16(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460);
}
} else
{var q__13462 = cljs.core._first.call(null,args__13461);
var args__13463 = cljs.core._rest.call(null,args__13461);
if((argc === 17))
{if(f__13440.cljs$lang$arity$17)
{return f__13440.cljs$lang$arity$17(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462);
}
} else
{var r__13464 = cljs.core._first.call(null,args__13463);
var args__13465 = cljs.core._rest.call(null,args__13463);
if((argc === 18))
{if(f__13440.cljs$lang$arity$18)
{return f__13440.cljs$lang$arity$18(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464);
}
} else
{var s__13466 = cljs.core._first.call(null,args__13465);
var args__13467 = cljs.core._rest.call(null,args__13465);
if((argc === 19))
{if(f__13440.cljs$lang$arity$19)
{return f__13440.cljs$lang$arity$19(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464,s__13466);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464,s__13466);
}
} else
{var t__13468 = cljs.core._first.call(null,args__13467);
var args__13469 = cljs.core._rest.call(null,args__13467);
if((argc === 20))
{if(f__13440.cljs$lang$arity$20)
{return f__13440.cljs$lang$arity$20(a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464,s__13466,t__13468);
} else
{return f__13440.call(null,a__13430,b__13432,c__13434,d__13436,e__13438,f__13440,g__13442,h__13444,i__13446,j__13448,k__13450,l__13452,m__13454,n__13456,o__13458,p__13460,q__13462,r__13464,s__13466,t__13468);
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
var fixed_arity__13470 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__13471 = cljs.core.bounded_count.call(null,args,(fixed_arity__13470 + 1));
if((bc__13471 <= fixed_arity__13470))
{return cljs.core.apply_to.call(null,f,bc__13471,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__13472 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__13473 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__13474 = cljs.core.bounded_count.call(null,arglist__13472,(fixed_arity__13473 + 1));
if((bc__13474 <= fixed_arity__13473))
{return cljs.core.apply_to.call(null,f,bc__13474,arglist__13472);
} else
{return f.cljs$lang$applyTo(arglist__13472);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__13472));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__13475 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__13476 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__13477 = cljs.core.bounded_count.call(null,arglist__13475,(fixed_arity__13476 + 1));
if((bc__13477 <= fixed_arity__13476))
{return cljs.core.apply_to.call(null,f,bc__13477,arglist__13475);
} else
{return f.cljs$lang$applyTo(arglist__13475);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__13475));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__13478 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__13479 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__13480 = cljs.core.bounded_count.call(null,arglist__13478,(fixed_arity__13479 + 1));
if((bc__13480 <= fixed_arity__13479))
{return cljs.core.apply_to.call(null,f,bc__13480,arglist__13478);
} else
{return f.cljs$lang$applyTo(arglist__13478);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__13478));
}
});
var apply__6 = (function() { 
var G__13484__delegate = function (f,a,b,c,d,args){
var arglist__13481 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__13482 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__13483 = cljs.core.bounded_count.call(null,arglist__13481,(fixed_arity__13482 + 1));
if((bc__13483 <= fixed_arity__13482))
{return cljs.core.apply_to.call(null,f,bc__13483,arglist__13481);
} else
{return f.cljs$lang$applyTo(arglist__13481);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__13481));
}
};
var G__13484 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13484__delegate.call(this, f, a, b, c, d, args);
};
G__13484.cljs$lang$maxFixedArity = 5;
G__13484.cljs$lang$applyTo = (function (arglist__13485){
var f = cljs.core.first(arglist__13485);
var a = cljs.core.first(cljs.core.next(arglist__13485));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13485)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13485))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13485)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13485)))));
return G__13484__delegate(f, a, b, c, d, args);
});
G__13484.cljs$lang$arity$variadic = G__13484__delegate;
return G__13484;
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
vary_meta.cljs$lang$applyTo = (function (arglist__13486){
var obj = cljs.core.first(arglist__13486);
var f = cljs.core.first(cljs.core.next(arglist__13486));
var args = cljs.core.rest(cljs.core.next(arglist__13486));
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
var G__13487__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__13487 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13487__delegate.call(this, x, y, more);
};
G__13487.cljs$lang$maxFixedArity = 2;
G__13487.cljs$lang$applyTo = (function (arglist__13488){
var x = cljs.core.first(arglist__13488);
var y = cljs.core.first(cljs.core.next(arglist__13488));
var more = cljs.core.rest(cljs.core.next(arglist__13488));
return G__13487__delegate(x, y, more);
});
G__13487.cljs$lang$arity$variadic = G__13487__delegate;
return G__13487;
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
var G__13489 = pred;
var G__13490 = cljs.core.next.call(null,coll);
pred = G__13489;
coll = G__13490;
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
{var or__3824__auto____13491 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____13491))
{return or__3824__auto____13491;
} else
{{
var G__13492 = pred;
var G__13493 = cljs.core.next.call(null,coll);
pred = G__13492;
coll = G__13493;
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
var G__13494 = null;
var G__13494__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__13494__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__13494__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__13494__3 = (function() { 
var G__13495__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__13495 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13495__delegate.call(this, x, y, zs);
};
G__13495.cljs$lang$maxFixedArity = 2;
G__13495.cljs$lang$applyTo = (function (arglist__13496){
var x = cljs.core.first(arglist__13496);
var y = cljs.core.first(cljs.core.next(arglist__13496));
var zs = cljs.core.rest(cljs.core.next(arglist__13496));
return G__13495__delegate(x, y, zs);
});
G__13495.cljs$lang$arity$variadic = G__13495__delegate;
return G__13495;
})()
;
G__13494 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__13494__0.call(this);
case 1:
return G__13494__1.call(this,x);
case 2:
return G__13494__2.call(this,x,y);
default:
return G__13494__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__13494.cljs$lang$maxFixedArity = 2;
G__13494.cljs$lang$applyTo = G__13494__3.cljs$lang$applyTo;
return G__13494;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__13497__delegate = function (args){
return x;
};
var G__13497 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13497__delegate.call(this, args);
};
G__13497.cljs$lang$maxFixedArity = 0;
G__13497.cljs$lang$applyTo = (function (arglist__13498){
var args = cljs.core.seq(arglist__13498);;
return G__13497__delegate(args);
});
G__13497.cljs$lang$arity$variadic = G__13497__delegate;
return G__13497;
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
var G__13502 = null;
var G__13502__0 = (function (){
return f.call(null,g.call(null));
});
var G__13502__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__13502__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__13502__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__13502__4 = (function() { 
var G__13503__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13503 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13503__delegate.call(this, x, y, z, args);
};
G__13503.cljs$lang$maxFixedArity = 3;
G__13503.cljs$lang$applyTo = (function (arglist__13504){
var x = cljs.core.first(arglist__13504);
var y = cljs.core.first(cljs.core.next(arglist__13504));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13504)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13504)));
return G__13503__delegate(x, y, z, args);
});
G__13503.cljs$lang$arity$variadic = G__13503__delegate;
return G__13503;
})()
;
G__13502 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13502__0.call(this);
case 1:
return G__13502__1.call(this,x);
case 2:
return G__13502__2.call(this,x,y);
case 3:
return G__13502__3.call(this,x,y,z);
default:
return G__13502__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13502.cljs$lang$maxFixedArity = 3;
G__13502.cljs$lang$applyTo = G__13502__4.cljs$lang$applyTo;
return G__13502;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__13505 = null;
var G__13505__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__13505__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__13505__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__13505__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__13505__4 = (function() { 
var G__13506__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__13506 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13506__delegate.call(this, x, y, z, args);
};
G__13506.cljs$lang$maxFixedArity = 3;
G__13506.cljs$lang$applyTo = (function (arglist__13507){
var x = cljs.core.first(arglist__13507);
var y = cljs.core.first(cljs.core.next(arglist__13507));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13507)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13507)));
return G__13506__delegate(x, y, z, args);
});
G__13506.cljs$lang$arity$variadic = G__13506__delegate;
return G__13506;
})()
;
G__13505 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13505__0.call(this);
case 1:
return G__13505__1.call(this,x);
case 2:
return G__13505__2.call(this,x,y);
case 3:
return G__13505__3.call(this,x,y,z);
default:
return G__13505__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13505.cljs$lang$maxFixedArity = 3;
G__13505.cljs$lang$applyTo = G__13505__4.cljs$lang$applyTo;
return G__13505;
})()
});
var comp__4 = (function() { 
var G__13508__delegate = function (f1,f2,f3,fs){
var fs__13499 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__13509__delegate = function (args){
var ret__13500 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__13499),args);
var fs__13501 = cljs.core.next.call(null,fs__13499);
while(true){
if(cljs.core.truth_(fs__13501))
{{
var G__13510 = cljs.core.first.call(null,fs__13501).call(null,ret__13500);
var G__13511 = cljs.core.next.call(null,fs__13501);
ret__13500 = G__13510;
fs__13501 = G__13511;
continue;
}
} else
{return ret__13500;
}
break;
}
};
var G__13509 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13509__delegate.call(this, args);
};
G__13509.cljs$lang$maxFixedArity = 0;
G__13509.cljs$lang$applyTo = (function (arglist__13512){
var args = cljs.core.seq(arglist__13512);;
return G__13509__delegate(args);
});
G__13509.cljs$lang$arity$variadic = G__13509__delegate;
return G__13509;
})()
;
};
var G__13508 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13508__delegate.call(this, f1, f2, f3, fs);
};
G__13508.cljs$lang$maxFixedArity = 3;
G__13508.cljs$lang$applyTo = (function (arglist__13513){
var f1 = cljs.core.first(arglist__13513);
var f2 = cljs.core.first(cljs.core.next(arglist__13513));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13513)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13513)));
return G__13508__delegate(f1, f2, f3, fs);
});
G__13508.cljs$lang$arity$variadic = G__13508__delegate;
return G__13508;
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
var G__13514__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__13514 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13514__delegate.call(this, args);
};
G__13514.cljs$lang$maxFixedArity = 0;
G__13514.cljs$lang$applyTo = (function (arglist__13515){
var args = cljs.core.seq(arglist__13515);;
return G__13514__delegate(args);
});
G__13514.cljs$lang$arity$variadic = G__13514__delegate;
return G__13514;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__13516__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__13516 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13516__delegate.call(this, args);
};
G__13516.cljs$lang$maxFixedArity = 0;
G__13516.cljs$lang$applyTo = (function (arglist__13517){
var args = cljs.core.seq(arglist__13517);;
return G__13516__delegate(args);
});
G__13516.cljs$lang$arity$variadic = G__13516__delegate;
return G__13516;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__13518__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__13518 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13518__delegate.call(this, args);
};
G__13518.cljs$lang$maxFixedArity = 0;
G__13518.cljs$lang$applyTo = (function (arglist__13519){
var args = cljs.core.seq(arglist__13519);;
return G__13518__delegate(args);
});
G__13518.cljs$lang$arity$variadic = G__13518__delegate;
return G__13518;
})()
;
});
var partial__5 = (function() { 
var G__13520__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__13521__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__13521 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13521__delegate.call(this, args);
};
G__13521.cljs$lang$maxFixedArity = 0;
G__13521.cljs$lang$applyTo = (function (arglist__13522){
var args = cljs.core.seq(arglist__13522);;
return G__13521__delegate(args);
});
G__13521.cljs$lang$arity$variadic = G__13521__delegate;
return G__13521;
})()
;
};
var G__13520 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13520__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__13520.cljs$lang$maxFixedArity = 4;
G__13520.cljs$lang$applyTo = (function (arglist__13523){
var f = cljs.core.first(arglist__13523);
var arg1 = cljs.core.first(cljs.core.next(arglist__13523));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13523)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13523))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13523))));
return G__13520__delegate(f, arg1, arg2, arg3, more);
});
G__13520.cljs$lang$arity$variadic = G__13520__delegate;
return G__13520;
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
var G__13524 = null;
var G__13524__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__13524__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__13524__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__13524__4 = (function() { 
var G__13525__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__13525 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13525__delegate.call(this, a, b, c, ds);
};
G__13525.cljs$lang$maxFixedArity = 3;
G__13525.cljs$lang$applyTo = (function (arglist__13526){
var a = cljs.core.first(arglist__13526);
var b = cljs.core.first(cljs.core.next(arglist__13526));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13526)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13526)));
return G__13525__delegate(a, b, c, ds);
});
G__13525.cljs$lang$arity$variadic = G__13525__delegate;
return G__13525;
})()
;
G__13524 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__13524__1.call(this,a);
case 2:
return G__13524__2.call(this,a,b);
case 3:
return G__13524__3.call(this,a,b,c);
default:
return G__13524__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13524.cljs$lang$maxFixedArity = 3;
G__13524.cljs$lang$applyTo = G__13524__4.cljs$lang$applyTo;
return G__13524;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__13527 = null;
var G__13527__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__13527__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__13527__4 = (function() { 
var G__13528__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__13528 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13528__delegate.call(this, a, b, c, ds);
};
G__13528.cljs$lang$maxFixedArity = 3;
G__13528.cljs$lang$applyTo = (function (arglist__13529){
var a = cljs.core.first(arglist__13529);
var b = cljs.core.first(cljs.core.next(arglist__13529));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13529)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13529)));
return G__13528__delegate(a, b, c, ds);
});
G__13528.cljs$lang$arity$variadic = G__13528__delegate;
return G__13528;
})()
;
G__13527 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13527__2.call(this,a,b);
case 3:
return G__13527__3.call(this,a,b,c);
default:
return G__13527__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13527.cljs$lang$maxFixedArity = 3;
G__13527.cljs$lang$applyTo = G__13527__4.cljs$lang$applyTo;
return G__13527;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__13530 = null;
var G__13530__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__13530__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__13530__4 = (function() { 
var G__13531__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__13531 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13531__delegate.call(this, a, b, c, ds);
};
G__13531.cljs$lang$maxFixedArity = 3;
G__13531.cljs$lang$applyTo = (function (arglist__13532){
var a = cljs.core.first(arglist__13532);
var b = cljs.core.first(cljs.core.next(arglist__13532));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13532)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13532)));
return G__13531__delegate(a, b, c, ds);
});
G__13531.cljs$lang$arity$variadic = G__13531__delegate;
return G__13531;
})()
;
G__13530 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13530__2.call(this,a,b);
case 3:
return G__13530__3.call(this,a,b,c);
default:
return G__13530__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13530.cljs$lang$maxFixedArity = 3;
G__13530.cljs$lang$applyTo = G__13530__4.cljs$lang$applyTo;
return G__13530;
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
var mapi__13535 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13533 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13533))
{var s__13534 = temp__3974__auto____13533;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__13534)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__13534)));
} else
{return null;
}
})));
});
return mapi__13535.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13536 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13536))
{var s__13537 = temp__3974__auto____13536;
var x__13538 = f.call(null,cljs.core.first.call(null,s__13537));
if((x__13538 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__13537));
} else
{return cljs.core.cons.call(null,x__13538,keep.call(null,f,cljs.core.rest.call(null,s__13537)));
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
var keepi__13548 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13545 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13545))
{var s__13546 = temp__3974__auto____13545;
var x__13547 = f.call(null,idx,cljs.core.first.call(null,s__13546));
if((x__13547 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__13546));
} else
{return cljs.core.cons.call(null,x__13547,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__13546)));
}
} else
{return null;
}
})));
});
return keepi__13548.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13555 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____13555))
{return p.call(null,y);
} else
{return and__3822__auto____13555;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13556 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____13556))
{var and__3822__auto____13557 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____13557))
{return p.call(null,z);
} else
{return and__3822__auto____13557;
}
} else
{return and__3822__auto____13556;
}
})());
});
var ep1__4 = (function() { 
var G__13593__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13558 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____13558))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____13558;
}
})());
};
var G__13593 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13593__delegate.call(this, x, y, z, args);
};
G__13593.cljs$lang$maxFixedArity = 3;
G__13593.cljs$lang$applyTo = (function (arglist__13594){
var x = cljs.core.first(arglist__13594);
var y = cljs.core.first(cljs.core.next(arglist__13594));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13594)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13594)));
return G__13593__delegate(x, y, z, args);
});
G__13593.cljs$lang$arity$variadic = G__13593__delegate;
return G__13593;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13559 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13559))
{return p2.call(null,x);
} else
{return and__3822__auto____13559;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13560 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13560))
{var and__3822__auto____13561 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____13561))
{var and__3822__auto____13562 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____13562))
{return p2.call(null,y);
} else
{return and__3822__auto____13562;
}
} else
{return and__3822__auto____13561;
}
} else
{return and__3822__auto____13560;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13563 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13563))
{var and__3822__auto____13564 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____13564))
{var and__3822__auto____13565 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____13565))
{var and__3822__auto____13566 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____13566))
{var and__3822__auto____13567 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____13567))
{return p2.call(null,z);
} else
{return and__3822__auto____13567;
}
} else
{return and__3822__auto____13566;
}
} else
{return and__3822__auto____13565;
}
} else
{return and__3822__auto____13564;
}
} else
{return and__3822__auto____13563;
}
})());
});
var ep2__4 = (function() { 
var G__13595__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13568 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____13568))
{return cljs.core.every_QMARK_.call(null,(function (p1__13539_SHARP_){
var and__3822__auto____13569 = p1.call(null,p1__13539_SHARP_);
if(cljs.core.truth_(and__3822__auto____13569))
{return p2.call(null,p1__13539_SHARP_);
} else
{return and__3822__auto____13569;
}
}),args);
} else
{return and__3822__auto____13568;
}
})());
};
var G__13595 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13595__delegate.call(this, x, y, z, args);
};
G__13595.cljs$lang$maxFixedArity = 3;
G__13595.cljs$lang$applyTo = (function (arglist__13596){
var x = cljs.core.first(arglist__13596);
var y = cljs.core.first(cljs.core.next(arglist__13596));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13596)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13596)));
return G__13595__delegate(x, y, z, args);
});
G__13595.cljs$lang$arity$variadic = G__13595__delegate;
return G__13595;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13570 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13570))
{var and__3822__auto____13571 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____13571))
{return p3.call(null,x);
} else
{return and__3822__auto____13571;
}
} else
{return and__3822__auto____13570;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13572 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13572))
{var and__3822__auto____13573 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____13573))
{var and__3822__auto____13574 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____13574))
{var and__3822__auto____13575 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____13575))
{var and__3822__auto____13576 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____13576))
{return p3.call(null,y);
} else
{return and__3822__auto____13576;
}
} else
{return and__3822__auto____13575;
}
} else
{return and__3822__auto____13574;
}
} else
{return and__3822__auto____13573;
}
} else
{return and__3822__auto____13572;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13577 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____13577))
{var and__3822__auto____13578 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____13578))
{var and__3822__auto____13579 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____13579))
{var and__3822__auto____13580 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____13580))
{var and__3822__auto____13581 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____13581))
{var and__3822__auto____13582 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____13582))
{var and__3822__auto____13583 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____13583))
{var and__3822__auto____13584 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____13584))
{return p3.call(null,z);
} else
{return and__3822__auto____13584;
}
} else
{return and__3822__auto____13583;
}
} else
{return and__3822__auto____13582;
}
} else
{return and__3822__auto____13581;
}
} else
{return and__3822__auto____13580;
}
} else
{return and__3822__auto____13579;
}
} else
{return and__3822__auto____13578;
}
} else
{return and__3822__auto____13577;
}
})());
});
var ep3__4 = (function() { 
var G__13597__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13585 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____13585))
{return cljs.core.every_QMARK_.call(null,(function (p1__13540_SHARP_){
var and__3822__auto____13586 = p1.call(null,p1__13540_SHARP_);
if(cljs.core.truth_(and__3822__auto____13586))
{var and__3822__auto____13587 = p2.call(null,p1__13540_SHARP_);
if(cljs.core.truth_(and__3822__auto____13587))
{return p3.call(null,p1__13540_SHARP_);
} else
{return and__3822__auto____13587;
}
} else
{return and__3822__auto____13586;
}
}),args);
} else
{return and__3822__auto____13585;
}
})());
};
var G__13597 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13597__delegate.call(this, x, y, z, args);
};
G__13597.cljs$lang$maxFixedArity = 3;
G__13597.cljs$lang$applyTo = (function (arglist__13598){
var x = cljs.core.first(arglist__13598);
var y = cljs.core.first(cljs.core.next(arglist__13598));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13598)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13598)));
return G__13597__delegate(x, y, z, args);
});
G__13597.cljs$lang$arity$variadic = G__13597__delegate;
return G__13597;
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
var G__13599__delegate = function (p1,p2,p3,ps){
var ps__13588 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__13541_SHARP_){
return p1__13541_SHARP_.call(null,x);
}),ps__13588);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__13542_SHARP_){
var and__3822__auto____13589 = p1__13542_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____13589))
{return p1__13542_SHARP_.call(null,y);
} else
{return and__3822__auto____13589;
}
}),ps__13588);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__13543_SHARP_){
var and__3822__auto____13590 = p1__13543_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____13590))
{var and__3822__auto____13591 = p1__13543_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____13591))
{return p1__13543_SHARP_.call(null,z);
} else
{return and__3822__auto____13591;
}
} else
{return and__3822__auto____13590;
}
}),ps__13588);
});
var epn__4 = (function() { 
var G__13600__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____13592 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____13592))
{return cljs.core.every_QMARK_.call(null,(function (p1__13544_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__13544_SHARP_,args);
}),ps__13588);
} else
{return and__3822__auto____13592;
}
})());
};
var G__13600 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13600__delegate.call(this, x, y, z, args);
};
G__13600.cljs$lang$maxFixedArity = 3;
G__13600.cljs$lang$applyTo = (function (arglist__13601){
var x = cljs.core.first(arglist__13601);
var y = cljs.core.first(cljs.core.next(arglist__13601));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13601)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13601)));
return G__13600__delegate(x, y, z, args);
});
G__13600.cljs$lang$arity$variadic = G__13600__delegate;
return G__13600;
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
var G__13599 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13599__delegate.call(this, p1, p2, p3, ps);
};
G__13599.cljs$lang$maxFixedArity = 3;
G__13599.cljs$lang$applyTo = (function (arglist__13602){
var p1 = cljs.core.first(arglist__13602);
var p2 = cljs.core.first(cljs.core.next(arglist__13602));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13602)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13602)));
return G__13599__delegate(p1, p2, p3, ps);
});
G__13599.cljs$lang$arity$variadic = G__13599__delegate;
return G__13599;
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
var or__3824__auto____13604 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____13604))
{return or__3824__auto____13604;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____13605 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____13605))
{return or__3824__auto____13605;
} else
{var or__3824__auto____13606 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____13606))
{return or__3824__auto____13606;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__13642__delegate = function (x,y,z,args){
var or__3824__auto____13607 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13607))
{return or__3824__auto____13607;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__13642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13642__delegate.call(this, x, y, z, args);
};
G__13642.cljs$lang$maxFixedArity = 3;
G__13642.cljs$lang$applyTo = (function (arglist__13643){
var x = cljs.core.first(arglist__13643);
var y = cljs.core.first(cljs.core.next(arglist__13643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13643)));
return G__13642__delegate(x, y, z, args);
});
G__13642.cljs$lang$arity$variadic = G__13642__delegate;
return G__13642;
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
var or__3824__auto____13608 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13608))
{return or__3824__auto____13608;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____13609 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13609))
{return or__3824__auto____13609;
} else
{var or__3824__auto____13610 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13610))
{return or__3824__auto____13610;
} else
{var or__3824__auto____13611 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13611))
{return or__3824__auto____13611;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____13612 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13612))
{return or__3824__auto____13612;
} else
{var or__3824__auto____13613 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13613))
{return or__3824__auto____13613;
} else
{var or__3824__auto____13614 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____13614))
{return or__3824__auto____13614;
} else
{var or__3824__auto____13615 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13615))
{return or__3824__auto____13615;
} else
{var or__3824__auto____13616 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13616))
{return or__3824__auto____13616;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__13644__delegate = function (x,y,z,args){
var or__3824__auto____13617 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13617))
{return or__3824__auto____13617;
} else
{return cljs.core.some.call(null,(function (p1__13549_SHARP_){
var or__3824__auto____13618 = p1.call(null,p1__13549_SHARP_);
if(cljs.core.truth_(or__3824__auto____13618))
{return or__3824__auto____13618;
} else
{return p2.call(null,p1__13549_SHARP_);
}
}),args);
}
};
var G__13644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13644__delegate.call(this, x, y, z, args);
};
G__13644.cljs$lang$maxFixedArity = 3;
G__13644.cljs$lang$applyTo = (function (arglist__13645){
var x = cljs.core.first(arglist__13645);
var y = cljs.core.first(cljs.core.next(arglist__13645));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13645)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13645)));
return G__13644__delegate(x, y, z, args);
});
G__13644.cljs$lang$arity$variadic = G__13644__delegate;
return G__13644;
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
var or__3824__auto____13619 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13619))
{return or__3824__auto____13619;
} else
{var or__3824__auto____13620 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13620))
{return or__3824__auto____13620;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____13621 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13621))
{return or__3824__auto____13621;
} else
{var or__3824__auto____13622 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13622))
{return or__3824__auto____13622;
} else
{var or__3824__auto____13623 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____13623))
{return or__3824__auto____13623;
} else
{var or__3824__auto____13624 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13624))
{return or__3824__auto____13624;
} else
{var or__3824__auto____13625 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13625))
{return or__3824__auto____13625;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____13626 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13626))
{return or__3824__auto____13626;
} else
{var or__3824__auto____13627 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13627))
{return or__3824__auto____13627;
} else
{var or__3824__auto____13628 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____13628))
{return or__3824__auto____13628;
} else
{var or__3824__auto____13629 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13629))
{return or__3824__auto____13629;
} else
{var or__3824__auto____13630 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13630))
{return or__3824__auto____13630;
} else
{var or__3824__auto____13631 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____13631))
{return or__3824__auto____13631;
} else
{var or__3824__auto____13632 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____13632))
{return or__3824__auto____13632;
} else
{var or__3824__auto____13633 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____13633))
{return or__3824__auto____13633;
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
var G__13646__delegate = function (x,y,z,args){
var or__3824__auto____13634 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13634))
{return or__3824__auto____13634;
} else
{return cljs.core.some.call(null,(function (p1__13550_SHARP_){
var or__3824__auto____13635 = p1.call(null,p1__13550_SHARP_);
if(cljs.core.truth_(or__3824__auto____13635))
{return or__3824__auto____13635;
} else
{var or__3824__auto____13636 = p2.call(null,p1__13550_SHARP_);
if(cljs.core.truth_(or__3824__auto____13636))
{return or__3824__auto____13636;
} else
{return p3.call(null,p1__13550_SHARP_);
}
}
}),args);
}
};
var G__13646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13646__delegate.call(this, x, y, z, args);
};
G__13646.cljs$lang$maxFixedArity = 3;
G__13646.cljs$lang$applyTo = (function (arglist__13647){
var x = cljs.core.first(arglist__13647);
var y = cljs.core.first(cljs.core.next(arglist__13647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13647)));
return G__13646__delegate(x, y, z, args);
});
G__13646.cljs$lang$arity$variadic = G__13646__delegate;
return G__13646;
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
var G__13648__delegate = function (p1,p2,p3,ps){
var ps__13637 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__13551_SHARP_){
return p1__13551_SHARP_.call(null,x);
}),ps__13637);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__13552_SHARP_){
var or__3824__auto____13638 = p1__13552_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____13638))
{return or__3824__auto____13638;
} else
{return p1__13552_SHARP_.call(null,y);
}
}),ps__13637);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__13553_SHARP_){
var or__3824__auto____13639 = p1__13553_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____13639))
{return or__3824__auto____13639;
} else
{var or__3824__auto____13640 = p1__13553_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____13640))
{return or__3824__auto____13640;
} else
{return p1__13553_SHARP_.call(null,z);
}
}
}),ps__13637);
});
var spn__4 = (function() { 
var G__13649__delegate = function (x,y,z,args){
var or__3824__auto____13641 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13641))
{return or__3824__auto____13641;
} else
{return cljs.core.some.call(null,(function (p1__13554_SHARP_){
return cljs.core.some.call(null,p1__13554_SHARP_,args);
}),ps__13637);
}
};
var G__13649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13649__delegate.call(this, x, y, z, args);
};
G__13649.cljs$lang$maxFixedArity = 3;
G__13649.cljs$lang$applyTo = (function (arglist__13650){
var x = cljs.core.first(arglist__13650);
var y = cljs.core.first(cljs.core.next(arglist__13650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13650)));
return G__13649__delegate(x, y, z, args);
});
G__13649.cljs$lang$arity$variadic = G__13649__delegate;
return G__13649;
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
var G__13648 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13648__delegate.call(this, p1, p2, p3, ps);
};
G__13648.cljs$lang$maxFixedArity = 3;
G__13648.cljs$lang$applyTo = (function (arglist__13651){
var p1 = cljs.core.first(arglist__13651);
var p2 = cljs.core.first(cljs.core.next(arglist__13651));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13651)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13651)));
return G__13648__delegate(p1, p2, p3, ps);
});
G__13648.cljs$lang$arity$variadic = G__13648__delegate;
return G__13648;
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
var temp__3974__auto____13652 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13652))
{var s__13653 = temp__3974__auto____13652;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__13653)),map.call(null,f,cljs.core.rest.call(null,s__13653)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__13654 = cljs.core.seq.call(null,c1);
var s2__13655 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____13656 = s1__13654;
if(cljs.core.truth_(and__3822__auto____13656))
{return s2__13655;
} else
{return and__3822__auto____13656;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__13654),cljs.core.first.call(null,s2__13655)),map.call(null,f,cljs.core.rest.call(null,s1__13654),cljs.core.rest.call(null,s2__13655)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__13657 = cljs.core.seq.call(null,c1);
var s2__13658 = cljs.core.seq.call(null,c2);
var s3__13659 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3822__auto____13660 = s1__13657;
if(cljs.core.truth_(and__3822__auto____13660))
{var and__3822__auto____13661 = s2__13658;
if(cljs.core.truth_(and__3822__auto____13661))
{return s3__13659;
} else
{return and__3822__auto____13661;
}
} else
{return and__3822__auto____13660;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__13657),cljs.core.first.call(null,s2__13658),cljs.core.first.call(null,s3__13659)),map.call(null,f,cljs.core.rest.call(null,s1__13657),cljs.core.rest.call(null,s2__13658),cljs.core.rest.call(null,s3__13659)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__13664__delegate = function (f,c1,c2,c3,colls){
var step__13663 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__13662 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__13662))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__13662),step.call(null,map.call(null,cljs.core.rest,ss__13662)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__13603_SHARP_){
return cljs.core.apply.call(null,f,p1__13603_SHARP_);
}),step__13663.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__13664 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13664__delegate.call(this, f, c1, c2, c3, colls);
};
G__13664.cljs$lang$maxFixedArity = 4;
G__13664.cljs$lang$applyTo = (function (arglist__13665){
var f = cljs.core.first(arglist__13665);
var c1 = cljs.core.first(cljs.core.next(arglist__13665));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13665)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13665))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13665))));
return G__13664__delegate(f, c1, c2, c3, colls);
});
G__13664.cljs$lang$arity$variadic = G__13664__delegate;
return G__13664;
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
{var temp__3974__auto____13666 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13666))
{var s__13667 = temp__3974__auto____13666;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13667),take.call(null,(n - 1),cljs.core.rest.call(null,s__13667)));
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
var step__13670 = (function (n,coll){
while(true){
var s__13668 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____13669 = (n > 0);
if(and__3822__auto____13669)
{return s__13668;
} else
{return and__3822__auto____13669;
}
})()))
{{
var G__13671 = (n - 1);
var G__13672 = cljs.core.rest.call(null,s__13668);
n = G__13671;
coll = G__13672;
continue;
}
} else
{return s__13668;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__13670.call(null,n,coll);
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
var s__13673 = cljs.core.seq.call(null,coll);
var lead__13674 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__13674))
{{
var G__13675 = cljs.core.next.call(null,s__13673);
var G__13676 = cljs.core.next.call(null,lead__13674);
s__13673 = G__13675;
lead__13674 = G__13676;
continue;
}
} else
{return s__13673;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__13679 = (function (pred,coll){
while(true){
var s__13677 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____13678 = s__13677;
if(cljs.core.truth_(and__3822__auto____13678))
{return pred.call(null,cljs.core.first.call(null,s__13677));
} else
{return and__3822__auto____13678;
}
})()))
{{
var G__13680 = pred;
var G__13681 = cljs.core.rest.call(null,s__13677);
pred = G__13680;
coll = G__13681;
continue;
}
} else
{return s__13677;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__13679.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13682 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13682))
{var s__13683 = temp__3974__auto____13682;
return cljs.core.concat.call(null,s__13683,cycle.call(null,s__13683));
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
var s1__13684 = cljs.core.seq.call(null,c1);
var s2__13685 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____13686 = s1__13684;
if(cljs.core.truth_(and__3822__auto____13686))
{return s2__13685;
} else
{return and__3822__auto____13686;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__13684),cljs.core.cons.call(null,cljs.core.first.call(null,s2__13685),interleave.call(null,cljs.core.rest.call(null,s1__13684),cljs.core.rest.call(null,s2__13685))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__13688__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__13687 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__13687))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__13687),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__13687)));
} else
{return null;
}
})));
};
var G__13688 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13688__delegate.call(this, c1, c2, colls);
};
G__13688.cljs$lang$maxFixedArity = 2;
G__13688.cljs$lang$applyTo = (function (arglist__13689){
var c1 = cljs.core.first(arglist__13689);
var c2 = cljs.core.first(cljs.core.next(arglist__13689));
var colls = cljs.core.rest(cljs.core.next(arglist__13689));
return G__13688__delegate(c1, c2, colls);
});
G__13688.cljs$lang$arity$variadic = G__13688__delegate;
return G__13688;
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
var cat__13692 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____13690 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____13690))
{var coll__13691 = temp__3971__auto____13690;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__13691),cat.call(null,cljs.core.rest.call(null,coll__13691),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__13692.call(null,null,colls);
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
var G__13693__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__13693 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13693__delegate.call(this, f, coll, colls);
};
G__13693.cljs$lang$maxFixedArity = 2;
G__13693.cljs$lang$applyTo = (function (arglist__13694){
var f = cljs.core.first(arglist__13694);
var coll = cljs.core.first(cljs.core.next(arglist__13694));
var colls = cljs.core.rest(cljs.core.next(arglist__13694));
return G__13693__delegate(f, coll, colls);
});
G__13693.cljs$lang$arity$variadic = G__13693__delegate;
return G__13693;
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
var temp__3974__auto____13695 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13695))
{var s__13696 = temp__3974__auto____13695;
var f__13697 = cljs.core.first.call(null,s__13696);
var r__13698 = cljs.core.rest.call(null,s__13696);
if(cljs.core.truth_(pred.call(null,f__13697)))
{return cljs.core.cons.call(null,f__13697,filter.call(null,pred,r__13698));
} else
{return filter.call(null,pred,r__13698);
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
var walk__13700 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__13700.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__13699_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__13699_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__13701__13702 = to;
if((G__13701__13702 != null))
{if((function (){var or__3824__auto____13703 = (G__13701__13702.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____13703)
{return or__3824__auto____13703;
} else
{return G__13701__13702.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__13701__13702.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13701__13702);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13701__13702);
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
var G__13704__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__13704 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13704__delegate.call(this, f, c1, c2, c3, colls);
};
G__13704.cljs$lang$maxFixedArity = 4;
G__13704.cljs$lang$applyTo = (function (arglist__13705){
var f = cljs.core.first(arglist__13705);
var c1 = cljs.core.first(cljs.core.next(arglist__13705));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13705)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13705))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13705))));
return G__13704__delegate(f, c1, c2, c3, colls);
});
G__13704.cljs$lang$arity$variadic = G__13704__delegate;
return G__13704;
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
var temp__3974__auto____13706 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13706))
{var s__13707 = temp__3974__auto____13706;
var p__13708 = cljs.core.take.call(null,n,s__13707);
if((n === cljs.core.count.call(null,p__13708)))
{return cljs.core.cons.call(null,p__13708,partition.call(null,n,step,cljs.core.drop.call(null,step,s__13707)));
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
var temp__3974__auto____13709 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____13709))
{var s__13710 = temp__3974__auto____13709;
var p__13711 = cljs.core.take.call(null,n,s__13710);
if((n === cljs.core.count.call(null,p__13711)))
{return cljs.core.cons.call(null,p__13711,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__13710)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__13711,pad)));
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
var sentinel__13712 = cljs.core.lookup_sentinel;
var m__13713 = m;
var ks__13714 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__13714))
{var m__13715 = cljs.core.get.call(null,m__13713,cljs.core.first.call(null,ks__13714),sentinel__13712);
if((sentinel__13712 === m__13715))
{return not_found;
} else
{{
var G__13716 = sentinel__13712;
var G__13717 = m__13715;
var G__13718 = cljs.core.next.call(null,ks__13714);
sentinel__13712 = G__13716;
m__13713 = G__13717;
ks__13714 = G__13718;
continue;
}
}
} else
{return m__13713;
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
cljs.core.assoc_in = (function assoc_in(m,p__13719,v){
var vec__13720__13721 = p__13719;
var k__13722 = cljs.core.nth.call(null,vec__13720__13721,0,null);
var ks__13723 = cljs.core.nthnext.call(null,vec__13720__13721,1);
if(cljs.core.truth_(ks__13723))
{return cljs.core.assoc.call(null,m,k__13722,assoc_in.call(null,cljs.core.get.call(null,m,k__13722),ks__13723,v));
} else
{return cljs.core.assoc.call(null,m,k__13722,v);
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
var update_in__delegate = function (m,p__13724,f,args){
var vec__13725__13726 = p__13724;
var k__13727 = cljs.core.nth.call(null,vec__13725__13726,0,null);
var ks__13728 = cljs.core.nthnext.call(null,vec__13725__13726,1);
if(cljs.core.truth_(ks__13728))
{return cljs.core.assoc.call(null,m,k__13727,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__13727),ks__13728,f,args));
} else
{return cljs.core.assoc.call(null,m,k__13727,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__13727),args));
}
};
var update_in = function (m,p__13724,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__13724, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__13729){
var m = cljs.core.first(arglist__13729);
var p__13724 = cljs.core.first(cljs.core.next(arglist__13729));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13729)));
return update_in__delegate(m, p__13724, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13734 = this;
var h__364__auto____13735 = this__13734.__hash;
if((h__364__auto____13735 != null))
{return h__364__auto____13735;
} else
{var h__364__auto____13736 = cljs.core.hash_coll.call(null,coll);
this__13734.__hash = h__364__auto____13736;
return h__364__auto____13736;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13737 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13738 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13739 = this;
var new_array__13740 = cljs.core.aclone.call(null,this__13739.array);
(new_array__13740[k] = v);
return (new cljs.core.Vector(this__13739.meta,new_array__13740,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__13769 = null;
var G__13769__2 = (function (tsym13732,k){
var this__13741 = this;
var tsym13732__13742 = this;
var coll__13743 = tsym13732__13742;
return cljs.core._lookup.call(null,coll__13743,k);
});
var G__13769__3 = (function (tsym13733,k,not_found){
var this__13744 = this;
var tsym13733__13745 = this;
var coll__13746 = tsym13733__13745;
return cljs.core._lookup.call(null,coll__13746,k,not_found);
});
G__13769 = function(tsym13733,k,not_found){
switch(arguments.length){
case 2:
return G__13769__2.call(this,tsym13733,k);
case 3:
return G__13769__3.call(this,tsym13733,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13769;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym13730,args13731){
return tsym13730.call.apply(tsym13730,[tsym13730].concat(cljs.core.aclone.call(null,args13731)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13747 = this;
var new_array__13748 = cljs.core.aclone.call(null,this__13747.array);
new_array__13748.push(o);
return (new cljs.core.Vector(this__13747.meta,new_array__13748,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__13749 = this;
var this$__13750 = this;
return cljs.core.pr_str.call(null,this$__13750);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13751 = this;
return cljs.core.ci_reduce.call(null,this__13751.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13752 = this;
return cljs.core.ci_reduce.call(null,this__13752.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13753 = this;
if((this__13753.array.length > 0))
{var vector_seq__13754 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__13753.array.length))
{return cljs.core.cons.call(null,(this__13753.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__13754.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13755 = this;
return this__13755.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13756 = this;
var count__13757 = this__13756.array.length;
if((count__13757 > 0))
{return (this__13756.array[(count__13757 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13758 = this;
if((this__13758.array.length > 0))
{var new_array__13759 = cljs.core.aclone.call(null,this__13758.array);
new_array__13759.pop();
return (new cljs.core.Vector(this__13758.meta,new_array__13759,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13760 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13761 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13762 = this;
return (new cljs.core.Vector(meta,this__13762.array,this__13762.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13763 = this;
return this__13763.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13765 = this;
if((function (){var and__3822__auto____13766 = (0 <= n);
if(and__3822__auto____13766)
{return (n < this__13765.array.length);
} else
{return and__3822__auto____13766;
}
})())
{return (this__13765.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13767 = this;
if((function (){var and__3822__auto____13768 = (0 <= n);
if(and__3822__auto____13768)
{return (n < this__13767.array.length);
} else
{return and__3822__auto____13768;
}
})())
{return (this__13767.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13764 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13764.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__455__auto__){
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
var cnt__13770 = pv.cnt;
if((cnt__13770 < 32))
{return 0;
} else
{return (((cnt__13770 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__13771 = level;
var ret__13772 = node;
while(true){
if((ll__13771 === 0))
{return ret__13772;
} else
{var embed__13773 = ret__13772;
var r__13774 = cljs.core.pv_fresh_node.call(null,edit);
var ___13775 = cljs.core.pv_aset.call(null,r__13774,0,embed__13773);
{
var G__13776 = (ll__13771 - 5);
var G__13777 = r__13774;
ll__13771 = G__13776;
ret__13772 = G__13777;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__13778 = cljs.core.pv_clone_node.call(null,parent);
var subidx__13779 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__13778,subidx__13779,tailnode);
return ret__13778;
} else
{var temp__3971__auto____13780 = cljs.core.pv_aget.call(null,parent,subidx__13779);
if(cljs.core.truth_(temp__3971__auto____13780))
{var child__13781 = temp__3971__auto____13780;
var node_to_insert__13782 = push_tail.call(null,pv,(level - 5),child__13781,tailnode);
cljs.core.pv_aset.call(null,ret__13778,subidx__13779,node_to_insert__13782);
return ret__13778;
} else
{var node_to_insert__13783 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__13778,subidx__13779,node_to_insert__13783);
return ret__13778;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____13784 = (0 <= i);
if(and__3822__auto____13784)
{return (i < pv.cnt);
} else
{return and__3822__auto____13784;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__13785 = pv.root;
var level__13786 = pv.shift;
while(true){
if((level__13786 > 0))
{{
var G__13787 = cljs.core.pv_aget.call(null,node__13785,((i >>> level__13786) & 31));
var G__13788 = (level__13786 - 5);
node__13785 = G__13787;
level__13786 = G__13788;
continue;
}
} else
{return node__13785.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__13789 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__13789,(i & 31),val);
return ret__13789;
} else
{var subidx__13790 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13789,subidx__13790,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13790),i,val));
return ret__13789;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__13791 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13792 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13791));
if((function (){var and__3822__auto____13793 = (new_child__13792 == null);
if(and__3822__auto____13793)
{return (subidx__13791 === 0);
} else
{return and__3822__auto____13793;
}
})())
{return null;
} else
{var ret__13794 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13794,subidx__13791,new_child__13792);
return ret__13794;
}
} else
{if((subidx__13791 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__13795 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13795,subidx__13791,null);
return ret__13795;
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
var c__13796 = cljs.core._count.call(null,v);
if((c__13796 > 0))
{if((void 0 === cljs.core.t13797))
{
/**
* @constructor
*/
cljs.core.t13797 = (function (c,offset,v,vector_seq,__meta__389__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__389__auto__ = __meta__389__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t13797.cljs$lang$type = true;
cljs.core.t13797.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.t13797");
});
cljs.core.t13797.prototype.cljs$core$ISeqable$ = true;
cljs.core.t13797.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__13798 = this;
return vseq;
});
cljs.core.t13797.prototype.cljs$core$ISeq$ = true;
cljs.core.t13797.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__13799 = this;
return cljs.core._nth.call(null,this__13799.v,this__13799.offset);
});
cljs.core.t13797.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__13800 = this;
var offset__13801 = (this__13800.offset + 1);
if((offset__13801 < this__13800.c))
{return this__13800.vector_seq.call(null,this__13800.v,offset__13801);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t13797.prototype.cljs$core$ASeq$ = true;
cljs.core.t13797.prototype.cljs$core$IEquiv$ = true;
cljs.core.t13797.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__13802 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t13797.prototype.cljs$core$ISequential$ = true;
cljs.core.t13797.prototype.cljs$core$IPrintable$ = true;
cljs.core.t13797.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__13803 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t13797.prototype.cljs$core$IMeta$ = true;
cljs.core.t13797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___390__auto__){
var this__13804 = this;
return this__13804.__meta__389__auto__;
});
cljs.core.t13797.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t13797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___390__auto__,__meta__389__auto__){
var this__13805 = this;
return (new cljs.core.t13797(this__13805.c,this__13805.offset,this__13805.v,this__13805.vector_seq,__meta__389__auto__));
});
cljs.core.t13797;
} else
{}
return (new cljs.core.t13797(c__13796,offset,v,vector_seq,null));
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13810 = this;
return (new cljs.core.TransientVector(this__13810.cnt,this__13810.shift,cljs.core.tv_editable_root.call(null,this__13810.root),cljs.core.tv_editable_tail.call(null,this__13810.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13811 = this;
var h__364__auto____13812 = this__13811.__hash;
if((h__364__auto____13812 != null))
{return h__364__auto____13812;
} else
{var h__364__auto____13813 = cljs.core.hash_coll.call(null,coll);
this__13811.__hash = h__364__auto____13813;
return h__364__auto____13813;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13814 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13815 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13816 = this;
if((function (){var and__3822__auto____13817 = (0 <= k);
if(and__3822__auto____13817)
{return (k < this__13816.cnt);
} else
{return and__3822__auto____13817;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__13818 = cljs.core.aclone.call(null,this__13816.tail);
(new_tail__13818[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__13816.meta,this__13816.cnt,this__13816.shift,this__13816.root,new_tail__13818,null));
} else
{return (new cljs.core.PersistentVector(this__13816.meta,this__13816.cnt,this__13816.shift,cljs.core.do_assoc.call(null,coll,this__13816.shift,this__13816.root,k,v),this__13816.tail,null));
}
} else
{if((k === this__13816.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__13816.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__13863 = null;
var G__13863__2 = (function (tsym13808,k){
var this__13819 = this;
var tsym13808__13820 = this;
var coll__13821 = tsym13808__13820;
return cljs.core._lookup.call(null,coll__13821,k);
});
var G__13863__3 = (function (tsym13809,k,not_found){
var this__13822 = this;
var tsym13809__13823 = this;
var coll__13824 = tsym13809__13823;
return cljs.core._lookup.call(null,coll__13824,k,not_found);
});
G__13863 = function(tsym13809,k,not_found){
switch(arguments.length){
case 2:
return G__13863__2.call(this,tsym13809,k);
case 3:
return G__13863__3.call(this,tsym13809,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13863;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym13806,args13807){
return tsym13806.call.apply(tsym13806,[tsym13806].concat(cljs.core.aclone.call(null,args13807)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__13825 = this;
var step_init__13826 = [0,init];
var i__13827 = 0;
while(true){
if((i__13827 < this__13825.cnt))
{var arr__13828 = cljs.core.array_for.call(null,v,i__13827);
var len__13829 = arr__13828.length;
var init__13833 = (function (){var j__13830 = 0;
var init__13831 = (step_init__13826[1]);
while(true){
if((j__13830 < len__13829))
{var init__13832 = f.call(null,init__13831,(j__13830 + i__13827),(arr__13828[j__13830]));
if(cljs.core.reduced_QMARK_.call(null,init__13832))
{return init__13832;
} else
{{
var G__13864 = (j__13830 + 1);
var G__13865 = init__13832;
j__13830 = G__13864;
init__13831 = G__13865;
continue;
}
}
} else
{(step_init__13826[0] = len__13829);
(step_init__13826[1] = init__13831);
return init__13831;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13833))
{return cljs.core.deref.call(null,init__13833);
} else
{{
var G__13866 = (i__13827 + (step_init__13826[0]));
i__13827 = G__13866;
continue;
}
}
} else
{return (step_init__13826[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13834 = this;
if(((this__13834.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__13835 = cljs.core.aclone.call(null,this__13834.tail);
new_tail__13835.push(o);
return (new cljs.core.PersistentVector(this__13834.meta,(this__13834.cnt + 1),this__13834.shift,this__13834.root,new_tail__13835,null));
} else
{var root_overflow_QMARK___13836 = ((this__13834.cnt >>> 5) > (1 << this__13834.shift));
var new_shift__13837 = ((root_overflow_QMARK___13836)?(this__13834.shift + 5):this__13834.shift);
var new_root__13839 = ((root_overflow_QMARK___13836)?(function (){var n_r__13838 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__13838,0,this__13834.root);
cljs.core.pv_aset.call(null,n_r__13838,1,cljs.core.new_path.call(null,null,this__13834.shift,(new cljs.core.VectorNode(null,this__13834.tail))));
return n_r__13838;
})():cljs.core.push_tail.call(null,coll,this__13834.shift,this__13834.root,(new cljs.core.VectorNode(null,this__13834.tail))));
return (new cljs.core.PersistentVector(this__13834.meta,(this__13834.cnt + 1),new_shift__13837,new_root__13839,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__13840 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__13841 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__13842 = this;
var this$__13843 = this;
return cljs.core.pr_str.call(null,this$__13843);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13844 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13845 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13846 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13847 = this;
return this__13847.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13848 = this;
if((this__13848.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__13848.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13849 = this;
if((this__13849.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13849.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13849.meta);
} else
{if((1 < (this__13849.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__13849.meta,(this__13849.cnt - 1),this__13849.shift,this__13849.root,this__13849.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__13850 = cljs.core.array_for.call(null,coll,(this__13849.cnt - 2));
var nr__13851 = cljs.core.pop_tail.call(null,coll,this__13849.shift,this__13849.root);
var new_root__13852 = (((nr__13851 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__13851);
var cnt_1__13853 = (this__13849.cnt - 1);
if((function (){var and__3822__auto____13854 = (5 < this__13849.shift);
if(and__3822__auto____13854)
{return (cljs.core.pv_aget.call(null,new_root__13852,1) == null);
} else
{return and__3822__auto____13854;
}
})())
{return (new cljs.core.PersistentVector(this__13849.meta,cnt_1__13853,(this__13849.shift - 5),cljs.core.pv_aget.call(null,new_root__13852,0),new_tail__13850,null));
} else
{return (new cljs.core.PersistentVector(this__13849.meta,cnt_1__13853,this__13849.shift,new_root__13852,new_tail__13850,null));
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
var this__13856 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13857 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13858 = this;
return (new cljs.core.PersistentVector(meta,this__13858.cnt,this__13858.shift,this__13858.root,this__13858.tail,this__13858.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13859 = this;
return this__13859.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13860 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13861 = this;
if((function (){var and__3822__auto____13862 = (0 <= n);
if(and__3822__auto____13862)
{return (n < this__13861.cnt);
} else
{return and__3822__auto____13862;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13855 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13855.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__13867 = cljs.core.seq.call(null,xs);
var out__13868 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__13867))
{{
var G__13869 = cljs.core.next.call(null,xs__13867);
var G__13870 = cljs.core.conj_BANG_.call(null,out__13868,cljs.core.first.call(null,xs__13867));
xs__13867 = G__13869;
out__13868 = G__13870;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13868);
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
vector.cljs$lang$applyTo = (function (arglist__13871){
var args = cljs.core.seq(arglist__13871);;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13876 = this;
var h__364__auto____13877 = this__13876.__hash;
if((h__364__auto____13877 != null))
{return h__364__auto____13877;
} else
{var h__364__auto____13878 = cljs.core.hash_coll.call(null,coll);
this__13876.__hash = h__364__auto____13878;
return h__364__auto____13878;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13879 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13880 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__13881 = this;
var v_pos__13882 = (this__13881.start + key);
return (new cljs.core.Subvec(this__13881.meta,cljs.core._assoc.call(null,this__13881.v,v_pos__13882,val),this__13881.start,((this__13881.end > (v_pos__13882 + 1)) ? this__13881.end : (v_pos__13882 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__13906 = null;
var G__13906__2 = (function (tsym13874,k){
var this__13883 = this;
var tsym13874__13884 = this;
var coll__13885 = tsym13874__13884;
return cljs.core._lookup.call(null,coll__13885,k);
});
var G__13906__3 = (function (tsym13875,k,not_found){
var this__13886 = this;
var tsym13875__13887 = this;
var coll__13888 = tsym13875__13887;
return cljs.core._lookup.call(null,coll__13888,k,not_found);
});
G__13906 = function(tsym13875,k,not_found){
switch(arguments.length){
case 2:
return G__13906__2.call(this,tsym13875,k);
case 3:
return G__13906__3.call(this,tsym13875,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13906;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym13872,args13873){
return tsym13872.call.apply(tsym13872,[tsym13872].concat(cljs.core.aclone.call(null,args13873)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13889 = this;
return (new cljs.core.Subvec(this__13889.meta,cljs.core._assoc_n.call(null,this__13889.v,this__13889.end,o),this__13889.start,(this__13889.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__13890 = this;
var this$__13891 = this;
return cljs.core.pr_str.call(null,this$__13891);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__13892 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__13893 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13894 = this;
var subvec_seq__13895 = (function subvec_seq(i){
if((i === this__13894.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__13894.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__13895.call(null,this__13894.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13896 = this;
return (this__13896.end - this__13896.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13897 = this;
return cljs.core._nth.call(null,this__13897.v,(this__13897.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13898 = this;
if((this__13898.start === this__13898.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__13898.meta,this__13898.v,this__13898.start,(this__13898.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13899 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13900 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13901 = this;
return (new cljs.core.Subvec(meta,this__13901.v,this__13901.start,this__13901.end,this__13901.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13902 = this;
return this__13902.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13904 = this;
return cljs.core._nth.call(null,this__13904.v,(this__13904.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13905 = this;
return cljs.core._nth.call(null,this__13905.v,(this__13905.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13903 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13903.meta);
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
var ret__13907 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__13907,0,tl.length);
return ret__13907;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__13908 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__13909 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13908,subidx__13909,(((level === 5))?tail_node:(function (){var child__13910 = cljs.core.pv_aget.call(null,ret__13908,subidx__13909);
if((child__13910 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__13910,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__13908;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__13911 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__13912 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13913 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__13911,subidx__13912));
if((function (){var and__3822__auto____13914 = (new_child__13913 == null);
if(and__3822__auto____13914)
{return (subidx__13912 === 0);
} else
{return and__3822__auto____13914;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__13911,subidx__13912,new_child__13913);
return node__13911;
}
} else
{if((subidx__13912 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__13911,subidx__13912,null);
return node__13911;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____13915 = (0 <= i);
if(and__3822__auto____13915)
{return (i < tv.cnt);
} else
{return and__3822__auto____13915;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__13916 = tv.root;
var node__13917 = root__13916;
var level__13918 = tv.shift;
while(true){
if((level__13918 > 0))
{{
var G__13919 = cljs.core.tv_ensure_editable.call(null,root__13916.edit,cljs.core.pv_aget.call(null,node__13917,((i >>> level__13918) & 31)));
var G__13920 = (level__13918 - 5);
node__13917 = G__13919;
level__13918 = G__13920;
continue;
}
} else
{return node__13917.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__13958 = null;
var G__13958__2 = (function (tsym13923,k){
var this__13925 = this;
var tsym13923__13926 = this;
var coll__13927 = tsym13923__13926;
return cljs.core._lookup.call(null,coll__13927,k);
});
var G__13958__3 = (function (tsym13924,k,not_found){
var this__13928 = this;
var tsym13924__13929 = this;
var coll__13930 = tsym13924__13929;
return cljs.core._lookup.call(null,coll__13930,k,not_found);
});
G__13958 = function(tsym13924,k,not_found){
switch(arguments.length){
case 2:
return G__13958__2.call(this,tsym13924,k);
case 3:
return G__13958__3.call(this,tsym13924,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13958;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym13921,args13922){
return tsym13921.call.apply(tsym13921,[tsym13921].concat(cljs.core.aclone.call(null,args13922)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13931 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13932 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13933 = this;
if(cljs.core.truth_(this__13933.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13934 = this;
if((function (){var and__3822__auto____13935 = (0 <= n);
if(and__3822__auto____13935)
{return (n < this__13934.cnt);
} else
{return and__3822__auto____13935;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13936 = this;
if(cljs.core.truth_(this__13936.root.edit))
{return this__13936.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__13937 = this;
if(cljs.core.truth_(this__13937.root.edit))
{if((function (){var and__3822__auto____13938 = (0 <= n);
if(and__3822__auto____13938)
{return (n < this__13937.cnt);
} else
{return and__3822__auto____13938;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__13937.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__13941 = (function go(level,node){
var node__13939 = cljs.core.tv_ensure_editable.call(null,this__13937.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__13939,(n & 31),val);
return node__13939;
} else
{var subidx__13940 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__13939,subidx__13940,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__13939,subidx__13940)));
return node__13939;
}
}).call(null,this__13937.shift,this__13937.root);
this__13937.root = new_root__13941;
return tcoll;
}
} else
{if((n === this__13937.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__13937.cnt)].join('')));
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
var this__13942 = this;
if(cljs.core.truth_(this__13942.root.edit))
{if((this__13942.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13942.cnt))
{this__13942.cnt = 0;
return tcoll;
} else
{if((((this__13942.cnt - 1) & 31) > 0))
{this__13942.cnt = (this__13942.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__13943 = cljs.core.editable_array_for.call(null,tcoll,(this__13942.cnt - 2));
var new_root__13945 = (function (){var nr__13944 = cljs.core.tv_pop_tail.call(null,tcoll,this__13942.shift,this__13942.root);
if((nr__13944 != null))
{return nr__13944;
} else
{return (new cljs.core.VectorNode(this__13942.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____13946 = (5 < this__13942.shift);
if(and__3822__auto____13946)
{return (cljs.core.pv_aget.call(null,new_root__13945,1) == null);
} else
{return and__3822__auto____13946;
}
})())
{var new_root__13947 = cljs.core.tv_ensure_editable.call(null,this__13942.root.edit,cljs.core.pv_aget.call(null,new_root__13945,0));
this__13942.root = new_root__13947;
this__13942.shift = (this__13942.shift - 5);
this__13942.cnt = (this__13942.cnt - 1);
this__13942.tail = new_tail__13943;
return tcoll;
} else
{this__13942.root = new_root__13945;
this__13942.cnt = (this__13942.cnt - 1);
this__13942.tail = new_tail__13943;
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
var this__13948 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13949 = this;
if(cljs.core.truth_(this__13949.root.edit))
{if(((this__13949.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__13949.tail[(this__13949.cnt & 31)] = o);
this__13949.cnt = (this__13949.cnt + 1);
return tcoll;
} else
{var tail_node__13950 = (new cljs.core.VectorNode(this__13949.root.edit,this__13949.tail));
var new_tail__13951 = cljs.core.make_array.call(null,32);
(new_tail__13951[0] = o);
this__13949.tail = new_tail__13951;
if(((this__13949.cnt >>> 5) > (1 << this__13949.shift)))
{var new_root_array__13952 = cljs.core.make_array.call(null,32);
var new_shift__13953 = (this__13949.shift + 5);
(new_root_array__13952[0] = this__13949.root);
(new_root_array__13952[1] = cljs.core.new_path.call(null,this__13949.root.edit,this__13949.shift,tail_node__13950));
this__13949.root = (new cljs.core.VectorNode(this__13949.root.edit,new_root_array__13952));
this__13949.shift = new_shift__13953;
this__13949.cnt = (this__13949.cnt + 1);
return tcoll;
} else
{var new_root__13954 = cljs.core.tv_push_tail.call(null,tcoll,this__13949.shift,this__13949.root,tail_node__13950);
this__13949.root = new_root__13954;
this__13949.cnt = (this__13949.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13955 = this;
if(cljs.core.truth_(this__13955.root.edit))
{this__13955.root.edit = null;
var len__13956 = (this__13955.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__13957 = cljs.core.make_array.call(null,len__13956);
cljs.core.array_copy.call(null,this__13955.tail,0,trimmed_tail__13957,0,len__13956);
return (new cljs.core.PersistentVector(null,this__13955.cnt,this__13955.shift,this__13955.root,trimmed_tail__13957,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13959 = this;
var h__364__auto____13960 = this__13959.__hash;
if((h__364__auto____13960 != null))
{return h__364__auto____13960;
} else
{var h__364__auto____13961 = cljs.core.hash_coll.call(null,coll);
this__13959.__hash = h__364__auto____13961;
return h__364__auto____13961;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13962 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__13963 = this;
var this$__13964 = this;
return cljs.core.pr_str.call(null,this$__13964);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13965 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13966 = this;
return cljs.core._first.call(null,this__13966.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13967 = this;
var temp__3971__auto____13968 = cljs.core.next.call(null,this__13967.front);
if(cljs.core.truth_(temp__3971__auto____13968))
{var f1__13969 = temp__3971__auto____13968;
return (new cljs.core.PersistentQueueSeq(this__13967.meta,f1__13969,this__13967.rear,null));
} else
{if((this__13967.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13967.meta,this__13967.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13970 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13971 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13971.front,this__13971.rear,this__13971.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13972 = this;
return this__13972.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13973 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13973.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13974 = this;
var h__364__auto____13975 = this__13974.__hash;
if((h__364__auto____13975 != null))
{return h__364__auto____13975;
} else
{var h__364__auto____13976 = cljs.core.hash_coll.call(null,coll);
this__13974.__hash = h__364__auto____13976;
return h__364__auto____13976;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13977 = this;
if(cljs.core.truth_(this__13977.front))
{return (new cljs.core.PersistentQueue(this__13977.meta,(this__13977.count + 1),this__13977.front,cljs.core.conj.call(null,(function (){var or__3824__auto____13978 = this__13977.rear;
if(cljs.core.truth_(or__3824__auto____13978))
{return or__3824__auto____13978;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__13977.meta,(this__13977.count + 1),cljs.core.conj.call(null,this__13977.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__13979 = this;
var this$__13980 = this;
return cljs.core.pr_str.call(null,this$__13980);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13981 = this;
var rear__13982 = cljs.core.seq.call(null,this__13981.rear);
if(cljs.core.truth_((function (){var or__3824__auto____13983 = this__13981.front;
if(cljs.core.truth_(or__3824__auto____13983))
{return or__3824__auto____13983;
} else
{return rear__13982;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13981.front,cljs.core.seq.call(null,rear__13982),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13984 = this;
return this__13984.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13985 = this;
return cljs.core._first.call(null,this__13985.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13986 = this;
if(cljs.core.truth_(this__13986.front))
{var temp__3971__auto____13987 = cljs.core.next.call(null,this__13986.front);
if(cljs.core.truth_(temp__3971__auto____13987))
{var f1__13988 = temp__3971__auto____13987;
return (new cljs.core.PersistentQueue(this__13986.meta,(this__13986.count - 1),f1__13988,this__13986.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__13986.meta,(this__13986.count - 1),cljs.core.seq.call(null,this__13986.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13989 = this;
return cljs.core.first.call(null,this__13989.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13990 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13991 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13992 = this;
return (new cljs.core.PersistentQueue(meta,this__13992.count,this__13992.front,this__13992.rear,this__13992.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13993 = this;
return this__13993.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13994 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13995 = this;
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
var len__13996 = array.length;
var i__13997 = 0;
while(true){
if((i__13997 < len__13996))
{if(cljs.core._EQ_.call(null,k,(array[i__13997])))
{return i__13997;
} else
{{
var G__13998 = (i__13997 + incr);
i__13997 = G__13998;
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
if(cljs.core.truth_((function (){var and__3822__auto____13999 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____13999))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____13999;
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
var a__14000 = cljs.core.hash.call(null,a);
var b__14001 = cljs.core.hash.call(null,b);
if((a__14000 < b__14001))
{return -1;
} else
{if((a__14000 > b__14001))
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
var ks__14003 = m.keys;
var len__14004 = ks__14003.length;
var so__14005 = m.strobj;
var out__14006 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__14007 = 0;
var out__14008 = cljs.core.transient$.call(null,out__14006);
while(true){
if((i__14007 < len__14004))
{var k__14009 = (ks__14003[i__14007]);
{
var G__14010 = (i__14007 + 1);
var G__14011 = cljs.core.assoc_BANG_.call(null,out__14008,k__14009,(so__14005[k__14009]));
i__14007 = G__14010;
out__14008 = G__14011;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__14008,k,v));
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14016 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14017 = this;
var h__364__auto____14018 = this__14017.__hash;
if((h__364__auto____14018 != null))
{return h__364__auto____14018;
} else
{var h__364__auto____14019 = cljs.core.hash_imap.call(null,coll);
this__14017.__hash = h__364__auto____14019;
return h__364__auto____14019;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14020 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14021 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__14021.strobj,(this__14021.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14022 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___14023 = this__14022.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___14023))
{var new_strobj__14024 = goog.object.clone.call(null,this__14022.strobj);
(new_strobj__14024[k] = v);
return (new cljs.core.ObjMap(this__14022.meta,this__14022.keys,new_strobj__14024,(this__14022.update_count + 1),null));
} else
{if((this__14022.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__14025 = goog.object.clone.call(null,this__14022.strobj);
var new_keys__14026 = cljs.core.aclone.call(null,this__14022.keys);
(new_strobj__14025[k] = v);
new_keys__14026.push(k);
return (new cljs.core.ObjMap(this__14022.meta,new_keys__14026,new_strobj__14025,(this__14022.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14027 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__14027.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__14047 = null;
var G__14047__2 = (function (tsym14014,k){
var this__14028 = this;
var tsym14014__14029 = this;
var coll__14030 = tsym14014__14029;
return cljs.core._lookup.call(null,coll__14030,k);
});
var G__14047__3 = (function (tsym14015,k,not_found){
var this__14031 = this;
var tsym14015__14032 = this;
var coll__14033 = tsym14015__14032;
return cljs.core._lookup.call(null,coll__14033,k,not_found);
});
G__14047 = function(tsym14015,k,not_found){
switch(arguments.length){
case 2:
return G__14047__2.call(this,tsym14015,k);
case 3:
return G__14047__3.call(this,tsym14015,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14047;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym14012,args14013){
return tsym14012.call.apply(tsym14012,[tsym14012].concat(cljs.core.aclone.call(null,args14013)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14034 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__14035 = this;
var this$__14036 = this;
return cljs.core.pr_str.call(null,this$__14036);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14037 = this;
if((this__14037.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__14002_SHARP_){
return cljs.core.vector.call(null,p1__14002_SHARP_,(this__14037.strobj[p1__14002_SHARP_]));
}),this__14037.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14038 = this;
return this__14038.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14039 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14040 = this;
return (new cljs.core.ObjMap(meta,this__14040.keys,this__14040.strobj,this__14040.update_count,this__14040.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14041 = this;
return this__14041.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14042 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__14042.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14043 = this;
if(cljs.core.truth_((function (){var and__3822__auto____14044 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____14044))
{return this__14043.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____14044;
}
})()))
{var new_keys__14045 = cljs.core.aclone.call(null,this__14043.keys);
var new_strobj__14046 = goog.object.clone.call(null,this__14043.strobj);
new_keys__14045.splice(cljs.core.scan_array.call(null,1,k,new_keys__14045),1);
cljs.core.js_delete.call(null,new_strobj__14046,k);
return (new cljs.core.ObjMap(this__14043.meta,new_keys__14045,new_strobj__14046,(this__14043.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14053 = this;
var h__364__auto____14054 = this__14053.__hash;
if((h__364__auto____14054 != null))
{return h__364__auto____14054;
} else
{var h__364__auto____14055 = cljs.core.hash_imap.call(null,coll);
this__14053.__hash = h__364__auto____14055;
return h__364__auto____14055;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14056 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14057 = this;
var bucket__14058 = (this__14057.hashobj[cljs.core.hash.call(null,k)]);
var i__14059 = (cljs.core.truth_(bucket__14058)?cljs.core.scan_array.call(null,2,k,bucket__14058):null);
if(cljs.core.truth_(i__14059))
{return (bucket__14058[(i__14059 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14060 = this;
var h__14061 = cljs.core.hash.call(null,k);
var bucket__14062 = (this__14060.hashobj[h__14061]);
if(cljs.core.truth_(bucket__14062))
{var new_bucket__14063 = cljs.core.aclone.call(null,bucket__14062);
var new_hashobj__14064 = goog.object.clone.call(null,this__14060.hashobj);
(new_hashobj__14064[h__14061] = new_bucket__14063);
var temp__3971__auto____14065 = cljs.core.scan_array.call(null,2,k,new_bucket__14063);
if(cljs.core.truth_(temp__3971__auto____14065))
{var i__14066 = temp__3971__auto____14065;
(new_bucket__14063[(i__14066 + 1)] = v);
return (new cljs.core.HashMap(this__14060.meta,this__14060.count,new_hashobj__14064,null));
} else
{new_bucket__14063.push(k,v);
return (new cljs.core.HashMap(this__14060.meta,(this__14060.count + 1),new_hashobj__14064,null));
}
} else
{var new_hashobj__14067 = goog.object.clone.call(null,this__14060.hashobj);
(new_hashobj__14067[h__14061] = [k,v]);
return (new cljs.core.HashMap(this__14060.meta,(this__14060.count + 1),new_hashobj__14067,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14068 = this;
var bucket__14069 = (this__14068.hashobj[cljs.core.hash.call(null,k)]);
var i__14070 = (cljs.core.truth_(bucket__14069)?cljs.core.scan_array.call(null,2,k,bucket__14069):null);
if(cljs.core.truth_(i__14070))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__14093 = null;
var G__14093__2 = (function (tsym14051,k){
var this__14071 = this;
var tsym14051__14072 = this;
var coll__14073 = tsym14051__14072;
return cljs.core._lookup.call(null,coll__14073,k);
});
var G__14093__3 = (function (tsym14052,k,not_found){
var this__14074 = this;
var tsym14052__14075 = this;
var coll__14076 = tsym14052__14075;
return cljs.core._lookup.call(null,coll__14076,k,not_found);
});
G__14093 = function(tsym14052,k,not_found){
switch(arguments.length){
case 2:
return G__14093__2.call(this,tsym14052,k);
case 3:
return G__14093__3.call(this,tsym14052,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14093;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym14049,args14050){
return tsym14049.call.apply(tsym14049,[tsym14049].concat(cljs.core.aclone.call(null,args14050)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14077 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__14078 = this;
var this$__14079 = this;
return cljs.core.pr_str.call(null,this$__14079);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14080 = this;
if((this__14080.count > 0))
{var hashes__14081 = cljs.core.js_keys.call(null,this__14080.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__14048_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__14080.hashobj[p1__14048_SHARP_])));
}),hashes__14081);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14082 = this;
return this__14082.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14083 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14084 = this;
return (new cljs.core.HashMap(meta,this__14084.count,this__14084.hashobj,this__14084.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14085 = this;
return this__14085.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14086 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__14086.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14087 = this;
var h__14088 = cljs.core.hash.call(null,k);
var bucket__14089 = (this__14087.hashobj[h__14088]);
var i__14090 = (cljs.core.truth_(bucket__14089)?cljs.core.scan_array.call(null,2,k,bucket__14089):null);
if(cljs.core.not.call(null,i__14090))
{return coll;
} else
{var new_hashobj__14091 = goog.object.clone.call(null,this__14087.hashobj);
if((3 > bucket__14089.length))
{cljs.core.js_delete.call(null,new_hashobj__14091,h__14088);
} else
{var new_bucket__14092 = cljs.core.aclone.call(null,bucket__14089);
new_bucket__14092.splice(i__14090,2);
(new_hashobj__14091[h__14088] = new_bucket__14092);
}
return (new cljs.core.HashMap(this__14087.meta,(this__14087.count - 1),new_hashobj__14091,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__14094 = ks.length;
var i__14095 = 0;
var out__14096 = cljs.core.HashMap.EMPTY;
while(true){
if((i__14095 < len__14094))
{{
var G__14097 = (i__14095 + 1);
var G__14098 = cljs.core.assoc.call(null,out__14096,(ks[i__14095]),(vs[i__14095]));
i__14095 = G__14097;
out__14096 = G__14098;
continue;
}
} else
{return out__14096;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__14099 = m.arr;
var len__14100 = arr__14099.length;
var i__14101 = 0;
while(true){
if((len__14100 <= i__14101))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__14099[i__14101]),k))
{return i__14101;
} else
{if("\uFDD0'else")
{{
var G__14102 = (i__14101 + 2);
i__14101 = G__14102;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14107 = this;
return (new cljs.core.TransientArrayMap({},this__14107.arr.length,cljs.core.aclone.call(null,this__14107.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14108 = this;
var h__364__auto____14109 = this__14108.__hash;
if((h__364__auto____14109 != null))
{return h__364__auto____14109;
} else
{var h__364__auto____14110 = cljs.core.hash_imap.call(null,coll);
this__14108.__hash = h__364__auto____14110;
return h__364__auto____14110;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14111 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14112 = this;
var idx__14113 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__14113 === -1))
{return not_found;
} else
{return (this__14112.arr[(idx__14113 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14114 = this;
var idx__14115 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__14115 === -1))
{if((this__14114.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__14114.meta,(this__14114.cnt + 1),(function (){var G__14116__14117 = cljs.core.aclone.call(null,this__14114.arr);
G__14116__14117.push(k);
G__14116__14117.push(v);
return G__14116__14117;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__14114.arr[(idx__14115 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__14114.meta,this__14114.cnt,(function (){var G__14118__14119 = cljs.core.aclone.call(null,this__14114.arr);
(G__14118__14119[(idx__14115 + 1)] = v);
return G__14118__14119;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14120 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__14150 = null;
var G__14150__2 = (function (tsym14105,k){
var this__14121 = this;
var tsym14105__14122 = this;
var coll__14123 = tsym14105__14122;
return cljs.core._lookup.call(null,coll__14123,k);
});
var G__14150__3 = (function (tsym14106,k,not_found){
var this__14124 = this;
var tsym14106__14125 = this;
var coll__14126 = tsym14106__14125;
return cljs.core._lookup.call(null,coll__14126,k,not_found);
});
G__14150 = function(tsym14106,k,not_found){
switch(arguments.length){
case 2:
return G__14150__2.call(this,tsym14106,k);
case 3:
return G__14150__3.call(this,tsym14106,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14150;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym14103,args14104){
return tsym14103.call.apply(tsym14103,[tsym14103].concat(cljs.core.aclone.call(null,args14104)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14127 = this;
var len__14128 = this__14127.arr.length;
var i__14129 = 0;
var init__14130 = init;
while(true){
if((i__14129 < len__14128))
{var init__14131 = f.call(null,init__14130,(this__14127.arr[i__14129]),(this__14127.arr[(i__14129 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__14131))
{return cljs.core.deref.call(null,init__14131);
} else
{{
var G__14151 = (i__14129 + 2);
var G__14152 = init__14131;
i__14129 = G__14151;
init__14130 = G__14152;
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
var this__14132 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__14133 = this;
var this$__14134 = this;
return cljs.core.pr_str.call(null,this$__14134);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14135 = this;
if((this__14135.cnt > 0))
{var len__14136 = this__14135.arr.length;
var array_map_seq__14137 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__14136))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__14135.arr[i]),(this__14135.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__14137.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14138 = this;
return this__14138.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14139 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14140 = this;
return (new cljs.core.PersistentArrayMap(meta,this__14140.cnt,this__14140.arr,this__14140.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14141 = this;
return this__14141.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14142 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14142.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14143 = this;
var idx__14144 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__14144 >= 0))
{var len__14145 = this__14143.arr.length;
var new_len__14146 = (len__14145 - 2);
if((new_len__14146 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__14147 = cljs.core.make_array.call(null,new_len__14146);
var s__14148 = 0;
var d__14149 = 0;
while(true){
if((s__14148 >= len__14145))
{return (new cljs.core.PersistentArrayMap(this__14143.meta,(this__14143.cnt - 1),new_arr__14147,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__14143.arr[s__14148])))
{{
var G__14153 = (s__14148 + 2);
var G__14154 = d__14149;
s__14148 = G__14153;
d__14149 = G__14154;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__14147[d__14149] = (this__14143.arr[s__14148]));
(new_arr__14147[(d__14149 + 1)] = (this__14143.arr[(s__14148 + 1)]));
{
var G__14155 = (s__14148 + 2);
var G__14156 = (d__14149 + 2);
s__14148 = G__14155;
d__14149 = G__14156;
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
var len__14157 = cljs.core.count.call(null,ks);
var i__14158 = 0;
var out__14159 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__14158 < len__14157))
{{
var G__14160 = (i__14158 + 1);
var G__14161 = cljs.core.assoc_BANG_.call(null,out__14159,(ks[i__14158]),(vs[i__14158]));
i__14158 = G__14160;
out__14159 = G__14161;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14159);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__14162 = this;
if(cljs.core.truth_(this__14162.editable_QMARK_))
{var idx__14163 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__14163 >= 0))
{(this__14162.arr[idx__14163] = (this__14162.arr[(this__14162.len - 2)]));
(this__14162.arr[(idx__14163 + 1)] = (this__14162.arr[(this__14162.len - 1)]));
var G__14164__14165 = this__14162.arr;
G__14164__14165.pop();
G__14164__14165.pop();
G__14164__14165;
this__14162.len = (this__14162.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__14166 = this;
if(cljs.core.truth_(this__14166.editable_QMARK_))
{var idx__14167 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__14167 === -1))
{if(((this__14166.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__14166.len = (this__14166.len + 2);
this__14166.arr.push(key);
this__14166.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__14166.len,this__14166.arr),key,val);
}
} else
{if((val === (this__14166.arr[(idx__14167 + 1)])))
{return tcoll;
} else
{(this__14166.arr[(idx__14167 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__14168 = this;
if(cljs.core.truth_(this__14168.editable_QMARK_))
{if((function (){var G__14169__14170 = o;
if((G__14169__14170 != null))
{if((function (){var or__3824__auto____14171 = (G__14169__14170.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____14171)
{return or__3824__auto____14171;
} else
{return G__14169__14170.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__14169__14170.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14169__14170);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14169__14170);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__14172 = cljs.core.seq.call(null,o);
var tcoll__14173 = tcoll;
while(true){
var temp__3971__auto____14174 = cljs.core.first.call(null,es__14172);
if(cljs.core.truth_(temp__3971__auto____14174))
{var e__14175 = temp__3971__auto____14174;
{
var G__14181 = cljs.core.next.call(null,es__14172);
var G__14182 = cljs.core._assoc_BANG_.call(null,tcoll__14173,cljs.core.key.call(null,e__14175),cljs.core.val.call(null,e__14175));
es__14172 = G__14181;
tcoll__14173 = G__14182;
continue;
}
} else
{return tcoll__14173;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14176 = this;
if(cljs.core.truth_(this__14176.editable_QMARK_))
{this__14176.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__14176.len,2),this__14176.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__14177 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__14178 = this;
if(cljs.core.truth_(this__14178.editable_QMARK_))
{var idx__14179 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__14179 === -1))
{return not_found;
} else
{return (this__14178.arr[(idx__14179 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__14180 = this;
if(cljs.core.truth_(this__14180.editable_QMARK_))
{return cljs.core.quot.call(null,this__14180.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__14183 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__14184 = 0;
while(true){
if((i__14184 < len))
{{
var G__14185 = cljs.core.assoc_BANG_.call(null,out__14183,(arr[i__14184]),(arr[(i__14184 + 1)]));
var G__14186 = (i__14184 + 2);
out__14183 = G__14185;
i__14184 = G__14186;
continue;
}
} else
{return out__14183;
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
var G__14187__14188 = cljs.core.aclone.call(null,arr);
(G__14187__14188[i] = a);
return G__14187__14188;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__14189__14190 = cljs.core.aclone.call(null,arr);
(G__14189__14190[i] = a);
(G__14189__14190[j] = b);
return G__14189__14190;
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
var new_arr__14191 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__14191,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__14191,(2 * i),(new_arr__14191.length - (2 * i)));
return new_arr__14191;
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
var editable__14192 = inode.ensure_editable(edit);
(editable__14192.arr[i] = a);
return editable__14192;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__14193 = inode.ensure_editable(edit);
(editable__14193.arr[i] = a);
(editable__14193.arr[j] = b);
return editable__14193;
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
var len__14194 = arr.length;
var i__14195 = 0;
var init__14196 = init;
while(true){
if((i__14195 < len__14194))
{var init__14199 = (function (){var k__14197 = (arr[i__14195]);
if((k__14197 != null))
{return f.call(null,init__14196,k__14197,(arr[(i__14195 + 1)]));
} else
{var node__14198 = (arr[(i__14195 + 1)]);
if((node__14198 != null))
{return node__14198.kv_reduce(f,init__14196);
} else
{return init__14196;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__14199))
{return cljs.core.deref.call(null,init__14199);
} else
{{
var G__14200 = (i__14195 + 2);
var G__14201 = init__14199;
i__14195 = G__14200;
init__14196 = G__14201;
continue;
}
}
} else
{return init__14196;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__14202 = this;
var inode__14203 = this;
if((this__14202.bitmap === bit))
{return null;
} else
{var editable__14204 = inode__14203.ensure_editable(e);
var earr__14205 = editable__14204.arr;
var len__14206 = earr__14205.length;
editable__14204.bitmap = (bit ^ editable__14204.bitmap);
cljs.core.array_copy.call(null,earr__14205,(2 * (i + 1)),earr__14205,(2 * i),(len__14206 - (2 * (i + 1))));
(earr__14205[(len__14206 - 2)] = null);
(earr__14205[(len__14206 - 1)] = null);
return editable__14204;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__14207 = this;
var inode__14208 = this;
var bit__14209 = (1 << ((hash >>> shift) & 0x01f));
var idx__14210 = cljs.core.bitmap_indexed_node_index.call(null,this__14207.bitmap,bit__14209);
if(((this__14207.bitmap & bit__14209) === 0))
{var n__14211 = cljs.core.bit_count.call(null,this__14207.bitmap);
if(((2 * n__14211) < this__14207.arr.length))
{var editable__14212 = inode__14208.ensure_editable(edit);
var earr__14213 = editable__14212.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__14213,(2 * idx__14210),earr__14213,(2 * (idx__14210 + 1)),(2 * (n__14211 - idx__14210)));
(earr__14213[(2 * idx__14210)] = key);
(earr__14213[((2 * idx__14210) + 1)] = val);
editable__14212.bitmap = (editable__14212.bitmap | bit__14209);
return editable__14212;
} else
{if((n__14211 >= 16))
{var nodes__14214 = cljs.core.make_array.call(null,32);
var jdx__14215 = ((hash >>> shift) & 0x01f);
(nodes__14214[jdx__14215] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__14216 = 0;
var j__14217 = 0;
while(true){
if((i__14216 < 32))
{if((((this__14207.bitmap >>> i__14216) & 1) === 0))
{{
var G__14270 = (i__14216 + 1);
var G__14271 = j__14217;
i__14216 = G__14270;
j__14217 = G__14271;
continue;
}
} else
{(nodes__14214[i__14216] = (((null != (this__14207.arr[j__14217])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__14207.arr[j__14217])),(this__14207.arr[j__14217]),(this__14207.arr[(j__14217 + 1)]),added_leaf_QMARK_):(this__14207.arr[(j__14217 + 1)])));
{
var G__14272 = (i__14216 + 1);
var G__14273 = (j__14217 + 2);
i__14216 = G__14272;
j__14217 = G__14273;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__14211 + 1),nodes__14214));
} else
{if("\uFDD0'else")
{var new_arr__14218 = cljs.core.make_array.call(null,(2 * (n__14211 + 4)));
cljs.core.array_copy.call(null,this__14207.arr,0,new_arr__14218,0,(2 * idx__14210));
(new_arr__14218[(2 * idx__14210)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__14218[((2 * idx__14210) + 1)] = val);
cljs.core.array_copy.call(null,this__14207.arr,(2 * idx__14210),new_arr__14218,(2 * (idx__14210 + 1)),(2 * (n__14211 - idx__14210)));
var editable__14219 = inode__14208.ensure_editable(edit);
editable__14219.arr = new_arr__14218;
editable__14219.bitmap = (editable__14219.bitmap | bit__14209);
return editable__14219;
} else
{return null;
}
}
}
} else
{var key_or_nil__14220 = (this__14207.arr[(2 * idx__14210)]);
var val_or_node__14221 = (this__14207.arr[((2 * idx__14210) + 1)]);
if((null == key_or_nil__14220))
{var n__14222 = val_or_node__14221.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__14222 === val_or_node__14221))
{return inode__14208;
} else
{return cljs.core.edit_and_set.call(null,inode__14208,edit,((2 * idx__14210) + 1),n__14222);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14220))
{if((val === val_or_node__14221))
{return inode__14208;
} else
{return cljs.core.edit_and_set.call(null,inode__14208,edit,((2 * idx__14210) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__14208,edit,(2 * idx__14210),null,((2 * idx__14210) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__14220,val_or_node__14221,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__14223 = this;
var inode__14224 = this;
return cljs.core.create_inode_seq.call(null,this__14223.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__14225 = this;
var inode__14226 = this;
var bit__14227 = (1 << ((hash >>> shift) & 0x01f));
if(((this__14225.bitmap & bit__14227) === 0))
{return inode__14226;
} else
{var idx__14228 = cljs.core.bitmap_indexed_node_index.call(null,this__14225.bitmap,bit__14227);
var key_or_nil__14229 = (this__14225.arr[(2 * idx__14228)]);
var val_or_node__14230 = (this__14225.arr[((2 * idx__14228) + 1)]);
if((null == key_or_nil__14229))
{var n__14231 = val_or_node__14230.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__14231 === val_or_node__14230))
{return inode__14226;
} else
{if((null != n__14231))
{return cljs.core.edit_and_set.call(null,inode__14226,edit,((2 * idx__14228) + 1),n__14231);
} else
{if((this__14225.bitmap === bit__14227))
{return null;
} else
{if("\uFDD0'else")
{return inode__14226.edit_and_remove_pair(edit,bit__14227,idx__14228);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14229))
{(removed_leaf_QMARK_[0] = true);
return inode__14226.edit_and_remove_pair(edit,bit__14227,idx__14228);
} else
{if("\uFDD0'else")
{return inode__14226;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__14232 = this;
var inode__14233 = this;
if((e === this__14232.edit))
{return inode__14233;
} else
{var n__14234 = cljs.core.bit_count.call(null,this__14232.bitmap);
var new_arr__14235 = cljs.core.make_array.call(null,(((n__14234 < 0))?4:(2 * (n__14234 + 1))));
cljs.core.array_copy.call(null,this__14232.arr,0,new_arr__14235,0,(2 * n__14234));
return (new cljs.core.BitmapIndexedNode(e,this__14232.bitmap,new_arr__14235));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__14236 = this;
var inode__14237 = this;
return cljs.core.inode_kv_reduce.call(null,this__14236.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__14274 = null;
var G__14274__3 = (function (shift,hash,key){
var this__14238 = this;
var inode__14239 = this;
var bit__14240 = (1 << ((hash >>> shift) & 0x01f));
if(((this__14238.bitmap & bit__14240) === 0))
{return null;
} else
{var idx__14241 = cljs.core.bitmap_indexed_node_index.call(null,this__14238.bitmap,bit__14240);
var key_or_nil__14242 = (this__14238.arr[(2 * idx__14241)]);
var val_or_node__14243 = (this__14238.arr[((2 * idx__14241) + 1)]);
if((null == key_or_nil__14242))
{return val_or_node__14243.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14242))
{return cljs.core.PersistentVector.fromArray([key_or_nil__14242,val_or_node__14243]);
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
var G__14274__4 = (function (shift,hash,key,not_found){
var this__14244 = this;
var inode__14245 = this;
var bit__14246 = (1 << ((hash >>> shift) & 0x01f));
if(((this__14244.bitmap & bit__14246) === 0))
{return not_found;
} else
{var idx__14247 = cljs.core.bitmap_indexed_node_index.call(null,this__14244.bitmap,bit__14246);
var key_or_nil__14248 = (this__14244.arr[(2 * idx__14247)]);
var val_or_node__14249 = (this__14244.arr[((2 * idx__14247) + 1)]);
if((null == key_or_nil__14248))
{return val_or_node__14249.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14248))
{return cljs.core.PersistentVector.fromArray([key_or_nil__14248,val_or_node__14249]);
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
G__14274 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__14274__3.call(this,shift,hash,key);
case 4:
return G__14274__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14274;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__14250 = this;
var inode__14251 = this;
var bit__14252 = (1 << ((hash >>> shift) & 0x01f));
if(((this__14250.bitmap & bit__14252) === 0))
{return inode__14251;
} else
{var idx__14253 = cljs.core.bitmap_indexed_node_index.call(null,this__14250.bitmap,bit__14252);
var key_or_nil__14254 = (this__14250.arr[(2 * idx__14253)]);
var val_or_node__14255 = (this__14250.arr[((2 * idx__14253) + 1)]);
if((null == key_or_nil__14254))
{var n__14256 = val_or_node__14255.inode_without((shift + 5),hash,key);
if((n__14256 === val_or_node__14255))
{return inode__14251;
} else
{if((null != n__14256))
{return (new cljs.core.BitmapIndexedNode(null,this__14250.bitmap,cljs.core.clone_and_set.call(null,this__14250.arr,((2 * idx__14253) + 1),n__14256)));
} else
{if((this__14250.bitmap === bit__14252))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__14250.bitmap ^ bit__14252),cljs.core.remove_pair.call(null,this__14250.arr,idx__14253)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14254))
{return (new cljs.core.BitmapIndexedNode(null,(this__14250.bitmap ^ bit__14252),cljs.core.remove_pair.call(null,this__14250.arr,idx__14253)));
} else
{if("\uFDD0'else")
{return inode__14251;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__14257 = this;
var inode__14258 = this;
var bit__14259 = (1 << ((hash >>> shift) & 0x01f));
var idx__14260 = cljs.core.bitmap_indexed_node_index.call(null,this__14257.bitmap,bit__14259);
if(((this__14257.bitmap & bit__14259) === 0))
{var n__14261 = cljs.core.bit_count.call(null,this__14257.bitmap);
if((n__14261 >= 16))
{var nodes__14262 = cljs.core.make_array.call(null,32);
var jdx__14263 = ((hash >>> shift) & 0x01f);
(nodes__14262[jdx__14263] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__14264 = 0;
var j__14265 = 0;
while(true){
if((i__14264 < 32))
{if((((this__14257.bitmap >>> i__14264) & 1) === 0))
{{
var G__14275 = (i__14264 + 1);
var G__14276 = j__14265;
i__14264 = G__14275;
j__14265 = G__14276;
continue;
}
} else
{(nodes__14262[i__14264] = (((null != (this__14257.arr[j__14265])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__14257.arr[j__14265])),(this__14257.arr[j__14265]),(this__14257.arr[(j__14265 + 1)]),added_leaf_QMARK_):(this__14257.arr[(j__14265 + 1)])));
{
var G__14277 = (i__14264 + 1);
var G__14278 = (j__14265 + 2);
i__14264 = G__14277;
j__14265 = G__14278;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__14261 + 1),nodes__14262));
} else
{var new_arr__14266 = cljs.core.make_array.call(null,(2 * (n__14261 + 1)));
cljs.core.array_copy.call(null,this__14257.arr,0,new_arr__14266,0,(2 * idx__14260));
(new_arr__14266[(2 * idx__14260)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__14266[((2 * idx__14260) + 1)] = val);
cljs.core.array_copy.call(null,this__14257.arr,(2 * idx__14260),new_arr__14266,(2 * (idx__14260 + 1)),(2 * (n__14261 - idx__14260)));
return (new cljs.core.BitmapIndexedNode(null,(this__14257.bitmap | bit__14259),new_arr__14266));
}
} else
{var key_or_nil__14267 = (this__14257.arr[(2 * idx__14260)]);
var val_or_node__14268 = (this__14257.arr[((2 * idx__14260) + 1)]);
if((null == key_or_nil__14267))
{var n__14269 = val_or_node__14268.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__14269 === val_or_node__14268))
{return inode__14258;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__14257.bitmap,cljs.core.clone_and_set.call(null,this__14257.arr,((2 * idx__14260) + 1),n__14269)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__14267))
{if((val === val_or_node__14268))
{return inode__14258;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__14257.bitmap,cljs.core.clone_and_set.call(null,this__14257.arr,((2 * idx__14260) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__14257.bitmap,cljs.core.clone_and_set.call(null,this__14257.arr,(2 * idx__14260),null,((2 * idx__14260) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__14267,val_or_node__14268,hash,key,val))));
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
var arr__14279 = array_node.arr;
var len__14280 = (2 * (array_node.cnt - 1));
var new_arr__14281 = cljs.core.make_array.call(null,len__14280);
var i__14282 = 0;
var j__14283 = 1;
var bitmap__14284 = 0;
while(true){
if((i__14282 < len__14280))
{if((function (){var and__3822__auto____14285 = (i__14282 != idx);
if(and__3822__auto____14285)
{return (null != (arr__14279[i__14282]));
} else
{return and__3822__auto____14285;
}
})())
{(new_arr__14281[j__14283] = (arr__14279[i__14282]));
{
var G__14286 = (i__14282 + 1);
var G__14287 = (j__14283 + 2);
var G__14288 = (bitmap__14284 | (1 << i__14282));
i__14282 = G__14286;
j__14283 = G__14287;
bitmap__14284 = G__14288;
continue;
}
} else
{{
var G__14289 = (i__14282 + 1);
var G__14290 = j__14283;
var G__14291 = bitmap__14284;
i__14282 = G__14289;
j__14283 = G__14290;
bitmap__14284 = G__14291;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__14284,new_arr__14281));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__14292 = this;
var inode__14293 = this;
var idx__14294 = ((hash >>> shift) & 0x01f);
var node__14295 = (this__14292.arr[idx__14294]);
if((null == node__14295))
{return (new cljs.core.ArrayNode(null,(this__14292.cnt + 1),cljs.core.clone_and_set.call(null,this__14292.arr,idx__14294,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__14296 = node__14295.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__14296 === node__14295))
{return inode__14293;
} else
{return (new cljs.core.ArrayNode(null,this__14292.cnt,cljs.core.clone_and_set.call(null,this__14292.arr,idx__14294,n__14296)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__14297 = this;
var inode__14298 = this;
var idx__14299 = ((hash >>> shift) & 0x01f);
var node__14300 = (this__14297.arr[idx__14299]);
if((null != node__14300))
{var n__14301 = node__14300.inode_without((shift + 5),hash,key);
if((n__14301 === node__14300))
{return inode__14298;
} else
{if((n__14301 == null))
{if((this__14297.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__14298,null,idx__14299);
} else
{return (new cljs.core.ArrayNode(null,(this__14297.cnt - 1),cljs.core.clone_and_set.call(null,this__14297.arr,idx__14299,n__14301)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__14297.cnt,cljs.core.clone_and_set.call(null,this__14297.arr,idx__14299,n__14301)));
} else
{return null;
}
}
}
} else
{return inode__14298;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__14333 = null;
var G__14333__3 = (function (shift,hash,key){
var this__14302 = this;
var inode__14303 = this;
var idx__14304 = ((hash >>> shift) & 0x01f);
var node__14305 = (this__14302.arr[idx__14304]);
if((null != node__14305))
{return node__14305.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__14333__4 = (function (shift,hash,key,not_found){
var this__14306 = this;
var inode__14307 = this;
var idx__14308 = ((hash >>> shift) & 0x01f);
var node__14309 = (this__14306.arr[idx__14308]);
if((null != node__14309))
{return node__14309.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__14333 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__14333__3.call(this,shift,hash,key);
case 4:
return G__14333__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14333;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__14310 = this;
var inode__14311 = this;
return cljs.core.create_array_node_seq.call(null,this__14310.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__14312 = this;
var inode__14313 = this;
if((e === this__14312.edit))
{return inode__14313;
} else
{return (new cljs.core.ArrayNode(e,this__14312.cnt,cljs.core.aclone.call(null,this__14312.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__14314 = this;
var inode__14315 = this;
var idx__14316 = ((hash >>> shift) & 0x01f);
var node__14317 = (this__14314.arr[idx__14316]);
if((null == node__14317))
{var editable__14318 = cljs.core.edit_and_set.call(null,inode__14315,edit,idx__14316,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__14318.cnt = (editable__14318.cnt + 1);
return editable__14318;
} else
{var n__14319 = node__14317.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__14319 === node__14317))
{return inode__14315;
} else
{return cljs.core.edit_and_set.call(null,inode__14315,edit,idx__14316,n__14319);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__14320 = this;
var inode__14321 = this;
var idx__14322 = ((hash >>> shift) & 0x01f);
var node__14323 = (this__14320.arr[idx__14322]);
if((null == node__14323))
{return inode__14321;
} else
{var n__14324 = node__14323.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__14324 === node__14323))
{return inode__14321;
} else
{if((null == n__14324))
{if((this__14320.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__14321,edit,idx__14322);
} else
{var editable__14325 = cljs.core.edit_and_set.call(null,inode__14321,edit,idx__14322,n__14324);
editable__14325.cnt = (editable__14325.cnt - 1);
return editable__14325;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__14321,edit,idx__14322,n__14324);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__14326 = this;
var inode__14327 = this;
var len__14328 = this__14326.arr.length;
var i__14329 = 0;
var init__14330 = init;
while(true){
if((i__14329 < len__14328))
{var node__14331 = (this__14326.arr[i__14329]);
if((node__14331 != null))
{var init__14332 = node__14331.kv_reduce(f,init__14330);
if(cljs.core.reduced_QMARK_.call(null,init__14332))
{return cljs.core.deref.call(null,init__14332);
} else
{{
var G__14334 = (i__14329 + 1);
var G__14335 = init__14332;
i__14329 = G__14334;
init__14330 = G__14335;
continue;
}
}
} else
{return null;
}
} else
{return init__14330;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__14336 = (2 * cnt);
var i__14337 = 0;
while(true){
if((i__14337 < lim__14336))
{if(cljs.core._EQ_.call(null,key,(arr[i__14337])))
{return i__14337;
} else
{{
var G__14338 = (i__14337 + 2);
i__14337 = G__14338;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__14339 = this;
var inode__14340 = this;
if((hash === this__14339.collision_hash))
{var idx__14341 = cljs.core.hash_collision_node_find_index.call(null,this__14339.arr,this__14339.cnt,key);
if((idx__14341 === -1))
{var len__14342 = this__14339.arr.length;
var new_arr__14343 = cljs.core.make_array.call(null,(len__14342 + 2));
cljs.core.array_copy.call(null,this__14339.arr,0,new_arr__14343,0,len__14342);
(new_arr__14343[len__14342] = key);
(new_arr__14343[(len__14342 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__14339.collision_hash,(this__14339.cnt + 1),new_arr__14343));
} else
{if(cljs.core._EQ_.call(null,(this__14339.arr[idx__14341]),val))
{return inode__14340;
} else
{return (new cljs.core.HashCollisionNode(null,this__14339.collision_hash,this__14339.cnt,cljs.core.clone_and_set.call(null,this__14339.arr,(idx__14341 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__14339.collision_hash >>> shift) & 0x01f)),[null,inode__14340])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__14344 = this;
var inode__14345 = this;
var idx__14346 = cljs.core.hash_collision_node_find_index.call(null,this__14344.arr,this__14344.cnt,key);
if((idx__14346 === -1))
{return inode__14345;
} else
{if((this__14344.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__14344.collision_hash,(this__14344.cnt - 1),cljs.core.remove_pair.call(null,this__14344.arr,cljs.core.quot.call(null,idx__14346,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__14373 = null;
var G__14373__3 = (function (shift,hash,key){
var this__14347 = this;
var inode__14348 = this;
var idx__14349 = cljs.core.hash_collision_node_find_index.call(null,this__14347.arr,this__14347.cnt,key);
if((idx__14349 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__14347.arr[idx__14349])))
{return cljs.core.PersistentVector.fromArray([(this__14347.arr[idx__14349]),(this__14347.arr[(idx__14349 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__14373__4 = (function (shift,hash,key,not_found){
var this__14350 = this;
var inode__14351 = this;
var idx__14352 = cljs.core.hash_collision_node_find_index.call(null,this__14350.arr,this__14350.cnt,key);
if((idx__14352 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__14350.arr[idx__14352])))
{return cljs.core.PersistentVector.fromArray([(this__14350.arr[idx__14352]),(this__14350.arr[(idx__14352 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__14373 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__14373__3.call(this,shift,hash,key);
case 4:
return G__14373__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14373;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__14353 = this;
var inode__14354 = this;
return cljs.core.create_inode_seq.call(null,this__14353.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__14374 = null;
var G__14374__1 = (function (e){
var this__14355 = this;
var inode__14356 = this;
if((e === this__14355.edit))
{return inode__14356;
} else
{var new_arr__14357 = cljs.core.make_array.call(null,(2 * (this__14355.cnt + 1)));
cljs.core.array_copy.call(null,this__14355.arr,0,new_arr__14357,0,(2 * this__14355.cnt));
return (new cljs.core.HashCollisionNode(e,this__14355.collision_hash,this__14355.cnt,new_arr__14357));
}
});
var G__14374__3 = (function (e,count,array){
var this__14358 = this;
var inode__14359 = this;
if((e === this__14358.edit))
{this__14358.arr = array;
this__14358.cnt = count;
return inode__14359;
} else
{return (new cljs.core.HashCollisionNode(this__14358.edit,this__14358.collision_hash,count,array));
}
});
G__14374 = function(e,count,array){
switch(arguments.length){
case 1:
return G__14374__1.call(this,e);
case 3:
return G__14374__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14374;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__14360 = this;
var inode__14361 = this;
if((hash === this__14360.collision_hash))
{var idx__14362 = cljs.core.hash_collision_node_find_index.call(null,this__14360.arr,this__14360.cnt,key);
if((idx__14362 === -1))
{if((this__14360.arr.length > (2 * this__14360.cnt)))
{var editable__14363 = cljs.core.edit_and_set.call(null,inode__14361,edit,(2 * this__14360.cnt),key,((2 * this__14360.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__14363.cnt = (editable__14363.cnt + 1);
return editable__14363;
} else
{var len__14364 = this__14360.arr.length;
var new_arr__14365 = cljs.core.make_array.call(null,(len__14364 + 2));
cljs.core.array_copy.call(null,this__14360.arr,0,new_arr__14365,0,len__14364);
(new_arr__14365[len__14364] = key);
(new_arr__14365[(len__14364 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__14361.ensure_editable(edit,(this__14360.cnt + 1),new_arr__14365);
}
} else
{if(((this__14360.arr[(idx__14362 + 1)]) === val))
{return inode__14361;
} else
{return cljs.core.edit_and_set.call(null,inode__14361,edit,(idx__14362 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__14360.collision_hash >>> shift) & 0x01f)),[null,inode__14361,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__14366 = this;
var inode__14367 = this;
var idx__14368 = cljs.core.hash_collision_node_find_index.call(null,this__14366.arr,this__14366.cnt,key);
if((idx__14368 === -1))
{return inode__14367;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__14366.cnt === 1))
{return null;
} else
{var editable__14369 = inode__14367.ensure_editable(edit);
var earr__14370 = editable__14369.arr;
(earr__14370[idx__14368] = (earr__14370[((2 * this__14366.cnt) - 2)]));
(earr__14370[(idx__14368 + 1)] = (earr__14370[((2 * this__14366.cnt) - 1)]));
(earr__14370[((2 * this__14366.cnt) - 1)] = null);
(earr__14370[((2 * this__14366.cnt) - 2)] = null);
editable__14369.cnt = (editable__14369.cnt - 1);
return editable__14369;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__14371 = this;
var inode__14372 = this;
return cljs.core.inode_kv_reduce.call(null,this__14371.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__14375 = cljs.core.hash.call(null,key1);
if((key1hash__14375 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__14375,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___14376 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__14375,key1,val1,added_leaf_QMARK___14376).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___14376);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__14377 = cljs.core.hash.call(null,key1);
if((key1hash__14377 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__14377,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___14378 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__14377,key1,val1,added_leaf_QMARK___14378).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___14378);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14379 = this;
var h__364__auto____14380 = this__14379.__hash;
if((h__364__auto____14380 != null))
{return h__364__auto____14380;
} else
{var h__364__auto____14381 = cljs.core.hash_coll.call(null,coll);
this__14379.__hash = h__364__auto____14381;
return h__364__auto____14381;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14382 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__14383 = this;
var this$__14384 = this;
return cljs.core.pr_str.call(null,this$__14384);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14385 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14386 = this;
if((this__14386.s == null))
{return cljs.core.PersistentVector.fromArray([(this__14386.nodes[this__14386.i]),(this__14386.nodes[(this__14386.i + 1)])]);
} else
{return cljs.core.first.call(null,this__14386.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14387 = this;
if((this__14387.s == null))
{return cljs.core.create_inode_seq.call(null,this__14387.nodes,(this__14387.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__14387.nodes,this__14387.i,cljs.core.next.call(null,this__14387.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14389 = this;
return (new cljs.core.NodeSeq(meta,this__14389.nodes,this__14389.i,this__14389.s,this__14389.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14390 = this;
return this__14390.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14391 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14391.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__14392 = nodes.length;
var j__14393 = i;
while(true){
if((j__14393 < len__14392))
{if((null != (nodes[j__14393])))
{return (new cljs.core.NodeSeq(null,nodes,j__14393,null,null));
} else
{var temp__3971__auto____14394 = (nodes[(j__14393 + 1)]);
if(cljs.core.truth_(temp__3971__auto____14394))
{var node__14395 = temp__3971__auto____14394;
var temp__3971__auto____14396 = node__14395.inode_seq();
if(cljs.core.truth_(temp__3971__auto____14396))
{var node_seq__14397 = temp__3971__auto____14396;
return (new cljs.core.NodeSeq(null,nodes,(j__14393 + 2),node_seq__14397,null));
} else
{{
var G__14398 = (j__14393 + 2);
j__14393 = G__14398;
continue;
}
}
} else
{{
var G__14399 = (j__14393 + 2);
j__14393 = G__14399;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14400 = this;
var h__364__auto____14401 = this__14400.__hash;
if((h__364__auto____14401 != null))
{return h__364__auto____14401;
} else
{var h__364__auto____14402 = cljs.core.hash_coll.call(null,coll);
this__14400.__hash = h__364__auto____14402;
return h__364__auto____14402;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14403 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__14404 = this;
var this$__14405 = this;
return cljs.core.pr_str.call(null,this$__14405);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14406 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14407 = this;
return cljs.core.first.call(null,this__14407.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14408 = this;
return cljs.core.create_array_node_seq.call(null,null,this__14408.nodes,this__14408.i,cljs.core.next.call(null,this__14408.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14409 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14410 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__14410.nodes,this__14410.i,this__14410.s,this__14410.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14411 = this;
return this__14411.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14412 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14412.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__14413 = nodes.length;
var j__14414 = i;
while(true){
if((j__14414 < len__14413))
{var temp__3971__auto____14415 = (nodes[j__14414]);
if(cljs.core.truth_(temp__3971__auto____14415))
{var nj__14416 = temp__3971__auto____14415;
var temp__3971__auto____14417 = nj__14416.inode_seq();
if(cljs.core.truth_(temp__3971__auto____14417))
{var ns__14418 = temp__3971__auto____14417;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__14414 + 1),ns__14418,null));
} else
{{
var G__14419 = (j__14414 + 1);
j__14414 = G__14419;
continue;
}
}
} else
{{
var G__14420 = (j__14414 + 1);
j__14414 = G__14420;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14425 = this;
return (new cljs.core.TransientHashMap({},this__14425.root,this__14425.cnt,this__14425.has_nil_QMARK_,this__14425.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14426 = this;
var h__364__auto____14427 = this__14426.__hash;
if((h__364__auto____14427 != null))
{return h__364__auto____14427;
} else
{var h__364__auto____14428 = cljs.core.hash_imap.call(null,coll);
this__14426.__hash = h__364__auto____14428;
return h__364__auto____14428;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14429 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14430 = this;
if((k == null))
{if(cljs.core.truth_(this__14430.has_nil_QMARK_))
{return this__14430.nil_val;
} else
{return not_found;
}
} else
{if((this__14430.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__14430.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14431 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3822__auto____14432 = this__14431.has_nil_QMARK_;
if(cljs.core.truth_(and__3822__auto____14432))
{return (v === this__14431.nil_val);
} else
{return and__3822__auto____14432;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14431.meta,(cljs.core.truth_(this__14431.has_nil_QMARK_)?this__14431.cnt:(this__14431.cnt + 1)),this__14431.root,true,v,null));
}
} else
{var added_leaf_QMARK___14433 = [false];
var new_root__14434 = (((this__14431.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__14431.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___14433);
if((new_root__14434 === this__14431.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14431.meta,(cljs.core.truth_((added_leaf_QMARK___14433[0]))?(this__14431.cnt + 1):this__14431.cnt),new_root__14434,this__14431.has_nil_QMARK_,this__14431.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14435 = this;
if((k == null))
{return this__14435.has_nil_QMARK_;
} else
{if((this__14435.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__14435.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__14456 = null;
var G__14456__2 = (function (tsym14423,k){
var this__14436 = this;
var tsym14423__14437 = this;
var coll__14438 = tsym14423__14437;
return cljs.core._lookup.call(null,coll__14438,k);
});
var G__14456__3 = (function (tsym14424,k,not_found){
var this__14439 = this;
var tsym14424__14440 = this;
var coll__14441 = tsym14424__14440;
return cljs.core._lookup.call(null,coll__14441,k,not_found);
});
G__14456 = function(tsym14424,k,not_found){
switch(arguments.length){
case 2:
return G__14456__2.call(this,tsym14424,k);
case 3:
return G__14456__3.call(this,tsym14424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14456;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym14421,args14422){
return tsym14421.call.apply(tsym14421,[tsym14421].concat(cljs.core.aclone.call(null,args14422)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14442 = this;
var init__14443 = (cljs.core.truth_(this__14442.has_nil_QMARK_)?f.call(null,init,null,this__14442.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__14443))
{return cljs.core.deref.call(null,init__14443);
} else
{if((null != this__14442.root))
{return this__14442.root.kv_reduce(f,init__14443);
} else
{if("\uFDD0'else")
{return init__14443;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14444 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__14445 = this;
var this$__14446 = this;
return cljs.core.pr_str.call(null,this$__14446);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14447 = this;
if((this__14447.cnt > 0))
{var s__14448 = (((null != this__14447.root))?this__14447.root.inode_seq():null);
if(cljs.core.truth_(this__14447.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__14447.nil_val]),s__14448);
} else
{return s__14448;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14449 = this;
return this__14449.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14450 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14451 = this;
return (new cljs.core.PersistentHashMap(meta,this__14451.cnt,this__14451.root,this__14451.has_nil_QMARK_,this__14451.nil_val,this__14451.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14452 = this;
return this__14452.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14453 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__14453.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14454 = this;
if((k == null))
{if(cljs.core.truth_(this__14454.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__14454.meta,(this__14454.cnt - 1),this__14454.root,false,null,null));
} else
{return coll;
}
} else
{if((this__14454.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__14455 = this__14454.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__14455 === this__14454.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14454.meta,(this__14454.cnt - 1),new_root__14455,this__14454.has_nil_QMARK_,this__14454.nil_val,null));
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
var len__14457 = ks.length;
var i__14458 = 0;
var out__14459 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__14458 < len__14457))
{{
var G__14460 = (i__14458 + 1);
var G__14461 = cljs.core.assoc_BANG_.call(null,out__14459,(ks[i__14458]),(vs[i__14458]));
i__14458 = G__14460;
out__14459 = G__14461;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14459);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__14462 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__14463 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__14464 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14465 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__14466 = this;
if((k == null))
{if(cljs.core.truth_(this__14466.has_nil_QMARK_))
{return this__14466.nil_val;
} else
{return null;
}
} else
{if((this__14466.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__14466.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__14467 = this;
if((k == null))
{if(cljs.core.truth_(this__14467.has_nil_QMARK_))
{return this__14467.nil_val;
} else
{return not_found;
}
} else
{if((this__14467.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__14467.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14468 = this;
if(cljs.core.truth_(this__14468.edit))
{return this__14468.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__14469 = this;
var tcoll__14470 = this;
if(cljs.core.truth_(this__14469.edit))
{if((function (){var G__14471__14472 = o;
if((G__14471__14472 != null))
{if((function (){var or__3824__auto____14473 = (G__14471__14472.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____14473)
{return or__3824__auto____14473;
} else
{return G__14471__14472.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__14471__14472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14471__14472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14471__14472);
}
})())
{return tcoll__14470.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__14474 = cljs.core.seq.call(null,o);
var tcoll__14475 = tcoll__14470;
while(true){
var temp__3971__auto____14476 = cljs.core.first.call(null,es__14474);
if(cljs.core.truth_(temp__3971__auto____14476))
{var e__14477 = temp__3971__auto____14476;
{
var G__14488 = cljs.core.next.call(null,es__14474);
var G__14489 = tcoll__14475.assoc_BANG_(cljs.core.key.call(null,e__14477),cljs.core.val.call(null,e__14477));
es__14474 = G__14488;
tcoll__14475 = G__14489;
continue;
}
} else
{return tcoll__14475;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__14478 = this;
var tcoll__14479 = this;
if(cljs.core.truth_(this__14478.edit))
{if((k == null))
{if((this__14478.nil_val === v))
{} else
{this__14478.nil_val = v;
}
if(cljs.core.truth_(this__14478.has_nil_QMARK_))
{} else
{this__14478.count = (this__14478.count + 1);
this__14478.has_nil_QMARK_ = true;
}
return tcoll__14479;
} else
{var added_leaf_QMARK___14480 = [false];
var node__14481 = (((this__14478.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__14478.root).inode_assoc_BANG_(this__14478.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___14480);
if((node__14481 === this__14478.root))
{} else
{this__14478.root = node__14481;
}
if(cljs.core.truth_((added_leaf_QMARK___14480[0])))
{this__14478.count = (this__14478.count + 1);
} else
{}
return tcoll__14479;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__14482 = this;
var tcoll__14483 = this;
if(cljs.core.truth_(this__14482.edit))
{if((k == null))
{if(cljs.core.truth_(this__14482.has_nil_QMARK_))
{this__14482.has_nil_QMARK_ = false;
this__14482.nil_val = null;
this__14482.count = (this__14482.count - 1);
return tcoll__14483;
} else
{return tcoll__14483;
}
} else
{if((this__14482.root == null))
{return tcoll__14483;
} else
{var removed_leaf_QMARK___14484 = [false];
var node__14485 = this__14482.root.inode_without_BANG_(this__14482.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___14484);
if((node__14485 === this__14482.root))
{} else
{this__14482.root = node__14485;
}
if(cljs.core.truth_((removed_leaf_QMARK___14484[0])))
{this__14482.count = (this__14482.count - 1);
} else
{}
return tcoll__14483;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__14486 = this;
var tcoll__14487 = this;
if(cljs.core.truth_(this__14486.edit))
{this__14486.edit = null;
return (new cljs.core.PersistentHashMap(null,this__14486.count,this__14486.root,this__14486.has_nil_QMARK_,this__14486.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__14490 = node;
var stack__14491 = stack;
while(true){
if((t__14490 != null))
{{
var G__14492 = (cljs.core.truth_(ascending_QMARK_)?t__14490.left:t__14490.right);
var G__14493 = cljs.core.conj.call(null,stack__14491,t__14490);
t__14490 = G__14492;
stack__14491 = G__14493;
continue;
}
} else
{return stack__14491;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14494 = this;
var h__364__auto____14495 = this__14494.__hash;
if((h__364__auto____14495 != null))
{return h__364__auto____14495;
} else
{var h__364__auto____14496 = cljs.core.hash_coll.call(null,coll);
this__14494.__hash = h__364__auto____14496;
return h__364__auto____14496;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14497 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__14498 = this;
var this$__14499 = this;
return cljs.core.pr_str.call(null,this$__14499);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14500 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14501 = this;
if((this__14501.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__14501.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__14502 = this;
return cljs.core.peek.call(null,this__14502.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__14503 = this;
var t__14504 = cljs.core.peek.call(null,this__14503.stack);
var next_stack__14505 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__14503.ascending_QMARK_)?t__14504.right:t__14504.left),cljs.core.pop.call(null,this__14503.stack),this__14503.ascending_QMARK_);
if((next_stack__14505 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__14505,this__14503.ascending_QMARK_,(this__14503.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14507 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__14507.stack,this__14507.ascending_QMARK_,this__14507.cnt,this__14507.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14508 = this;
return this__14508.meta;
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
{if((function (){var and__3822__auto____14509 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____14509)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____14509;
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
{if((function (){var and__3822__auto____14510 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____14510)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____14510;
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
var init__14511 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__14511))
{return cljs.core.deref.call(null,init__14511);
} else
{var init__14512 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__14511):init__14511);
if(cljs.core.reduced_QMARK_.call(null,init__14512))
{return cljs.core.deref.call(null,init__14512);
} else
{var init__14513 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__14512):init__14512);
if(cljs.core.reduced_QMARK_.call(null,init__14513))
{return cljs.core.deref.call(null,init__14513);
} else
{return init__14513;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14518 = this;
var h__364__auto____14519 = this__14518.__hash;
if((h__364__auto____14519 != null))
{return h__364__auto____14519;
} else
{var h__364__auto____14520 = cljs.core.hash_coll.call(null,coll);
this__14518.__hash = h__364__auto____14520;
return h__364__auto____14520;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__14521 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__14522 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__14523 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__14523.key,this__14523.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__14570 = null;
var G__14570__2 = (function (tsym14516,k){
var this__14524 = this;
var tsym14516__14525 = this;
var node__14526 = tsym14516__14525;
return cljs.core._lookup.call(null,node__14526,k);
});
var G__14570__3 = (function (tsym14517,k,not_found){
var this__14527 = this;
var tsym14517__14528 = this;
var node__14529 = tsym14517__14528;
return cljs.core._lookup.call(null,node__14529,k,not_found);
});
G__14570 = function(tsym14517,k,not_found){
switch(arguments.length){
case 2:
return G__14570__2.call(this,tsym14517,k);
case 3:
return G__14570__3.call(this,tsym14517,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14570;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym14514,args14515){
return tsym14514.call.apply(tsym14514,[tsym14514].concat(cljs.core.aclone.call(null,args14515)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14530 = this;
return cljs.core.PersistentVector.fromArray([this__14530.key,this__14530.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14531 = this;
return this__14531.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14532 = this;
return this__14532.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__14533 = this;
var node__14534 = this;
return ins.balance_right(node__14534);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__14535 = this;
var node__14536 = this;
return (new cljs.core.RedNode(this__14535.key,this__14535.val,this__14535.left,this__14535.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__14537 = this;
var node__14538 = this;
return cljs.core.balance_right_del.call(null,this__14537.key,this__14537.val,this__14537.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__14539 = this;
var node__14540 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__14541 = this;
var node__14542 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14542,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__14543 = this;
var node__14544 = this;
return cljs.core.balance_left_del.call(null,this__14543.key,this__14543.val,del,this__14543.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__14545 = this;
var node__14546 = this;
return ins.balance_left(node__14546);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__14547 = this;
var node__14548 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__14548,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__14571 = null;
var G__14571__0 = (function (){
var this__14551 = this;
var this$__14552 = this;
return cljs.core.pr_str.call(null,this$__14552);
});
G__14571 = function(){
switch(arguments.length){
case 0:
return G__14571__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14571;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__14553 = this;
var node__14554 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14554,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__14555 = this;
var node__14556 = this;
return node__14556;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14557 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14558 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14559 = this;
return cljs.core.list.call(null,this__14559.key,this__14559.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14561 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14562 = this;
return this__14562.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14563 = this;
return cljs.core.PersistentVector.fromArray([this__14563.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14564 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14564.key,this__14564.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14566 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14566.key,this__14566.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14567 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14568 = this;
if((n === 0))
{return this__14568.key;
} else
{if((n === 1))
{return this__14568.val;
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
var this__14569 = this;
if((n === 0))
{return this__14569.key;
} else
{if((n === 1))
{return this__14569.val;
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
var this__14560 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14576 = this;
var h__364__auto____14577 = this__14576.__hash;
if((h__364__auto____14577 != null))
{return h__364__auto____14577;
} else
{var h__364__auto____14578 = cljs.core.hash_coll.call(null,coll);
this__14576.__hash = h__364__auto____14578;
return h__364__auto____14578;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__14579 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__14580 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__14581 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__14581.key,this__14581.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__14628 = null;
var G__14628__2 = (function (tsym14574,k){
var this__14582 = this;
var tsym14574__14583 = this;
var node__14584 = tsym14574__14583;
return cljs.core._lookup.call(null,node__14584,k);
});
var G__14628__3 = (function (tsym14575,k,not_found){
var this__14585 = this;
var tsym14575__14586 = this;
var node__14587 = tsym14575__14586;
return cljs.core._lookup.call(null,node__14587,k,not_found);
});
G__14628 = function(tsym14575,k,not_found){
switch(arguments.length){
case 2:
return G__14628__2.call(this,tsym14575,k);
case 3:
return G__14628__3.call(this,tsym14575,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14628;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym14572,args14573){
return tsym14572.call.apply(tsym14572,[tsym14572].concat(cljs.core.aclone.call(null,args14573)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14588 = this;
return cljs.core.PersistentVector.fromArray([this__14588.key,this__14588.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14589 = this;
return this__14589.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14590 = this;
return this__14590.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__14591 = this;
var node__14592 = this;
return (new cljs.core.RedNode(this__14591.key,this__14591.val,this__14591.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__14593 = this;
var node__14594 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__14595 = this;
var node__14596 = this;
return (new cljs.core.RedNode(this__14595.key,this__14595.val,this__14595.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__14597 = this;
var node__14598 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__14599 = this;
var node__14600 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14600,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__14601 = this;
var node__14602 = this;
return (new cljs.core.RedNode(this__14601.key,this__14601.val,del,this__14601.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__14603 = this;
var node__14604 = this;
return (new cljs.core.RedNode(this__14603.key,this__14603.val,ins,this__14603.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__14605 = this;
var node__14606 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14605.left))
{return (new cljs.core.RedNode(this__14605.key,this__14605.val,this__14605.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__14605.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14605.right))
{return (new cljs.core.RedNode(this__14605.right.key,this__14605.right.val,(new cljs.core.BlackNode(this__14605.key,this__14605.val,this__14605.left,this__14605.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__14605.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__14606,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__14629 = null;
var G__14629__0 = (function (){
var this__14609 = this;
var this$__14610 = this;
return cljs.core.pr_str.call(null,this$__14610);
});
G__14629 = function(){
switch(arguments.length){
case 0:
return G__14629__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14629;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__14611 = this;
var node__14612 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14611.right))
{return (new cljs.core.RedNode(this__14611.key,this__14611.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14611.left,null)),this__14611.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14611.left))
{return (new cljs.core.RedNode(this__14611.left.key,this__14611.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14611.left.left,null)),(new cljs.core.BlackNode(this__14611.key,this__14611.val,this__14611.left.right,this__14611.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14612,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__14613 = this;
var node__14614 = this;
return (new cljs.core.BlackNode(this__14613.key,this__14613.val,this__14613.left,this__14613.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14615 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14616 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14617 = this;
return cljs.core.list.call(null,this__14617.key,this__14617.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14619 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14620 = this;
return this__14620.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14621 = this;
return cljs.core.PersistentVector.fromArray([this__14621.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14622 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14622.key,this__14622.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14623 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14624 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14624.key,this__14624.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14625 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14626 = this;
if((n === 0))
{return this__14626.key;
} else
{if((n === 1))
{return this__14626.val;
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
var this__14627 = this;
if((n === 0))
{return this__14627.key;
} else
{if((n === 1))
{return this__14627.val;
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
var this__14618 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__14630 = comp.call(null,k,tree.key);
if((c__14630 === 0))
{(found[0] = tree);
return null;
} else
{if((c__14630 < 0))
{var ins__14631 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__14631 != null))
{return tree.add_left(ins__14631);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__14632 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__14632 != null))
{return tree.add_right(ins__14632);
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
{var app__14633 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14633))
{return (new cljs.core.RedNode(app__14633.key,app__14633.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__14633.left)),(new cljs.core.RedNode(right.key,right.val,app__14633.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__14633,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__14634 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14634))
{return (new cljs.core.RedNode(app__14634.key,app__14634.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__14634.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__14634.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__14634,right.right,null)));
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
{var c__14635 = comp.call(null,k,tree.key);
if((c__14635 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__14635 < 0))
{var del__14636 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____14637 = (del__14636 != null);
if(or__3824__auto____14637)
{return or__3824__auto____14637;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__14636,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__14636,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__14638 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____14639 = (del__14638 != null);
if(or__3824__auto____14639)
{return or__3824__auto____14639;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__14638);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__14638,null));
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
var tk__14640 = tree.key;
var c__14641 = comp.call(null,k,tk__14640);
if((c__14641 === 0))
{return tree.replace(tk__14640,v,tree.left,tree.right);
} else
{if((c__14641 < 0))
{return tree.replace(tk__14640,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__14640,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14646 = this;
var h__364__auto____14647 = this__14646.__hash;
if((h__364__auto____14647 != null))
{return h__364__auto____14647;
} else
{var h__364__auto____14648 = cljs.core.hash_imap.call(null,coll);
this__14646.__hash = h__364__auto____14648;
return h__364__auto____14648;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14649 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14650 = this;
var n__14651 = coll.entry_at(k);
if((n__14651 != null))
{return n__14651.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14652 = this;
var found__14653 = [null];
var t__14654 = cljs.core.tree_map_add.call(null,this__14652.comp,this__14652.tree,k,v,found__14653);
if((t__14654 == null))
{var found_node__14655 = cljs.core.nth.call(null,found__14653,0);
if(cljs.core._EQ_.call(null,v,found_node__14655.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14652.comp,cljs.core.tree_map_replace.call(null,this__14652.comp,this__14652.tree,k,v),this__14652.cnt,this__14652.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14652.comp,t__14654.blacken(),(this__14652.cnt + 1),this__14652.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14656 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__14688 = null;
var G__14688__2 = (function (tsym14644,k){
var this__14657 = this;
var tsym14644__14658 = this;
var coll__14659 = tsym14644__14658;
return cljs.core._lookup.call(null,coll__14659,k);
});
var G__14688__3 = (function (tsym14645,k,not_found){
var this__14660 = this;
var tsym14645__14661 = this;
var coll__14662 = tsym14645__14661;
return cljs.core._lookup.call(null,coll__14662,k,not_found);
});
G__14688 = function(tsym14645,k,not_found){
switch(arguments.length){
case 2:
return G__14688__2.call(this,tsym14645,k);
case 3:
return G__14688__3.call(this,tsym14645,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14688;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym14642,args14643){
return tsym14642.call.apply(tsym14642,[tsym14642].concat(cljs.core.aclone.call(null,args14643)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14663 = this;
if((this__14663.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__14663.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14664 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14665 = this;
if((this__14665.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14665.tree,false,this__14665.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__14666 = this;
var this$__14667 = this;
return cljs.core.pr_str.call(null,this$__14667);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__14668 = this;
var coll__14669 = this;
var t__14670 = this__14668.tree;
while(true){
if((t__14670 != null))
{var c__14671 = this__14668.comp.call(null,k,t__14670.key);
if((c__14671 === 0))
{return t__14670;
} else
{if((c__14671 < 0))
{{
var G__14689 = t__14670.left;
t__14670 = G__14689;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__14690 = t__14670.right;
t__14670 = G__14690;
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
var this__14672 = this;
if((this__14672.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14672.tree,ascending_QMARK_,this__14672.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14673 = this;
if((this__14673.cnt > 0))
{var stack__14674 = null;
var t__14675 = this__14673.tree;
while(true){
if((t__14675 != null))
{var c__14676 = this__14673.comp.call(null,k,t__14675.key);
if((c__14676 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__14674,t__14675),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__14676 < 0))
{{
var G__14691 = cljs.core.conj.call(null,stack__14674,t__14675);
var G__14692 = t__14675.left;
stack__14674 = G__14691;
t__14675 = G__14692;
continue;
}
} else
{{
var G__14693 = stack__14674;
var G__14694 = t__14675.right;
stack__14674 = G__14693;
t__14675 = G__14694;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__14676 > 0))
{{
var G__14695 = cljs.core.conj.call(null,stack__14674,t__14675);
var G__14696 = t__14675.right;
stack__14674 = G__14695;
t__14675 = G__14696;
continue;
}
} else
{{
var G__14697 = stack__14674;
var G__14698 = t__14675.left;
stack__14674 = G__14697;
t__14675 = G__14698;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__14674 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__14674,ascending_QMARK_,-1));
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
var this__14677 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14678 = this;
return this__14678.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14679 = this;
if((this__14679.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14679.tree,true,this__14679.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14680 = this;
return this__14680.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14681 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14682 = this;
return (new cljs.core.PersistentTreeMap(this__14682.comp,this__14682.tree,this__14682.cnt,meta,this__14682.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14686 = this;
return this__14686.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14687 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__14687.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14683 = this;
var found__14684 = [null];
var t__14685 = cljs.core.tree_map_remove.call(null,this__14683.comp,this__14683.tree,k,found__14684);
if((t__14685 == null))
{if((cljs.core.nth.call(null,found__14684,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14683.comp,null,0,this__14683.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14683.comp,t__14685.blacken(),(this__14683.cnt - 1),this__14683.meta,null));
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
var in$__14699 = cljs.core.seq.call(null,keyvals);
var out__14700 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__14699))
{{
var G__14701 = cljs.core.nnext.call(null,in$__14699);
var G__14702 = cljs.core.assoc_BANG_.call(null,out__14700,cljs.core.first.call(null,in$__14699),cljs.core.second.call(null,in$__14699));
in$__14699 = G__14701;
out__14700 = G__14702;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14700);
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
hash_map.cljs$lang$applyTo = (function (arglist__14703){
var keyvals = cljs.core.seq(arglist__14703);;
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
array_map.cljs$lang$applyTo = (function (arglist__14704){
var keyvals = cljs.core.seq(arglist__14704);;
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
var in$__14705 = cljs.core.seq.call(null,keyvals);
var out__14706 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__14705))
{{
var G__14707 = cljs.core.nnext.call(null,in$__14705);
var G__14708 = cljs.core.assoc.call(null,out__14706,cljs.core.first.call(null,in$__14705),cljs.core.second.call(null,in$__14705));
in$__14705 = G__14707;
out__14706 = G__14708;
continue;
}
} else
{return out__14706;
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
sorted_map.cljs$lang$applyTo = (function (arglist__14709){
var keyvals = cljs.core.seq(arglist__14709);;
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
var in$__14710 = cljs.core.seq.call(null,keyvals);
var out__14711 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__14710))
{{
var G__14712 = cljs.core.nnext.call(null,in$__14710);
var G__14713 = cljs.core.assoc.call(null,out__14711,cljs.core.first.call(null,in$__14710),cljs.core.second.call(null,in$__14710));
in$__14710 = G__14712;
out__14711 = G__14713;
continue;
}
} else
{return out__14711;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__14714){
var comparator = cljs.core.first(arglist__14714);
var keyvals = cljs.core.rest(arglist__14714);
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
{return cljs.core.reduce.call(null,(function (p1__14715_SHARP_,p2__14716_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____14717 = p1__14715_SHARP_;
if(cljs.core.truth_(or__3824__auto____14717))
{return or__3824__auto____14717;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__14716_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__14718){
var maps = cljs.core.seq(arglist__14718);;
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
{var merge_entry__14721 = (function (m,e){
var k__14719 = cljs.core.first.call(null,e);
var v__14720 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__14719))
{return cljs.core.assoc.call(null,m,k__14719,f.call(null,cljs.core.get.call(null,m,k__14719),v__14720));
} else
{return cljs.core.assoc.call(null,m,k__14719,v__14720);
}
});
var merge2__14723 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__14721,(function (){var or__3824__auto____14722 = m1;
if(cljs.core.truth_(or__3824__auto____14722))
{return or__3824__auto____14722;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__14723,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__14724){
var f = cljs.core.first(arglist__14724);
var maps = cljs.core.rest(arglist__14724);
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
var ret__14725 = cljs.core.ObjMap.fromObject([],{});
var keys__14726 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__14726))
{var key__14727 = cljs.core.first.call(null,keys__14726);
var entry__14728 = cljs.core.get.call(null,map,key__14727,"\uFDD0'user/not-found");
{
var G__14729 = ((cljs.core.not_EQ_.call(null,entry__14728,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__14725,key__14727,entry__14728):ret__14725);
var G__14730 = cljs.core.next.call(null,keys__14726);
ret__14725 = G__14729;
keys__14726 = G__14730;
continue;
}
} else
{return ret__14725;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14736 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__14736.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14737 = this;
var h__364__auto____14738 = this__14737.__hash;
if((h__364__auto____14738 != null))
{return h__364__auto____14738;
} else
{var h__364__auto____14739 = cljs.core.hash_iset.call(null,coll);
this__14737.__hash = h__364__auto____14739;
return h__364__auto____14739;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14740 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14741 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14741.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__14760 = null;
var G__14760__2 = (function (tsym14734,k){
var this__14742 = this;
var tsym14734__14743 = this;
var coll__14744 = tsym14734__14743;
return cljs.core._lookup.call(null,coll__14744,k);
});
var G__14760__3 = (function (tsym14735,k,not_found){
var this__14745 = this;
var tsym14735__14746 = this;
var coll__14747 = tsym14735__14746;
return cljs.core._lookup.call(null,coll__14747,k,not_found);
});
G__14760 = function(tsym14735,k,not_found){
switch(arguments.length){
case 2:
return G__14760__2.call(this,tsym14735,k);
case 3:
return G__14760__3.call(this,tsym14735,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14760;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym14732,args14733){
return tsym14732.call.apply(tsym14732,[tsym14732].concat(cljs.core.aclone.call(null,args14733)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14748 = this;
return (new cljs.core.PersistentHashSet(this__14748.meta,cljs.core.assoc.call(null,this__14748.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__14749 = this;
var this$__14750 = this;
return cljs.core.pr_str.call(null,this$__14750);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14751 = this;
return cljs.core.keys.call(null,this__14751.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14752 = this;
return (new cljs.core.PersistentHashSet(this__14752.meta,cljs.core.dissoc.call(null,this__14752.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14753 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14754 = this;
var and__3822__auto____14755 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14755)
{var and__3822__auto____14756 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14756)
{return cljs.core.every_QMARK_.call(null,(function (p1__14731_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14731_SHARP_);
}),other);
} else
{return and__3822__auto____14756;
}
} else
{return and__3822__auto____14755;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14757 = this;
return (new cljs.core.PersistentHashSet(meta,this__14757.hash_map,this__14757.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14758 = this;
return this__14758.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14759 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__14759.meta);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__14778 = null;
var G__14778__2 = (function (tsym14764,k){
var this__14766 = this;
var tsym14764__14767 = this;
var tcoll__14768 = tsym14764__14767;
if((cljs.core._lookup.call(null,this__14766.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__14778__3 = (function (tsym14765,k,not_found){
var this__14769 = this;
var tsym14765__14770 = this;
var tcoll__14771 = tsym14765__14770;
if((cljs.core._lookup.call(null,this__14769.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__14778 = function(tsym14765,k,not_found){
switch(arguments.length){
case 2:
return G__14778__2.call(this,tsym14765,k);
case 3:
return G__14778__3.call(this,tsym14765,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14778;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym14762,args14763){
return tsym14762.call.apply(tsym14762,[tsym14762].concat(cljs.core.aclone.call(null,args14763)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__14772 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__14773 = this;
if((cljs.core._lookup.call(null,this__14773.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__14774 = this;
return cljs.core.count.call(null,this__14774.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__14775 = this;
this__14775.transient_map = cljs.core.dissoc_BANG_.call(null,this__14775.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__14776 = this;
this__14776.transient_map = cljs.core.assoc_BANG_.call(null,this__14776.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14777 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__14777.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14783 = this;
var h__364__auto____14784 = this__14783.__hash;
if((h__364__auto____14784 != null))
{return h__364__auto____14784;
} else
{var h__364__auto____14785 = cljs.core.hash_iset.call(null,coll);
this__14783.__hash = h__364__auto____14785;
return h__364__auto____14785;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14786 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14787 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14787.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__14811 = null;
var G__14811__2 = (function (tsym14781,k){
var this__14788 = this;
var tsym14781__14789 = this;
var coll__14790 = tsym14781__14789;
return cljs.core._lookup.call(null,coll__14790,k);
});
var G__14811__3 = (function (tsym14782,k,not_found){
var this__14791 = this;
var tsym14782__14792 = this;
var coll__14793 = tsym14782__14792;
return cljs.core._lookup.call(null,coll__14793,k,not_found);
});
G__14811 = function(tsym14782,k,not_found){
switch(arguments.length){
case 2:
return G__14811__2.call(this,tsym14782,k);
case 3:
return G__14811__3.call(this,tsym14782,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14811;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym14779,args14780){
return tsym14779.call.apply(tsym14779,[tsym14779].concat(cljs.core.aclone.call(null,args14780)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14794 = this;
return (new cljs.core.PersistentTreeSet(this__14794.meta,cljs.core.assoc.call(null,this__14794.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14795 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__14795.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__14796 = this;
var this$__14797 = this;
return cljs.core.pr_str.call(null,this$__14797);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__14798 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__14798.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14799 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__14799.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__14800 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14801 = this;
return cljs.core._comparator.call(null,this__14801.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14802 = this;
return cljs.core.keys.call(null,this__14802.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14803 = this;
return (new cljs.core.PersistentTreeSet(this__14803.meta,cljs.core.dissoc.call(null,this__14803.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14804 = this;
return cljs.core.count.call(null,this__14804.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14805 = this;
var and__3822__auto____14806 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14806)
{var and__3822__auto____14807 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14807)
{return cljs.core.every_QMARK_.call(null,(function (p1__14761_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14761_SHARP_);
}),other);
} else
{return and__3822__auto____14807;
}
} else
{return and__3822__auto____14806;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14808 = this;
return (new cljs.core.PersistentTreeSet(meta,this__14808.tree_map,this__14808.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14809 = this;
return this__14809.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14810 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__14810.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__14812 = cljs.core.seq.call(null,coll);
var out__14813 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__14812)))
{{
var G__14814 = cljs.core.next.call(null,in$__14812);
var G__14815 = cljs.core.conj_BANG_.call(null,out__14813,cljs.core.first.call(null,in$__14812));
in$__14812 = G__14814;
out__14813 = G__14815;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14813);
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
sorted_set.cljs$lang$applyTo = (function (arglist__14816){
var keys = cljs.core.seq(arglist__14816);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__14818){
var comparator = cljs.core.first(arglist__14818);
var keys = cljs.core.rest(arglist__14818);
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
{var n__14819 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____14820 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____14820))
{var e__14821 = temp__3971__auto____14820;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__14821));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__14819,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__14817_SHARP_){
var temp__3971__auto____14822 = cljs.core.find.call(null,smap,p1__14817_SHARP_);
if(cljs.core.truth_(temp__3971__auto____14822))
{var e__14823 = temp__3971__auto____14822;
return cljs.core.second.call(null,e__14823);
} else
{return p1__14817_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__14831 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__14824,seen){
while(true){
var vec__14825__14826 = p__14824;
var f__14827 = cljs.core.nth.call(null,vec__14825__14826,0,null);
var xs__14828 = vec__14825__14826;
var temp__3974__auto____14829 = cljs.core.seq.call(null,xs__14828);
if(cljs.core.truth_(temp__3974__auto____14829))
{var s__14830 = temp__3974__auto____14829;
if(cljs.core.contains_QMARK_.call(null,seen,f__14827))
{{
var G__14832 = cljs.core.rest.call(null,s__14830);
var G__14833 = seen;
p__14824 = G__14832;
seen = G__14833;
continue;
}
} else
{return cljs.core.cons.call(null,f__14827,step.call(null,cljs.core.rest.call(null,s__14830),cljs.core.conj.call(null,seen,f__14827)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__14831.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__14834 = cljs.core.PersistentVector.fromArray([]);
var s__14835 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__14835)))
{{
var G__14836 = cljs.core.conj.call(null,ret__14834,cljs.core.first.call(null,s__14835));
var G__14837 = cljs.core.next.call(null,s__14835);
ret__14834 = G__14836;
s__14835 = G__14837;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14834);
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
{if((function (){var or__3824__auto____14838 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14838)
{return or__3824__auto____14838;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14839 = x.lastIndexOf("/");
if((i__14839 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14839 + 1));
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
if((function (){var or__3824__auto____14840 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14840)
{return or__3824__auto____14840;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14841 = x.lastIndexOf("/");
if((i__14841 > -1))
{return cljs.core.subs.call(null,x,2,i__14841);
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
var map__14844 = cljs.core.ObjMap.fromObject([],{});
var ks__14845 = cljs.core.seq.call(null,keys);
var vs__14846 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____14847 = ks__14845;
if(cljs.core.truth_(and__3822__auto____14847))
{return vs__14846;
} else
{return and__3822__auto____14847;
}
})()))
{{
var G__14848 = cljs.core.assoc.call(null,map__14844,cljs.core.first.call(null,ks__14845),cljs.core.first.call(null,vs__14846));
var G__14849 = cljs.core.next.call(null,ks__14845);
var G__14850 = cljs.core.next.call(null,vs__14846);
map__14844 = G__14848;
ks__14845 = G__14849;
vs__14846 = G__14850;
continue;
}
} else
{return map__14844;
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
var G__14853__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14842_SHARP_,p2__14843_SHARP_){
return max_key.call(null,k,p1__14842_SHARP_,p2__14843_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14853 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14853__delegate.call(this, k, x, y, more);
};
G__14853.cljs$lang$maxFixedArity = 3;
G__14853.cljs$lang$applyTo = (function (arglist__14854){
var k = cljs.core.first(arglist__14854);
var x = cljs.core.first(cljs.core.next(arglist__14854));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14854)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14854)));
return G__14853__delegate(k, x, y, more);
});
G__14853.cljs$lang$arity$variadic = G__14853__delegate;
return G__14853;
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
var G__14855__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14851_SHARP_,p2__14852_SHARP_){
return min_key.call(null,k,p1__14851_SHARP_,p2__14852_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14855 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14855__delegate.call(this, k, x, y, more);
};
G__14855.cljs$lang$maxFixedArity = 3;
G__14855.cljs$lang$applyTo = (function (arglist__14856){
var k = cljs.core.first(arglist__14856);
var x = cljs.core.first(cljs.core.next(arglist__14856));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14856)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14856)));
return G__14855__delegate(k, x, y, more);
});
G__14855.cljs$lang$arity$variadic = G__14855__delegate;
return G__14855;
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
var temp__3974__auto____14857 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____14857))
{var s__14858 = temp__3974__auto____14857;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14858),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14858)));
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
var temp__3974__auto____14859 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____14859))
{var s__14860 = temp__3974__auto____14859;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14860))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14860),take_while.call(null,pred,cljs.core.rest.call(null,s__14860)));
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
var comp__14861 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__14861.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__14862 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____14863 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____14863))
{var vec__14864__14865 = temp__3974__auto____14863;
var e__14866 = cljs.core.nth.call(null,vec__14864__14865,0,null);
var s__14867 = vec__14864__14865;
if(cljs.core.truth_(include__14862.call(null,e__14866)))
{return s__14867;
} else
{return cljs.core.next.call(null,s__14867);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14862,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14868 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____14868))
{var vec__14869__14870 = temp__3974__auto____14868;
var e__14871 = cljs.core.nth.call(null,vec__14869__14870,0,null);
var s__14872 = vec__14869__14870;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__14871))?s__14872:cljs.core.next.call(null,s__14872)));
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
var include__14873 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____14874 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____14874))
{var vec__14875__14876 = temp__3974__auto____14874;
var e__14877 = cljs.core.nth.call(null,vec__14875__14876,0,null);
var s__14878 = vec__14875__14876;
if(cljs.core.truth_(include__14873.call(null,e__14877)))
{return s__14878;
} else
{return cljs.core.next.call(null,s__14878);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14873,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14879 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____14879))
{var vec__14880__14881 = temp__3974__auto____14879;
var e__14882 = cljs.core.nth.call(null,vec__14880__14881,0,null);
var s__14883 = vec__14880__14881;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__14882))?s__14883:cljs.core.next.call(null,s__14883)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__14884 = this;
var h__364__auto____14885 = this__14884.__hash;
if((h__364__auto____14885 != null))
{return h__364__auto____14885;
} else
{var h__364__auto____14886 = cljs.core.hash_coll.call(null,rng);
this__14884.__hash = h__364__auto____14886;
return h__364__auto____14886;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__14887 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__14888 = this;
var this$__14889 = this;
return cljs.core.pr_str.call(null,this$__14889);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__14890 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__14891 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__14892 = this;
var comp__14893 = (((this__14892.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__14893.call(null,this__14892.start,this__14892.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__14894 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__14894.end - this__14894.start) / this__14894.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__14895 = this;
return this__14895.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__14896 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14896.meta,(this__14896.start + this__14896.step),this__14896.end,this__14896.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__14897 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__14898 = this;
return (new cljs.core.Range(meta,this__14898.start,this__14898.end,this__14898.step,this__14898.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__14899 = this;
return this__14899.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__14900 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__14900.start + (n * this__14900.step));
} else
{if((function (){var and__3822__auto____14901 = (this__14900.start > this__14900.end);
if(and__3822__auto____14901)
{return (this__14900.step === 0);
} else
{return and__3822__auto____14901;
}
})())
{return this__14900.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__14902 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__14902.start + (n * this__14902.step));
} else
{if((function (){var and__3822__auto____14903 = (this__14902.start > this__14902.end);
if(and__3822__auto____14903)
{return (this__14902.step === 0);
} else
{return and__3822__auto____14903;
}
})())
{return this__14902.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__14904 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14904.meta);
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
var temp__3974__auto____14905 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____14905))
{var s__14906 = temp__3974__auto____14905;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__14906),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14906)));
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
var temp__3974__auto____14908 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____14908))
{var s__14909 = temp__3974__auto____14908;
var fst__14910 = cljs.core.first.call(null,s__14909);
var fv__14911 = f.call(null,fst__14910);
var run__14912 = cljs.core.cons.call(null,fst__14910,cljs.core.take_while.call(null,(function (p1__14907_SHARP_){
return cljs.core._EQ_.call(null,fv__14911,f.call(null,p1__14907_SHARP_));
}),cljs.core.next.call(null,s__14909)));
return cljs.core.cons.call(null,run__14912,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14912),s__14909))));
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
var temp__3971__auto____14923 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____14923))
{var s__14924 = temp__3971__auto____14923;
return reductions.call(null,f,cljs.core.first.call(null,s__14924),cljs.core.rest.call(null,s__14924));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14925 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____14925))
{var s__14926 = temp__3974__auto____14925;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14926)),cljs.core.rest.call(null,s__14926));
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
var G__14928 = null;
var G__14928__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14928__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14928__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14928__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14928__4 = (function() { 
var G__14929__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14929__delegate.call(this, x, y, z, args);
};
G__14929.cljs$lang$maxFixedArity = 3;
G__14929.cljs$lang$applyTo = (function (arglist__14930){
var x = cljs.core.first(arglist__14930);
var y = cljs.core.first(cljs.core.next(arglist__14930));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14930)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14930)));
return G__14929__delegate(x, y, z, args);
});
G__14929.cljs$lang$arity$variadic = G__14929__delegate;
return G__14929;
})()
;
G__14928 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14928__0.call(this);
case 1:
return G__14928__1.call(this,x);
case 2:
return G__14928__2.call(this,x,y);
case 3:
return G__14928__3.call(this,x,y,z);
default:
return G__14928__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14928.cljs$lang$maxFixedArity = 3;
G__14928.cljs$lang$applyTo = G__14928__4.cljs$lang$applyTo;
return G__14928;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__14931 = null;
var G__14931__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14931__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14931__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14931__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14931__4 = (function() { 
var G__14932__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14932__delegate.call(this, x, y, z, args);
};
G__14932.cljs$lang$maxFixedArity = 3;
G__14932.cljs$lang$applyTo = (function (arglist__14933){
var x = cljs.core.first(arglist__14933);
var y = cljs.core.first(cljs.core.next(arglist__14933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14933)));
return G__14932__delegate(x, y, z, args);
});
G__14932.cljs$lang$arity$variadic = G__14932__delegate;
return G__14932;
})()
;
G__14931 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14931__0.call(this);
case 1:
return G__14931__1.call(this,x);
case 2:
return G__14931__2.call(this,x,y);
case 3:
return G__14931__3.call(this,x,y,z);
default:
return G__14931__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14931.cljs$lang$maxFixedArity = 3;
G__14931.cljs$lang$applyTo = G__14931__4.cljs$lang$applyTo;
return G__14931;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__14934 = null;
var G__14934__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14934__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14934__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14934__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14934__4 = (function() { 
var G__14935__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14935 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14935__delegate.call(this, x, y, z, args);
};
G__14935.cljs$lang$maxFixedArity = 3;
G__14935.cljs$lang$applyTo = (function (arglist__14936){
var x = cljs.core.first(arglist__14936);
var y = cljs.core.first(cljs.core.next(arglist__14936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14936)));
return G__14935__delegate(x, y, z, args);
});
G__14935.cljs$lang$arity$variadic = G__14935__delegate;
return G__14935;
})()
;
G__14934 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14934__0.call(this);
case 1:
return G__14934__1.call(this,x);
case 2:
return G__14934__2.call(this,x,y);
case 3:
return G__14934__3.call(this,x,y,z);
default:
return G__14934__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14934.cljs$lang$maxFixedArity = 3;
G__14934.cljs$lang$applyTo = G__14934__4.cljs$lang$applyTo;
return G__14934;
})()
});
var juxt__4 = (function() { 
var G__14937__delegate = function (f,g,h,fs){
var fs__14927 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__14938 = null;
var G__14938__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__14913_SHARP_,p2__14914_SHARP_){
return cljs.core.conj.call(null,p1__14913_SHARP_,p2__14914_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__14927);
});
var G__14938__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14915_SHARP_,p2__14916_SHARP_){
return cljs.core.conj.call(null,p1__14915_SHARP_,p2__14916_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__14927);
});
var G__14938__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14917_SHARP_,p2__14918_SHARP_){
return cljs.core.conj.call(null,p1__14917_SHARP_,p2__14918_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__14927);
});
var G__14938__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14919_SHARP_,p2__14920_SHARP_){
return cljs.core.conj.call(null,p1__14919_SHARP_,p2__14920_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__14927);
});
var G__14938__4 = (function() { 
var G__14939__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14921_SHARP_,p2__14922_SHARP_){
return cljs.core.conj.call(null,p1__14921_SHARP_,cljs.core.apply.call(null,p2__14922_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__14927);
};
var G__14939 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14939__delegate.call(this, x, y, z, args);
};
G__14939.cljs$lang$maxFixedArity = 3;
G__14939.cljs$lang$applyTo = (function (arglist__14940){
var x = cljs.core.first(arglist__14940);
var y = cljs.core.first(cljs.core.next(arglist__14940));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14940)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14940)));
return G__14939__delegate(x, y, z, args);
});
G__14939.cljs$lang$arity$variadic = G__14939__delegate;
return G__14939;
})()
;
G__14938 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14938__0.call(this);
case 1:
return G__14938__1.call(this,x);
case 2:
return G__14938__2.call(this,x,y);
case 3:
return G__14938__3.call(this,x,y,z);
default:
return G__14938__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14938.cljs$lang$maxFixedArity = 3;
G__14938.cljs$lang$applyTo = G__14938__4.cljs$lang$applyTo;
return G__14938;
})()
};
var G__14937 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14937__delegate.call(this, f, g, h, fs);
};
G__14937.cljs$lang$maxFixedArity = 3;
G__14937.cljs$lang$applyTo = (function (arglist__14941){
var f = cljs.core.first(arglist__14941);
var g = cljs.core.first(cljs.core.next(arglist__14941));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14941)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14941)));
return G__14937__delegate(f, g, h, fs);
});
G__14937.cljs$lang$arity$variadic = G__14937__delegate;
return G__14937;
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
var G__14943 = cljs.core.next.call(null,coll);
coll = G__14943;
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
if(cljs.core.truth_((function (){var and__3822__auto____14942 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3822__auto____14942))
{return (n > 0);
} else
{return and__3822__auto____14942;
}
})()))
{{
var G__14944 = (n - 1);
var G__14945 = cljs.core.next.call(null,coll);
n = G__14944;
coll = G__14945;
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
var matches__14946 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14946),s))
{if((cljs.core.count.call(null,matches__14946) === 1))
{return cljs.core.first.call(null,matches__14946);
} else
{return cljs.core.vec.call(null,matches__14946);
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
var matches__14947 = re.exec(s);
if((matches__14947 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__14947) === 1))
{return cljs.core.first.call(null,matches__14947);
} else
{return cljs.core.vec.call(null,matches__14947);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14948 = cljs.core.re_find.call(null,re,s);
var match_idx__14949 = s.search(re);
var match_str__14950 = ((cljs.core.coll_QMARK_.call(null,match_data__14948))?cljs.core.first.call(null,match_data__14948):match_data__14948);
var post_match__14951 = cljs.core.subs.call(null,s,(match_idx__14949 + cljs.core.count.call(null,match_str__14950)));
if(cljs.core.truth_(match_data__14948))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14948,re_seq.call(null,re,post_match__14951));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__14953__14954 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___14955 = cljs.core.nth.call(null,vec__14953__14954,0,null);
var flags__14956 = cljs.core.nth.call(null,vec__14953__14954,1,null);
var pattern__14957 = cljs.core.nth.call(null,vec__14953__14954,2,null);
return (new RegExp(pattern__14957,flags__14956));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14952_SHARP_){
return print_one.call(null,p1__14952_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____14958 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3822__auto____14958))
{var and__3822__auto____14962 = (function (){var G__14959__14960 = obj;
if((G__14959__14960 != null))
{if((function (){var or__3824__auto____14961 = (G__14959__14960.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____14961)
{return or__3824__auto____14961;
} else
{return G__14959__14960.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14959__14960.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14959__14960);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14959__14960);
}
})();
if(cljs.core.truth_(and__3822__auto____14962))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____14962;
}
} else
{return and__3822__auto____14958;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3822__auto____14963 = (obj != null);
if(and__3822__auto____14963)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____14963;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__14964__14965 = obj;
if((G__14964__14965 != null))
{if((function (){var or__3824__auto____14966 = (G__14964__14965.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3824__auto____14966)
{return or__3824__auto____14966;
} else
{return G__14964__14965.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__14964__14965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14964__14965);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14964__14965);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__14967 = cljs.core.first.call(null,objs);
var sb__14968 = (new goog.string.StringBuffer());
var G__14969__14970 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__14969__14970))
{var obj__14971 = cljs.core.first.call(null,G__14969__14970);
var G__14969__14972 = G__14969__14970;
while(true){
if((obj__14971 === first_obj__14967))
{} else
{sb__14968.append(" ");
}
var G__14973__14974 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14971,opts));
if(cljs.core.truth_(G__14973__14974))
{var string__14975 = cljs.core.first.call(null,G__14973__14974);
var G__14973__14976 = G__14973__14974;
while(true){
sb__14968.append(string__14975);
var temp__3974__auto____14977 = cljs.core.next.call(null,G__14973__14976);
if(cljs.core.truth_(temp__3974__auto____14977))
{var G__14973__14978 = temp__3974__auto____14977;
{
var G__14981 = cljs.core.first.call(null,G__14973__14978);
var G__14982 = G__14973__14978;
string__14975 = G__14981;
G__14973__14976 = G__14982;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14979 = cljs.core.next.call(null,G__14969__14972);
if(cljs.core.truth_(temp__3974__auto____14979))
{var G__14969__14980 = temp__3974__auto____14979;
{
var G__14983 = cljs.core.first.call(null,G__14969__14980);
var G__14984 = G__14969__14980;
obj__14971 = G__14983;
G__14969__14972 = G__14984;
continue;
}
} else
{}
break;
}
} else
{}
return sb__14968;
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
var sb__14985 = cljs.core.pr_sb.call(null,objs,opts);
sb__14985.append("\n");
return [cljs.core.str(sb__14985)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14986 = cljs.core.first.call(null,objs);
var G__14987__14988 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__14987__14988))
{var obj__14989 = cljs.core.first.call(null,G__14987__14988);
var G__14987__14990 = G__14987__14988;
while(true){
if((obj__14989 === first_obj__14986))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14991__14992 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14989,opts));
if(cljs.core.truth_(G__14991__14992))
{var string__14993 = cljs.core.first.call(null,G__14991__14992);
var G__14991__14994 = G__14991__14992;
while(true){
cljs.core.string_print.call(null,string__14993);
var temp__3974__auto____14995 = cljs.core.next.call(null,G__14991__14994);
if(cljs.core.truth_(temp__3974__auto____14995))
{var G__14991__14996 = temp__3974__auto____14995;
{
var G__14999 = cljs.core.first.call(null,G__14991__14996);
var G__15000 = G__14991__14996;
string__14993 = G__14999;
G__14991__14994 = G__15000;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14997 = cljs.core.next.call(null,G__14987__14990);
if(cljs.core.truth_(temp__3974__auto____14997))
{var G__14987__14998 = temp__3974__auto____14997;
{
var G__15001 = cljs.core.first.call(null,G__14987__14998);
var G__15002 = G__14987__14998;
obj__14989 = G__15001;
G__14987__14990 = G__15002;
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
pr_str.cljs$lang$applyTo = (function (arglist__15003){
var objs = cljs.core.seq(arglist__15003);;
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
prn_str.cljs$lang$applyTo = (function (arglist__15004){
var objs = cljs.core.seq(arglist__15004);;
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
pr.cljs$lang$applyTo = (function (arglist__15005){
var objs = cljs.core.seq(arglist__15005);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__15006){
var objs = cljs.core.seq(arglist__15006);;
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
print_str.cljs$lang$applyTo = (function (arglist__15007){
var objs = cljs.core.seq(arglist__15007);;
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
println.cljs$lang$applyTo = (function (arglist__15008){
var objs = cljs.core.seq(arglist__15008);;
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
println_str.cljs$lang$applyTo = (function (arglist__15009){
var objs = cljs.core.seq(arglist__15009);;
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
prn.cljs$lang$applyTo = (function (arglist__15010){
var objs = cljs.core.seq(arglist__15010);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__15011 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__15011,"{",", ","}",opts,coll);
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
var pr_pair__15012 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__15012,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__15013 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__15013,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____15014 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____15014))
{var nspc__15015 = temp__3974__auto____15014;
return [cljs.core.str(nspc__15015),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____15016 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____15016))
{var nspc__15017 = temp__3974__auto____15016;
return [cljs.core.str(nspc__15017),cljs.core.str("/")].join('');
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
var pr_pair__15018 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__15018,"{",", ","}",opts,coll);
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
var pr_pair__15019 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__15019,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__15020 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__15021 = this;
var G__15022__15023 = cljs.core.seq.call(null,this__15021.watches);
if(cljs.core.truth_(G__15022__15023))
{var G__15025__15027 = cljs.core.first.call(null,G__15022__15023);
var vec__15026__15028 = G__15025__15027;
var key__15029 = cljs.core.nth.call(null,vec__15026__15028,0,null);
var f__15030 = cljs.core.nth.call(null,vec__15026__15028,1,null);
var G__15022__15031 = G__15022__15023;
var G__15025__15032 = G__15025__15027;
var G__15022__15033 = G__15022__15031;
while(true){
var vec__15034__15035 = G__15025__15032;
var key__15036 = cljs.core.nth.call(null,vec__15034__15035,0,null);
var f__15037 = cljs.core.nth.call(null,vec__15034__15035,1,null);
var G__15022__15038 = G__15022__15033;
f__15037.call(null,key__15036,this$,oldval,newval);
var temp__3974__auto____15039 = cljs.core.next.call(null,G__15022__15038);
if(cljs.core.truth_(temp__3974__auto____15039))
{var G__15022__15040 = temp__3974__auto____15039;
{
var G__15047 = cljs.core.first.call(null,G__15022__15040);
var G__15048 = G__15022__15040;
G__15025__15032 = G__15047;
G__15022__15033 = G__15048;
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
var this__15041 = this;
return this$.watches = cljs.core.assoc.call(null,this__15041.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__15042 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15042.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__15043 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15043.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__15044 = this;
return this__15044.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__15045 = this;
return this__15045.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__15046 = this;
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
var G__15055__delegate = function (x,p__15049){
var map__15050__15051 = p__15049;
var map__15050__15052 = ((cljs.core.seq_QMARK_.call(null,map__15050__15051))?cljs.core.apply.call(null,cljs.core.hash_map,map__15050__15051):map__15050__15051);
var validator__15053 = cljs.core.get.call(null,map__15050__15052,"\uFDD0'validator");
var meta__15054 = cljs.core.get.call(null,map__15050__15052,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__15054,validator__15053,null));
};
var G__15055 = function (x,var_args){
var p__15049 = null;
if (goog.isDef(var_args)) {
  p__15049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15055__delegate.call(this, x, p__15049);
};
G__15055.cljs$lang$maxFixedArity = 1;
G__15055.cljs$lang$applyTo = (function (arglist__15056){
var x = cljs.core.first(arglist__15056);
var p__15049 = cljs.core.rest(arglist__15056);
return G__15055__delegate(x, p__15049);
});
G__15055.cljs$lang$arity$variadic = G__15055__delegate;
return G__15055;
})()
;
atom = function(x,var_args){
var p__15049 = var_args;
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
var temp__3974__auto____15057 = a.validator;
if(cljs.core.truth_(temp__3974__auto____15057))
{var validate__15058 = temp__3974__auto____15057;
if(cljs.core.truth_(validate__15058.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5917))))].join('')));
}
} else
{}
var old_value__15059 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15059,new_value);
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
var G__15060__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15060 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15060__delegate.call(this, a, f, x, y, z, more);
};
G__15060.cljs$lang$maxFixedArity = 5;
G__15060.cljs$lang$applyTo = (function (arglist__15061){
var a = cljs.core.first(arglist__15061);
var f = cljs.core.first(cljs.core.next(arglist__15061));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15061)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15061))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15061)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15061)))));
return G__15060__delegate(a, f, x, y, z, more);
});
G__15060.cljs$lang$arity$variadic = G__15060__delegate;
return G__15060;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15062){
var iref = cljs.core.first(arglist__15062);
var f = cljs.core.first(cljs.core.next(arglist__15062));
var args = cljs.core.rest(cljs.core.next(arglist__15062));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__15063 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__15063.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__15064 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__15064.state,(function (p__15065){
var curr_state__15066 = p__15065;
var curr_state__15067 = ((cljs.core.seq_QMARK_.call(null,curr_state__15066))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__15066):curr_state__15066);
var done__15068 = cljs.core.get.call(null,curr_state__15067,"\uFDD0'done");
if(cljs.core.truth_(done__15068))
{return curr_state__15067;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__15064.f.call(null)});
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
var map__15069__15070 = options;
var map__15069__15071 = ((cljs.core.seq_QMARK_.call(null,map__15069__15070))?cljs.core.apply.call(null,cljs.core.hash_map,map__15069__15070):map__15069__15070);
var keywordize_keys__15072 = cljs.core.get.call(null,map__15069__15071,"\uFDD0'keywordize-keys");
var keyfn__15073 = (cljs.core.truth_(keywordize_keys__15072)?cljs.core.keyword:cljs.core.str);
var f__15079 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__625__auto____15078 = (function iter__15074(s__15075){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15075__15076 = s__15075;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15075__15076)))
{var k__15077 = cljs.core.first.call(null,s__15075__15076);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__15073.call(null,k__15077),thisfn.call(null,(x[k__15077]))]),iter__15074.call(null,cljs.core.rest.call(null,s__15075__15076)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____15078.call(null,cljs.core.js_keys.call(null,x));
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
return f__15079.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15080){
var x = cljs.core.first(arglist__15080);
var options = cljs.core.rest(arglist__15080);
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
var mem__15081 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__15085__delegate = function (args){
var temp__3971__auto____15082 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15081),args);
if(cljs.core.truth_(temp__3971__auto____15082))
{var v__15083 = temp__3971__auto____15082;
return v__15083;
} else
{var ret__15084 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__15081,cljs.core.assoc,args,ret__15084);
return ret__15084;
}
};
var G__15085 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15085__delegate.call(this, args);
};
G__15085.cljs$lang$maxFixedArity = 0;
G__15085.cljs$lang$applyTo = (function (arglist__15086){
var args = cljs.core.seq(arglist__15086);;
return G__15085__delegate(args);
});
G__15085.cljs$lang$arity$variadic = G__15085__delegate;
return G__15085;
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
var ret__15087 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__15087))
{{
var G__15088 = ret__15087;
f = G__15088;
continue;
}
} else
{return ret__15087;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15089__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15089 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15089__delegate.call(this, f, args);
};
G__15089.cljs$lang$maxFixedArity = 1;
G__15089.cljs$lang$applyTo = (function (arglist__15090){
var f = cljs.core.first(arglist__15090);
var args = cljs.core.rest(arglist__15090);
return G__15089__delegate(f, args);
});
G__15089.cljs$lang$arity$variadic = G__15089__delegate;
return G__15089;
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
var k__15091 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__15091,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15091,cljs.core.PersistentVector.fromArray([])),x));
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
var or__3824__auto____15092 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____15092)
{return or__3824__auto____15092;
} else
{var or__3824__auto____15093 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3824__auto____15093)
{return or__3824__auto____15093;
} else
{var and__3822__auto____15094 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____15094)
{var and__3822__auto____15095 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____15095)
{var and__3822__auto____15096 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____15096)
{var ret__15097 = true;
var i__15098 = 0;
while(true){
if((function (){var or__3824__auto____15099 = cljs.core.not.call(null,ret__15097);
if(or__3824__auto____15099)
{return or__3824__auto____15099;
} else
{return (i__15098 === cljs.core.count.call(null,parent));
}
})())
{return ret__15097;
} else
{{
var G__15100 = isa_QMARK_.call(null,h,child.call(null,i__15098),parent.call(null,i__15098));
var G__15101 = (i__15098 + 1);
ret__15097 = G__15100;
i__15098 = G__15101;
continue;
}
}
break;
}
} else
{return and__3822__auto____15096;
}
} else
{return and__3822__auto____15095;
}
} else
{return and__3822__auto____15094;
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
var tp__15105 = "\uFDD0'parents".call(null,h);
var td__15106 = "\uFDD0'descendants".call(null,h);
var ta__15107 = "\uFDD0'ancestors".call(null,h);
var tf__15108 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____15109 = ((cljs.core.contains_QMARK_.call(null,tp__15105.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__15107.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__15107.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15105,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__15108.call(null,"\uFDD0'ancestors".call(null,h),tag,td__15106,parent,ta__15107),"\uFDD0'descendants":tf__15108.call(null,"\uFDD0'descendants".call(null,h),parent,ta__15107,tag,td__15106)});
})());
if(cljs.core.truth_(or__3824__auto____15109))
{return or__3824__auto____15109;
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
var parentMap__15110 = "\uFDD0'parents".call(null,h);
var childsParents__15111 = (cljs.core.truth_(parentMap__15110.call(null,tag))?cljs.core.disj.call(null,parentMap__15110.call(null,tag),parent):cljs.core.set([]));
var newParents__15112 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15111))?cljs.core.assoc.call(null,parentMap__15110,tag,childsParents__15111):cljs.core.dissoc.call(null,parentMap__15110,tag));
var deriv_seq__15113 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15102_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15102_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15102_SHARP_),cljs.core.second.call(null,p1__15102_SHARP_)));
}),cljs.core.seq.call(null,newParents__15112)));
if(cljs.core.contains_QMARK_.call(null,parentMap__15110.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__15103_SHARP_,p2__15104_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15103_SHARP_,p2__15104_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15113));
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
var xprefs__15114 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____15116 = (cljs.core.truth_((function (){var and__3822__auto____15115 = xprefs__15114;
if(cljs.core.truth_(and__3822__auto____15115))
{return xprefs__15114.call(null,y);
} else
{return and__3822__auto____15115;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____15116))
{return or__3824__auto____15116;
} else
{var or__3824__auto____15118 = (function (){var ps__15117 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__15117) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15117),prefer_table)))
{} else
{}
{
var G__15121 = cljs.core.rest.call(null,ps__15117);
ps__15117 = G__15121;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____15118))
{return or__3824__auto____15118;
} else
{var or__3824__auto____15120 = (function (){var ps__15119 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__15119) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15119),y,prefer_table)))
{} else
{}
{
var G__15122 = cljs.core.rest.call(null,ps__15119);
ps__15119 = G__15122;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____15120))
{return or__3824__auto____15120;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____15123 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____15123))
{return or__3824__auto____15123;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15132 = cljs.core.reduce.call(null,(function (be,p__15124){
var vec__15125__15126 = p__15124;
var k__15127 = cljs.core.nth.call(null,vec__15125__15126,0,null);
var ___15128 = cljs.core.nth.call(null,vec__15125__15126,1,null);
var e__15129 = vec__15125__15126;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15127))
{var be2__15131 = (cljs.core.truth_((function (){var or__3824__auto____15130 = (be == null);
if(or__3824__auto____15130)
{return or__3824__auto____15130;
} else
{return cljs.core.dominates.call(null,k__15127,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15129:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15131),k__15127,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__15127),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__15131)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__15131;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__15132))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15132));
return cljs.core.second.call(null,best_entry__15132);
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
if((function (){var and__3822__auto____15133 = mf;
if(and__3822__auto____15133)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____15133;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____15134 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15134)
{return or__3824__auto____15134;
} else
{var or__3824__auto____15135 = (cljs.core._reset["_"]);
if(or__3824__auto____15135)
{return or__3824__auto____15135;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____15136 = mf;
if(and__3822__auto____15136)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____15136;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____15137 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15137)
{return or__3824__auto____15137;
} else
{var or__3824__auto____15138 = (cljs.core._add_method["_"]);
if(or__3824__auto____15138)
{return or__3824__auto____15138;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____15139 = mf;
if(and__3822__auto____15139)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____15139;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____15140 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15140)
{return or__3824__auto____15140;
} else
{var or__3824__auto____15141 = (cljs.core._remove_method["_"]);
if(or__3824__auto____15141)
{return or__3824__auto____15141;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____15142 = mf;
if(and__3822__auto____15142)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____15142;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____15143 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15143)
{return or__3824__auto____15143;
} else
{var or__3824__auto____15144 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____15144)
{return or__3824__auto____15144;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____15145 = mf;
if(and__3822__auto____15145)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____15145;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____15146 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15146)
{return or__3824__auto____15146;
} else
{var or__3824__auto____15147 = (cljs.core._get_method["_"]);
if(or__3824__auto____15147)
{return or__3824__auto____15147;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____15148 = mf;
if(and__3822__auto____15148)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____15148;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____15149 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15149)
{return or__3824__auto____15149;
} else
{var or__3824__auto____15150 = (cljs.core._methods["_"]);
if(or__3824__auto____15150)
{return or__3824__auto____15150;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____15151 = mf;
if(and__3822__auto____15151)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____15151;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____15152 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15152)
{return or__3824__auto____15152;
} else
{var or__3824__auto____15153 = (cljs.core._prefers["_"]);
if(or__3824__auto____15153)
{return or__3824__auto____15153;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____15154 = mf;
if(and__3822__auto____15154)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____15154;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____15155 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3824__auto____15155)
{return or__3824__auto____15155;
} else
{var or__3824__auto____15156 = (cljs.core._dispatch["_"]);
if(or__3824__auto____15156)
{return or__3824__auto____15156;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15157 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15158 = cljs.core._get_method.call(null,mf,dispatch_val__15157);
if(cljs.core.truth_(target_fn__15158))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__15157)].join('')));
}
return cljs.core.apply.call(null,target_fn__15158,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__15159 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__15160 = this;
cljs.core.swap_BANG_.call(null,this__15160.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15160.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15160.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15160.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__15161 = this;
cljs.core.swap_BANG_.call(null,this__15161.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15161.method_cache,this__15161.method_table,this__15161.cached_hierarchy,this__15161.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__15162 = this;
cljs.core.swap_BANG_.call(null,this__15162.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15162.method_cache,this__15162.method_table,this__15162.cached_hierarchy,this__15162.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__15163 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15163.cached_hierarchy),cljs.core.deref.call(null,this__15163.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__15163.method_cache,this__15163.method_table,this__15163.cached_hierarchy,this__15163.hierarchy);
}
var temp__3971__auto____15164 = cljs.core.deref.call(null,this__15163.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____15164))
{var target_fn__15165 = temp__3971__auto____15164;
return target_fn__15165;
} else
{var temp__3971__auto____15166 = cljs.core.find_and_cache_best_method.call(null,this__15163.name,dispatch_val,this__15163.hierarchy,this__15163.method_table,this__15163.prefer_table,this__15163.method_cache,this__15163.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____15166))
{var target_fn__15167 = temp__3971__auto____15166;
return target_fn__15167;
} else
{return cljs.core.deref.call(null,this__15163.method_table).call(null,this__15163.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15168 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15168.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__15168.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__15168.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15168.method_cache,this__15168.method_table,this__15168.cached_hierarchy,this__15168.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__15169 = this;
return cljs.core.deref.call(null,this__15169.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__15170 = this;
return cljs.core.deref.call(null,this__15170.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__15171 = this;
return cljs.core.do_dispatch.call(null,mf,this__15171.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15172__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15172 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15172__delegate.call(this, _, args);
};
G__15172.cljs$lang$maxFixedArity = 1;
G__15172.cljs$lang$applyTo = (function (arglist__15173){
var _ = cljs.core.first(arglist__15173);
var args = cljs.core.rest(arglist__15173);
return G__15172__delegate(_, args);
});
G__15172.cljs$lang$arity$variadic = G__15172__delegate;
return G__15172;
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
