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
var G__4851__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__4851 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4851__delegate.call(this, array, i, idxs);
};
G__4851.cljs$lang$maxFixedArity = 2;
G__4851.cljs$lang$applyTo = (function (arglist__4852){
var array = cljs.core.first(arglist__4852);
var i = cljs.core.first(cljs.core.next(arglist__4852));
var idxs = cljs.core.rest(cljs.core.next(arglist__4852));
return G__4851__delegate(array, i, idxs);
});
G__4851.cljs$lang$arity$variadic = G__4851__delegate;
return G__4851;
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
if((function (){var and__3822__auto____4853 = this$;
if(and__3822__auto____4853)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____4853;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____4854 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4854)
{return or__3824__auto____4854;
} else
{var or__3824__auto____4855 = (cljs.core._invoke["_"]);
if(or__3824__auto____4855)
{return or__3824__auto____4855;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____4856 = this$;
if(and__3822__auto____4856)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____4856;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____4857 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4857)
{return or__3824__auto____4857;
} else
{var or__3824__auto____4858 = (cljs.core._invoke["_"]);
if(or__3824__auto____4858)
{return or__3824__auto____4858;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____4859 = this$;
if(and__3822__auto____4859)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____4859;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____4860 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4860)
{return or__3824__auto____4860;
} else
{var or__3824__auto____4861 = (cljs.core._invoke["_"]);
if(or__3824__auto____4861)
{return or__3824__auto____4861;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____4862 = this$;
if(and__3822__auto____4862)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____4862;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____4863 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4863)
{return or__3824__auto____4863;
} else
{var or__3824__auto____4864 = (cljs.core._invoke["_"]);
if(or__3824__auto____4864)
{return or__3824__auto____4864;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____4865 = this$;
if(and__3822__auto____4865)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____4865;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____4866 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4866)
{return or__3824__auto____4866;
} else
{var or__3824__auto____4867 = (cljs.core._invoke["_"]);
if(or__3824__auto____4867)
{return or__3824__auto____4867;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____4868 = this$;
if(and__3822__auto____4868)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____4868;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____4869 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4869)
{return or__3824__auto____4869;
} else
{var or__3824__auto____4870 = (cljs.core._invoke["_"]);
if(or__3824__auto____4870)
{return or__3824__auto____4870;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____4871 = this$;
if(and__3822__auto____4871)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____4871;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____4872 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4872)
{return or__3824__auto____4872;
} else
{var or__3824__auto____4873 = (cljs.core._invoke["_"]);
if(or__3824__auto____4873)
{return or__3824__auto____4873;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____4874 = this$;
if(and__3822__auto____4874)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____4874;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____4875 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4875)
{return or__3824__auto____4875;
} else
{var or__3824__auto____4876 = (cljs.core._invoke["_"]);
if(or__3824__auto____4876)
{return or__3824__auto____4876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____4877 = this$;
if(and__3822__auto____4877)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____4877;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____4878 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4878)
{return or__3824__auto____4878;
} else
{var or__3824__auto____4879 = (cljs.core._invoke["_"]);
if(or__3824__auto____4879)
{return or__3824__auto____4879;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____4880 = this$;
if(and__3822__auto____4880)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____4880;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____4881 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4881)
{return or__3824__auto____4881;
} else
{var or__3824__auto____4882 = (cljs.core._invoke["_"]);
if(or__3824__auto____4882)
{return or__3824__auto____4882;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____4883 = this$;
if(and__3822__auto____4883)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____4883;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____4884 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4884)
{return or__3824__auto____4884;
} else
{var or__3824__auto____4885 = (cljs.core._invoke["_"]);
if(or__3824__auto____4885)
{return or__3824__auto____4885;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____4886 = this$;
if(and__3822__auto____4886)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____4886;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____4887 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4887)
{return or__3824__auto____4887;
} else
{var or__3824__auto____4888 = (cljs.core._invoke["_"]);
if(or__3824__auto____4888)
{return or__3824__auto____4888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____4889 = this$;
if(and__3822__auto____4889)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____4889;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____4890 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4890)
{return or__3824__auto____4890;
} else
{var or__3824__auto____4891 = (cljs.core._invoke["_"]);
if(or__3824__auto____4891)
{return or__3824__auto____4891;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____4892 = this$;
if(and__3822__auto____4892)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____4892;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____4893 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4893)
{return or__3824__auto____4893;
} else
{var or__3824__auto____4894 = (cljs.core._invoke["_"]);
if(or__3824__auto____4894)
{return or__3824__auto____4894;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____4895 = this$;
if(and__3822__auto____4895)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____4895;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____4896 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4896)
{return or__3824__auto____4896;
} else
{var or__3824__auto____4897 = (cljs.core._invoke["_"]);
if(or__3824__auto____4897)
{return or__3824__auto____4897;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____4898 = this$;
if(and__3822__auto____4898)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____4898;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____4899 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4899)
{return or__3824__auto____4899;
} else
{var or__3824__auto____4900 = (cljs.core._invoke["_"]);
if(or__3824__auto____4900)
{return or__3824__auto____4900;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____4901 = this$;
if(and__3822__auto____4901)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____4901;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____4902 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4902)
{return or__3824__auto____4902;
} else
{var or__3824__auto____4903 = (cljs.core._invoke["_"]);
if(or__3824__auto____4903)
{return or__3824__auto____4903;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____4904 = this$;
if(and__3822__auto____4904)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____4904;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____4905 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4905)
{return or__3824__auto____4905;
} else
{var or__3824__auto____4906 = (cljs.core._invoke["_"]);
if(or__3824__auto____4906)
{return or__3824__auto____4906;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____4907 = this$;
if(and__3822__auto____4907)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____4907;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____4908 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4908)
{return or__3824__auto____4908;
} else
{var or__3824__auto____4909 = (cljs.core._invoke["_"]);
if(or__3824__auto____4909)
{return or__3824__auto____4909;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____4910 = this$;
if(and__3822__auto____4910)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____4910;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____4911 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4911)
{return or__3824__auto____4911;
} else
{var or__3824__auto____4912 = (cljs.core._invoke["_"]);
if(or__3824__auto____4912)
{return or__3824__auto____4912;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____4913 = this$;
if(and__3822__auto____4913)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____4913;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____4914 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3824__auto____4914)
{return or__3824__auto____4914;
} else
{var or__3824__auto____4915 = (cljs.core._invoke["_"]);
if(or__3824__auto____4915)
{return or__3824__auto____4915;
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
if((function (){var and__3822__auto____4916 = coll;
if(and__3822__auto____4916)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____4916;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____4917 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4917)
{return or__3824__auto____4917;
} else
{var or__3824__auto____4918 = (cljs.core._count["_"]);
if(or__3824__auto____4918)
{return or__3824__auto____4918;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____4919 = coll;
if(and__3822__auto____4919)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____4919;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____4920 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4920)
{return or__3824__auto____4920;
} else
{var or__3824__auto____4921 = (cljs.core._empty["_"]);
if(or__3824__auto____4921)
{return or__3824__auto____4921;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____4922 = coll;
if(and__3822__auto____4922)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____4922;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____4923 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4923)
{return or__3824__auto____4923;
} else
{var or__3824__auto____4924 = (cljs.core._conj["_"]);
if(or__3824__auto____4924)
{return or__3824__auto____4924;
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
if((function (){var and__3822__auto____4925 = coll;
if(and__3822__auto____4925)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____4925;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____4926 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4926)
{return or__3824__auto____4926;
} else
{var or__3824__auto____4927 = (cljs.core._nth["_"]);
if(or__3824__auto____4927)
{return or__3824__auto____4927;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____4928 = coll;
if(and__3822__auto____4928)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____4928;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____4929 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4929)
{return or__3824__auto____4929;
} else
{var or__3824__auto____4930 = (cljs.core._nth["_"]);
if(or__3824__auto____4930)
{return or__3824__auto____4930;
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
if((function (){var and__3822__auto____4931 = coll;
if(and__3822__auto____4931)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____4931;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____4932 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4932)
{return or__3824__auto____4932;
} else
{var or__3824__auto____4933 = (cljs.core._first["_"]);
if(or__3824__auto____4933)
{return or__3824__auto____4933;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____4934 = coll;
if(and__3822__auto____4934)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____4934;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____4935 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4935)
{return or__3824__auto____4935;
} else
{var or__3824__auto____4936 = (cljs.core._rest["_"]);
if(or__3824__auto____4936)
{return or__3824__auto____4936;
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
if((function (){var and__3822__auto____4937 = o;
if(and__3822__auto____4937)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____4937;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____4938 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____4938)
{return or__3824__auto____4938;
} else
{var or__3824__auto____4939 = (cljs.core._lookup["_"]);
if(or__3824__auto____4939)
{return or__3824__auto____4939;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____4940 = o;
if(and__3822__auto____4940)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____4940;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____4941 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3824__auto____4941)
{return or__3824__auto____4941;
} else
{var or__3824__auto____4942 = (cljs.core._lookup["_"]);
if(or__3824__auto____4942)
{return or__3824__auto____4942;
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
if((function (){var and__3822__auto____4943 = coll;
if(and__3822__auto____4943)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____4943;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____4944 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4944)
{return or__3824__auto____4944;
} else
{var or__3824__auto____4945 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____4945)
{return or__3824__auto____4945;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____4946 = coll;
if(and__3822__auto____4946)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____4946;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____4947 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4947)
{return or__3824__auto____4947;
} else
{var or__3824__auto____4948 = (cljs.core._assoc["_"]);
if(or__3824__auto____4948)
{return or__3824__auto____4948;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____4949 = coll;
if(and__3822__auto____4949)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____4949;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____4950 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4950)
{return or__3824__auto____4950;
} else
{var or__3824__auto____4951 = (cljs.core._dissoc["_"]);
if(or__3824__auto____4951)
{return or__3824__auto____4951;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____4952 = coll;
if(and__3822__auto____4952)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____4952;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____4953 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4953)
{return or__3824__auto____4953;
} else
{var or__3824__auto____4954 = (cljs.core._key["_"]);
if(or__3824__auto____4954)
{return or__3824__auto____4954;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____4955 = coll;
if(and__3822__auto____4955)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____4955;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____4956 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4956)
{return or__3824__auto____4956;
} else
{var or__3824__auto____4957 = (cljs.core._val["_"]);
if(or__3824__auto____4957)
{return or__3824__auto____4957;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____4958 = coll;
if(and__3822__auto____4958)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____4958;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____4959 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4959)
{return or__3824__auto____4959;
} else
{var or__3824__auto____4960 = (cljs.core._disjoin["_"]);
if(or__3824__auto____4960)
{return or__3824__auto____4960;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____4961 = coll;
if(and__3822__auto____4961)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____4961;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____4962 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4962)
{return or__3824__auto____4962;
} else
{var or__3824__auto____4963 = (cljs.core._peek["_"]);
if(or__3824__auto____4963)
{return or__3824__auto____4963;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____4964 = coll;
if(and__3822__auto____4964)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____4964;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____4965 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4965)
{return or__3824__auto____4965;
} else
{var or__3824__auto____4966 = (cljs.core._pop["_"]);
if(or__3824__auto____4966)
{return or__3824__auto____4966;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____4967 = coll;
if(and__3822__auto____4967)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____4967;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____4968 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4968)
{return or__3824__auto____4968;
} else
{var or__3824__auto____4969 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____4969)
{return or__3824__auto____4969;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____4970 = o;
if(and__3822__auto____4970)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____4970;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____4971 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3824__auto____4971)
{return or__3824__auto____4971;
} else
{var or__3824__auto____4972 = (cljs.core._deref["_"]);
if(or__3824__auto____4972)
{return or__3824__auto____4972;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____4973 = o;
if(and__3822__auto____4973)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____4973;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____4974 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3824__auto____4974)
{return or__3824__auto____4974;
} else
{var or__3824__auto____4975 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____4975)
{return or__3824__auto____4975;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____4976 = o;
if(and__3822__auto____4976)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____4976;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____4977 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____4977)
{return or__3824__auto____4977;
} else
{var or__3824__auto____4978 = (cljs.core._meta["_"]);
if(or__3824__auto____4978)
{return or__3824__auto____4978;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____4979 = o;
if(and__3822__auto____4979)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____4979;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____4980 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3824__auto____4980)
{return or__3824__auto____4980;
} else
{var or__3824__auto____4981 = (cljs.core._with_meta["_"]);
if(or__3824__auto____4981)
{return or__3824__auto____4981;
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
if((function (){var and__3822__auto____4982 = coll;
if(and__3822__auto____4982)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____4982;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____4983 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4983)
{return or__3824__auto____4983;
} else
{var or__3824__auto____4984 = (cljs.core._reduce["_"]);
if(or__3824__auto____4984)
{return or__3824__auto____4984;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____4985 = coll;
if(and__3822__auto____4985)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____4985;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____4986 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4986)
{return or__3824__auto____4986;
} else
{var or__3824__auto____4987 = (cljs.core._reduce["_"]);
if(or__3824__auto____4987)
{return or__3824__auto____4987;
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
if((function (){var and__3822__auto____4988 = coll;
if(and__3822__auto____4988)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____4988;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____4989 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3824__auto____4989)
{return or__3824__auto____4989;
} else
{var or__3824__auto____4990 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____4990)
{return or__3824__auto____4990;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____4991 = o;
if(and__3822__auto____4991)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____4991;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____4992 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3824__auto____4992)
{return or__3824__auto____4992;
} else
{var or__3824__auto____4993 = (cljs.core._equiv["_"]);
if(or__3824__auto____4993)
{return or__3824__auto____4993;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____4994 = o;
if(and__3822__auto____4994)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____4994;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____4995 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3824__auto____4995)
{return or__3824__auto____4995;
} else
{var or__3824__auto____4996 = (cljs.core._hash["_"]);
if(or__3824__auto____4996)
{return or__3824__auto____4996;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____4997 = o;
if(and__3822__auto____4997)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____4997;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____4998 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____4998)
{return or__3824__auto____4998;
} else
{var or__3824__auto____4999 = (cljs.core._seq["_"]);
if(or__3824__auto____4999)
{return or__3824__auto____4999;
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
if((function (){var and__3822__auto____5000 = coll;
if(and__3822__auto____5000)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____5000;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____5001 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5001)
{return or__3824__auto____5001;
} else
{var or__3824__auto____5002 = (cljs.core._rseq["_"]);
if(or__3824__auto____5002)
{return or__3824__auto____5002;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____5003 = coll;
if(and__3822__auto____5003)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____5003;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____5004 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5004)
{return or__3824__auto____5004;
} else
{var or__3824__auto____5005 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____5005)
{return or__3824__auto____5005;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____5006 = coll;
if(and__3822__auto____5006)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____5006;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____5007 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5007)
{return or__3824__auto____5007;
} else
{var or__3824__auto____5008 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____5008)
{return or__3824__auto____5008;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____5009 = coll;
if(and__3822__auto____5009)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____5009;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____5010 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5010)
{return or__3824__auto____5010;
} else
{var or__3824__auto____5011 = (cljs.core._entry_key["_"]);
if(or__3824__auto____5011)
{return or__3824__auto____5011;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____5012 = coll;
if(and__3822__auto____5012)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____5012;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____5013 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5013)
{return or__3824__auto____5013;
} else
{var or__3824__auto____5014 = (cljs.core._comparator["_"]);
if(or__3824__auto____5014)
{return or__3824__auto____5014;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____5015 = o;
if(and__3822__auto____5015)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____5015;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____5016 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3824__auto____5016)
{return or__3824__auto____5016;
} else
{var or__3824__auto____5017 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____5017)
{return or__3824__auto____5017;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____5018 = d;
if(and__3822__auto____5018)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____5018;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____5019 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3824__auto____5019)
{return or__3824__auto____5019;
} else
{var or__3824__auto____5020 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____5020)
{return or__3824__auto____5020;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____5021 = this$;
if(and__3822__auto____5021)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____5021;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____5022 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3824__auto____5022)
{return or__3824__auto____5022;
} else
{var or__3824__auto____5023 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____5023)
{return or__3824__auto____5023;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____5024 = this$;
if(and__3822__auto____5024)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____5024;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____5025 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____5025)
{return or__3824__auto____5025;
} else
{var or__3824__auto____5026 = (cljs.core._add_watch["_"]);
if(or__3824__auto____5026)
{return or__3824__auto____5026;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____5027 = this$;
if(and__3822__auto____5027)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____5027;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____5028 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3824__auto____5028)
{return or__3824__auto____5028;
} else
{var or__3824__auto____5029 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____5029)
{return or__3824__auto____5029;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____5030 = coll;
if(and__3822__auto____5030)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____5030;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____5031 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3824__auto____5031)
{return or__3824__auto____5031;
} else
{var or__3824__auto____5032 = (cljs.core._as_transient["_"]);
if(or__3824__auto____5032)
{return or__3824__auto____5032;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____5033 = tcoll;
if(and__3822__auto____5033)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____5033;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____5034 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5034)
{return or__3824__auto____5034;
} else
{var or__3824__auto____5035 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____5035)
{return or__3824__auto____5035;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____5036 = tcoll;
if(and__3822__auto____5036)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____5036;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____5037 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5037)
{return or__3824__auto____5037;
} else
{var or__3824__auto____5038 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____5038)
{return or__3824__auto____5038;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____5039 = tcoll;
if(and__3822__auto____5039)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____5039;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____5040 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5040)
{return or__3824__auto____5040;
} else
{var or__3824__auto____5041 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____5041)
{return or__3824__auto____5041;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____5042 = tcoll;
if(and__3822__auto____5042)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____5042;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____5043 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5043)
{return or__3824__auto____5043;
} else
{var or__3824__auto____5044 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____5044)
{return or__3824__auto____5044;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____5045 = tcoll;
if(and__3822__auto____5045)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____5045;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____5046 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5046)
{return or__3824__auto____5046;
} else
{var or__3824__auto____5047 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____5047)
{return or__3824__auto____5047;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____5048 = tcoll;
if(and__3822__auto____5048)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____5048;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____5049 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5049)
{return or__3824__auto____5049;
} else
{var or__3824__auto____5050 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____5050)
{return or__3824__auto____5050;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____5051 = tcoll;
if(and__3822__auto____5051)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____5051;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____5052 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3824__auto____5052)
{return or__3824__auto____5052;
} else
{var or__3824__auto____5053 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____5053)
{return or__3824__auto____5053;
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
var or__3824__auto____5054 = (x === y);
if(or__3824__auto____5054)
{return or__3824__auto____5054;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__5055__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5056 = y;
var G__5057 = cljs.core.first.call(null,more);
var G__5058 = cljs.core.next.call(null,more);
x = G__5056;
y = G__5057;
more = G__5058;
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
var G__5055 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5055__delegate.call(this, x, y, more);
};
G__5055.cljs$lang$maxFixedArity = 2;
G__5055.cljs$lang$applyTo = (function (arglist__5059){
var x = cljs.core.first(arglist__5059);
var y = cljs.core.first(cljs.core.next(arglist__5059));
var more = cljs.core.rest(cljs.core.next(arglist__5059));
return G__5055__delegate(x, y, more);
});
G__5055.cljs$lang$arity$variadic = G__5055__delegate;
return G__5055;
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
if((function (){var or__3824__auto____5060 = (x == null);
if(or__3824__auto____5060)
{return or__3824__auto____5060;
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
var G__5061 = null;
var G__5061__2 = (function (o,k){
return null;
});
var G__5061__3 = (function (o,k,not_found){
return not_found;
});
G__5061 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__5061__2.call(this,o,k);
case 3:
return G__5061__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5061;
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
var G__5062 = null;
var G__5062__2 = (function (_,f){
return f.call(null);
});
var G__5062__3 = (function (_,f,start){
return start;
});
G__5062 = function(_,f,start){
switch(arguments.length){
case 2:
return G__5062__2.call(this,_,f);
case 3:
return G__5062__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5062;
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
var G__5063 = null;
var G__5063__2 = (function (_,n){
return null;
});
var G__5063__3 = (function (_,n,not_found){
return not_found;
});
G__5063 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__5063__2.call(this,_,n);
case 3:
return G__5063__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5063;
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
{var val__5064 = cljs.core._nth.call(null,cicoll,0);
var n__5065 = 1;
while(true){
if((n__5065 < cljs.core._count.call(null,cicoll)))
{var nval__5066 = f.call(null,val__5064,cljs.core._nth.call(null,cicoll,n__5065));
if(cljs.core.reduced_QMARK_.call(null,nval__5066))
{return cljs.core.deref.call(null,nval__5066);
} else
{{
var G__5073 = nval__5066;
var G__5074 = (n__5065 + 1);
val__5064 = G__5073;
n__5065 = G__5074;
continue;
}
}
} else
{return val__5064;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__5067 = val;
var n__5068 = 0;
while(true){
if((n__5068 < cljs.core._count.call(null,cicoll)))
{var nval__5069 = f.call(null,val__5067,cljs.core._nth.call(null,cicoll,n__5068));
if(cljs.core.reduced_QMARK_.call(null,nval__5069))
{return cljs.core.deref.call(null,nval__5069);
} else
{{
var G__5075 = nval__5069;
var G__5076 = (n__5068 + 1);
val__5067 = G__5075;
n__5068 = G__5076;
continue;
}
}
} else
{return val__5067;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__5070 = val;
var n__5071 = idx;
while(true){
if((n__5071 < cljs.core._count.call(null,cicoll)))
{var nval__5072 = f.call(null,val__5070,cljs.core._nth.call(null,cicoll,n__5071));
if(cljs.core.reduced_QMARK_.call(null,nval__5072))
{return cljs.core.deref.call(null,nval__5072);
} else
{{
var G__5077 = nval__5072;
var G__5078 = (n__5071 + 1);
val__5070 = G__5077;
n__5071 = G__5078;
continue;
}
}
} else
{return val__5070;
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
var this__5079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5080 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__5081 = this;
var this$__5082 = this;
return cljs.core.pr_str.call(null,this$__5082);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__5083 = this;
if(cljs.core.counted_QMARK_.call(null,this__5083.a))
{return cljs.core.ci_reduce.call(null,this__5083.a,f,(this__5083.a[this__5083.i]),(this__5083.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__5083.a[this__5083.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__5084 = this;
if(cljs.core.counted_QMARK_.call(null,this__5084.a))
{return cljs.core.ci_reduce.call(null,this__5084.a,f,start,this__5084.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__5085 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__5086 = this;
return (this__5086.a.length - this__5086.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__5087 = this;
return (this__5087.a[this__5087.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__5088 = this;
if(((this__5088.i + 1) < this__5088.a.length))
{return (new cljs.core.IndexedSeq(this__5088.a,(this__5088.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5089 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5090 = this;
var i__5091 = (n + this__5090.i);
if((i__5091 < this__5090.a.length))
{return (this__5090.a[i__5091]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5092 = this;
var i__5093 = (n + this__5092.i);
if((i__5093 < this__5092.a.length))
{return (this__5092.a[i__5093]);
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
var G__5094 = null;
var G__5094__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5094__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5094 = function(array,f,start){
switch(arguments.length){
case 2:
return G__5094__2.call(this,array,f);
case 3:
return G__5094__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5094;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5095 = null;
var G__5095__2 = (function (array,k){
return (array[k]);
});
var G__5095__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5095 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__5095__2.call(this,array,k);
case 3:
return G__5095__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5095;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5096 = null;
var G__5096__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__5096__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__5096 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__5096__2.call(this,array,n);
case 3:
return G__5096__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5096;
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
{if((function (){var G__5097__5098 = coll;
if((G__5097__5098 != null))
{if((function (){var or__3824__auto____5099 = (G__5097__5098.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____5099)
{return or__3824__auto____5099;
} else
{return G__5097__5098.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__5097__5098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__5097__5098);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__5097__5098);
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
{if((function (){var G__5100__5101 = coll;
if((G__5100__5101 != null))
{if((function (){var or__3824__auto____5102 = (G__5100__5101.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____5102)
{return or__3824__auto____5102;
} else
{return G__5100__5101.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__5100__5101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5100__5101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5100__5101);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__5103 = cljs.core.seq.call(null,coll);
if((s__5103 != null))
{return cljs.core._first.call(null,s__5103);
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
{if((function (){var G__5104__5105 = coll;
if((G__5104__5105 != null))
{if((function (){var or__3824__auto____5106 = (G__5104__5105.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____5106)
{return or__3824__auto____5106;
} else
{return G__5104__5105.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__5104__5105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5104__5105);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5104__5105);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__5107 = cljs.core.seq.call(null,coll);
if((s__5107 != null))
{return cljs.core._rest.call(null,s__5107);
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
{if((function (){var G__5108__5109 = coll;
if((G__5108__5109 != null))
{if((function (){var or__3824__auto____5110 = (G__5108__5109.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____5110)
{return or__3824__auto____5110;
} else
{return G__5108__5109.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__5108__5109.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5108__5109);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5108__5109);
}
})())
{var coll__5111 = cljs.core._rest.call(null,coll);
if((coll__5111 != null))
{if((function (){var G__5112__5113 = coll__5111;
if((G__5112__5113 != null))
{if((function (){var or__3824__auto____5114 = (G__5112__5113.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____5114)
{return or__3824__auto____5114;
} else
{return G__5112__5113.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__5112__5113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__5112__5113);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__5112__5113);
}
})())
{return coll__5111;
} else
{return cljs.core._seq.call(null,coll__5111);
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
var G__5115 = cljs.core.next.call(null,s);
s = G__5115;
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
var G__5116__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5117 = conj.call(null,coll,x);
var G__5118 = cljs.core.first.call(null,xs);
var G__5119 = cljs.core.next.call(null,xs);
coll = G__5117;
x = G__5118;
xs = G__5119;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5116 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5116__delegate.call(this, coll, x, xs);
};
G__5116.cljs$lang$maxFixedArity = 2;
G__5116.cljs$lang$applyTo = (function (arglist__5120){
var coll = cljs.core.first(arglist__5120);
var x = cljs.core.first(cljs.core.next(arglist__5120));
var xs = cljs.core.rest(cljs.core.next(arglist__5120));
return G__5116__delegate(coll, x, xs);
});
G__5116.cljs$lang$arity$variadic = G__5116__delegate;
return G__5116;
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
var s__5121 = cljs.core.seq.call(null,coll);
var acc__5122 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__5121))
{return (acc__5122 + cljs.core._count.call(null,s__5121));
} else
{{
var G__5123 = cljs.core.next.call(null,s__5121);
var G__5124 = (acc__5122 + 1);
s__5121 = G__5123;
acc__5122 = G__5124;
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
{if((function (){var G__5125__5126 = coll;
if((G__5125__5126 != null))
{if((function (){var or__3824__auto____5127 = (G__5125__5126.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____5127)
{return or__3824__auto____5127;
} else
{return G__5125__5126.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__5125__5126.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5125__5126);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5125__5126);
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
{if((function (){var G__5128__5129 = coll;
if((G__5128__5129 != null))
{if((function (){var or__3824__auto____5130 = (G__5128__5129.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____5130)
{return or__3824__auto____5130;
} else
{return G__5128__5129.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__5128__5129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5128__5129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5128__5129);
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
var G__5132__delegate = function (coll,k,v,kvs){
while(true){
var ret__5131 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__5133 = ret__5131;
var G__5134 = cljs.core.first.call(null,kvs);
var G__5135 = cljs.core.second.call(null,kvs);
var G__5136 = cljs.core.nnext.call(null,kvs);
coll = G__5133;
k = G__5134;
v = G__5135;
kvs = G__5136;
continue;
}
} else
{return ret__5131;
}
break;
}
};
var G__5132 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5132__delegate.call(this, coll, k, v, kvs);
};
G__5132.cljs$lang$maxFixedArity = 3;
G__5132.cljs$lang$applyTo = (function (arglist__5137){
var coll = cljs.core.first(arglist__5137);
var k = cljs.core.first(cljs.core.next(arglist__5137));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5137)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5137)));
return G__5132__delegate(coll, k, v, kvs);
});
G__5132.cljs$lang$arity$variadic = G__5132__delegate;
return G__5132;
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
var G__5139__delegate = function (coll,k,ks){
while(true){
var ret__5138 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__5140 = ret__5138;
var G__5141 = cljs.core.first.call(null,ks);
var G__5142 = cljs.core.next.call(null,ks);
coll = G__5140;
k = G__5141;
ks = G__5142;
continue;
}
} else
{return ret__5138;
}
break;
}
};
var G__5139 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5139__delegate.call(this, coll, k, ks);
};
G__5139.cljs$lang$maxFixedArity = 2;
G__5139.cljs$lang$applyTo = (function (arglist__5143){
var coll = cljs.core.first(arglist__5143);
var k = cljs.core.first(cljs.core.next(arglist__5143));
var ks = cljs.core.rest(cljs.core.next(arglist__5143));
return G__5139__delegate(coll, k, ks);
});
G__5139.cljs$lang$arity$variadic = G__5139__delegate;
return G__5139;
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
if((function (){var G__5144__5145 = o;
if((G__5144__5145 != null))
{if((function (){var or__3824__auto____5146 = (G__5144__5145.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____5146)
{return or__3824__auto____5146;
} else
{return G__5144__5145.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__5144__5145.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__5144__5145);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__5144__5145);
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
var G__5148__delegate = function (coll,k,ks){
while(true){
var ret__5147 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__5149 = ret__5147;
var G__5150 = cljs.core.first.call(null,ks);
var G__5151 = cljs.core.next.call(null,ks);
coll = G__5149;
k = G__5150;
ks = G__5151;
continue;
}
} else
{return ret__5147;
}
break;
}
};
var G__5148 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5148__delegate.call(this, coll, k, ks);
};
G__5148.cljs$lang$maxFixedArity = 2;
G__5148.cljs$lang$applyTo = (function (arglist__5152){
var coll = cljs.core.first(arglist__5152);
var k = cljs.core.first(cljs.core.next(arglist__5152));
var ks = cljs.core.rest(cljs.core.next(arglist__5152));
return G__5148__delegate(coll, k, ks);
});
G__5148.cljs$lang$arity$variadic = G__5148__delegate;
return G__5148;
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
{var G__5153__5154 = x;
if((G__5153__5154 != null))
{if((function (){var or__3824__auto____5155 = (G__5153__5154.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____5155)
{return or__3824__auto____5155;
} else
{return G__5153__5154.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__5153__5154.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__5153__5154);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__5153__5154);
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
{var G__5156__5157 = x;
if((G__5156__5157 != null))
{if((function (){var or__3824__auto____5158 = (G__5156__5157.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____5158)
{return or__3824__auto____5158;
} else
{return G__5156__5157.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__5156__5157.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__5156__5157);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__5156__5157);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__5159__5160 = x;
if((G__5159__5160 != null))
{if((function (){var or__3824__auto____5161 = (G__5159__5160.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3824__auto____5161)
{return or__3824__auto____5161;
} else
{return G__5159__5160.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__5159__5160.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__5159__5160);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__5159__5160);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__5162__5163 = x;
if((G__5162__5163 != null))
{if((function (){var or__3824__auto____5164 = (G__5162__5163.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____5164)
{return or__3824__auto____5164;
} else
{return G__5162__5163.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__5162__5163.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__5162__5163);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__5162__5163);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__5165__5166 = x;
if((G__5165__5166 != null))
{if((function (){var or__3824__auto____5167 = (G__5165__5166.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____5167)
{return or__3824__auto____5167;
} else
{return G__5165__5166.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__5165__5166.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__5165__5166);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__5165__5166);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__5168__5169 = x;
if((G__5168__5169 != null))
{if((function (){var or__3824__auto____5170 = (G__5168__5169.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____5170)
{return or__3824__auto____5170;
} else
{return G__5168__5169.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__5168__5169.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5168__5169);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__5168__5169);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__5171__5172 = x;
if((G__5171__5172 != null))
{if((function (){var or__3824__auto____5173 = (G__5171__5172.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____5173)
{return or__3824__auto____5173;
} else
{return G__5171__5172.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__5171__5172.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5171__5172);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5171__5172);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__5174__5175 = x;
if((G__5174__5175 != null))
{if((function (){var or__3824__auto____5176 = (G__5174__5175.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____5176)
{return or__3824__auto____5176;
} else
{return G__5174__5175.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__5174__5175.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__5174__5175);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__5174__5175);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__5177__5178 = x;
if((G__5177__5178 != null))
{if((function (){var or__3824__auto____5179 = (G__5177__5178.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3824__auto____5179)
{return or__3824__auto____5179;
} else
{return G__5177__5178.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__5177__5178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__5177__5178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__5177__5178);
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
var G__5180__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__5180 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5180__delegate.call(this, keyvals);
};
G__5180.cljs$lang$maxFixedArity = 0;
G__5180.cljs$lang$applyTo = (function (arglist__5181){
var keyvals = cljs.core.seq(arglist__5181);;
return G__5180__delegate(keyvals);
});
G__5180.cljs$lang$arity$variadic = G__5180__delegate;
return G__5180;
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
var keys__5182 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5182.push(key);
}));
return keys__5182;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__5183 = i;
var j__5184 = j;
var len__5185 = len;
while(true){
if((len__5185 === 0))
{return to;
} else
{(to[j__5184] = (from[i__5183]));
{
var G__5186 = (i__5183 + 1);
var G__5187 = (j__5184 + 1);
var G__5188 = (len__5185 - 1);
i__5183 = G__5186;
j__5184 = G__5187;
len__5185 = G__5188;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__5189 = (i + (len - 1));
var j__5190 = (j + (len - 1));
var len__5191 = len;
while(true){
if((len__5191 === 0))
{return to;
} else
{(to[j__5190] = (from[i__5189]));
{
var G__5192 = (i__5189 - 1);
var G__5193 = (j__5190 - 1);
var G__5194 = (len__5191 - 1);
i__5189 = G__5192;
j__5190 = G__5193;
len__5191 = G__5194;
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
{var G__5195__5196 = s;
if((G__5195__5196 != null))
{if((function (){var or__3824__auto____5197 = (G__5195__5196.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____5197)
{return or__3824__auto____5197;
} else
{return G__5195__5196.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__5195__5196.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5195__5196);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5195__5196);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__5198__5199 = s;
if((G__5198__5199 != null))
{if((function (){var or__3824__auto____5200 = (G__5198__5199.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3824__auto____5200)
{return or__3824__auto____5200;
} else
{return G__5198__5199.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__5198__5199.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5198__5199);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5198__5199);
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
var and__3822__auto____5201 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____5201))
{return cljs.core.not.call(null,(function (){var or__3824__auto____5202 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____5202)
{return or__3824__auto____5202;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____5201;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____5203 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____5203))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____5203;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____5204 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3822__auto____5204))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____5204;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____5205 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____5205)
{return or__3824__auto____5205;
} else
{var G__5206__5207 = f;
if((G__5206__5207 != null))
{if((function (){var or__3824__auto____5208 = (G__5206__5207.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____5208)
{return or__3824__auto____5208;
} else
{return G__5206__5207.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__5206__5207.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__5206__5207);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__5206__5207);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____5209 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____5209)
{return (n == n.toFixed());
} else
{return and__3822__auto____5209;
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
if(cljs.core.truth_((function (){var and__3822__auto____5210 = coll;
if(cljs.core.truth_(and__3822__auto____5210))
{var and__3822__auto____5211 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____5211)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____5211;
}
} else
{return and__3822__auto____5210;
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
var G__5216__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__5212 = cljs.core.set([y,x]);
var xs__5213 = more;
while(true){
var x__5214 = cljs.core.first.call(null,xs__5213);
var etc__5215 = cljs.core.next.call(null,xs__5213);
if(cljs.core.truth_(xs__5213))
{if(cljs.core.contains_QMARK_.call(null,s__5212,x__5214))
{return false;
} else
{{
var G__5217 = cljs.core.conj.call(null,s__5212,x__5214);
var G__5218 = etc__5215;
s__5212 = G__5217;
xs__5213 = G__5218;
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
var G__5216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5216__delegate.call(this, x, y, more);
};
G__5216.cljs$lang$maxFixedArity = 2;
G__5216.cljs$lang$applyTo = (function (arglist__5219){
var x = cljs.core.first(arglist__5219);
var y = cljs.core.first(cljs.core.next(arglist__5219));
var more = cljs.core.rest(cljs.core.next(arglist__5219));
return G__5216__delegate(x, y, more);
});
G__5216.cljs$lang$arity$variadic = G__5216__delegate;
return G__5216;
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
var r__5220 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__5220))
{return r__5220;
} else
{if(cljs.core.truth_(r__5220))
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
{var a__5221 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__5221,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5221);
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
var temp__3971__auto____5222 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____5222))
{var s__5223 = temp__3971__auto____5222;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5223),cljs.core.next.call(null,s__5223));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__5224 = val;
var coll__5225 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__5225))
{var nval__5226 = f.call(null,val__5224,cljs.core.first.call(null,coll__5225));
if(cljs.core.reduced_QMARK_.call(null,nval__5226))
{return cljs.core.deref.call(null,nval__5226);
} else
{{
var G__5227 = nval__5226;
var G__5228 = cljs.core.next.call(null,coll__5225);
val__5224 = G__5227;
coll__5225 = G__5228;
continue;
}
}
} else
{return val__5224;
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
if((function (){var G__5229__5230 = coll;
if((G__5229__5230 != null))
{if((function (){var or__3824__auto____5231 = (G__5229__5230.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____5231)
{return or__3824__auto____5231;
} else
{return G__5229__5230.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__5229__5230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5229__5230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5229__5230);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__5232__5233 = coll;
if((G__5232__5233 != null))
{if((function (){var or__3824__auto____5234 = (G__5232__5233.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____5234)
{return or__3824__auto____5234;
} else
{return G__5232__5233.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__5232__5233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5232__5233);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__5232__5233);
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
var this__5235 = this;
return this__5235.val;
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
var G__5236__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__5236 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5236__delegate.call(this, x, y, more);
};
G__5236.cljs$lang$maxFixedArity = 2;
G__5236.cljs$lang$applyTo = (function (arglist__5237){
var x = cljs.core.first(arglist__5237);
var y = cljs.core.first(cljs.core.next(arglist__5237));
var more = cljs.core.rest(cljs.core.next(arglist__5237));
return G__5236__delegate(x, y, more);
});
G__5236.cljs$lang$arity$variadic = G__5236__delegate;
return G__5236;
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
var G__5238__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__5238 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5238__delegate.call(this, x, y, more);
};
G__5238.cljs$lang$maxFixedArity = 2;
G__5238.cljs$lang$applyTo = (function (arglist__5239){
var x = cljs.core.first(arglist__5239);
var y = cljs.core.first(cljs.core.next(arglist__5239));
var more = cljs.core.rest(cljs.core.next(arglist__5239));
return G__5238__delegate(x, y, more);
});
G__5238.cljs$lang$arity$variadic = G__5238__delegate;
return G__5238;
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
var G__5240__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__5240 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5240__delegate.call(this, x, y, more);
};
G__5240.cljs$lang$maxFixedArity = 2;
G__5240.cljs$lang$applyTo = (function (arglist__5241){
var x = cljs.core.first(arglist__5241);
var y = cljs.core.first(cljs.core.next(arglist__5241));
var more = cljs.core.rest(cljs.core.next(arglist__5241));
return G__5240__delegate(x, y, more);
});
G__5240.cljs$lang$arity$variadic = G__5240__delegate;
return G__5240;
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
var G__5242__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5242__delegate.call(this, x, y, more);
};
G__5242.cljs$lang$maxFixedArity = 2;
G__5242.cljs$lang$applyTo = (function (arglist__5243){
var x = cljs.core.first(arglist__5243);
var y = cljs.core.first(cljs.core.next(arglist__5243));
var more = cljs.core.rest(cljs.core.next(arglist__5243));
return G__5242__delegate(x, y, more);
});
G__5242.cljs$lang$arity$variadic = G__5242__delegate;
return G__5242;
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
var G__5244__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5245 = y;
var G__5246 = cljs.core.first.call(null,more);
var G__5247 = cljs.core.next.call(null,more);
x = G__5245;
y = G__5246;
more = G__5247;
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
var G__5244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5244__delegate.call(this, x, y, more);
};
G__5244.cljs$lang$maxFixedArity = 2;
G__5244.cljs$lang$applyTo = (function (arglist__5248){
var x = cljs.core.first(arglist__5248);
var y = cljs.core.first(cljs.core.next(arglist__5248));
var more = cljs.core.rest(cljs.core.next(arglist__5248));
return G__5244__delegate(x, y, more);
});
G__5244.cljs$lang$arity$variadic = G__5244__delegate;
return G__5244;
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
var G__5249__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5250 = y;
var G__5251 = cljs.core.first.call(null,more);
var G__5252 = cljs.core.next.call(null,more);
x = G__5250;
y = G__5251;
more = G__5252;
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
var G__5249 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5249__delegate.call(this, x, y, more);
};
G__5249.cljs$lang$maxFixedArity = 2;
G__5249.cljs$lang$applyTo = (function (arglist__5253){
var x = cljs.core.first(arglist__5253);
var y = cljs.core.first(cljs.core.next(arglist__5253));
var more = cljs.core.rest(cljs.core.next(arglist__5253));
return G__5249__delegate(x, y, more);
});
G__5249.cljs$lang$arity$variadic = G__5249__delegate;
return G__5249;
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
var G__5254__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5255 = y;
var G__5256 = cljs.core.first.call(null,more);
var G__5257 = cljs.core.next.call(null,more);
x = G__5255;
y = G__5256;
more = G__5257;
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
var G__5254 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5254__delegate.call(this, x, y, more);
};
G__5254.cljs$lang$maxFixedArity = 2;
G__5254.cljs$lang$applyTo = (function (arglist__5258){
var x = cljs.core.first(arglist__5258);
var y = cljs.core.first(cljs.core.next(arglist__5258));
var more = cljs.core.rest(cljs.core.next(arglist__5258));
return G__5254__delegate(x, y, more);
});
G__5254.cljs$lang$arity$variadic = G__5254__delegate;
return G__5254;
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
var G__5259__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5260 = y;
var G__5261 = cljs.core.first.call(null,more);
var G__5262 = cljs.core.next.call(null,more);
x = G__5260;
y = G__5261;
more = G__5262;
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
var G__5259 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5259__delegate.call(this, x, y, more);
};
G__5259.cljs$lang$maxFixedArity = 2;
G__5259.cljs$lang$applyTo = (function (arglist__5263){
var x = cljs.core.first(arglist__5263);
var y = cljs.core.first(cljs.core.next(arglist__5263));
var more = cljs.core.rest(cljs.core.next(arglist__5263));
return G__5259__delegate(x, y, more);
});
G__5259.cljs$lang$arity$variadic = G__5259__delegate;
return G__5259;
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
var G__5264__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__5264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5264__delegate.call(this, x, y, more);
};
G__5264.cljs$lang$maxFixedArity = 2;
G__5264.cljs$lang$applyTo = (function (arglist__5265){
var x = cljs.core.first(arglist__5265);
var y = cljs.core.first(cljs.core.next(arglist__5265));
var more = cljs.core.rest(cljs.core.next(arglist__5265));
return G__5264__delegate(x, y, more);
});
G__5264.cljs$lang$arity$variadic = G__5264__delegate;
return G__5264;
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
var G__5266__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__5266 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5266__delegate.call(this, x, y, more);
};
G__5266.cljs$lang$maxFixedArity = 2;
G__5266.cljs$lang$applyTo = (function (arglist__5267){
var x = cljs.core.first(arglist__5267);
var y = cljs.core.first(cljs.core.next(arglist__5267));
var more = cljs.core.rest(cljs.core.next(arglist__5267));
return G__5266__delegate(x, y, more);
});
G__5266.cljs$lang$arity$variadic = G__5266__delegate;
return G__5266;
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
var rem__5268 = (n % d);
return cljs.core.fix.call(null,((n - rem__5268) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5269 = cljs.core.quot.call(null,n,d);
return (n - (d * q__5269));
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
var c__5270 = 0;
var n__5271 = n;
while(true){
if((n__5271 === 0))
{return c__5270;
} else
{{
var G__5272 = (c__5270 + 1);
var G__5273 = (n__5271 & (n__5271 - 1));
c__5270 = G__5272;
n__5271 = G__5273;
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
var G__5274__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5275 = y;
var G__5276 = cljs.core.first.call(null,more);
var G__5277 = cljs.core.next.call(null,more);
x = G__5275;
y = G__5276;
more = G__5277;
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
var G__5274 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5274__delegate.call(this, x, y, more);
};
G__5274.cljs$lang$maxFixedArity = 2;
G__5274.cljs$lang$applyTo = (function (arglist__5278){
var x = cljs.core.first(arglist__5278);
var y = cljs.core.first(cljs.core.next(arglist__5278));
var more = cljs.core.rest(cljs.core.next(arglist__5278));
return G__5274__delegate(x, y, more);
});
G__5274.cljs$lang$arity$variadic = G__5274__delegate;
return G__5274;
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
var n__5279 = n;
var xs__5280 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5281 = xs__5280;
if(cljs.core.truth_(and__3822__auto____5281))
{return (n__5279 > 0);
} else
{return and__3822__auto____5281;
}
})()))
{{
var G__5282 = (n__5279 - 1);
var G__5283 = cljs.core.next.call(null,xs__5280);
n__5279 = G__5282;
xs__5280 = G__5283;
continue;
}
} else
{return xs__5280;
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
var G__5284__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5285 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5286 = cljs.core.next.call(null,more);
sb = G__5285;
more = G__5286;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5284 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5284__delegate.call(this, x, ys);
};
G__5284.cljs$lang$maxFixedArity = 1;
G__5284.cljs$lang$applyTo = (function (arglist__5287){
var x = cljs.core.first(arglist__5287);
var ys = cljs.core.rest(arglist__5287);
return G__5284__delegate(x, ys);
});
G__5284.cljs$lang$arity$variadic = G__5284__delegate;
return G__5284;
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
var G__5288__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5289 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__5290 = cljs.core.next.call(null,more);
sb = G__5289;
more = G__5290;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__5288 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5288__delegate.call(this, x, ys);
};
G__5288.cljs$lang$maxFixedArity = 1;
G__5288.cljs$lang$applyTo = (function (arglist__5291){
var x = cljs.core.first(arglist__5291);
var ys = cljs.core.rest(arglist__5291);
return G__5288__delegate(x, ys);
});
G__5288.cljs$lang$arity$variadic = G__5288__delegate;
return G__5288;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5292 = cljs.core.seq.call(null,x);
var ys__5293 = cljs.core.seq.call(null,y);
while(true){
if((xs__5292 == null))
{return (ys__5293 == null);
} else
{if((ys__5293 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5292),cljs.core.first.call(null,ys__5293)))
{{
var G__5294 = cljs.core.next.call(null,xs__5292);
var G__5295 = cljs.core.next.call(null,ys__5293);
xs__5292 = G__5294;
ys__5293 = G__5295;
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
return cljs.core.reduce.call(null,(function (p1__5296_SHARP_,p2__5297_SHARP_){
return cljs.core.hash_combine.call(null,p1__5296_SHARP_,cljs.core.hash.call(null,p2__5297_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__5298 = 0;
var s__5299 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__5299))
{var e__5300 = cljs.core.first.call(null,s__5299);
{
var G__5301 = ((h__5298 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__5300)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__5300)))) % 4503599627370496);
var G__5302 = cljs.core.next.call(null,s__5299);
h__5298 = G__5301;
s__5299 = G__5302;
continue;
}
} else
{return h__5298;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__5303 = 0;
var s__5304 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__5304))
{var e__5305 = cljs.core.first.call(null,s__5304);
{
var G__5306 = ((h__5303 + cljs.core.hash.call(null,e__5305)) % 4503599627370496);
var G__5307 = cljs.core.next.call(null,s__5304);
h__5303 = G__5306;
s__5304 = G__5307;
continue;
}
} else
{return h__5303;
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
var G__5308__5309 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__5308__5309))
{var G__5311__5313 = cljs.core.first.call(null,G__5308__5309);
var vec__5312__5314 = G__5311__5313;
var key_name__5315 = cljs.core.nth.call(null,vec__5312__5314,0,null);
var f__5316 = cljs.core.nth.call(null,vec__5312__5314,1,null);
var G__5308__5317 = G__5308__5309;
var G__5311__5318 = G__5311__5313;
var G__5308__5319 = G__5308__5317;
while(true){
var vec__5320__5321 = G__5311__5318;
var key_name__5322 = cljs.core.nth.call(null,vec__5320__5321,0,null);
var f__5323 = cljs.core.nth.call(null,vec__5320__5321,1,null);
var G__5308__5324 = G__5308__5319;
var str_name__5325 = cljs.core.name.call(null,key_name__5322);
obj[str_name__5325] = f__5323;
var temp__3974__auto____5326 = cljs.core.next.call(null,G__5308__5324);
if(cljs.core.truth_(temp__3974__auto____5326))
{var G__5308__5327 = temp__3974__auto____5326;
{
var G__5328 = cljs.core.first.call(null,G__5308__5327);
var G__5329 = G__5308__5327;
G__5311__5318 = G__5328;
G__5308__5319 = G__5329;
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
var this__5330 = this;
var h__364__auto____5331 = this__5330.__hash;
if((h__364__auto____5331 != null))
{return h__364__auto____5331;
} else
{var h__364__auto____5332 = cljs.core.hash_coll.call(null,coll);
this__5330.__hash = h__364__auto____5332;
return h__364__auto____5332;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5333 = this;
return (new cljs.core.List(this__5333.meta,o,coll,(this__5333.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__5334 = this;
var this$__5335 = this;
return cljs.core.pr_str.call(null,this$__5335);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5336 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5337 = this;
return this__5337.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5338 = this;
return this__5338.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5339 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5340 = this;
return this__5340.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5341 = this;
return this__5341.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5342 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5343 = this;
return (new cljs.core.List(meta,this__5343.first,this__5343.rest,this__5343.count,this__5343.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5344 = this;
return this__5344.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5345 = this;
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
var this__5346 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5347 = this;
return (new cljs.core.List(this__5347.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__5348 = this;
var this$__5349 = this;
return cljs.core.pr_str.call(null,this$__5349);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5350 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5351 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5352 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5353 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5354 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5355 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5356 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5357 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5358 = this;
return this__5358.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5359 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__5360__5361 = coll;
if((G__5360__5361 != null))
{if((function (){var or__3824__auto____5362 = (G__5360__5361.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3824__auto____5362)
{return or__3824__auto____5362;
} else
{return G__5360__5361.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__5360__5361.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__5360__5361);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__5360__5361);
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
list.cljs$lang$applyTo = (function (arglist__5363){
var items = cljs.core.seq(arglist__5363);;
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
var this__5364 = this;
var h__364__auto____5365 = this__5364.__hash;
if((h__364__auto____5365 != null))
{return h__364__auto____5365;
} else
{var h__364__auto____5366 = cljs.core.hash_coll.call(null,coll);
this__5364.__hash = h__364__auto____5366;
return h__364__auto____5366;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5367 = this;
return (new cljs.core.Cons(null,o,coll,this__5367.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__5368 = this;
var this$__5369 = this;
return cljs.core.pr_str.call(null,this$__5369);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5370 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5371 = this;
return this__5371.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5372 = this;
if((this__5372.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__5372.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5374 = this;
return (new cljs.core.Cons(meta,this__5374.first,this__5374.rest,this__5374.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5375 = this;
return this__5375.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5376 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5376.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____5377 = (coll == null);
if(or__3824__auto____5377)
{return or__3824__auto____5377;
} else
{var G__5378__5379 = coll;
if((G__5378__5379 != null))
{if((function (){var or__3824__auto____5380 = (G__5378__5379.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____5380)
{return or__3824__auto____5380;
} else
{return G__5378__5379.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__5378__5379.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5378__5379);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__5378__5379);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__5381__5382 = x;
if((G__5381__5382 != null))
{if((function (){var or__3824__auto____5383 = (G__5381__5382.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____5383)
{return or__3824__auto____5383;
} else
{return G__5381__5382.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__5381__5382.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__5381__5382);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__5381__5382);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__5384 = null;
var G__5384__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5384__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5384 = function(string,f,start){
switch(arguments.length){
case 2:
return G__5384__2.call(this,string,f);
case 3:
return G__5384__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5384;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5385 = null;
var G__5385__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5385__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5385 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__5385__2.call(this,string,k);
case 3:
return G__5385__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5385;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5386 = null;
var G__5386__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__5386__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5386 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__5386__2.call(this,string,n);
case 3:
return G__5386__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5386;
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
var G__5395 = null;
var G__5395__2 = (function (tsym5389,coll){
var tsym5389__5391 = this;
var this$__5392 = tsym5389__5391;
return cljs.core.get.call(null,coll,this$__5392.toString());
});
var G__5395__3 = (function (tsym5390,coll,not_found){
var tsym5390__5393 = this;
var this$__5394 = tsym5390__5393;
return cljs.core.get.call(null,coll,this$__5394.toString(),not_found);
});
G__5395 = function(tsym5390,coll,not_found){
switch(arguments.length){
case 2:
return G__5395__2.call(this,tsym5390,coll);
case 3:
return G__5395__3.call(this,tsym5390,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5395;
})()
;
String.prototype.apply = (function (tsym5387,args5388){
return tsym5387.call.apply(tsym5387,[tsym5387].concat(cljs.core.aclone.call(null,args5388)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__5396 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__5396;
} else
{lazy_seq.x = x__5396.call(null);
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
var this__5397 = this;
var h__364__auto____5398 = this__5397.__hash;
if((h__364__auto____5398 != null))
{return h__364__auto____5398;
} else
{var h__364__auto____5399 = cljs.core.hash_coll.call(null,coll);
this__5397.__hash = h__364__auto____5399;
return h__364__auto____5399;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5400 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__5401 = this;
var this$__5402 = this;
return cljs.core.pr_str.call(null,this$__5402);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5403 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5404 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__5405 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5406 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5407 = this;
return (new cljs.core.LazySeq(meta,this__5407.realized,this__5407.x,this__5407.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5408 = this;
return this__5408.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5409 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5409.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5410 = [];
var s__5411 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5411)))
{ary__5410.push(cljs.core.first.call(null,s__5411));
{
var G__5412 = cljs.core.next.call(null,s__5411);
s__5411 = G__5412;
continue;
}
} else
{return ary__5410;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__5413 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__5414 = 0;
var xs__5415 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__5415))
{(ret__5413[i__5414] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__5415)));
{
var G__5416 = (i__5414 + 1);
var G__5417 = cljs.core.next.call(null,xs__5415);
i__5414 = G__5416;
xs__5415 = G__5417;
continue;
}
} else
{}
break;
}
return ret__5413;
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
var a__5418 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__5419 = cljs.core.seq.call(null,init_val_or_seq);
var i__5420 = 0;
var s__5421 = s__5419;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5422 = s__5421;
if(cljs.core.truth_(and__3822__auto____5422))
{return (i__5420 < size);
} else
{return and__3822__auto____5422;
}
})()))
{(a__5418[i__5420] = cljs.core.first.call(null,s__5421));
{
var G__5425 = (i__5420 + 1);
var G__5426 = cljs.core.next.call(null,s__5421);
i__5420 = G__5425;
s__5421 = G__5426;
continue;
}
} else
{return a__5418;
}
break;
}
} else
{var n__685__auto____5423 = size;
var i__5424 = 0;
while(true){
if((i__5424 < n__685__auto____5423))
{(a__5418[i__5424] = init_val_or_seq);
{
var G__5427 = (i__5424 + 1);
i__5424 = G__5427;
continue;
}
} else
{}
break;
}
return a__5418;
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
var a__5428 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__5429 = cljs.core.seq.call(null,init_val_or_seq);
var i__5430 = 0;
var s__5431 = s__5429;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5432 = s__5431;
if(cljs.core.truth_(and__3822__auto____5432))
{return (i__5430 < size);
} else
{return and__3822__auto____5432;
}
})()))
{(a__5428[i__5430] = cljs.core.first.call(null,s__5431));
{
var G__5435 = (i__5430 + 1);
var G__5436 = cljs.core.next.call(null,s__5431);
i__5430 = G__5435;
s__5431 = G__5436;
continue;
}
} else
{return a__5428;
}
break;
}
} else
{var n__685__auto____5433 = size;
var i__5434 = 0;
while(true){
if((i__5434 < n__685__auto____5433))
{(a__5428[i__5434] = init_val_or_seq);
{
var G__5437 = (i__5434 + 1);
i__5434 = G__5437;
continue;
}
} else
{}
break;
}
return a__5428;
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
var a__5438 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__5439 = cljs.core.seq.call(null,init_val_or_seq);
var i__5440 = 0;
var s__5441 = s__5439;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5442 = s__5441;
if(cljs.core.truth_(and__3822__auto____5442))
{return (i__5440 < size);
} else
{return and__3822__auto____5442;
}
})()))
{(a__5438[i__5440] = cljs.core.first.call(null,s__5441));
{
var G__5445 = (i__5440 + 1);
var G__5446 = cljs.core.next.call(null,s__5441);
i__5440 = G__5445;
s__5441 = G__5446;
continue;
}
} else
{return a__5438;
}
break;
}
} else
{var n__685__auto____5443 = size;
var i__5444 = 0;
while(true){
if((i__5444 < n__685__auto____5443))
{(a__5438[i__5444] = init_val_or_seq);
{
var G__5447 = (i__5444 + 1);
i__5444 = G__5447;
continue;
}
} else
{}
break;
}
return a__5438;
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
{var s__5448 = s;
var i__5449 = n;
var sum__5450 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5451 = (i__5449 > 0);
if(and__3822__auto____5451)
{return cljs.core.seq.call(null,s__5448);
} else
{return and__3822__auto____5451;
}
})()))
{{
var G__5452 = cljs.core.next.call(null,s__5448);
var G__5453 = (i__5449 - 1);
var G__5454 = (sum__5450 + 1);
s__5448 = G__5452;
i__5449 = G__5453;
sum__5450 = G__5454;
continue;
}
} else
{return sum__5450;
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
var s__5455 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__5455))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5455),concat.call(null,cljs.core.rest.call(null,s__5455),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__5458__delegate = function (x,y,zs){
var cat__5457 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5456 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__5456))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5456),cat.call(null,cljs.core.rest.call(null,xys__5456),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__5457.call(null,concat.call(null,x,y),zs);
};
var G__5458 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5458__delegate.call(this, x, y, zs);
};
G__5458.cljs$lang$maxFixedArity = 2;
G__5458.cljs$lang$applyTo = (function (arglist__5459){
var x = cljs.core.first(arglist__5459);
var y = cljs.core.first(cljs.core.next(arglist__5459));
var zs = cljs.core.rest(cljs.core.next(arglist__5459));
return G__5458__delegate(x, y, zs);
});
G__5458.cljs$lang$arity$variadic = G__5458__delegate;
return G__5458;
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
var G__5460__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5460 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5460__delegate.call(this, a, b, c, d, more);
};
G__5460.cljs$lang$maxFixedArity = 4;
G__5460.cljs$lang$applyTo = (function (arglist__5461){
var a = cljs.core.first(arglist__5461);
var b = cljs.core.first(cljs.core.next(arglist__5461));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5461)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5461))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5461))));
return G__5460__delegate(a, b, c, d, more);
});
G__5460.cljs$lang$arity$variadic = G__5460__delegate;
return G__5460;
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
var args__5462 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__5463 = cljs.core._first.call(null,args__5462);
var args__5464 = cljs.core._rest.call(null,args__5462);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__5463);
} else
{return f.call(null,a__5463);
}
} else
{var b__5465 = cljs.core._first.call(null,args__5464);
var args__5466 = cljs.core._rest.call(null,args__5464);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__5463,b__5465);
} else
{return f.call(null,a__5463,b__5465);
}
} else
{var c__5467 = cljs.core._first.call(null,args__5466);
var args__5468 = cljs.core._rest.call(null,args__5466);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__5463,b__5465,c__5467);
} else
{return f.call(null,a__5463,b__5465,c__5467);
}
} else
{var d__5469 = cljs.core._first.call(null,args__5468);
var args__5470 = cljs.core._rest.call(null,args__5468);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__5463,b__5465,c__5467,d__5469);
} else
{return f.call(null,a__5463,b__5465,c__5467,d__5469);
}
} else
{var e__5471 = cljs.core._first.call(null,args__5470);
var args__5472 = cljs.core._rest.call(null,args__5470);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__5463,b__5465,c__5467,d__5469,e__5471);
} else
{return f.call(null,a__5463,b__5465,c__5467,d__5469,e__5471);
}
} else
{var f__5473 = cljs.core._first.call(null,args__5472);
var args__5474 = cljs.core._rest.call(null,args__5472);
if((argc === 6))
{if(f__5473.cljs$lang$arity$6)
{return f__5473.cljs$lang$arity$6(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473);
}
} else
{var g__5475 = cljs.core._first.call(null,args__5474);
var args__5476 = cljs.core._rest.call(null,args__5474);
if((argc === 7))
{if(f__5473.cljs$lang$arity$7)
{return f__5473.cljs$lang$arity$7(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475);
}
} else
{var h__5477 = cljs.core._first.call(null,args__5476);
var args__5478 = cljs.core._rest.call(null,args__5476);
if((argc === 8))
{if(f__5473.cljs$lang$arity$8)
{return f__5473.cljs$lang$arity$8(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477);
}
} else
{var i__5479 = cljs.core._first.call(null,args__5478);
var args__5480 = cljs.core._rest.call(null,args__5478);
if((argc === 9))
{if(f__5473.cljs$lang$arity$9)
{return f__5473.cljs$lang$arity$9(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479);
}
} else
{var j__5481 = cljs.core._first.call(null,args__5480);
var args__5482 = cljs.core._rest.call(null,args__5480);
if((argc === 10))
{if(f__5473.cljs$lang$arity$10)
{return f__5473.cljs$lang$arity$10(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481);
}
} else
{var k__5483 = cljs.core._first.call(null,args__5482);
var args__5484 = cljs.core._rest.call(null,args__5482);
if((argc === 11))
{if(f__5473.cljs$lang$arity$11)
{return f__5473.cljs$lang$arity$11(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483);
}
} else
{var l__5485 = cljs.core._first.call(null,args__5484);
var args__5486 = cljs.core._rest.call(null,args__5484);
if((argc === 12))
{if(f__5473.cljs$lang$arity$12)
{return f__5473.cljs$lang$arity$12(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485);
}
} else
{var m__5487 = cljs.core._first.call(null,args__5486);
var args__5488 = cljs.core._rest.call(null,args__5486);
if((argc === 13))
{if(f__5473.cljs$lang$arity$13)
{return f__5473.cljs$lang$arity$13(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487);
}
} else
{var n__5489 = cljs.core._first.call(null,args__5488);
var args__5490 = cljs.core._rest.call(null,args__5488);
if((argc === 14))
{if(f__5473.cljs$lang$arity$14)
{return f__5473.cljs$lang$arity$14(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489);
}
} else
{var o__5491 = cljs.core._first.call(null,args__5490);
var args__5492 = cljs.core._rest.call(null,args__5490);
if((argc === 15))
{if(f__5473.cljs$lang$arity$15)
{return f__5473.cljs$lang$arity$15(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491);
}
} else
{var p__5493 = cljs.core._first.call(null,args__5492);
var args__5494 = cljs.core._rest.call(null,args__5492);
if((argc === 16))
{if(f__5473.cljs$lang$arity$16)
{return f__5473.cljs$lang$arity$16(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493);
}
} else
{var q__5495 = cljs.core._first.call(null,args__5494);
var args__5496 = cljs.core._rest.call(null,args__5494);
if((argc === 17))
{if(f__5473.cljs$lang$arity$17)
{return f__5473.cljs$lang$arity$17(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495);
}
} else
{var r__5497 = cljs.core._first.call(null,args__5496);
var args__5498 = cljs.core._rest.call(null,args__5496);
if((argc === 18))
{if(f__5473.cljs$lang$arity$18)
{return f__5473.cljs$lang$arity$18(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497);
}
} else
{var s__5499 = cljs.core._first.call(null,args__5498);
var args__5500 = cljs.core._rest.call(null,args__5498);
if((argc === 19))
{if(f__5473.cljs$lang$arity$19)
{return f__5473.cljs$lang$arity$19(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497,s__5499);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497,s__5499);
}
} else
{var t__5501 = cljs.core._first.call(null,args__5500);
var args__5502 = cljs.core._rest.call(null,args__5500);
if((argc === 20))
{if(f__5473.cljs$lang$arity$20)
{return f__5473.cljs$lang$arity$20(a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497,s__5499,t__5501);
} else
{return f__5473.call(null,a__5463,b__5465,c__5467,d__5469,e__5471,f__5473,g__5475,h__5477,i__5479,j__5481,k__5483,l__5485,m__5487,n__5489,o__5491,p__5493,q__5495,r__5497,s__5499,t__5501);
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
var fixed_arity__5503 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__5504 = cljs.core.bounded_count.call(null,args,(fixed_arity__5503 + 1));
if((bc__5504 <= fixed_arity__5503))
{return cljs.core.apply_to.call(null,f,bc__5504,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__5505 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5506 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__5507 = cljs.core.bounded_count.call(null,arglist__5505,(fixed_arity__5506 + 1));
if((bc__5507 <= fixed_arity__5506))
{return cljs.core.apply_to.call(null,f,bc__5507,arglist__5505);
} else
{return f.cljs$lang$applyTo(arglist__5505);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5505));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__5508 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5509 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__5510 = cljs.core.bounded_count.call(null,arglist__5508,(fixed_arity__5509 + 1));
if((bc__5510 <= fixed_arity__5509))
{return cljs.core.apply_to.call(null,f,bc__5510,arglist__5508);
} else
{return f.cljs$lang$applyTo(arglist__5508);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5508));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__5511 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5512 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__5513 = cljs.core.bounded_count.call(null,arglist__5511,(fixed_arity__5512 + 1));
if((bc__5513 <= fixed_arity__5512))
{return cljs.core.apply_to.call(null,f,bc__5513,arglist__5511);
} else
{return f.cljs$lang$applyTo(arglist__5511);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5511));
}
});
var apply__6 = (function() { 
var G__5517__delegate = function (f,a,b,c,d,args){
var arglist__5514 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5515 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__5516 = cljs.core.bounded_count.call(null,arglist__5514,(fixed_arity__5515 + 1));
if((bc__5516 <= fixed_arity__5515))
{return cljs.core.apply_to.call(null,f,bc__5516,arglist__5514);
} else
{return f.cljs$lang$applyTo(arglist__5514);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5514));
}
};
var G__5517 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5517__delegate.call(this, f, a, b, c, d, args);
};
G__5517.cljs$lang$maxFixedArity = 5;
G__5517.cljs$lang$applyTo = (function (arglist__5518){
var f = cljs.core.first(arglist__5518);
var a = cljs.core.first(cljs.core.next(arglist__5518));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5518)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5518))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5518)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5518)))));
return G__5517__delegate(f, a, b, c, d, args);
});
G__5517.cljs$lang$arity$variadic = G__5517__delegate;
return G__5517;
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
vary_meta.cljs$lang$applyTo = (function (arglist__5519){
var obj = cljs.core.first(arglist__5519);
var f = cljs.core.first(cljs.core.next(arglist__5519));
var args = cljs.core.rest(cljs.core.next(arglist__5519));
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
var G__5520__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5520 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5520__delegate.call(this, x, y, more);
};
G__5520.cljs$lang$maxFixedArity = 2;
G__5520.cljs$lang$applyTo = (function (arglist__5521){
var x = cljs.core.first(arglist__5521);
var y = cljs.core.first(cljs.core.next(arglist__5521));
var more = cljs.core.rest(cljs.core.next(arglist__5521));
return G__5520__delegate(x, y, more);
});
G__5520.cljs$lang$arity$variadic = G__5520__delegate;
return G__5520;
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
var G__5522 = pred;
var G__5523 = cljs.core.next.call(null,coll);
pred = G__5522;
coll = G__5523;
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
{var or__3824__auto____5524 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____5524))
{return or__3824__auto____5524;
} else
{{
var G__5525 = pred;
var G__5526 = cljs.core.next.call(null,coll);
pred = G__5525;
coll = G__5526;
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
var G__5527 = null;
var G__5527__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5527__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5527__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5527__3 = (function() { 
var G__5528__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5528 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5528__delegate.call(this, x, y, zs);
};
G__5528.cljs$lang$maxFixedArity = 2;
G__5528.cljs$lang$applyTo = (function (arglist__5529){
var x = cljs.core.first(arglist__5529);
var y = cljs.core.first(cljs.core.next(arglist__5529));
var zs = cljs.core.rest(cljs.core.next(arglist__5529));
return G__5528__delegate(x, y, zs);
});
G__5528.cljs$lang$arity$variadic = G__5528__delegate;
return G__5528;
})()
;
G__5527 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__5527__0.call(this);
case 1:
return G__5527__1.call(this,x);
case 2:
return G__5527__2.call(this,x,y);
default:
return G__5527__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__5527.cljs$lang$maxFixedArity = 2;
G__5527.cljs$lang$applyTo = G__5527__3.cljs$lang$applyTo;
return G__5527;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5530__delegate = function (args){
return x;
};
var G__5530 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5530__delegate.call(this, args);
};
G__5530.cljs$lang$maxFixedArity = 0;
G__5530.cljs$lang$applyTo = (function (arglist__5531){
var args = cljs.core.seq(arglist__5531);;
return G__5530__delegate(args);
});
G__5530.cljs$lang$arity$variadic = G__5530__delegate;
return G__5530;
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
var G__5535 = null;
var G__5535__0 = (function (){
return f.call(null,g.call(null));
});
var G__5535__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5535__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5535__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5535__4 = (function() { 
var G__5536__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5536 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5536__delegate.call(this, x, y, z, args);
};
G__5536.cljs$lang$maxFixedArity = 3;
G__5536.cljs$lang$applyTo = (function (arglist__5537){
var x = cljs.core.first(arglist__5537);
var y = cljs.core.first(cljs.core.next(arglist__5537));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5537)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5537)));
return G__5536__delegate(x, y, z, args);
});
G__5536.cljs$lang$arity$variadic = G__5536__delegate;
return G__5536;
})()
;
G__5535 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__5535__0.call(this);
case 1:
return G__5535__1.call(this,x);
case 2:
return G__5535__2.call(this,x,y);
case 3:
return G__5535__3.call(this,x,y,z);
default:
return G__5535__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__5535.cljs$lang$maxFixedArity = 3;
G__5535.cljs$lang$applyTo = G__5535__4.cljs$lang$applyTo;
return G__5535;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__5538 = null;
var G__5538__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__5538__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__5538__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__5538__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__5538__4 = (function() { 
var G__5539__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__5539 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5539__delegate.call(this, x, y, z, args);
};
G__5539.cljs$lang$maxFixedArity = 3;
G__5539.cljs$lang$applyTo = (function (arglist__5540){
var x = cljs.core.first(arglist__5540);
var y = cljs.core.first(cljs.core.next(arglist__5540));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5540)));
return G__5539__delegate(x, y, z, args);
});
G__5539.cljs$lang$arity$variadic = G__5539__delegate;
return G__5539;
})()
;
G__5538 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__5538__0.call(this);
case 1:
return G__5538__1.call(this,x);
case 2:
return G__5538__2.call(this,x,y);
case 3:
return G__5538__3.call(this,x,y,z);
default:
return G__5538__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__5538.cljs$lang$maxFixedArity = 3;
G__5538.cljs$lang$applyTo = G__5538__4.cljs$lang$applyTo;
return G__5538;
})()
});
var comp__4 = (function() { 
var G__5541__delegate = function (f1,f2,f3,fs){
var fs__5532 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__5542__delegate = function (args){
var ret__5533 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5532),args);
var fs__5534 = cljs.core.next.call(null,fs__5532);
while(true){
if(cljs.core.truth_(fs__5534))
{{
var G__5543 = cljs.core.first.call(null,fs__5534).call(null,ret__5533);
var G__5544 = cljs.core.next.call(null,fs__5534);
ret__5533 = G__5543;
fs__5534 = G__5544;
continue;
}
} else
{return ret__5533;
}
break;
}
};
var G__5542 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5542__delegate.call(this, args);
};
G__5542.cljs$lang$maxFixedArity = 0;
G__5542.cljs$lang$applyTo = (function (arglist__5545){
var args = cljs.core.seq(arglist__5545);;
return G__5542__delegate(args);
});
G__5542.cljs$lang$arity$variadic = G__5542__delegate;
return G__5542;
})()
;
};
var G__5541 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5541__delegate.call(this, f1, f2, f3, fs);
};
G__5541.cljs$lang$maxFixedArity = 3;
G__5541.cljs$lang$applyTo = (function (arglist__5546){
var f1 = cljs.core.first(arglist__5546);
var f2 = cljs.core.first(cljs.core.next(arglist__5546));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5546)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5546)));
return G__5541__delegate(f1, f2, f3, fs);
});
G__5541.cljs$lang$arity$variadic = G__5541__delegate;
return G__5541;
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
var G__5547__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5547 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5547__delegate.call(this, args);
};
G__5547.cljs$lang$maxFixedArity = 0;
G__5547.cljs$lang$applyTo = (function (arglist__5548){
var args = cljs.core.seq(arglist__5548);;
return G__5547__delegate(args);
});
G__5547.cljs$lang$arity$variadic = G__5547__delegate;
return G__5547;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__5549__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5549 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5549__delegate.call(this, args);
};
G__5549.cljs$lang$maxFixedArity = 0;
G__5549.cljs$lang$applyTo = (function (arglist__5550){
var args = cljs.core.seq(arglist__5550);;
return G__5549__delegate(args);
});
G__5549.cljs$lang$arity$variadic = G__5549__delegate;
return G__5549;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5551__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5551 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5551__delegate.call(this, args);
};
G__5551.cljs$lang$maxFixedArity = 0;
G__5551.cljs$lang$applyTo = (function (arglist__5552){
var args = cljs.core.seq(arglist__5552);;
return G__5551__delegate(args);
});
G__5551.cljs$lang$arity$variadic = G__5551__delegate;
return G__5551;
})()
;
});
var partial__5 = (function() { 
var G__5553__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5554__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5554 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5554__delegate.call(this, args);
};
G__5554.cljs$lang$maxFixedArity = 0;
G__5554.cljs$lang$applyTo = (function (arglist__5555){
var args = cljs.core.seq(arglist__5555);;
return G__5554__delegate(args);
});
G__5554.cljs$lang$arity$variadic = G__5554__delegate;
return G__5554;
})()
;
};
var G__5553 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5553__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5553.cljs$lang$maxFixedArity = 4;
G__5553.cljs$lang$applyTo = (function (arglist__5556){
var f = cljs.core.first(arglist__5556);
var arg1 = cljs.core.first(cljs.core.next(arglist__5556));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5556)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5556))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5556))));
return G__5553__delegate(f, arg1, arg2, arg3, more);
});
G__5553.cljs$lang$arity$variadic = G__5553__delegate;
return G__5553;
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
var G__5557 = null;
var G__5557__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__5557__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__5557__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__5557__4 = (function() { 
var G__5558__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__5558 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5558__delegate.call(this, a, b, c, ds);
};
G__5558.cljs$lang$maxFixedArity = 3;
G__5558.cljs$lang$applyTo = (function (arglist__5559){
var a = cljs.core.first(arglist__5559);
var b = cljs.core.first(cljs.core.next(arglist__5559));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5559)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5559)));
return G__5558__delegate(a, b, c, ds);
});
G__5558.cljs$lang$arity$variadic = G__5558__delegate;
return G__5558;
})()
;
G__5557 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__5557__1.call(this,a);
case 2:
return G__5557__2.call(this,a,b);
case 3:
return G__5557__3.call(this,a,b,c);
default:
return G__5557__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__5557.cljs$lang$maxFixedArity = 3;
G__5557.cljs$lang$applyTo = G__5557__4.cljs$lang$applyTo;
return G__5557;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__5560 = null;
var G__5560__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__5560__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__5560__4 = (function() { 
var G__5561__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__5561 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5561__delegate.call(this, a, b, c, ds);
};
G__5561.cljs$lang$maxFixedArity = 3;
G__5561.cljs$lang$applyTo = (function (arglist__5562){
var a = cljs.core.first(arglist__5562);
var b = cljs.core.first(cljs.core.next(arglist__5562));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5562)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5562)));
return G__5561__delegate(a, b, c, ds);
});
G__5561.cljs$lang$arity$variadic = G__5561__delegate;
return G__5561;
})()
;
G__5560 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__5560__2.call(this,a,b);
case 3:
return G__5560__3.call(this,a,b,c);
default:
return G__5560__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__5560.cljs$lang$maxFixedArity = 3;
G__5560.cljs$lang$applyTo = G__5560__4.cljs$lang$applyTo;
return G__5560;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__5563 = null;
var G__5563__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__5563__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__5563__4 = (function() { 
var G__5564__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__5564 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5564__delegate.call(this, a, b, c, ds);
};
G__5564.cljs$lang$maxFixedArity = 3;
G__5564.cljs$lang$applyTo = (function (arglist__5565){
var a = cljs.core.first(arglist__5565);
var b = cljs.core.first(cljs.core.next(arglist__5565));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5565)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5565)));
return G__5564__delegate(a, b, c, ds);
});
G__5564.cljs$lang$arity$variadic = G__5564__delegate;
return G__5564;
})()
;
G__5563 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__5563__2.call(this,a,b);
case 3:
return G__5563__3.call(this,a,b,c);
default:
return G__5563__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__5563.cljs$lang$maxFixedArity = 3;
G__5563.cljs$lang$applyTo = G__5563__4.cljs$lang$applyTo;
return G__5563;
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
var mapi__5568 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5566 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5566))
{var s__5567 = temp__3974__auto____5566;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5567)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5567)));
} else
{return null;
}
})));
});
return mapi__5568.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5569 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5569))
{var s__5570 = temp__3974__auto____5569;
var x__5571 = f.call(null,cljs.core.first.call(null,s__5570));
if((x__5571 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__5570));
} else
{return cljs.core.cons.call(null,x__5571,keep.call(null,f,cljs.core.rest.call(null,s__5570)));
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
var keepi__5581 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5578 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5578))
{var s__5579 = temp__3974__auto____5578;
var x__5580 = f.call(null,idx,cljs.core.first.call(null,s__5579));
if((x__5580 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5579));
} else
{return cljs.core.cons.call(null,x__5580,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5579)));
}
} else
{return null;
}
})));
});
return keepi__5581.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5588 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____5588))
{return p.call(null,y);
} else
{return and__3822__auto____5588;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5589 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____5589))
{var and__3822__auto____5590 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____5590))
{return p.call(null,z);
} else
{return and__3822__auto____5590;
}
} else
{return and__3822__auto____5589;
}
})());
});
var ep1__4 = (function() { 
var G__5626__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5591 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____5591))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____5591;
}
})());
};
var G__5626 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5626__delegate.call(this, x, y, z, args);
};
G__5626.cljs$lang$maxFixedArity = 3;
G__5626.cljs$lang$applyTo = (function (arglist__5627){
var x = cljs.core.first(arglist__5627);
var y = cljs.core.first(cljs.core.next(arglist__5627));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5627)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5627)));
return G__5626__delegate(x, y, z, args);
});
G__5626.cljs$lang$arity$variadic = G__5626__delegate;
return G__5626;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5592 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5592))
{return p2.call(null,x);
} else
{return and__3822__auto____5592;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5593 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5593))
{var and__3822__auto____5594 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____5594))
{var and__3822__auto____5595 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____5595))
{return p2.call(null,y);
} else
{return and__3822__auto____5595;
}
} else
{return and__3822__auto____5594;
}
} else
{return and__3822__auto____5593;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5596 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5596))
{var and__3822__auto____5597 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____5597))
{var and__3822__auto____5598 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____5598))
{var and__3822__auto____5599 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____5599))
{var and__3822__auto____5600 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____5600))
{return p2.call(null,z);
} else
{return and__3822__auto____5600;
}
} else
{return and__3822__auto____5599;
}
} else
{return and__3822__auto____5598;
}
} else
{return and__3822__auto____5597;
}
} else
{return and__3822__auto____5596;
}
})());
});
var ep2__4 = (function() { 
var G__5628__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5601 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____5601))
{return cljs.core.every_QMARK_.call(null,(function (p1__5572_SHARP_){
var and__3822__auto____5602 = p1.call(null,p1__5572_SHARP_);
if(cljs.core.truth_(and__3822__auto____5602))
{return p2.call(null,p1__5572_SHARP_);
} else
{return and__3822__auto____5602;
}
}),args);
} else
{return and__3822__auto____5601;
}
})());
};
var G__5628 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5628__delegate.call(this, x, y, z, args);
};
G__5628.cljs$lang$maxFixedArity = 3;
G__5628.cljs$lang$applyTo = (function (arglist__5629){
var x = cljs.core.first(arglist__5629);
var y = cljs.core.first(cljs.core.next(arglist__5629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5629)));
return G__5628__delegate(x, y, z, args);
});
G__5628.cljs$lang$arity$variadic = G__5628__delegate;
return G__5628;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5603 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5603))
{var and__3822__auto____5604 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____5604))
{return p3.call(null,x);
} else
{return and__3822__auto____5604;
}
} else
{return and__3822__auto____5603;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5605 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5605))
{var and__3822__auto____5606 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____5606))
{var and__3822__auto____5607 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____5607))
{var and__3822__auto____5608 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____5608))
{var and__3822__auto____5609 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____5609))
{return p3.call(null,y);
} else
{return and__3822__auto____5609;
}
} else
{return and__3822__auto____5608;
}
} else
{return and__3822__auto____5607;
}
} else
{return and__3822__auto____5606;
}
} else
{return and__3822__auto____5605;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5610 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____5610))
{var and__3822__auto____5611 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____5611))
{var and__3822__auto____5612 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____5612))
{var and__3822__auto____5613 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____5613))
{var and__3822__auto____5614 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____5614))
{var and__3822__auto____5615 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____5615))
{var and__3822__auto____5616 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____5616))
{var and__3822__auto____5617 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____5617))
{return p3.call(null,z);
} else
{return and__3822__auto____5617;
}
} else
{return and__3822__auto____5616;
}
} else
{return and__3822__auto____5615;
}
} else
{return and__3822__auto____5614;
}
} else
{return and__3822__auto____5613;
}
} else
{return and__3822__auto____5612;
}
} else
{return and__3822__auto____5611;
}
} else
{return and__3822__auto____5610;
}
})());
});
var ep3__4 = (function() { 
var G__5630__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5618 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____5618))
{return cljs.core.every_QMARK_.call(null,(function (p1__5573_SHARP_){
var and__3822__auto____5619 = p1.call(null,p1__5573_SHARP_);
if(cljs.core.truth_(and__3822__auto____5619))
{var and__3822__auto____5620 = p2.call(null,p1__5573_SHARP_);
if(cljs.core.truth_(and__3822__auto____5620))
{return p3.call(null,p1__5573_SHARP_);
} else
{return and__3822__auto____5620;
}
} else
{return and__3822__auto____5619;
}
}),args);
} else
{return and__3822__auto____5618;
}
})());
};
var G__5630 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5630__delegate.call(this, x, y, z, args);
};
G__5630.cljs$lang$maxFixedArity = 3;
G__5630.cljs$lang$applyTo = (function (arglist__5631){
var x = cljs.core.first(arglist__5631);
var y = cljs.core.first(cljs.core.next(arglist__5631));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5631)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5631)));
return G__5630__delegate(x, y, z, args);
});
G__5630.cljs$lang$arity$variadic = G__5630__delegate;
return G__5630;
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
var G__5632__delegate = function (p1,p2,p3,ps){
var ps__5621 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5574_SHARP_){
return p1__5574_SHARP_.call(null,x);
}),ps__5621);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5575_SHARP_){
var and__3822__auto____5622 = p1__5575_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____5622))
{return p1__5575_SHARP_.call(null,y);
} else
{return and__3822__auto____5622;
}
}),ps__5621);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5576_SHARP_){
var and__3822__auto____5623 = p1__5576_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____5623))
{var and__3822__auto____5624 = p1__5576_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____5624))
{return p1__5576_SHARP_.call(null,z);
} else
{return and__3822__auto____5624;
}
} else
{return and__3822__auto____5623;
}
}),ps__5621);
});
var epn__4 = (function() { 
var G__5633__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5625 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____5625))
{return cljs.core.every_QMARK_.call(null,(function (p1__5577_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5577_SHARP_,args);
}),ps__5621);
} else
{return and__3822__auto____5625;
}
})());
};
var G__5633 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5633__delegate.call(this, x, y, z, args);
};
G__5633.cljs$lang$maxFixedArity = 3;
G__5633.cljs$lang$applyTo = (function (arglist__5634){
var x = cljs.core.first(arglist__5634);
var y = cljs.core.first(cljs.core.next(arglist__5634));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5634)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5634)));
return G__5633__delegate(x, y, z, args);
});
G__5633.cljs$lang$arity$variadic = G__5633__delegate;
return G__5633;
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
var G__5632 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5632__delegate.call(this, p1, p2, p3, ps);
};
G__5632.cljs$lang$maxFixedArity = 3;
G__5632.cljs$lang$applyTo = (function (arglist__5635){
var p1 = cljs.core.first(arglist__5635);
var p2 = cljs.core.first(cljs.core.next(arglist__5635));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5635)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5635)));
return G__5632__delegate(p1, p2, p3, ps);
});
G__5632.cljs$lang$arity$variadic = G__5632__delegate;
return G__5632;
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
var or__3824__auto____5637 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____5637))
{return or__3824__auto____5637;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____5638 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____5638))
{return or__3824__auto____5638;
} else
{var or__3824__auto____5639 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____5639))
{return or__3824__auto____5639;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__5675__delegate = function (x,y,z,args){
var or__3824__auto____5640 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____5640))
{return or__3824__auto____5640;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__5675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5675__delegate.call(this, x, y, z, args);
};
G__5675.cljs$lang$maxFixedArity = 3;
G__5675.cljs$lang$applyTo = (function (arglist__5676){
var x = cljs.core.first(arglist__5676);
var y = cljs.core.first(cljs.core.next(arglist__5676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5676)));
return G__5675__delegate(x, y, z, args);
});
G__5675.cljs$lang$arity$variadic = G__5675__delegate;
return G__5675;
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
var or__3824__auto____5641 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5641))
{return or__3824__auto____5641;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____5642 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5642))
{return or__3824__auto____5642;
} else
{var or__3824__auto____5643 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____5643))
{return or__3824__auto____5643;
} else
{var or__3824__auto____5644 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____5644))
{return or__3824__auto____5644;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____5645 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5645))
{return or__3824__auto____5645;
} else
{var or__3824__auto____5646 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____5646))
{return or__3824__auto____5646;
} else
{var or__3824__auto____5647 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____5647))
{return or__3824__auto____5647;
} else
{var or__3824__auto____5648 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____5648))
{return or__3824__auto____5648;
} else
{var or__3824__auto____5649 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____5649))
{return or__3824__auto____5649;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__5677__delegate = function (x,y,z,args){
var or__3824__auto____5650 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____5650))
{return or__3824__auto____5650;
} else
{return cljs.core.some.call(null,(function (p1__5582_SHARP_){
var or__3824__auto____5651 = p1.call(null,p1__5582_SHARP_);
if(cljs.core.truth_(or__3824__auto____5651))
{return or__3824__auto____5651;
} else
{return p2.call(null,p1__5582_SHARP_);
}
}),args);
}
};
var G__5677 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5677__delegate.call(this, x, y, z, args);
};
G__5677.cljs$lang$maxFixedArity = 3;
G__5677.cljs$lang$applyTo = (function (arglist__5678){
var x = cljs.core.first(arglist__5678);
var y = cljs.core.first(cljs.core.next(arglist__5678));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5678)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5678)));
return G__5677__delegate(x, y, z, args);
});
G__5677.cljs$lang$arity$variadic = G__5677__delegate;
return G__5677;
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
var or__3824__auto____5652 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5652))
{return or__3824__auto____5652;
} else
{var or__3824__auto____5653 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____5653))
{return or__3824__auto____5653;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____5654 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5654))
{return or__3824__auto____5654;
} else
{var or__3824__auto____5655 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____5655))
{return or__3824__auto____5655;
} else
{var or__3824__auto____5656 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____5656))
{return or__3824__auto____5656;
} else
{var or__3824__auto____5657 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____5657))
{return or__3824__auto____5657;
} else
{var or__3824__auto____5658 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____5658))
{return or__3824__auto____5658;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____5659 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____5659))
{return or__3824__auto____5659;
} else
{var or__3824__auto____5660 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____5660))
{return or__3824__auto____5660;
} else
{var or__3824__auto____5661 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____5661))
{return or__3824__auto____5661;
} else
{var or__3824__auto____5662 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____5662))
{return or__3824__auto____5662;
} else
{var or__3824__auto____5663 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____5663))
{return or__3824__auto____5663;
} else
{var or__3824__auto____5664 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____5664))
{return or__3824__auto____5664;
} else
{var or__3824__auto____5665 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____5665))
{return or__3824__auto____5665;
} else
{var or__3824__auto____5666 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____5666))
{return or__3824__auto____5666;
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
var G__5679__delegate = function (x,y,z,args){
var or__3824__auto____5667 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____5667))
{return or__3824__auto____5667;
} else
{return cljs.core.some.call(null,(function (p1__5583_SHARP_){
var or__3824__auto____5668 = p1.call(null,p1__5583_SHARP_);
if(cljs.core.truth_(or__3824__auto____5668))
{return or__3824__auto____5668;
} else
{var or__3824__auto____5669 = p2.call(null,p1__5583_SHARP_);
if(cljs.core.truth_(or__3824__auto____5669))
{return or__3824__auto____5669;
} else
{return p3.call(null,p1__5583_SHARP_);
}
}
}),args);
}
};
var G__5679 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5679__delegate.call(this, x, y, z, args);
};
G__5679.cljs$lang$maxFixedArity = 3;
G__5679.cljs$lang$applyTo = (function (arglist__5680){
var x = cljs.core.first(arglist__5680);
var y = cljs.core.first(cljs.core.next(arglist__5680));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5680)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5680)));
return G__5679__delegate(x, y, z, args);
});
G__5679.cljs$lang$arity$variadic = G__5679__delegate;
return G__5679;
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
var G__5681__delegate = function (p1,p2,p3,ps){
var ps__5670 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__5584_SHARP_){
return p1__5584_SHARP_.call(null,x);
}),ps__5670);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5585_SHARP_){
var or__3824__auto____5671 = p1__5585_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____5671))
{return or__3824__auto____5671;
} else
{return p1__5585_SHARP_.call(null,y);
}
}),ps__5670);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5586_SHARP_){
var or__3824__auto____5672 = p1__5586_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____5672))
{return or__3824__auto____5672;
} else
{var or__3824__auto____5673 = p1__5586_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____5673))
{return or__3824__auto____5673;
} else
{return p1__5586_SHARP_.call(null,z);
}
}
}),ps__5670);
});
var spn__4 = (function() { 
var G__5682__delegate = function (x,y,z,args){
var or__3824__auto____5674 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____5674))
{return or__3824__auto____5674;
} else
{return cljs.core.some.call(null,(function (p1__5587_SHARP_){
return cljs.core.some.call(null,p1__5587_SHARP_,args);
}),ps__5670);
}
};
var G__5682 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5682__delegate.call(this, x, y, z, args);
};
G__5682.cljs$lang$maxFixedArity = 3;
G__5682.cljs$lang$applyTo = (function (arglist__5683){
var x = cljs.core.first(arglist__5683);
var y = cljs.core.first(cljs.core.next(arglist__5683));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5683)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5683)));
return G__5682__delegate(x, y, z, args);
});
G__5682.cljs$lang$arity$variadic = G__5682__delegate;
return G__5682;
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
var G__5681 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5681__delegate.call(this, p1, p2, p3, ps);
};
G__5681.cljs$lang$maxFixedArity = 3;
G__5681.cljs$lang$applyTo = (function (arglist__5684){
var p1 = cljs.core.first(arglist__5684);
var p2 = cljs.core.first(cljs.core.next(arglist__5684));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5684)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5684)));
return G__5681__delegate(p1, p2, p3, ps);
});
G__5681.cljs$lang$arity$variadic = G__5681__delegate;
return G__5681;
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
var temp__3974__auto____5685 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5685))
{var s__5686 = temp__3974__auto____5685;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__5686)),map.call(null,f,cljs.core.rest.call(null,s__5686)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5687 = cljs.core.seq.call(null,c1);
var s2__5688 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____5689 = s1__5687;
if(cljs.core.truth_(and__3822__auto____5689))
{return s2__5688;
} else
{return and__3822__auto____5689;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5687),cljs.core.first.call(null,s2__5688)),map.call(null,f,cljs.core.rest.call(null,s1__5687),cljs.core.rest.call(null,s2__5688)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5690 = cljs.core.seq.call(null,c1);
var s2__5691 = cljs.core.seq.call(null,c2);
var s3__5692 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3822__auto____5693 = s1__5690;
if(cljs.core.truth_(and__3822__auto____5693))
{var and__3822__auto____5694 = s2__5691;
if(cljs.core.truth_(and__3822__auto____5694))
{return s3__5692;
} else
{return and__3822__auto____5694;
}
} else
{return and__3822__auto____5693;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5690),cljs.core.first.call(null,s2__5691),cljs.core.first.call(null,s3__5692)),map.call(null,f,cljs.core.rest.call(null,s1__5690),cljs.core.rest.call(null,s2__5691),cljs.core.rest.call(null,s3__5692)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__5697__delegate = function (f,c1,c2,c3,colls){
var step__5696 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5695 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5695))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__5695),step.call(null,map.call(null,cljs.core.rest,ss__5695)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__5636_SHARP_){
return cljs.core.apply.call(null,f,p1__5636_SHARP_);
}),step__5696.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__5697 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5697__delegate.call(this, f, c1, c2, c3, colls);
};
G__5697.cljs$lang$maxFixedArity = 4;
G__5697.cljs$lang$applyTo = (function (arglist__5698){
var f = cljs.core.first(arglist__5698);
var c1 = cljs.core.first(cljs.core.next(arglist__5698));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5698)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5698))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5698))));
return G__5697__delegate(f, c1, c2, c3, colls);
});
G__5697.cljs$lang$arity$variadic = G__5697__delegate;
return G__5697;
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
{var temp__3974__auto____5699 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5699))
{var s__5700 = temp__3974__auto____5699;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__5700),take.call(null,(n - 1),cljs.core.rest.call(null,s__5700)));
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
var step__5703 = (function (n,coll){
while(true){
var s__5701 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____5702 = (n > 0);
if(and__3822__auto____5702)
{return s__5701;
} else
{return and__3822__auto____5702;
}
})()))
{{
var G__5704 = (n - 1);
var G__5705 = cljs.core.rest.call(null,s__5701);
n = G__5704;
coll = G__5705;
continue;
}
} else
{return s__5701;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__5703.call(null,n,coll);
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
var s__5706 = cljs.core.seq.call(null,coll);
var lead__5707 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__5707))
{{
var G__5708 = cljs.core.next.call(null,s__5706);
var G__5709 = cljs.core.next.call(null,lead__5707);
s__5706 = G__5708;
lead__5707 = G__5709;
continue;
}
} else
{return s__5706;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__5712 = (function (pred,coll){
while(true){
var s__5710 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____5711 = s__5710;
if(cljs.core.truth_(and__3822__auto____5711))
{return pred.call(null,cljs.core.first.call(null,s__5710));
} else
{return and__3822__auto____5711;
}
})()))
{{
var G__5713 = pred;
var G__5714 = cljs.core.rest.call(null,s__5710);
pred = G__5713;
coll = G__5714;
continue;
}
} else
{return s__5710;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__5712.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5715 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5715))
{var s__5716 = temp__3974__auto____5715;
return cljs.core.concat.call(null,s__5716,cycle.call(null,s__5716));
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
var s1__5717 = cljs.core.seq.call(null,c1);
var s2__5718 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3822__auto____5719 = s1__5717;
if(cljs.core.truth_(and__3822__auto____5719))
{return s2__5718;
} else
{return and__3822__auto____5719;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__5717),cljs.core.cons.call(null,cljs.core.first.call(null,s2__5718),interleave.call(null,cljs.core.rest.call(null,s1__5717),cljs.core.rest.call(null,s2__5718))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__5721__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5720 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5720))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__5720),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__5720)));
} else
{return null;
}
})));
};
var G__5721 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5721__delegate.call(this, c1, c2, colls);
};
G__5721.cljs$lang$maxFixedArity = 2;
G__5721.cljs$lang$applyTo = (function (arglist__5722){
var c1 = cljs.core.first(arglist__5722);
var c2 = cljs.core.first(cljs.core.next(arglist__5722));
var colls = cljs.core.rest(cljs.core.next(arglist__5722));
return G__5721__delegate(c1, c2, colls);
});
G__5721.cljs$lang$arity$variadic = G__5721__delegate;
return G__5721;
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
var cat__5725 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____5723 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____5723))
{var coll__5724 = temp__3971__auto____5723;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__5724),cat.call(null,cljs.core.rest.call(null,coll__5724),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__5725.call(null,null,colls);
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
var G__5726__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__5726 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5726__delegate.call(this, f, coll, colls);
};
G__5726.cljs$lang$maxFixedArity = 2;
G__5726.cljs$lang$applyTo = (function (arglist__5727){
var f = cljs.core.first(arglist__5727);
var coll = cljs.core.first(cljs.core.next(arglist__5727));
var colls = cljs.core.rest(cljs.core.next(arglist__5727));
return G__5726__delegate(f, coll, colls);
});
G__5726.cljs$lang$arity$variadic = G__5726__delegate;
return G__5726;
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
var temp__3974__auto____5728 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5728))
{var s__5729 = temp__3974__auto____5728;
var f__5730 = cljs.core.first.call(null,s__5729);
var r__5731 = cljs.core.rest.call(null,s__5729);
if(cljs.core.truth_(pred.call(null,f__5730)))
{return cljs.core.cons.call(null,f__5730,filter.call(null,pred,r__5731));
} else
{return filter.call(null,pred,r__5731);
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
var walk__5733 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__5733.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__5732_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__5732_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__5734__5735 = to;
if((G__5734__5735 != null))
{if((function (){var or__3824__auto____5736 = (G__5734__5735.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____5736)
{return or__3824__auto____5736;
} else
{return G__5734__5735.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__5734__5735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__5734__5735);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__5734__5735);
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
var G__5737__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__5737 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5737__delegate.call(this, f, c1, c2, c3, colls);
};
G__5737.cljs$lang$maxFixedArity = 4;
G__5737.cljs$lang$applyTo = (function (arglist__5738){
var f = cljs.core.first(arglist__5738);
var c1 = cljs.core.first(cljs.core.next(arglist__5738));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5738)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5738))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5738))));
return G__5737__delegate(f, c1, c2, c3, colls);
});
G__5737.cljs$lang$arity$variadic = G__5737__delegate;
return G__5737;
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
var temp__3974__auto____5739 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5739))
{var s__5740 = temp__3974__auto____5739;
var p__5741 = cljs.core.take.call(null,n,s__5740);
if((n === cljs.core.count.call(null,p__5741)))
{return cljs.core.cons.call(null,p__5741,partition.call(null,n,step,cljs.core.drop.call(null,step,s__5740)));
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
var temp__3974__auto____5742 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____5742))
{var s__5743 = temp__3974__auto____5742;
var p__5744 = cljs.core.take.call(null,n,s__5743);
if((n === cljs.core.count.call(null,p__5744)))
{return cljs.core.cons.call(null,p__5744,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__5743)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__5744,pad)));
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
var sentinel__5745 = cljs.core.lookup_sentinel;
var m__5746 = m;
var ks__5747 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__5747))
{var m__5748 = cljs.core.get.call(null,m__5746,cljs.core.first.call(null,ks__5747),sentinel__5745);
if((sentinel__5745 === m__5748))
{return not_found;
} else
{{
var G__5749 = sentinel__5745;
var G__5750 = m__5748;
var G__5751 = cljs.core.next.call(null,ks__5747);
sentinel__5745 = G__5749;
m__5746 = G__5750;
ks__5747 = G__5751;
continue;
}
}
} else
{return m__5746;
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
cljs.core.assoc_in = (function assoc_in(m,p__5752,v){
var vec__5753__5754 = p__5752;
var k__5755 = cljs.core.nth.call(null,vec__5753__5754,0,null);
var ks__5756 = cljs.core.nthnext.call(null,vec__5753__5754,1);
if(cljs.core.truth_(ks__5756))
{return cljs.core.assoc.call(null,m,k__5755,assoc_in.call(null,cljs.core.get.call(null,m,k__5755),ks__5756,v));
} else
{return cljs.core.assoc.call(null,m,k__5755,v);
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
var update_in__delegate = function (m,p__5757,f,args){
var vec__5758__5759 = p__5757;
var k__5760 = cljs.core.nth.call(null,vec__5758__5759,0,null);
var ks__5761 = cljs.core.nthnext.call(null,vec__5758__5759,1);
if(cljs.core.truth_(ks__5761))
{return cljs.core.assoc.call(null,m,k__5760,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__5760),ks__5761,f,args));
} else
{return cljs.core.assoc.call(null,m,k__5760,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__5760),args));
}
};
var update_in = function (m,p__5757,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__5757, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__5762){
var m = cljs.core.first(arglist__5762);
var p__5757 = cljs.core.first(cljs.core.next(arglist__5762));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5762)));
return update_in__delegate(m, p__5757, f, args);
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
var this__5767 = this;
var h__364__auto____5768 = this__5767.__hash;
if((h__364__auto____5768 != null))
{return h__364__auto____5768;
} else
{var h__364__auto____5769 = cljs.core.hash_coll.call(null,coll);
this__5767.__hash = h__364__auto____5769;
return h__364__auto____5769;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5770 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5771 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5772 = this;
var new_array__5773 = cljs.core.aclone.call(null,this__5772.array);
(new_array__5773[k] = v);
return (new cljs.core.Vector(this__5772.meta,new_array__5773,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__5802 = null;
var G__5802__2 = (function (tsym5765,k){
var this__5774 = this;
var tsym5765__5775 = this;
var coll__5776 = tsym5765__5775;
return cljs.core._lookup.call(null,coll__5776,k);
});
var G__5802__3 = (function (tsym5766,k,not_found){
var this__5777 = this;
var tsym5766__5778 = this;
var coll__5779 = tsym5766__5778;
return cljs.core._lookup.call(null,coll__5779,k,not_found);
});
G__5802 = function(tsym5766,k,not_found){
switch(arguments.length){
case 2:
return G__5802__2.call(this,tsym5766,k);
case 3:
return G__5802__3.call(this,tsym5766,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5802;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym5763,args5764){
return tsym5763.call.apply(tsym5763,[tsym5763].concat(cljs.core.aclone.call(null,args5764)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5780 = this;
var new_array__5781 = cljs.core.aclone.call(null,this__5780.array);
new_array__5781.push(o);
return (new cljs.core.Vector(this__5780.meta,new_array__5781,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__5782 = this;
var this$__5783 = this;
return cljs.core.pr_str.call(null,this$__5783);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__5784 = this;
return cljs.core.ci_reduce.call(null,this__5784.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__5785 = this;
return cljs.core.ci_reduce.call(null,this__5785.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5786 = this;
if((this__5786.array.length > 0))
{var vector_seq__5787 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__5786.array.length))
{return cljs.core.cons.call(null,(this__5786.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__5787.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5788 = this;
return this__5788.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5789 = this;
var count__5790 = this__5789.array.length;
if((count__5790 > 0))
{return (this__5789.array[(count__5790 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5791 = this;
if((this__5791.array.length > 0))
{var new_array__5792 = cljs.core.aclone.call(null,this__5791.array);
new_array__5792.pop();
return (new cljs.core.Vector(this__5791.meta,new_array__5792,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__5793 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5795 = this;
return (new cljs.core.Vector(meta,this__5795.array,this__5795.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5796 = this;
return this__5796.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5798 = this;
if((function (){var and__3822__auto____5799 = (0 <= n);
if(and__3822__auto____5799)
{return (n < this__5798.array.length);
} else
{return and__3822__auto____5799;
}
})())
{return (this__5798.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5800 = this;
if((function (){var and__3822__auto____5801 = (0 <= n);
if(and__3822__auto____5801)
{return (n < this__5800.array.length);
} else
{return and__3822__auto____5801;
}
})())
{return (this__5800.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5797 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5797.meta);
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
var cnt__5803 = pv.cnt;
if((cnt__5803 < 32))
{return 0;
} else
{return (((cnt__5803 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__5804 = level;
var ret__5805 = node;
while(true){
if((ll__5804 === 0))
{return ret__5805;
} else
{var embed__5806 = ret__5805;
var r__5807 = cljs.core.pv_fresh_node.call(null,edit);
var ___5808 = cljs.core.pv_aset.call(null,r__5807,0,embed__5806);
{
var G__5809 = (ll__5804 - 5);
var G__5810 = r__5807;
ll__5804 = G__5809;
ret__5805 = G__5810;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__5811 = cljs.core.pv_clone_node.call(null,parent);
var subidx__5812 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__5811,subidx__5812,tailnode);
return ret__5811;
} else
{var temp__3971__auto____5813 = cljs.core.pv_aget.call(null,parent,subidx__5812);
if(cljs.core.truth_(temp__3971__auto____5813))
{var child__5814 = temp__3971__auto____5813;
var node_to_insert__5815 = push_tail.call(null,pv,(level - 5),child__5814,tailnode);
cljs.core.pv_aset.call(null,ret__5811,subidx__5812,node_to_insert__5815);
return ret__5811;
} else
{var node_to_insert__5816 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__5811,subidx__5812,node_to_insert__5816);
return ret__5811;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____5817 = (0 <= i);
if(and__3822__auto____5817)
{return (i < pv.cnt);
} else
{return and__3822__auto____5817;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__5818 = pv.root;
var level__5819 = pv.shift;
while(true){
if((level__5819 > 0))
{{
var G__5820 = cljs.core.pv_aget.call(null,node__5818,((i >>> level__5819) & 31));
var G__5821 = (level__5819 - 5);
node__5818 = G__5820;
level__5819 = G__5821;
continue;
}
} else
{return node__5818.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__5822 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__5822,(i & 31),val);
return ret__5822;
} else
{var subidx__5823 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__5822,subidx__5823,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__5823),i,val));
return ret__5822;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__5824 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__5825 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__5824));
if((function (){var and__3822__auto____5826 = (new_child__5825 == null);
if(and__3822__auto____5826)
{return (subidx__5824 === 0);
} else
{return and__3822__auto____5826;
}
})())
{return null;
} else
{var ret__5827 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__5827,subidx__5824,new_child__5825);
return ret__5827;
}
} else
{if((subidx__5824 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__5828 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__5828,subidx__5824,null);
return ret__5828;
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
var c__5829 = cljs.core._count.call(null,v);
if((c__5829 > 0))
{if((void 0 === cljs.core.t5830))
{
/**
* @constructor
*/
cljs.core.t5830 = (function (c,offset,v,vector_seq,__meta__389__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__389__auto__ = __meta__389__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t5830.cljs$lang$type = true;
cljs.core.t5830.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.t5830");
});
cljs.core.t5830.prototype.cljs$core$ISeqable$ = true;
cljs.core.t5830.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__5831 = this;
return vseq;
});
cljs.core.t5830.prototype.cljs$core$ISeq$ = true;
cljs.core.t5830.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__5832 = this;
return cljs.core._nth.call(null,this__5832.v,this__5832.offset);
});
cljs.core.t5830.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__5833 = this;
var offset__5834 = (this__5833.offset + 1);
if((offset__5834 < this__5833.c))
{return this__5833.vector_seq.call(null,this__5833.v,offset__5834);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t5830.prototype.cljs$core$ASeq$ = true;
cljs.core.t5830.prototype.cljs$core$IEquiv$ = true;
cljs.core.t5830.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__5835 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t5830.prototype.cljs$core$ISequential$ = true;
cljs.core.t5830.prototype.cljs$core$IPrintable$ = true;
cljs.core.t5830.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__5836 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t5830.prototype.cljs$core$IMeta$ = true;
cljs.core.t5830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___390__auto__){
var this__5837 = this;
return this__5837.__meta__389__auto__;
});
cljs.core.t5830.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t5830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___390__auto__,__meta__389__auto__){
var this__5838 = this;
return (new cljs.core.t5830(this__5838.c,this__5838.offset,this__5838.v,this__5838.vector_seq,__meta__389__auto__));
});
cljs.core.t5830;
} else
{}
return (new cljs.core.t5830(c__5829,offset,v,vector_seq,null));
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
var this__5843 = this;
return (new cljs.core.TransientVector(this__5843.cnt,this__5843.shift,cljs.core.tv_editable_root.call(null,this__5843.root),cljs.core.tv_editable_tail.call(null,this__5843.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__5844 = this;
var h__364__auto____5845 = this__5844.__hash;
if((h__364__auto____5845 != null))
{return h__364__auto____5845;
} else
{var h__364__auto____5846 = cljs.core.hash_coll.call(null,coll);
this__5844.__hash = h__364__auto____5846;
return h__364__auto____5846;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5847 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5848 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__5849 = this;
if((function (){var and__3822__auto____5850 = (0 <= k);
if(and__3822__auto____5850)
{return (k < this__5849.cnt);
} else
{return and__3822__auto____5850;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__5851 = cljs.core.aclone.call(null,this__5849.tail);
(new_tail__5851[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__5849.meta,this__5849.cnt,this__5849.shift,this__5849.root,new_tail__5851,null));
} else
{return (new cljs.core.PersistentVector(this__5849.meta,this__5849.cnt,this__5849.shift,cljs.core.do_assoc.call(null,coll,this__5849.shift,this__5849.root,k,v),this__5849.tail,null));
}
} else
{if((k === this__5849.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__5849.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__5896 = null;
var G__5896__2 = (function (tsym5841,k){
var this__5852 = this;
var tsym5841__5853 = this;
var coll__5854 = tsym5841__5853;
return cljs.core._lookup.call(null,coll__5854,k);
});
var G__5896__3 = (function (tsym5842,k,not_found){
var this__5855 = this;
var tsym5842__5856 = this;
var coll__5857 = tsym5842__5856;
return cljs.core._lookup.call(null,coll__5857,k,not_found);
});
G__5896 = function(tsym5842,k,not_found){
switch(arguments.length){
case 2:
return G__5896__2.call(this,tsym5842,k);
case 3:
return G__5896__3.call(this,tsym5842,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5896;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym5839,args5840){
return tsym5839.call.apply(tsym5839,[tsym5839].concat(cljs.core.aclone.call(null,args5840)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__5858 = this;
var step_init__5859 = [0,init];
var i__5860 = 0;
while(true){
if((i__5860 < this__5858.cnt))
{var arr__5861 = cljs.core.array_for.call(null,v,i__5860);
var len__5862 = arr__5861.length;
var init__5866 = (function (){var j__5863 = 0;
var init__5864 = (step_init__5859[1]);
while(true){
if((j__5863 < len__5862))
{var init__5865 = f.call(null,init__5864,(j__5863 + i__5860),(arr__5861[j__5863]));
if(cljs.core.reduced_QMARK_.call(null,init__5865))
{return init__5865;
} else
{{
var G__5897 = (j__5863 + 1);
var G__5898 = init__5865;
j__5863 = G__5897;
init__5864 = G__5898;
continue;
}
}
} else
{(step_init__5859[0] = len__5862);
(step_init__5859[1] = init__5864);
return init__5864;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__5866))
{return cljs.core.deref.call(null,init__5866);
} else
{{
var G__5899 = (i__5860 + (step_init__5859[0]));
i__5860 = G__5899;
continue;
}
}
} else
{return (step_init__5859[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5867 = this;
if(((this__5867.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__5868 = cljs.core.aclone.call(null,this__5867.tail);
new_tail__5868.push(o);
return (new cljs.core.PersistentVector(this__5867.meta,(this__5867.cnt + 1),this__5867.shift,this__5867.root,new_tail__5868,null));
} else
{var root_overflow_QMARK___5869 = ((this__5867.cnt >>> 5) > (1 << this__5867.shift));
var new_shift__5870 = ((root_overflow_QMARK___5869)?(this__5867.shift + 5):this__5867.shift);
var new_root__5872 = ((root_overflow_QMARK___5869)?(function (){var n_r__5871 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__5871,0,this__5867.root);
cljs.core.pv_aset.call(null,n_r__5871,1,cljs.core.new_path.call(null,null,this__5867.shift,(new cljs.core.VectorNode(null,this__5867.tail))));
return n_r__5871;
})():cljs.core.push_tail.call(null,coll,this__5867.shift,this__5867.root,(new cljs.core.VectorNode(null,this__5867.tail))));
return (new cljs.core.PersistentVector(this__5867.meta,(this__5867.cnt + 1),new_shift__5870,new_root__5872,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__5873 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__5874 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__5875 = this;
var this$__5876 = this;
return cljs.core.pr_str.call(null,this$__5876);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__5877 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__5878 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5879 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5880 = this;
return this__5880.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5881 = this;
if((this__5881.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__5881.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5882 = this;
if((this__5882.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__5882.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5882.meta);
} else
{if((1 < (this__5882.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__5882.meta,(this__5882.cnt - 1),this__5882.shift,this__5882.root,this__5882.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__5883 = cljs.core.array_for.call(null,coll,(this__5882.cnt - 2));
var nr__5884 = cljs.core.pop_tail.call(null,coll,this__5882.shift,this__5882.root);
var new_root__5885 = (((nr__5884 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__5884);
var cnt_1__5886 = (this__5882.cnt - 1);
if((function (){var and__3822__auto____5887 = (5 < this__5882.shift);
if(and__3822__auto____5887)
{return (cljs.core.pv_aget.call(null,new_root__5885,1) == null);
} else
{return and__3822__auto____5887;
}
})())
{return (new cljs.core.PersistentVector(this__5882.meta,cnt_1__5886,(this__5882.shift - 5),cljs.core.pv_aget.call(null,new_root__5885,0),new_tail__5883,null));
} else
{return (new cljs.core.PersistentVector(this__5882.meta,cnt_1__5886,this__5882.shift,new_root__5885,new_tail__5883,null));
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
var this__5889 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5890 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5891 = this;
return (new cljs.core.PersistentVector(meta,this__5891.cnt,this__5891.shift,this__5891.root,this__5891.tail,this__5891.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5892 = this;
return this__5892.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5893 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5894 = this;
if((function (){var and__3822__auto____5895 = (0 <= n);
if(and__3822__auto____5895)
{return (n < this__5894.cnt);
} else
{return and__3822__auto____5895;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5888 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5888.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__5900 = cljs.core.seq.call(null,xs);
var out__5901 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__5900))
{{
var G__5902 = cljs.core.next.call(null,xs__5900);
var G__5903 = cljs.core.conj_BANG_.call(null,out__5901,cljs.core.first.call(null,xs__5900));
xs__5900 = G__5902;
out__5901 = G__5903;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__5901);
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
vector.cljs$lang$applyTo = (function (arglist__5904){
var args = cljs.core.seq(arglist__5904);;
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
var this__5909 = this;
var h__364__auto____5910 = this__5909.__hash;
if((h__364__auto____5910 != null))
{return h__364__auto____5910;
} else
{var h__364__auto____5911 = cljs.core.hash_coll.call(null,coll);
this__5909.__hash = h__364__auto____5911;
return h__364__auto____5911;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5912 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5913 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__5914 = this;
var v_pos__5915 = (this__5914.start + key);
return (new cljs.core.Subvec(this__5914.meta,cljs.core._assoc.call(null,this__5914.v,v_pos__5915,val),this__5914.start,((this__5914.end > (v_pos__5915 + 1)) ? this__5914.end : (v_pos__5915 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__5939 = null;
var G__5939__2 = (function (tsym5907,k){
var this__5916 = this;
var tsym5907__5917 = this;
var coll__5918 = tsym5907__5917;
return cljs.core._lookup.call(null,coll__5918,k);
});
var G__5939__3 = (function (tsym5908,k,not_found){
var this__5919 = this;
var tsym5908__5920 = this;
var coll__5921 = tsym5908__5920;
return cljs.core._lookup.call(null,coll__5921,k,not_found);
});
G__5939 = function(tsym5908,k,not_found){
switch(arguments.length){
case 2:
return G__5939__2.call(this,tsym5908,k);
case 3:
return G__5939__3.call(this,tsym5908,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5939;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym5905,args5906){
return tsym5905.call.apply(tsym5905,[tsym5905].concat(cljs.core.aclone.call(null,args5906)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5922 = this;
return (new cljs.core.Subvec(this__5922.meta,cljs.core._assoc_n.call(null,this__5922.v,this__5922.end,o),this__5922.start,(this__5922.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__5923 = this;
var this$__5924 = this;
return cljs.core.pr_str.call(null,this$__5924);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__5925 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__5926 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5927 = this;
var subvec_seq__5928 = (function subvec_seq(i){
if((i === this__5927.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__5927.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__5928.call(null,this__5927.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5929 = this;
return (this__5929.end - this__5929.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__5930 = this;
return cljs.core._nth.call(null,this__5930.v,(this__5930.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__5931 = this;
if((this__5931.start === this__5931.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__5931.meta,this__5931.v,this__5931.start,(this__5931.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__5932 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__5933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__5934 = this;
return (new cljs.core.Subvec(meta,this__5934.v,this__5934.start,this__5934.end,this__5934.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__5935 = this;
return this__5935.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5937 = this;
return cljs.core._nth.call(null,this__5937.v,(this__5937.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5938 = this;
return cljs.core._nth.call(null,this__5938.v,(this__5938.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__5936 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5936.meta);
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
var ret__5940 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__5940,0,tl.length);
return ret__5940;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__5941 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__5942 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__5941,subidx__5942,(((level === 5))?tail_node:(function (){var child__5943 = cljs.core.pv_aget.call(null,ret__5941,subidx__5942);
if((child__5943 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__5943,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__5941;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__5944 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__5945 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__5946 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__5944,subidx__5945));
if((function (){var and__3822__auto____5947 = (new_child__5946 == null);
if(and__3822__auto____5947)
{return (subidx__5945 === 0);
} else
{return and__3822__auto____5947;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__5944,subidx__5945,new_child__5946);
return node__5944;
}
} else
{if((subidx__5945 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__5944,subidx__5945,null);
return node__5944;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____5948 = (0 <= i);
if(and__3822__auto____5948)
{return (i < tv.cnt);
} else
{return and__3822__auto____5948;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__5949 = tv.root;
var node__5950 = root__5949;
var level__5951 = tv.shift;
while(true){
if((level__5951 > 0))
{{
var G__5952 = cljs.core.tv_ensure_editable.call(null,root__5949.edit,cljs.core.pv_aget.call(null,node__5950,((i >>> level__5951) & 31)));
var G__5953 = (level__5951 - 5);
node__5950 = G__5952;
level__5951 = G__5953;
continue;
}
} else
{return node__5950.arr;
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
var G__5991 = null;
var G__5991__2 = (function (tsym5956,k){
var this__5958 = this;
var tsym5956__5959 = this;
var coll__5960 = tsym5956__5959;
return cljs.core._lookup.call(null,coll__5960,k);
});
var G__5991__3 = (function (tsym5957,k,not_found){
var this__5961 = this;
var tsym5957__5962 = this;
var coll__5963 = tsym5957__5962;
return cljs.core._lookup.call(null,coll__5963,k,not_found);
});
G__5991 = function(tsym5957,k,not_found){
switch(arguments.length){
case 2:
return G__5991__2.call(this,tsym5957,k);
case 3:
return G__5991__3.call(this,tsym5957,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5991;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym5954,args5955){
return tsym5954.call.apply(tsym5954,[tsym5954].concat(cljs.core.aclone.call(null,args5955)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__5964 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__5965 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__5966 = this;
if(cljs.core.truth_(this__5966.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__5967 = this;
if((function (){var and__3822__auto____5968 = (0 <= n);
if(and__3822__auto____5968)
{return (n < this__5967.cnt);
} else
{return and__3822__auto____5968;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__5969 = this;
if(cljs.core.truth_(this__5969.root.edit))
{return this__5969.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__5970 = this;
if(cljs.core.truth_(this__5970.root.edit))
{if((function (){var and__3822__auto____5971 = (0 <= n);
if(and__3822__auto____5971)
{return (n < this__5970.cnt);
} else
{return and__3822__auto____5971;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__5970.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__5974 = (function go(level,node){
var node__5972 = cljs.core.tv_ensure_editable.call(null,this__5970.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__5972,(n & 31),val);
return node__5972;
} else
{var subidx__5973 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__5972,subidx__5973,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__5972,subidx__5973)));
return node__5972;
}
}).call(null,this__5970.shift,this__5970.root);
this__5970.root = new_root__5974;
return tcoll;
}
} else
{if((n === this__5970.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__5970.cnt)].join('')));
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
var this__5975 = this;
if(cljs.core.truth_(this__5975.root.edit))
{if((this__5975.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__5975.cnt))
{this__5975.cnt = 0;
return tcoll;
} else
{if((((this__5975.cnt - 1) & 31) > 0))
{this__5975.cnt = (this__5975.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__5976 = cljs.core.editable_array_for.call(null,tcoll,(this__5975.cnt - 2));
var new_root__5978 = (function (){var nr__5977 = cljs.core.tv_pop_tail.call(null,tcoll,this__5975.shift,this__5975.root);
if((nr__5977 != null))
{return nr__5977;
} else
{return (new cljs.core.VectorNode(this__5975.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____5979 = (5 < this__5975.shift);
if(and__3822__auto____5979)
{return (cljs.core.pv_aget.call(null,new_root__5978,1) == null);
} else
{return and__3822__auto____5979;
}
})())
{var new_root__5980 = cljs.core.tv_ensure_editable.call(null,this__5975.root.edit,cljs.core.pv_aget.call(null,new_root__5978,0));
this__5975.root = new_root__5980;
this__5975.shift = (this__5975.shift - 5);
this__5975.cnt = (this__5975.cnt - 1);
this__5975.tail = new_tail__5976;
return tcoll;
} else
{this__5975.root = new_root__5978;
this__5975.cnt = (this__5975.cnt - 1);
this__5975.tail = new_tail__5976;
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
var this__5981 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__5982 = this;
if(cljs.core.truth_(this__5982.root.edit))
{if(((this__5982.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__5982.tail[(this__5982.cnt & 31)] = o);
this__5982.cnt = (this__5982.cnt + 1);
return tcoll;
} else
{var tail_node__5983 = (new cljs.core.VectorNode(this__5982.root.edit,this__5982.tail));
var new_tail__5984 = cljs.core.make_array.call(null,32);
(new_tail__5984[0] = o);
this__5982.tail = new_tail__5984;
if(((this__5982.cnt >>> 5) > (1 << this__5982.shift)))
{var new_root_array__5985 = cljs.core.make_array.call(null,32);
var new_shift__5986 = (this__5982.shift + 5);
(new_root_array__5985[0] = this__5982.root);
(new_root_array__5985[1] = cljs.core.new_path.call(null,this__5982.root.edit,this__5982.shift,tail_node__5983));
this__5982.root = (new cljs.core.VectorNode(this__5982.root.edit,new_root_array__5985));
this__5982.shift = new_shift__5986;
this__5982.cnt = (this__5982.cnt + 1);
return tcoll;
} else
{var new_root__5987 = cljs.core.tv_push_tail.call(null,tcoll,this__5982.shift,this__5982.root,tail_node__5983);
this__5982.root = new_root__5987;
this__5982.cnt = (this__5982.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__5988 = this;
if(cljs.core.truth_(this__5988.root.edit))
{this__5988.root.edit = null;
var len__5989 = (this__5988.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__5990 = cljs.core.make_array.call(null,len__5989);
cljs.core.array_copy.call(null,this__5988.tail,0,trimmed_tail__5990,0,len__5989);
return (new cljs.core.PersistentVector(null,this__5988.cnt,this__5988.shift,this__5988.root,trimmed_tail__5990,null));
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
var this__5992 = this;
var h__364__auto____5993 = this__5992.__hash;
if((h__364__auto____5993 != null))
{return h__364__auto____5993;
} else
{var h__364__auto____5994 = cljs.core.hash_coll.call(null,coll);
this__5992.__hash = h__364__auto____5994;
return h__364__auto____5994;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__5995 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__5996 = this;
var this$__5997 = this;
return cljs.core.pr_str.call(null,this$__5997);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__5998 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__5999 = this;
return cljs.core._first.call(null,this__5999.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6000 = this;
var temp__3971__auto____6001 = cljs.core.next.call(null,this__6000.front);
if(cljs.core.truth_(temp__3971__auto____6001))
{var f1__6002 = temp__3971__auto____6001;
return (new cljs.core.PersistentQueueSeq(this__6000.meta,f1__6002,this__6000.rear,null));
} else
{if((this__6000.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__6000.meta,this__6000.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6003 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6004 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__6004.front,this__6004.rear,this__6004.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6005 = this;
return this__6005.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6006 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6006.meta);
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
var this__6007 = this;
var h__364__auto____6008 = this__6007.__hash;
if((h__364__auto____6008 != null))
{return h__364__auto____6008;
} else
{var h__364__auto____6009 = cljs.core.hash_coll.call(null,coll);
this__6007.__hash = h__364__auto____6009;
return h__364__auto____6009;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6010 = this;
if(cljs.core.truth_(this__6010.front))
{return (new cljs.core.PersistentQueue(this__6010.meta,(this__6010.count + 1),this__6010.front,cljs.core.conj.call(null,(function (){var or__3824__auto____6011 = this__6010.rear;
if(cljs.core.truth_(or__3824__auto____6011))
{return or__3824__auto____6011;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__6010.meta,(this__6010.count + 1),cljs.core.conj.call(null,this__6010.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__6012 = this;
var this$__6013 = this;
return cljs.core.pr_str.call(null,this$__6013);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6014 = this;
var rear__6015 = cljs.core.seq.call(null,this__6014.rear);
if(cljs.core.truth_((function (){var or__3824__auto____6016 = this__6014.front;
if(cljs.core.truth_(or__3824__auto____6016))
{return or__3824__auto____6016;
} else
{return rear__6015;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__6014.front,cljs.core.seq.call(null,rear__6015),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6017 = this;
return this__6017.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6018 = this;
return cljs.core._first.call(null,this__6018.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6019 = this;
if(cljs.core.truth_(this__6019.front))
{var temp__3971__auto____6020 = cljs.core.next.call(null,this__6019.front);
if(cljs.core.truth_(temp__3971__auto____6020))
{var f1__6021 = temp__3971__auto____6020;
return (new cljs.core.PersistentQueue(this__6019.meta,(this__6019.count - 1),f1__6021,this__6019.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__6019.meta,(this__6019.count - 1),cljs.core.seq.call(null,this__6019.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6022 = this;
return cljs.core.first.call(null,this__6022.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6023 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6024 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6025 = this;
return (new cljs.core.PersistentQueue(meta,this__6025.count,this__6025.front,this__6025.rear,this__6025.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6026 = this;
return this__6026.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6027 = this;
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
var this__6028 = this;
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
var len__6029 = array.length;
var i__6030 = 0;
while(true){
if((i__6030 < len__6029))
{if(cljs.core._EQ_.call(null,k,(array[i__6030])))
{return i__6030;
} else
{{
var G__6031 = (i__6030 + incr);
i__6030 = G__6031;
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
if(cljs.core.truth_((function (){var and__3822__auto____6032 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____6032))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____6032;
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
var a__6033 = cljs.core.hash.call(null,a);
var b__6034 = cljs.core.hash.call(null,b);
if((a__6033 < b__6034))
{return -1;
} else
{if((a__6033 > b__6034))
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
var ks__6036 = m.keys;
var len__6037 = ks__6036.length;
var so__6038 = m.strobj;
var out__6039 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__6040 = 0;
var out__6041 = cljs.core.transient$.call(null,out__6039);
while(true){
if((i__6040 < len__6037))
{var k__6042 = (ks__6036[i__6040]);
{
var G__6043 = (i__6040 + 1);
var G__6044 = cljs.core.assoc_BANG_.call(null,out__6041,k__6042,(so__6038[k__6042]));
i__6040 = G__6043;
out__6041 = G__6044;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__6041,k,v));
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
var this__6049 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6050 = this;
var h__364__auto____6051 = this__6050.__hash;
if((h__364__auto____6051 != null))
{return h__364__auto____6051;
} else
{var h__364__auto____6052 = cljs.core.hash_imap.call(null,coll);
this__6050.__hash = h__364__auto____6052;
return h__364__auto____6052;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__6053 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__6054 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6054.strobj,(this__6054.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__6055 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___6056 = this__6055.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___6056))
{var new_strobj__6057 = goog.object.clone.call(null,this__6055.strobj);
(new_strobj__6057[k] = v);
return (new cljs.core.ObjMap(this__6055.meta,this__6055.keys,new_strobj__6057,(this__6055.update_count + 1),null));
} else
{if((this__6055.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__6058 = goog.object.clone.call(null,this__6055.strobj);
var new_keys__6059 = cljs.core.aclone.call(null,this__6055.keys);
(new_strobj__6058[k] = v);
new_keys__6059.push(k);
return (new cljs.core.ObjMap(this__6055.meta,new_keys__6059,new_strobj__6058,(this__6055.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__6060 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6060.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__6080 = null;
var G__6080__2 = (function (tsym6047,k){
var this__6061 = this;
var tsym6047__6062 = this;
var coll__6063 = tsym6047__6062;
return cljs.core._lookup.call(null,coll__6063,k);
});
var G__6080__3 = (function (tsym6048,k,not_found){
var this__6064 = this;
var tsym6048__6065 = this;
var coll__6066 = tsym6048__6065;
return cljs.core._lookup.call(null,coll__6066,k,not_found);
});
G__6080 = function(tsym6048,k,not_found){
switch(arguments.length){
case 2:
return G__6080__2.call(this,tsym6048,k);
case 3:
return G__6080__3.call(this,tsym6048,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6080;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym6045,args6046){
return tsym6045.call.apply(tsym6045,[tsym6045].concat(cljs.core.aclone.call(null,args6046)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__6067 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__6068 = this;
var this$__6069 = this;
return cljs.core.pr_str.call(null,this$__6069);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6070 = this;
if((this__6070.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__6035_SHARP_){
return cljs.core.vector.call(null,p1__6035_SHARP_,(this__6070.strobj[p1__6035_SHARP_]));
}),this__6070.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6071 = this;
return this__6071.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6072 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6073 = this;
return (new cljs.core.ObjMap(meta,this__6073.keys,this__6073.strobj,this__6073.update_count,this__6073.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6074 = this;
return this__6074.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6075 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6075.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__6076 = this;
if(cljs.core.truth_((function (){var and__3822__auto____6077 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3822__auto____6077))
{return this__6076.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____6077;
}
})()))
{var new_keys__6078 = cljs.core.aclone.call(null,this__6076.keys);
var new_strobj__6079 = goog.object.clone.call(null,this__6076.strobj);
new_keys__6078.splice(cljs.core.scan_array.call(null,1,k,new_keys__6078),1);
cljs.core.js_delete.call(null,new_strobj__6079,k);
return (new cljs.core.ObjMap(this__6076.meta,new_keys__6078,new_strobj__6079,(this__6076.update_count + 1),null));
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
var this__6086 = this;
var h__364__auto____6087 = this__6086.__hash;
if((h__364__auto____6087 != null))
{return h__364__auto____6087;
} else
{var h__364__auto____6088 = cljs.core.hash_imap.call(null,coll);
this__6086.__hash = h__364__auto____6088;
return h__364__auto____6088;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__6089 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__6090 = this;
var bucket__6091 = (this__6090.hashobj[cljs.core.hash.call(null,k)]);
var i__6092 = (cljs.core.truth_(bucket__6091)?cljs.core.scan_array.call(null,2,k,bucket__6091):null);
if(cljs.core.truth_(i__6092))
{return (bucket__6091[(i__6092 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__6093 = this;
var h__6094 = cljs.core.hash.call(null,k);
var bucket__6095 = (this__6093.hashobj[h__6094]);
if(cljs.core.truth_(bucket__6095))
{var new_bucket__6096 = cljs.core.aclone.call(null,bucket__6095);
var new_hashobj__6097 = goog.object.clone.call(null,this__6093.hashobj);
(new_hashobj__6097[h__6094] = new_bucket__6096);
var temp__3971__auto____6098 = cljs.core.scan_array.call(null,2,k,new_bucket__6096);
if(cljs.core.truth_(temp__3971__auto____6098))
{var i__6099 = temp__3971__auto____6098;
(new_bucket__6096[(i__6099 + 1)] = v);
return (new cljs.core.HashMap(this__6093.meta,this__6093.count,new_hashobj__6097,null));
} else
{new_bucket__6096.push(k,v);
return (new cljs.core.HashMap(this__6093.meta,(this__6093.count + 1),new_hashobj__6097,null));
}
} else
{var new_hashobj__6100 = goog.object.clone.call(null,this__6093.hashobj);
(new_hashobj__6100[h__6094] = [k,v]);
return (new cljs.core.HashMap(this__6093.meta,(this__6093.count + 1),new_hashobj__6100,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__6101 = this;
var bucket__6102 = (this__6101.hashobj[cljs.core.hash.call(null,k)]);
var i__6103 = (cljs.core.truth_(bucket__6102)?cljs.core.scan_array.call(null,2,k,bucket__6102):null);
if(cljs.core.truth_(i__6103))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__6126 = null;
var G__6126__2 = (function (tsym6084,k){
var this__6104 = this;
var tsym6084__6105 = this;
var coll__6106 = tsym6084__6105;
return cljs.core._lookup.call(null,coll__6106,k);
});
var G__6126__3 = (function (tsym6085,k,not_found){
var this__6107 = this;
var tsym6085__6108 = this;
var coll__6109 = tsym6085__6108;
return cljs.core._lookup.call(null,coll__6109,k,not_found);
});
G__6126 = function(tsym6085,k,not_found){
switch(arguments.length){
case 2:
return G__6126__2.call(this,tsym6085,k);
case 3:
return G__6126__3.call(this,tsym6085,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6126;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym6082,args6083){
return tsym6082.call.apply(tsym6082,[tsym6082].concat(cljs.core.aclone.call(null,args6083)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__6110 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__6111 = this;
var this$__6112 = this;
return cljs.core.pr_str.call(null,this$__6112);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6113 = this;
if((this__6113.count > 0))
{var hashes__6114 = cljs.core.js_keys.call(null,this__6113.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__6081_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6113.hashobj[p1__6081_SHARP_])));
}),hashes__6114);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6115 = this;
return this__6115.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6116 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6117 = this;
return (new cljs.core.HashMap(meta,this__6117.count,this__6117.hashobj,this__6117.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6118 = this;
return this__6118.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6119 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6119.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__6120 = this;
var h__6121 = cljs.core.hash.call(null,k);
var bucket__6122 = (this__6120.hashobj[h__6121]);
var i__6123 = (cljs.core.truth_(bucket__6122)?cljs.core.scan_array.call(null,2,k,bucket__6122):null);
if(cljs.core.not.call(null,i__6123))
{return coll;
} else
{var new_hashobj__6124 = goog.object.clone.call(null,this__6120.hashobj);
if((3 > bucket__6122.length))
{cljs.core.js_delete.call(null,new_hashobj__6124,h__6121);
} else
{var new_bucket__6125 = cljs.core.aclone.call(null,bucket__6122);
new_bucket__6125.splice(i__6123,2);
(new_hashobj__6124[h__6121] = new_bucket__6125);
}
return (new cljs.core.HashMap(this__6120.meta,(this__6120.count - 1),new_hashobj__6124,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6127 = ks.length;
var i__6128 = 0;
var out__6129 = cljs.core.HashMap.EMPTY;
while(true){
if((i__6128 < len__6127))
{{
var G__6130 = (i__6128 + 1);
var G__6131 = cljs.core.assoc.call(null,out__6129,(ks[i__6128]),(vs[i__6128]));
i__6128 = G__6130;
out__6129 = G__6131;
continue;
}
} else
{return out__6129;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__6132 = m.arr;
var len__6133 = arr__6132.length;
var i__6134 = 0;
while(true){
if((len__6133 <= i__6134))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__6132[i__6134]),k))
{return i__6134;
} else
{if("\uFDD0'else")
{{
var G__6135 = (i__6134 + 2);
i__6134 = G__6135;
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
var this__6140 = this;
return (new cljs.core.TransientArrayMap({},this__6140.arr.length,cljs.core.aclone.call(null,this__6140.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6141 = this;
var h__364__auto____6142 = this__6141.__hash;
if((h__364__auto____6142 != null))
{return h__364__auto____6142;
} else
{var h__364__auto____6143 = cljs.core.hash_imap.call(null,coll);
this__6141.__hash = h__364__auto____6143;
return h__364__auto____6143;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__6144 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__6145 = this;
var idx__6146 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__6146 === -1))
{return not_found;
} else
{return (this__6145.arr[(idx__6146 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__6147 = this;
var idx__6148 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__6148 === -1))
{if((this__6147.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__6147.meta,(this__6147.cnt + 1),(function (){var G__6149__6150 = cljs.core.aclone.call(null,this__6147.arr);
G__6149__6150.push(k);
G__6149__6150.push(v);
return G__6149__6150;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__6147.arr[(idx__6148 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__6147.meta,this__6147.cnt,(function (){var G__6151__6152 = cljs.core.aclone.call(null,this__6147.arr);
(G__6151__6152[(idx__6148 + 1)] = v);
return G__6151__6152;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__6153 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__6183 = null;
var G__6183__2 = (function (tsym6138,k){
var this__6154 = this;
var tsym6138__6155 = this;
var coll__6156 = tsym6138__6155;
return cljs.core._lookup.call(null,coll__6156,k);
});
var G__6183__3 = (function (tsym6139,k,not_found){
var this__6157 = this;
var tsym6139__6158 = this;
var coll__6159 = tsym6139__6158;
return cljs.core._lookup.call(null,coll__6159,k,not_found);
});
G__6183 = function(tsym6139,k,not_found){
switch(arguments.length){
case 2:
return G__6183__2.call(this,tsym6139,k);
case 3:
return G__6183__3.call(this,tsym6139,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6183;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym6136,args6137){
return tsym6136.call.apply(tsym6136,[tsym6136].concat(cljs.core.aclone.call(null,args6137)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__6160 = this;
var len__6161 = this__6160.arr.length;
var i__6162 = 0;
var init__6163 = init;
while(true){
if((i__6162 < len__6161))
{var init__6164 = f.call(null,init__6163,(this__6160.arr[i__6162]),(this__6160.arr[(i__6162 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__6164))
{return cljs.core.deref.call(null,init__6164);
} else
{{
var G__6184 = (i__6162 + 2);
var G__6185 = init__6164;
i__6162 = G__6184;
init__6163 = G__6185;
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
var this__6165 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__6166 = this;
var this$__6167 = this;
return cljs.core.pr_str.call(null,this$__6167);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6168 = this;
if((this__6168.cnt > 0))
{var len__6169 = this__6168.arr.length;
var array_map_seq__6170 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__6169))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__6168.arr[i]),(this__6168.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__6170.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6171 = this;
return this__6171.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6172 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6173 = this;
return (new cljs.core.PersistentArrayMap(meta,this__6173.cnt,this__6173.arr,this__6173.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6174 = this;
return this__6174.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6175 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6175.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__6176 = this;
var idx__6177 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__6177 >= 0))
{var len__6178 = this__6176.arr.length;
var new_len__6179 = (len__6178 - 2);
if((new_len__6179 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__6180 = cljs.core.make_array.call(null,new_len__6179);
var s__6181 = 0;
var d__6182 = 0;
while(true){
if((s__6181 >= len__6178))
{return (new cljs.core.PersistentArrayMap(this__6176.meta,(this__6176.cnt - 1),new_arr__6180,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__6176.arr[s__6181])))
{{
var G__6186 = (s__6181 + 2);
var G__6187 = d__6182;
s__6181 = G__6186;
d__6182 = G__6187;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__6180[d__6182] = (this__6176.arr[s__6181]));
(new_arr__6180[(d__6182 + 1)] = (this__6176.arr[(s__6181 + 1)]));
{
var G__6188 = (s__6181 + 2);
var G__6189 = (d__6182 + 2);
s__6181 = G__6188;
d__6182 = G__6189;
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
var len__6190 = cljs.core.count.call(null,ks);
var i__6191 = 0;
var out__6192 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__6191 < len__6190))
{{
var G__6193 = (i__6191 + 1);
var G__6194 = cljs.core.assoc_BANG_.call(null,out__6192,(ks[i__6191]),(vs[i__6191]));
i__6191 = G__6193;
out__6192 = G__6194;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__6192);
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
var this__6195 = this;
if(cljs.core.truth_(this__6195.editable_QMARK_))
{var idx__6196 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__6196 >= 0))
{(this__6195.arr[idx__6196] = (this__6195.arr[(this__6195.len - 2)]));
(this__6195.arr[(idx__6196 + 1)] = (this__6195.arr[(this__6195.len - 1)]));
var G__6197__6198 = this__6195.arr;
G__6197__6198.pop();
G__6197__6198.pop();
G__6197__6198;
this__6195.len = (this__6195.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__6199 = this;
if(cljs.core.truth_(this__6199.editable_QMARK_))
{var idx__6200 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__6200 === -1))
{if(((this__6199.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__6199.len = (this__6199.len + 2);
this__6199.arr.push(key);
this__6199.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__6199.len,this__6199.arr),key,val);
}
} else
{if((val === (this__6199.arr[(idx__6200 + 1)])))
{return tcoll;
} else
{(this__6199.arr[(idx__6200 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__6201 = this;
if(cljs.core.truth_(this__6201.editable_QMARK_))
{if((function (){var G__6202__6203 = o;
if((G__6202__6203 != null))
{if((function (){var or__3824__auto____6204 = (G__6202__6203.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6204)
{return or__3824__auto____6204;
} else
{return G__6202__6203.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__6202__6203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__6202__6203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__6202__6203);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__6205 = cljs.core.seq.call(null,o);
var tcoll__6206 = tcoll;
while(true){
var temp__3971__auto____6207 = cljs.core.first.call(null,es__6205);
if(cljs.core.truth_(temp__3971__auto____6207))
{var e__6208 = temp__3971__auto____6207;
{
var G__6214 = cljs.core.next.call(null,es__6205);
var G__6215 = cljs.core._assoc_BANG_.call(null,tcoll__6206,cljs.core.key.call(null,e__6208),cljs.core.val.call(null,e__6208));
es__6205 = G__6214;
tcoll__6206 = G__6215;
continue;
}
} else
{return tcoll__6206;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__6209 = this;
if(cljs.core.truth_(this__6209.editable_QMARK_))
{this__6209.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__6209.len,2),this__6209.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__6210 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__6211 = this;
if(cljs.core.truth_(this__6211.editable_QMARK_))
{var idx__6212 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__6212 === -1))
{return not_found;
} else
{return (this__6211.arr[(idx__6212 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__6213 = this;
if(cljs.core.truth_(this__6213.editable_QMARK_))
{return cljs.core.quot.call(null,this__6213.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__6216 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__6217 = 0;
while(true){
if((i__6217 < len))
{{
var G__6218 = cljs.core.assoc_BANG_.call(null,out__6216,(arr[i__6217]),(arr[(i__6217 + 1)]));
var G__6219 = (i__6217 + 2);
out__6216 = G__6218;
i__6217 = G__6219;
continue;
}
} else
{return out__6216;
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
var G__6220__6221 = cljs.core.aclone.call(null,arr);
(G__6220__6221[i] = a);
return G__6220__6221;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__6222__6223 = cljs.core.aclone.call(null,arr);
(G__6222__6223[i] = a);
(G__6222__6223[j] = b);
return G__6222__6223;
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
var new_arr__6224 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__6224,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__6224,(2 * i),(new_arr__6224.length - (2 * i)));
return new_arr__6224;
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
var editable__6225 = inode.ensure_editable(edit);
(editable__6225.arr[i] = a);
return editable__6225;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__6226 = inode.ensure_editable(edit);
(editable__6226.arr[i] = a);
(editable__6226.arr[j] = b);
return editable__6226;
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
var len__6227 = arr.length;
var i__6228 = 0;
var init__6229 = init;
while(true){
if((i__6228 < len__6227))
{var init__6232 = (function (){var k__6230 = (arr[i__6228]);
if((k__6230 != null))
{return f.call(null,init__6229,k__6230,(arr[(i__6228 + 1)]));
} else
{var node__6231 = (arr[(i__6228 + 1)]);
if((node__6231 != null))
{return node__6231.kv_reduce(f,init__6229);
} else
{return init__6229;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__6232))
{return cljs.core.deref.call(null,init__6232);
} else
{{
var G__6233 = (i__6228 + 2);
var G__6234 = init__6232;
i__6228 = G__6233;
init__6229 = G__6234;
continue;
}
}
} else
{return init__6229;
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
var this__6235 = this;
var inode__6236 = this;
if((this__6235.bitmap === bit))
{return null;
} else
{var editable__6237 = inode__6236.ensure_editable(e);
var earr__6238 = editable__6237.arr;
var len__6239 = earr__6238.length;
editable__6237.bitmap = (bit ^ editable__6237.bitmap);
cljs.core.array_copy.call(null,earr__6238,(2 * (i + 1)),earr__6238,(2 * i),(len__6239 - (2 * (i + 1))));
(earr__6238[(len__6239 - 2)] = null);
(earr__6238[(len__6239 - 1)] = null);
return editable__6237;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__6240 = this;
var inode__6241 = this;
var bit__6242 = (1 << ((hash >>> shift) & 0x01f));
var idx__6243 = cljs.core.bitmap_indexed_node_index.call(null,this__6240.bitmap,bit__6242);
if(((this__6240.bitmap & bit__6242) === 0))
{var n__6244 = cljs.core.bit_count.call(null,this__6240.bitmap);
if(((2 * n__6244) < this__6240.arr.length))
{var editable__6245 = inode__6241.ensure_editable(edit);
var earr__6246 = editable__6245.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__6246,(2 * idx__6243),earr__6246,(2 * (idx__6243 + 1)),(2 * (n__6244 - idx__6243)));
(earr__6246[(2 * idx__6243)] = key);
(earr__6246[((2 * idx__6243) + 1)] = val);
editable__6245.bitmap = (editable__6245.bitmap | bit__6242);
return editable__6245;
} else
{if((n__6244 >= 16))
{var nodes__6247 = cljs.core.make_array.call(null,32);
var jdx__6248 = ((hash >>> shift) & 0x01f);
(nodes__6247[jdx__6248] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__6249 = 0;
var j__6250 = 0;
while(true){
if((i__6249 < 32))
{if((((this__6240.bitmap >>> i__6249) & 1) === 0))
{{
var G__6303 = (i__6249 + 1);
var G__6304 = j__6250;
i__6249 = G__6303;
j__6250 = G__6304;
continue;
}
} else
{(nodes__6247[i__6249] = (((null != (this__6240.arr[j__6250])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__6240.arr[j__6250])),(this__6240.arr[j__6250]),(this__6240.arr[(j__6250 + 1)]),added_leaf_QMARK_):(this__6240.arr[(j__6250 + 1)])));
{
var G__6305 = (i__6249 + 1);
var G__6306 = (j__6250 + 2);
i__6249 = G__6305;
j__6250 = G__6306;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__6244 + 1),nodes__6247));
} else
{if("\uFDD0'else")
{var new_arr__6251 = cljs.core.make_array.call(null,(2 * (n__6244 + 4)));
cljs.core.array_copy.call(null,this__6240.arr,0,new_arr__6251,0,(2 * idx__6243));
(new_arr__6251[(2 * idx__6243)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__6251[((2 * idx__6243) + 1)] = val);
cljs.core.array_copy.call(null,this__6240.arr,(2 * idx__6243),new_arr__6251,(2 * (idx__6243 + 1)),(2 * (n__6244 - idx__6243)));
var editable__6252 = inode__6241.ensure_editable(edit);
editable__6252.arr = new_arr__6251;
editable__6252.bitmap = (editable__6252.bitmap | bit__6242);
return editable__6252;
} else
{return null;
}
}
}
} else
{var key_or_nil__6253 = (this__6240.arr[(2 * idx__6243)]);
var val_or_node__6254 = (this__6240.arr[((2 * idx__6243) + 1)]);
if((null == key_or_nil__6253))
{var n__6255 = val_or_node__6254.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__6255 === val_or_node__6254))
{return inode__6241;
} else
{return cljs.core.edit_and_set.call(null,inode__6241,edit,((2 * idx__6243) + 1),n__6255);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6253))
{if((val === val_or_node__6254))
{return inode__6241;
} else
{return cljs.core.edit_and_set.call(null,inode__6241,edit,((2 * idx__6243) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__6241,edit,(2 * idx__6243),null,((2 * idx__6243) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__6253,val_or_node__6254,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__6256 = this;
var inode__6257 = this;
return cljs.core.create_inode_seq.call(null,this__6256.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__6258 = this;
var inode__6259 = this;
var bit__6260 = (1 << ((hash >>> shift) & 0x01f));
if(((this__6258.bitmap & bit__6260) === 0))
{return inode__6259;
} else
{var idx__6261 = cljs.core.bitmap_indexed_node_index.call(null,this__6258.bitmap,bit__6260);
var key_or_nil__6262 = (this__6258.arr[(2 * idx__6261)]);
var val_or_node__6263 = (this__6258.arr[((2 * idx__6261) + 1)]);
if((null == key_or_nil__6262))
{var n__6264 = val_or_node__6263.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__6264 === val_or_node__6263))
{return inode__6259;
} else
{if((null != n__6264))
{return cljs.core.edit_and_set.call(null,inode__6259,edit,((2 * idx__6261) + 1),n__6264);
} else
{if((this__6258.bitmap === bit__6260))
{return null;
} else
{if("\uFDD0'else")
{return inode__6259.edit_and_remove_pair(edit,bit__6260,idx__6261);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6262))
{(removed_leaf_QMARK_[0] = true);
return inode__6259.edit_and_remove_pair(edit,bit__6260,idx__6261);
} else
{if("\uFDD0'else")
{return inode__6259;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__6265 = this;
var inode__6266 = this;
if((e === this__6265.edit))
{return inode__6266;
} else
{var n__6267 = cljs.core.bit_count.call(null,this__6265.bitmap);
var new_arr__6268 = cljs.core.make_array.call(null,(((n__6267 < 0))?4:(2 * (n__6267 + 1))));
cljs.core.array_copy.call(null,this__6265.arr,0,new_arr__6268,0,(2 * n__6267));
return (new cljs.core.BitmapIndexedNode(e,this__6265.bitmap,new_arr__6268));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__6269 = this;
var inode__6270 = this;
return cljs.core.inode_kv_reduce.call(null,this__6269.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__6307 = null;
var G__6307__3 = (function (shift,hash,key){
var this__6271 = this;
var inode__6272 = this;
var bit__6273 = (1 << ((hash >>> shift) & 0x01f));
if(((this__6271.bitmap & bit__6273) === 0))
{return null;
} else
{var idx__6274 = cljs.core.bitmap_indexed_node_index.call(null,this__6271.bitmap,bit__6273);
var key_or_nil__6275 = (this__6271.arr[(2 * idx__6274)]);
var val_or_node__6276 = (this__6271.arr[((2 * idx__6274) + 1)]);
if((null == key_or_nil__6275))
{return val_or_node__6276.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6275))
{return cljs.core.PersistentVector.fromArray([key_or_nil__6275,val_or_node__6276]);
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
var G__6307__4 = (function (shift,hash,key,not_found){
var this__6277 = this;
var inode__6278 = this;
var bit__6279 = (1 << ((hash >>> shift) & 0x01f));
if(((this__6277.bitmap & bit__6279) === 0))
{return not_found;
} else
{var idx__6280 = cljs.core.bitmap_indexed_node_index.call(null,this__6277.bitmap,bit__6279);
var key_or_nil__6281 = (this__6277.arr[(2 * idx__6280)]);
var val_or_node__6282 = (this__6277.arr[((2 * idx__6280) + 1)]);
if((null == key_or_nil__6281))
{return val_or_node__6282.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6281))
{return cljs.core.PersistentVector.fromArray([key_or_nil__6281,val_or_node__6282]);
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
G__6307 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__6307__3.call(this,shift,hash,key);
case 4:
return G__6307__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6307;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__6283 = this;
var inode__6284 = this;
var bit__6285 = (1 << ((hash >>> shift) & 0x01f));
if(((this__6283.bitmap & bit__6285) === 0))
{return inode__6284;
} else
{var idx__6286 = cljs.core.bitmap_indexed_node_index.call(null,this__6283.bitmap,bit__6285);
var key_or_nil__6287 = (this__6283.arr[(2 * idx__6286)]);
var val_or_node__6288 = (this__6283.arr[((2 * idx__6286) + 1)]);
if((null == key_or_nil__6287))
{var n__6289 = val_or_node__6288.inode_without((shift + 5),hash,key);
if((n__6289 === val_or_node__6288))
{return inode__6284;
} else
{if((null != n__6289))
{return (new cljs.core.BitmapIndexedNode(null,this__6283.bitmap,cljs.core.clone_and_set.call(null,this__6283.arr,((2 * idx__6286) + 1),n__6289)));
} else
{if((this__6283.bitmap === bit__6285))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__6283.bitmap ^ bit__6285),cljs.core.remove_pair.call(null,this__6283.arr,idx__6286)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6287))
{return (new cljs.core.BitmapIndexedNode(null,(this__6283.bitmap ^ bit__6285),cljs.core.remove_pair.call(null,this__6283.arr,idx__6286)));
} else
{if("\uFDD0'else")
{return inode__6284;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__6290 = this;
var inode__6291 = this;
var bit__6292 = (1 << ((hash >>> shift) & 0x01f));
var idx__6293 = cljs.core.bitmap_indexed_node_index.call(null,this__6290.bitmap,bit__6292);
if(((this__6290.bitmap & bit__6292) === 0))
{var n__6294 = cljs.core.bit_count.call(null,this__6290.bitmap);
if((n__6294 >= 16))
{var nodes__6295 = cljs.core.make_array.call(null,32);
var jdx__6296 = ((hash >>> shift) & 0x01f);
(nodes__6295[jdx__6296] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__6297 = 0;
var j__6298 = 0;
while(true){
if((i__6297 < 32))
{if((((this__6290.bitmap >>> i__6297) & 1) === 0))
{{
var G__6308 = (i__6297 + 1);
var G__6309 = j__6298;
i__6297 = G__6308;
j__6298 = G__6309;
continue;
}
} else
{(nodes__6295[i__6297] = (((null != (this__6290.arr[j__6298])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__6290.arr[j__6298])),(this__6290.arr[j__6298]),(this__6290.arr[(j__6298 + 1)]),added_leaf_QMARK_):(this__6290.arr[(j__6298 + 1)])));
{
var G__6310 = (i__6297 + 1);
var G__6311 = (j__6298 + 2);
i__6297 = G__6310;
j__6298 = G__6311;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__6294 + 1),nodes__6295));
} else
{var new_arr__6299 = cljs.core.make_array.call(null,(2 * (n__6294 + 1)));
cljs.core.array_copy.call(null,this__6290.arr,0,new_arr__6299,0,(2 * idx__6293));
(new_arr__6299[(2 * idx__6293)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__6299[((2 * idx__6293) + 1)] = val);
cljs.core.array_copy.call(null,this__6290.arr,(2 * idx__6293),new_arr__6299,(2 * (idx__6293 + 1)),(2 * (n__6294 - idx__6293)));
return (new cljs.core.BitmapIndexedNode(null,(this__6290.bitmap | bit__6292),new_arr__6299));
}
} else
{var key_or_nil__6300 = (this__6290.arr[(2 * idx__6293)]);
var val_or_node__6301 = (this__6290.arr[((2 * idx__6293) + 1)]);
if((null == key_or_nil__6300))
{var n__6302 = val_or_node__6301.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__6302 === val_or_node__6301))
{return inode__6291;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__6290.bitmap,cljs.core.clone_and_set.call(null,this__6290.arr,((2 * idx__6293) + 1),n__6302)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__6300))
{if((val === val_or_node__6301))
{return inode__6291;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__6290.bitmap,cljs.core.clone_and_set.call(null,this__6290.arr,((2 * idx__6293) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__6290.bitmap,cljs.core.clone_and_set.call(null,this__6290.arr,(2 * idx__6293),null,((2 * idx__6293) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__6300,val_or_node__6301,hash,key,val))));
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
var arr__6312 = array_node.arr;
var len__6313 = (2 * (array_node.cnt - 1));
var new_arr__6314 = cljs.core.make_array.call(null,len__6313);
var i__6315 = 0;
var j__6316 = 1;
var bitmap__6317 = 0;
while(true){
if((i__6315 < len__6313))
{if((function (){var and__3822__auto____6318 = (i__6315 != idx);
if(and__3822__auto____6318)
{return (null != (arr__6312[i__6315]));
} else
{return and__3822__auto____6318;
}
})())
{(new_arr__6314[j__6316] = (arr__6312[i__6315]));
{
var G__6319 = (i__6315 + 1);
var G__6320 = (j__6316 + 2);
var G__6321 = (bitmap__6317 | (1 << i__6315));
i__6315 = G__6319;
j__6316 = G__6320;
bitmap__6317 = G__6321;
continue;
}
} else
{{
var G__6322 = (i__6315 + 1);
var G__6323 = j__6316;
var G__6324 = bitmap__6317;
i__6315 = G__6322;
j__6316 = G__6323;
bitmap__6317 = G__6324;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__6317,new_arr__6314));
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
var this__6325 = this;
var inode__6326 = this;
var idx__6327 = ((hash >>> shift) & 0x01f);
var node__6328 = (this__6325.arr[idx__6327]);
if((null == node__6328))
{return (new cljs.core.ArrayNode(null,(this__6325.cnt + 1),cljs.core.clone_and_set.call(null,this__6325.arr,idx__6327,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__6329 = node__6328.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__6329 === node__6328))
{return inode__6326;
} else
{return (new cljs.core.ArrayNode(null,this__6325.cnt,cljs.core.clone_and_set.call(null,this__6325.arr,idx__6327,n__6329)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__6330 = this;
var inode__6331 = this;
var idx__6332 = ((hash >>> shift) & 0x01f);
var node__6333 = (this__6330.arr[idx__6332]);
if((null != node__6333))
{var n__6334 = node__6333.inode_without((shift + 5),hash,key);
if((n__6334 === node__6333))
{return inode__6331;
} else
{if((n__6334 == null))
{if((this__6330.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__6331,null,idx__6332);
} else
{return (new cljs.core.ArrayNode(null,(this__6330.cnt - 1),cljs.core.clone_and_set.call(null,this__6330.arr,idx__6332,n__6334)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__6330.cnt,cljs.core.clone_and_set.call(null,this__6330.arr,idx__6332,n__6334)));
} else
{return null;
}
}
}
} else
{return inode__6331;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__6366 = null;
var G__6366__3 = (function (shift,hash,key){
var this__6335 = this;
var inode__6336 = this;
var idx__6337 = ((hash >>> shift) & 0x01f);
var node__6338 = (this__6335.arr[idx__6337]);
if((null != node__6338))
{return node__6338.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__6366__4 = (function (shift,hash,key,not_found){
var this__6339 = this;
var inode__6340 = this;
var idx__6341 = ((hash >>> shift) & 0x01f);
var node__6342 = (this__6339.arr[idx__6341]);
if((null != node__6342))
{return node__6342.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__6366 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__6366__3.call(this,shift,hash,key);
case 4:
return G__6366__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6366;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__6343 = this;
var inode__6344 = this;
return cljs.core.create_array_node_seq.call(null,this__6343.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__6345 = this;
var inode__6346 = this;
if((e === this__6345.edit))
{return inode__6346;
} else
{return (new cljs.core.ArrayNode(e,this__6345.cnt,cljs.core.aclone.call(null,this__6345.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__6347 = this;
var inode__6348 = this;
var idx__6349 = ((hash >>> shift) & 0x01f);
var node__6350 = (this__6347.arr[idx__6349]);
if((null == node__6350))
{var editable__6351 = cljs.core.edit_and_set.call(null,inode__6348,edit,idx__6349,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__6351.cnt = (editable__6351.cnt + 1);
return editable__6351;
} else
{var n__6352 = node__6350.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__6352 === node__6350))
{return inode__6348;
} else
{return cljs.core.edit_and_set.call(null,inode__6348,edit,idx__6349,n__6352);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__6353 = this;
var inode__6354 = this;
var idx__6355 = ((hash >>> shift) & 0x01f);
var node__6356 = (this__6353.arr[idx__6355]);
if((null == node__6356))
{return inode__6354;
} else
{var n__6357 = node__6356.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__6357 === node__6356))
{return inode__6354;
} else
{if((null == n__6357))
{if((this__6353.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__6354,edit,idx__6355);
} else
{var editable__6358 = cljs.core.edit_and_set.call(null,inode__6354,edit,idx__6355,n__6357);
editable__6358.cnt = (editable__6358.cnt - 1);
return editable__6358;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__6354,edit,idx__6355,n__6357);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__6359 = this;
var inode__6360 = this;
var len__6361 = this__6359.arr.length;
var i__6362 = 0;
var init__6363 = init;
while(true){
if((i__6362 < len__6361))
{var node__6364 = (this__6359.arr[i__6362]);
if((node__6364 != null))
{var init__6365 = node__6364.kv_reduce(f,init__6363);
if(cljs.core.reduced_QMARK_.call(null,init__6365))
{return cljs.core.deref.call(null,init__6365);
} else
{{
var G__6367 = (i__6362 + 1);
var G__6368 = init__6365;
i__6362 = G__6367;
init__6363 = G__6368;
continue;
}
}
} else
{return null;
}
} else
{return init__6363;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__6369 = (2 * cnt);
var i__6370 = 0;
while(true){
if((i__6370 < lim__6369))
{if(cljs.core._EQ_.call(null,key,(arr[i__6370])))
{return i__6370;
} else
{{
var G__6371 = (i__6370 + 2);
i__6370 = G__6371;
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
var this__6372 = this;
var inode__6373 = this;
if((hash === this__6372.collision_hash))
{var idx__6374 = cljs.core.hash_collision_node_find_index.call(null,this__6372.arr,this__6372.cnt,key);
if((idx__6374 === -1))
{var len__6375 = this__6372.arr.length;
var new_arr__6376 = cljs.core.make_array.call(null,(len__6375 + 2));
cljs.core.array_copy.call(null,this__6372.arr,0,new_arr__6376,0,len__6375);
(new_arr__6376[len__6375] = key);
(new_arr__6376[(len__6375 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__6372.collision_hash,(this__6372.cnt + 1),new_arr__6376));
} else
{if(cljs.core._EQ_.call(null,(this__6372.arr[idx__6374]),val))
{return inode__6373;
} else
{return (new cljs.core.HashCollisionNode(null,this__6372.collision_hash,this__6372.cnt,cljs.core.clone_and_set.call(null,this__6372.arr,(idx__6374 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__6372.collision_hash >>> shift) & 0x01f)),[null,inode__6373])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__6377 = this;
var inode__6378 = this;
var idx__6379 = cljs.core.hash_collision_node_find_index.call(null,this__6377.arr,this__6377.cnt,key);
if((idx__6379 === -1))
{return inode__6378;
} else
{if((this__6377.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__6377.collision_hash,(this__6377.cnt - 1),cljs.core.remove_pair.call(null,this__6377.arr,cljs.core.quot.call(null,idx__6379,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__6406 = null;
var G__6406__3 = (function (shift,hash,key){
var this__6380 = this;
var inode__6381 = this;
var idx__6382 = cljs.core.hash_collision_node_find_index.call(null,this__6380.arr,this__6380.cnt,key);
if((idx__6382 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__6380.arr[idx__6382])))
{return cljs.core.PersistentVector.fromArray([(this__6380.arr[idx__6382]),(this__6380.arr[(idx__6382 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__6406__4 = (function (shift,hash,key,not_found){
var this__6383 = this;
var inode__6384 = this;
var idx__6385 = cljs.core.hash_collision_node_find_index.call(null,this__6383.arr,this__6383.cnt,key);
if((idx__6385 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__6383.arr[idx__6385])))
{return cljs.core.PersistentVector.fromArray([(this__6383.arr[idx__6385]),(this__6383.arr[(idx__6385 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__6406 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__6406__3.call(this,shift,hash,key);
case 4:
return G__6406__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6406;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__6386 = this;
var inode__6387 = this;
return cljs.core.create_inode_seq.call(null,this__6386.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__6407 = null;
var G__6407__1 = (function (e){
var this__6388 = this;
var inode__6389 = this;
if((e === this__6388.edit))
{return inode__6389;
} else
{var new_arr__6390 = cljs.core.make_array.call(null,(2 * (this__6388.cnt + 1)));
cljs.core.array_copy.call(null,this__6388.arr,0,new_arr__6390,0,(2 * this__6388.cnt));
return (new cljs.core.HashCollisionNode(e,this__6388.collision_hash,this__6388.cnt,new_arr__6390));
}
});
var G__6407__3 = (function (e,count,array){
var this__6391 = this;
var inode__6392 = this;
if((e === this__6391.edit))
{this__6391.arr = array;
this__6391.cnt = count;
return inode__6392;
} else
{return (new cljs.core.HashCollisionNode(this__6391.edit,this__6391.collision_hash,count,array));
}
});
G__6407 = function(e,count,array){
switch(arguments.length){
case 1:
return G__6407__1.call(this,e);
case 3:
return G__6407__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6407;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__6393 = this;
var inode__6394 = this;
if((hash === this__6393.collision_hash))
{var idx__6395 = cljs.core.hash_collision_node_find_index.call(null,this__6393.arr,this__6393.cnt,key);
if((idx__6395 === -1))
{if((this__6393.arr.length > (2 * this__6393.cnt)))
{var editable__6396 = cljs.core.edit_and_set.call(null,inode__6394,edit,(2 * this__6393.cnt),key,((2 * this__6393.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__6396.cnt = (editable__6396.cnt + 1);
return editable__6396;
} else
{var len__6397 = this__6393.arr.length;
var new_arr__6398 = cljs.core.make_array.call(null,(len__6397 + 2));
cljs.core.array_copy.call(null,this__6393.arr,0,new_arr__6398,0,len__6397);
(new_arr__6398[len__6397] = key);
(new_arr__6398[(len__6397 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__6394.ensure_editable(edit,(this__6393.cnt + 1),new_arr__6398);
}
} else
{if(((this__6393.arr[(idx__6395 + 1)]) === val))
{return inode__6394;
} else
{return cljs.core.edit_and_set.call(null,inode__6394,edit,(idx__6395 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__6393.collision_hash >>> shift) & 0x01f)),[null,inode__6394,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__6399 = this;
var inode__6400 = this;
var idx__6401 = cljs.core.hash_collision_node_find_index.call(null,this__6399.arr,this__6399.cnt,key);
if((idx__6401 === -1))
{return inode__6400;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__6399.cnt === 1))
{return null;
} else
{var editable__6402 = inode__6400.ensure_editable(edit);
var earr__6403 = editable__6402.arr;
(earr__6403[idx__6401] = (earr__6403[((2 * this__6399.cnt) - 2)]));
(earr__6403[(idx__6401 + 1)] = (earr__6403[((2 * this__6399.cnt) - 1)]));
(earr__6403[((2 * this__6399.cnt) - 1)] = null);
(earr__6403[((2 * this__6399.cnt) - 2)] = null);
editable__6402.cnt = (editable__6402.cnt - 1);
return editable__6402;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__6404 = this;
var inode__6405 = this;
return cljs.core.inode_kv_reduce.call(null,this__6404.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__6408 = cljs.core.hash.call(null,key1);
if((key1hash__6408 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__6408,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___6409 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__6408,key1,val1,added_leaf_QMARK___6409).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___6409);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__6410 = cljs.core.hash.call(null,key1);
if((key1hash__6410 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__6410,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___6411 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__6410,key1,val1,added_leaf_QMARK___6411).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___6411);
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
var this__6412 = this;
var h__364__auto____6413 = this__6412.__hash;
if((h__364__auto____6413 != null))
{return h__364__auto____6413;
} else
{var h__364__auto____6414 = cljs.core.hash_coll.call(null,coll);
this__6412.__hash = h__364__auto____6414;
return h__364__auto____6414;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6415 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__6416 = this;
var this$__6417 = this;
return cljs.core.pr_str.call(null,this$__6417);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6418 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6419 = this;
if((this__6419.s == null))
{return cljs.core.PersistentVector.fromArray([(this__6419.nodes[this__6419.i]),(this__6419.nodes[(this__6419.i + 1)])]);
} else
{return cljs.core.first.call(null,this__6419.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6420 = this;
if((this__6420.s == null))
{return cljs.core.create_inode_seq.call(null,this__6420.nodes,(this__6420.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__6420.nodes,this__6420.i,cljs.core.next.call(null,this__6420.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6421 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6422 = this;
return (new cljs.core.NodeSeq(meta,this__6422.nodes,this__6422.i,this__6422.s,this__6422.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6423 = this;
return this__6423.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6424 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6424.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__6425 = nodes.length;
var j__6426 = i;
while(true){
if((j__6426 < len__6425))
{if((null != (nodes[j__6426])))
{return (new cljs.core.NodeSeq(null,nodes,j__6426,null,null));
} else
{var temp__3971__auto____6427 = (nodes[(j__6426 + 1)]);
if(cljs.core.truth_(temp__3971__auto____6427))
{var node__6428 = temp__3971__auto____6427;
var temp__3971__auto____6429 = node__6428.inode_seq();
if(cljs.core.truth_(temp__3971__auto____6429))
{var node_seq__6430 = temp__3971__auto____6429;
return (new cljs.core.NodeSeq(null,nodes,(j__6426 + 2),node_seq__6430,null));
} else
{{
var G__6431 = (j__6426 + 2);
j__6426 = G__6431;
continue;
}
}
} else
{{
var G__6432 = (j__6426 + 2);
j__6426 = G__6432;
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
var this__6433 = this;
var h__364__auto____6434 = this__6433.__hash;
if((h__364__auto____6434 != null))
{return h__364__auto____6434;
} else
{var h__364__auto____6435 = cljs.core.hash_coll.call(null,coll);
this__6433.__hash = h__364__auto____6435;
return h__364__auto____6435;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6436 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__6437 = this;
var this$__6438 = this;
return cljs.core.pr_str.call(null,this$__6438);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6439 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6440 = this;
return cljs.core.first.call(null,this__6440.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6441 = this;
return cljs.core.create_array_node_seq.call(null,null,this__6441.nodes,this__6441.i,cljs.core.next.call(null,this__6441.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6442 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6443 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__6443.nodes,this__6443.i,this__6443.s,this__6443.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6444 = this;
return this__6444.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6445 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6445.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__6446 = nodes.length;
var j__6447 = i;
while(true){
if((j__6447 < len__6446))
{var temp__3971__auto____6448 = (nodes[j__6447]);
if(cljs.core.truth_(temp__3971__auto____6448))
{var nj__6449 = temp__3971__auto____6448;
var temp__3971__auto____6450 = nj__6449.inode_seq();
if(cljs.core.truth_(temp__3971__auto____6450))
{var ns__6451 = temp__3971__auto____6450;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__6447 + 1),ns__6451,null));
} else
{{
var G__6452 = (j__6447 + 1);
j__6447 = G__6452;
continue;
}
}
} else
{{
var G__6453 = (j__6447 + 1);
j__6447 = G__6453;
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
var this__6458 = this;
return (new cljs.core.TransientHashMap({},this__6458.root,this__6458.cnt,this__6458.has_nil_QMARK_,this__6458.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6459 = this;
var h__364__auto____6460 = this__6459.__hash;
if((h__364__auto____6460 != null))
{return h__364__auto____6460;
} else
{var h__364__auto____6461 = cljs.core.hash_imap.call(null,coll);
this__6459.__hash = h__364__auto____6461;
return h__364__auto____6461;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__6462 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__6463 = this;
if((k == null))
{if(cljs.core.truth_(this__6463.has_nil_QMARK_))
{return this__6463.nil_val;
} else
{return not_found;
}
} else
{if((this__6463.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__6463.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__6464 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3822__auto____6465 = this__6464.has_nil_QMARK_;
if(cljs.core.truth_(and__3822__auto____6465))
{return (v === this__6464.nil_val);
} else
{return and__3822__auto____6465;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__6464.meta,(cljs.core.truth_(this__6464.has_nil_QMARK_)?this__6464.cnt:(this__6464.cnt + 1)),this__6464.root,true,v,null));
}
} else
{var added_leaf_QMARK___6466 = [false];
var new_root__6467 = (((this__6464.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__6464.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___6466);
if((new_root__6467 === this__6464.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__6464.meta,(cljs.core.truth_((added_leaf_QMARK___6466[0]))?(this__6464.cnt + 1):this__6464.cnt),new_root__6467,this__6464.has_nil_QMARK_,this__6464.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__6468 = this;
if((k == null))
{return this__6468.has_nil_QMARK_;
} else
{if((this__6468.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__6468.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__6489 = null;
var G__6489__2 = (function (tsym6456,k){
var this__6469 = this;
var tsym6456__6470 = this;
var coll__6471 = tsym6456__6470;
return cljs.core._lookup.call(null,coll__6471,k);
});
var G__6489__3 = (function (tsym6457,k,not_found){
var this__6472 = this;
var tsym6457__6473 = this;
var coll__6474 = tsym6457__6473;
return cljs.core._lookup.call(null,coll__6474,k,not_found);
});
G__6489 = function(tsym6457,k,not_found){
switch(arguments.length){
case 2:
return G__6489__2.call(this,tsym6457,k);
case 3:
return G__6489__3.call(this,tsym6457,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6489;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym6454,args6455){
return tsym6454.call.apply(tsym6454,[tsym6454].concat(cljs.core.aclone.call(null,args6455)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__6475 = this;
var init__6476 = (cljs.core.truth_(this__6475.has_nil_QMARK_)?f.call(null,init,null,this__6475.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__6476))
{return cljs.core.deref.call(null,init__6476);
} else
{if((null != this__6475.root))
{return this__6475.root.kv_reduce(f,init__6476);
} else
{if("\uFDD0'else")
{return init__6476;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__6477 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__6478 = this;
var this$__6479 = this;
return cljs.core.pr_str.call(null,this$__6479);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6480 = this;
if((this__6480.cnt > 0))
{var s__6481 = (((null != this__6480.root))?this__6480.root.inode_seq():null);
if(cljs.core.truth_(this__6480.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__6480.nil_val]),s__6481);
} else
{return s__6481;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6482 = this;
return this__6482.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6483 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6484 = this;
return (new cljs.core.PersistentHashMap(meta,this__6484.cnt,this__6484.root,this__6484.has_nil_QMARK_,this__6484.nil_val,this__6484.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6485 = this;
return this__6485.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6486 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__6486.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__6487 = this;
if((k == null))
{if(cljs.core.truth_(this__6487.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__6487.meta,(this__6487.cnt - 1),this__6487.root,false,null,null));
} else
{return coll;
}
} else
{if((this__6487.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__6488 = this__6487.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__6488 === this__6487.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__6487.meta,(this__6487.cnt - 1),new_root__6488,this__6487.has_nil_QMARK_,this__6487.nil_val,null));
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
var len__6490 = ks.length;
var i__6491 = 0;
var out__6492 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__6491 < len__6490))
{{
var G__6493 = (i__6491 + 1);
var G__6494 = cljs.core.assoc_BANG_.call(null,out__6492,(ks[i__6491]),(vs[i__6491]));
i__6491 = G__6493;
out__6492 = G__6494;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__6492);
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
var this__6495 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__6496 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__6497 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__6498 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__6499 = this;
if((k == null))
{if(cljs.core.truth_(this__6499.has_nil_QMARK_))
{return this__6499.nil_val;
} else
{return null;
}
} else
{if((this__6499.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__6499.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__6500 = this;
if((k == null))
{if(cljs.core.truth_(this__6500.has_nil_QMARK_))
{return this__6500.nil_val;
} else
{return not_found;
}
} else
{if((this__6500.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__6500.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6501 = this;
if(cljs.core.truth_(this__6501.edit))
{return this__6501.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__6502 = this;
var tcoll__6503 = this;
if(cljs.core.truth_(this__6502.edit))
{if((function (){var G__6504__6505 = o;
if((G__6504__6505 != null))
{if((function (){var or__3824__auto____6506 = (G__6504__6505.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6506)
{return or__3824__auto____6506;
} else
{return G__6504__6505.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__6504__6505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__6504__6505);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__6504__6505);
}
})())
{return tcoll__6503.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__6507 = cljs.core.seq.call(null,o);
var tcoll__6508 = tcoll__6503;
while(true){
var temp__3971__auto____6509 = cljs.core.first.call(null,es__6507);
if(cljs.core.truth_(temp__3971__auto____6509))
{var e__6510 = temp__3971__auto____6509;
{
var G__6521 = cljs.core.next.call(null,es__6507);
var G__6522 = tcoll__6508.assoc_BANG_(cljs.core.key.call(null,e__6510),cljs.core.val.call(null,e__6510));
es__6507 = G__6521;
tcoll__6508 = G__6522;
continue;
}
} else
{return tcoll__6508;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__6511 = this;
var tcoll__6512 = this;
if(cljs.core.truth_(this__6511.edit))
{if((k == null))
{if((this__6511.nil_val === v))
{} else
{this__6511.nil_val = v;
}
if(cljs.core.truth_(this__6511.has_nil_QMARK_))
{} else
{this__6511.count = (this__6511.count + 1);
this__6511.has_nil_QMARK_ = true;
}
return tcoll__6512;
} else
{var added_leaf_QMARK___6513 = [false];
var node__6514 = (((this__6511.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__6511.root).inode_assoc_BANG_(this__6511.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___6513);
if((node__6514 === this__6511.root))
{} else
{this__6511.root = node__6514;
}
if(cljs.core.truth_((added_leaf_QMARK___6513[0])))
{this__6511.count = (this__6511.count + 1);
} else
{}
return tcoll__6512;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__6515 = this;
var tcoll__6516 = this;
if(cljs.core.truth_(this__6515.edit))
{if((k == null))
{if(cljs.core.truth_(this__6515.has_nil_QMARK_))
{this__6515.has_nil_QMARK_ = false;
this__6515.nil_val = null;
this__6515.count = (this__6515.count - 1);
return tcoll__6516;
} else
{return tcoll__6516;
}
} else
{if((this__6515.root == null))
{return tcoll__6516;
} else
{var removed_leaf_QMARK___6517 = [false];
var node__6518 = this__6515.root.inode_without_BANG_(this__6515.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___6517);
if((node__6518 === this__6515.root))
{} else
{this__6515.root = node__6518;
}
if(cljs.core.truth_((removed_leaf_QMARK___6517[0])))
{this__6515.count = (this__6515.count - 1);
} else
{}
return tcoll__6516;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__6519 = this;
var tcoll__6520 = this;
if(cljs.core.truth_(this__6519.edit))
{this__6519.edit = null;
return (new cljs.core.PersistentHashMap(null,this__6519.count,this__6519.root,this__6519.has_nil_QMARK_,this__6519.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__6523 = node;
var stack__6524 = stack;
while(true){
if((t__6523 != null))
{{
var G__6525 = (cljs.core.truth_(ascending_QMARK_)?t__6523.left:t__6523.right);
var G__6526 = cljs.core.conj.call(null,stack__6524,t__6523);
t__6523 = G__6525;
stack__6524 = G__6526;
continue;
}
} else
{return stack__6524;
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
var this__6527 = this;
var h__364__auto____6528 = this__6527.__hash;
if((h__364__auto____6528 != null))
{return h__364__auto____6528;
} else
{var h__364__auto____6529 = cljs.core.hash_coll.call(null,coll);
this__6527.__hash = h__364__auto____6529;
return h__364__auto____6529;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6530 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__6531 = this;
var this$__6532 = this;
return cljs.core.pr_str.call(null,this$__6532);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6533 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6534 = this;
if((this__6534.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__6534.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__6535 = this;
return cljs.core.peek.call(null,this__6535.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__6536 = this;
var t__6537 = cljs.core.peek.call(null,this__6536.stack);
var next_stack__6538 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__6536.ascending_QMARK_)?t__6537.right:t__6537.left),cljs.core.pop.call(null,this__6536.stack),this__6536.ascending_QMARK_);
if((next_stack__6538 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__6538,this__6536.ascending_QMARK_,(this__6536.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6539 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6540 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__6540.stack,this__6540.ascending_QMARK_,this__6540.cnt,this__6540.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6541 = this;
return this__6541.meta;
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
{if((function (){var and__3822__auto____6542 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____6542)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____6542;
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
{if((function (){var and__3822__auto____6543 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____6543)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____6543;
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
var init__6544 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__6544))
{return cljs.core.deref.call(null,init__6544);
} else
{var init__6545 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__6544):init__6544);
if(cljs.core.reduced_QMARK_.call(null,init__6545))
{return cljs.core.deref.call(null,init__6545);
} else
{var init__6546 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__6545):init__6545);
if(cljs.core.reduced_QMARK_.call(null,init__6546))
{return cljs.core.deref.call(null,init__6546);
} else
{return init__6546;
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
var this__6551 = this;
var h__364__auto____6552 = this__6551.__hash;
if((h__364__auto____6552 != null))
{return h__364__auto____6552;
} else
{var h__364__auto____6553 = cljs.core.hash_coll.call(null,coll);
this__6551.__hash = h__364__auto____6553;
return h__364__auto____6553;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__6554 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__6555 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__6556 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__6556.key,this__6556.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__6603 = null;
var G__6603__2 = (function (tsym6549,k){
var this__6557 = this;
var tsym6549__6558 = this;
var node__6559 = tsym6549__6558;
return cljs.core._lookup.call(null,node__6559,k);
});
var G__6603__3 = (function (tsym6550,k,not_found){
var this__6560 = this;
var tsym6550__6561 = this;
var node__6562 = tsym6550__6561;
return cljs.core._lookup.call(null,node__6562,k,not_found);
});
G__6603 = function(tsym6550,k,not_found){
switch(arguments.length){
case 2:
return G__6603__2.call(this,tsym6550,k);
case 3:
return G__6603__3.call(this,tsym6550,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6603;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym6547,args6548){
return tsym6547.call.apply(tsym6547,[tsym6547].concat(cljs.core.aclone.call(null,args6548)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__6563 = this;
return cljs.core.PersistentVector.fromArray([this__6563.key,this__6563.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__6564 = this;
return this__6564.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__6565 = this;
return this__6565.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__6566 = this;
var node__6567 = this;
return ins.balance_right(node__6567);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__6568 = this;
var node__6569 = this;
return (new cljs.core.RedNode(this__6568.key,this__6568.val,this__6568.left,this__6568.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__6570 = this;
var node__6571 = this;
return cljs.core.balance_right_del.call(null,this__6570.key,this__6570.val,this__6570.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__6572 = this;
var node__6573 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__6574 = this;
var node__6575 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__6575,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__6576 = this;
var node__6577 = this;
return cljs.core.balance_left_del.call(null,this__6576.key,this__6576.val,del,this__6576.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__6578 = this;
var node__6579 = this;
return ins.balance_left(node__6579);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__6580 = this;
var node__6581 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__6581,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__6604 = null;
var G__6604__0 = (function (){
var this__6584 = this;
var this$__6585 = this;
return cljs.core.pr_str.call(null,this$__6585);
});
G__6604 = function(){
switch(arguments.length){
case 0:
return G__6604__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6604;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__6586 = this;
var node__6587 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__6587,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__6588 = this;
var node__6589 = this;
return node__6589;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__6590 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__6591 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__6592 = this;
return cljs.core.list.call(null,this__6592.key,this__6592.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__6594 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__6595 = this;
return this__6595.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__6596 = this;
return cljs.core.PersistentVector.fromArray([this__6596.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__6597 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__6597.key,this__6597.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6598 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__6599 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__6599.key,this__6599.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__6600 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__6601 = this;
if((n === 0))
{return this__6601.key;
} else
{if((n === 1))
{return this__6601.val;
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
var this__6602 = this;
if((n === 0))
{return this__6602.key;
} else
{if((n === 1))
{return this__6602.val;
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
var this__6593 = this;
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
var this__6609 = this;
var h__364__auto____6610 = this__6609.__hash;
if((h__364__auto____6610 != null))
{return h__364__auto____6610;
} else
{var h__364__auto____6611 = cljs.core.hash_coll.call(null,coll);
this__6609.__hash = h__364__auto____6611;
return h__364__auto____6611;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__6612 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__6613 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__6614 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__6614.key,this__6614.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__6661 = null;
var G__6661__2 = (function (tsym6607,k){
var this__6615 = this;
var tsym6607__6616 = this;
var node__6617 = tsym6607__6616;
return cljs.core._lookup.call(null,node__6617,k);
});
var G__6661__3 = (function (tsym6608,k,not_found){
var this__6618 = this;
var tsym6608__6619 = this;
var node__6620 = tsym6608__6619;
return cljs.core._lookup.call(null,node__6620,k,not_found);
});
G__6661 = function(tsym6608,k,not_found){
switch(arguments.length){
case 2:
return G__6661__2.call(this,tsym6608,k);
case 3:
return G__6661__3.call(this,tsym6608,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6661;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym6605,args6606){
return tsym6605.call.apply(tsym6605,[tsym6605].concat(cljs.core.aclone.call(null,args6606)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__6621 = this;
return cljs.core.PersistentVector.fromArray([this__6621.key,this__6621.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__6622 = this;
return this__6622.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__6623 = this;
return this__6623.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__6624 = this;
var node__6625 = this;
return (new cljs.core.RedNode(this__6624.key,this__6624.val,this__6624.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__6626 = this;
var node__6627 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__6628 = this;
var node__6629 = this;
return (new cljs.core.RedNode(this__6628.key,this__6628.val,this__6628.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__6630 = this;
var node__6631 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__6632 = this;
var node__6633 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__6633,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__6634 = this;
var node__6635 = this;
return (new cljs.core.RedNode(this__6634.key,this__6634.val,del,this__6634.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__6636 = this;
var node__6637 = this;
return (new cljs.core.RedNode(this__6636.key,this__6636.val,ins,this__6636.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__6638 = this;
var node__6639 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__6638.left))
{return (new cljs.core.RedNode(this__6638.key,this__6638.val,this__6638.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__6638.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__6638.right))
{return (new cljs.core.RedNode(this__6638.right.key,this__6638.right.val,(new cljs.core.BlackNode(this__6638.key,this__6638.val,this__6638.left,this__6638.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__6638.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__6639,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__6662 = null;
var G__6662__0 = (function (){
var this__6642 = this;
var this$__6643 = this;
return cljs.core.pr_str.call(null,this$__6643);
});
G__6662 = function(){
switch(arguments.length){
case 0:
return G__6662__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6662;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__6644 = this;
var node__6645 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__6644.right))
{return (new cljs.core.RedNode(this__6644.key,this__6644.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__6644.left,null)),this__6644.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__6644.left))
{return (new cljs.core.RedNode(this__6644.left.key,this__6644.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__6644.left.left,null)),(new cljs.core.BlackNode(this__6644.key,this__6644.val,this__6644.left.right,this__6644.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__6645,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__6646 = this;
var node__6647 = this;
return (new cljs.core.BlackNode(this__6646.key,this__6646.val,this__6646.left,this__6646.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__6648 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__6649 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__6650 = this;
return cljs.core.list.call(null,this__6650.key,this__6650.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__6652 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__6653 = this;
return this__6653.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__6654 = this;
return cljs.core.PersistentVector.fromArray([this__6654.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__6655 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__6655.key,this__6655.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6656 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__6657 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__6657.key,this__6657.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__6658 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__6659 = this;
if((n === 0))
{return this__6659.key;
} else
{if((n === 1))
{return this__6659.val;
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
var this__6660 = this;
if((n === 0))
{return this__6660.key;
} else
{if((n === 1))
{return this__6660.val;
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
var this__6651 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__6663 = comp.call(null,k,tree.key);
if((c__6663 === 0))
{(found[0] = tree);
return null;
} else
{if((c__6663 < 0))
{var ins__6664 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__6664 != null))
{return tree.add_left(ins__6664);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__6665 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__6665 != null))
{return tree.add_right(ins__6665);
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
{var app__6666 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__6666))
{return (new cljs.core.RedNode(app__6666.key,app__6666.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__6666.left)),(new cljs.core.RedNode(right.key,right.val,app__6666.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__6666,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__6667 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__6667))
{return (new cljs.core.RedNode(app__6667.key,app__6667.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__6667.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__6667.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__6667,right.right,null)));
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
{var c__6668 = comp.call(null,k,tree.key);
if((c__6668 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__6668 < 0))
{var del__6669 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____6670 = (del__6669 != null);
if(or__3824__auto____6670)
{return or__3824__auto____6670;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__6669,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__6669,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__6671 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____6672 = (del__6671 != null);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__6671);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__6671,null));
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
var tk__6673 = tree.key;
var c__6674 = comp.call(null,k,tk__6673);
if((c__6674 === 0))
{return tree.replace(tk__6673,v,tree.left,tree.right);
} else
{if((c__6674 < 0))
{return tree.replace(tk__6673,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__6673,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__6679 = this;
var h__364__auto____6680 = this__6679.__hash;
if((h__364__auto____6680 != null))
{return h__364__auto____6680;
} else
{var h__364__auto____6681 = cljs.core.hash_imap.call(null,coll);
this__6679.__hash = h__364__auto____6681;
return h__364__auto____6681;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__6682 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__6683 = this;
var n__6684 = coll.entry_at(k);
if((n__6684 != null))
{return n__6684.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__6685 = this;
var found__6686 = [null];
var t__6687 = cljs.core.tree_map_add.call(null,this__6685.comp,this__6685.tree,k,v,found__6686);
if((t__6687 == null))
{var found_node__6688 = cljs.core.nth.call(null,found__6686,0);
if(cljs.core._EQ_.call(null,v,found_node__6688.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__6685.comp,cljs.core.tree_map_replace.call(null,this__6685.comp,this__6685.tree,k,v),this__6685.cnt,this__6685.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__6685.comp,t__6687.blacken(),(this__6685.cnt + 1),this__6685.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__6689 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__6721 = null;
var G__6721__2 = (function (tsym6677,k){
var this__6690 = this;
var tsym6677__6691 = this;
var coll__6692 = tsym6677__6691;
return cljs.core._lookup.call(null,coll__6692,k);
});
var G__6721__3 = (function (tsym6678,k,not_found){
var this__6693 = this;
var tsym6678__6694 = this;
var coll__6695 = tsym6678__6694;
return cljs.core._lookup.call(null,coll__6695,k,not_found);
});
G__6721 = function(tsym6678,k,not_found){
switch(arguments.length){
case 2:
return G__6721__2.call(this,tsym6678,k);
case 3:
return G__6721__3.call(this,tsym6678,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6721;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym6675,args6676){
return tsym6675.call.apply(tsym6675,[tsym6675].concat(cljs.core.aclone.call(null,args6676)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__6696 = this;
if((this__6696.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__6696.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__6697 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6698 = this;
if((this__6698.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__6698.tree,false,this__6698.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__6699 = this;
var this$__6700 = this;
return cljs.core.pr_str.call(null,this$__6700);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__6701 = this;
var coll__6702 = this;
var t__6703 = this__6701.tree;
while(true){
if((t__6703 != null))
{var c__6704 = this__6701.comp.call(null,k,t__6703.key);
if((c__6704 === 0))
{return t__6703;
} else
{if((c__6704 < 0))
{{
var G__6722 = t__6703.left;
t__6703 = G__6722;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__6723 = t__6703.right;
t__6703 = G__6723;
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
var this__6705 = this;
if((this__6705.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__6705.tree,ascending_QMARK_,this__6705.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__6706 = this;
if((this__6706.cnt > 0))
{var stack__6707 = null;
var t__6708 = this__6706.tree;
while(true){
if((t__6708 != null))
{var c__6709 = this__6706.comp.call(null,k,t__6708.key);
if((c__6709 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__6707,t__6708),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__6709 < 0))
{{
var G__6724 = cljs.core.conj.call(null,stack__6707,t__6708);
var G__6725 = t__6708.left;
stack__6707 = G__6724;
t__6708 = G__6725;
continue;
}
} else
{{
var G__6726 = stack__6707;
var G__6727 = t__6708.right;
stack__6707 = G__6726;
t__6708 = G__6727;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__6709 > 0))
{{
var G__6728 = cljs.core.conj.call(null,stack__6707,t__6708);
var G__6729 = t__6708.right;
stack__6707 = G__6728;
t__6708 = G__6729;
continue;
}
} else
{{
var G__6730 = stack__6707;
var G__6731 = t__6708.left;
stack__6707 = G__6730;
t__6708 = G__6731;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__6707 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__6707,ascending_QMARK_,-1));
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
var this__6710 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__6711 = this;
return this__6711.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6712 = this;
if((this__6712.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__6712.tree,true,this__6712.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6713 = this;
return this__6713.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6714 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6715 = this;
return (new cljs.core.PersistentTreeMap(this__6715.comp,this__6715.tree,this__6715.cnt,meta,this__6715.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6719 = this;
return this__6719.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6720 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__6720.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__6716 = this;
var found__6717 = [null];
var t__6718 = cljs.core.tree_map_remove.call(null,this__6716.comp,this__6716.tree,k,found__6717);
if((t__6718 == null))
{if((cljs.core.nth.call(null,found__6717,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__6716.comp,null,0,this__6716.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__6716.comp,t__6718.blacken(),(this__6716.cnt - 1),this__6716.meta,null));
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
var in$__6732 = cljs.core.seq.call(null,keyvals);
var out__6733 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__6732))
{{
var G__6734 = cljs.core.nnext.call(null,in$__6732);
var G__6735 = cljs.core.assoc_BANG_.call(null,out__6733,cljs.core.first.call(null,in$__6732),cljs.core.second.call(null,in$__6732));
in$__6732 = G__6734;
out__6733 = G__6735;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__6733);
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
hash_map.cljs$lang$applyTo = (function (arglist__6736){
var keyvals = cljs.core.seq(arglist__6736);;
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
array_map.cljs$lang$applyTo = (function (arglist__6737){
var keyvals = cljs.core.seq(arglist__6737);;
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
var in$__6738 = cljs.core.seq.call(null,keyvals);
var out__6739 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__6738))
{{
var G__6740 = cljs.core.nnext.call(null,in$__6738);
var G__6741 = cljs.core.assoc.call(null,out__6739,cljs.core.first.call(null,in$__6738),cljs.core.second.call(null,in$__6738));
in$__6738 = G__6740;
out__6739 = G__6741;
continue;
}
} else
{return out__6739;
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
sorted_map.cljs$lang$applyTo = (function (arglist__6742){
var keyvals = cljs.core.seq(arglist__6742);;
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
var in$__6743 = cljs.core.seq.call(null,keyvals);
var out__6744 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__6743))
{{
var G__6745 = cljs.core.nnext.call(null,in$__6743);
var G__6746 = cljs.core.assoc.call(null,out__6744,cljs.core.first.call(null,in$__6743),cljs.core.second.call(null,in$__6743));
in$__6743 = G__6745;
out__6744 = G__6746;
continue;
}
} else
{return out__6744;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__6747){
var comparator = cljs.core.first(arglist__6747);
var keyvals = cljs.core.rest(arglist__6747);
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
{return cljs.core.reduce.call(null,(function (p1__6748_SHARP_,p2__6749_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____6750 = p1__6748_SHARP_;
if(cljs.core.truth_(or__3824__auto____6750))
{return or__3824__auto____6750;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6749_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6751){
var maps = cljs.core.seq(arglist__6751);;
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
{var merge_entry__6754 = (function (m,e){
var k__6752 = cljs.core.first.call(null,e);
var v__6753 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__6752))
{return cljs.core.assoc.call(null,m,k__6752,f.call(null,cljs.core.get.call(null,m,k__6752),v__6753));
} else
{return cljs.core.assoc.call(null,m,k__6752,v__6753);
}
});
var merge2__6756 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6754,(function (){var or__3824__auto____6755 = m1;
if(cljs.core.truth_(or__3824__auto____6755))
{return or__3824__auto____6755;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__6756,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6757){
var f = cljs.core.first(arglist__6757);
var maps = cljs.core.rest(arglist__6757);
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
var ret__6758 = cljs.core.ObjMap.fromObject([],{});
var keys__6759 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__6759))
{var key__6760 = cljs.core.first.call(null,keys__6759);
var entry__6761 = cljs.core.get.call(null,map,key__6760,"\uFDD0'user/not-found");
{
var G__6762 = ((cljs.core.not_EQ_.call(null,entry__6761,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__6758,key__6760,entry__6761):ret__6758);
var G__6763 = cljs.core.next.call(null,keys__6759);
ret__6758 = G__6762;
keys__6759 = G__6763;
continue;
}
} else
{return ret__6758;
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
var this__6769 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__6769.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6770 = this;
var h__364__auto____6771 = this__6770.__hash;
if((h__364__auto____6771 != null))
{return h__364__auto____6771;
} else
{var h__364__auto____6772 = cljs.core.hash_iset.call(null,coll);
this__6770.__hash = h__364__auto____6772;
return h__364__auto____6772;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__6773 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__6774 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6774.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__6793 = null;
var G__6793__2 = (function (tsym6767,k){
var this__6775 = this;
var tsym6767__6776 = this;
var coll__6777 = tsym6767__6776;
return cljs.core._lookup.call(null,coll__6777,k);
});
var G__6793__3 = (function (tsym6768,k,not_found){
var this__6778 = this;
var tsym6768__6779 = this;
var coll__6780 = tsym6768__6779;
return cljs.core._lookup.call(null,coll__6780,k,not_found);
});
G__6793 = function(tsym6768,k,not_found){
switch(arguments.length){
case 2:
return G__6793__2.call(this,tsym6768,k);
case 3:
return G__6793__3.call(this,tsym6768,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6793;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym6765,args6766){
return tsym6765.call.apply(tsym6765,[tsym6765].concat(cljs.core.aclone.call(null,args6766)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6781 = this;
return (new cljs.core.PersistentHashSet(this__6781.meta,cljs.core.assoc.call(null,this__6781.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__6782 = this;
var this$__6783 = this;
return cljs.core.pr_str.call(null,this$__6783);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6784 = this;
return cljs.core.keys.call(null,this__6784.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__6785 = this;
return (new cljs.core.PersistentHashSet(this__6785.meta,cljs.core.dissoc.call(null,this__6785.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6786 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6787 = this;
var and__3822__auto____6788 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____6788)
{var and__3822__auto____6789 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____6789)
{return cljs.core.every_QMARK_.call(null,(function (p1__6764_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6764_SHARP_);
}),other);
} else
{return and__3822__auto____6789;
}
} else
{return and__3822__auto____6788;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6790 = this;
return (new cljs.core.PersistentHashSet(meta,this__6790.hash_map,this__6790.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6791 = this;
return this__6791.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6792 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__6792.meta);
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
var G__6811 = null;
var G__6811__2 = (function (tsym6797,k){
var this__6799 = this;
var tsym6797__6800 = this;
var tcoll__6801 = tsym6797__6800;
if((cljs.core._lookup.call(null,this__6799.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__6811__3 = (function (tsym6798,k,not_found){
var this__6802 = this;
var tsym6798__6803 = this;
var tcoll__6804 = tsym6798__6803;
if((cljs.core._lookup.call(null,this__6802.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__6811 = function(tsym6798,k,not_found){
switch(arguments.length){
case 2:
return G__6811__2.call(this,tsym6798,k);
case 3:
return G__6811__3.call(this,tsym6798,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6811;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym6795,args6796){
return tsym6795.call.apply(tsym6795,[tsym6795].concat(cljs.core.aclone.call(null,args6796)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__6805 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__6806 = this;
if((cljs.core._lookup.call(null,this__6806.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__6807 = this;
return cljs.core.count.call(null,this__6807.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__6808 = this;
this__6808.transient_map = cljs.core.dissoc_BANG_.call(null,this__6808.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__6809 = this;
this__6809.transient_map = cljs.core.assoc_BANG_.call(null,this__6809.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__6810 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__6810.transient_map),null));
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
var this__6816 = this;
var h__364__auto____6817 = this__6816.__hash;
if((h__364__auto____6817 != null))
{return h__364__auto____6817;
} else
{var h__364__auto____6818 = cljs.core.hash_iset.call(null,coll);
this__6816.__hash = h__364__auto____6818;
return h__364__auto____6818;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__6819 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__6820 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6820.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__6844 = null;
var G__6844__2 = (function (tsym6814,k){
var this__6821 = this;
var tsym6814__6822 = this;
var coll__6823 = tsym6814__6822;
return cljs.core._lookup.call(null,coll__6823,k);
});
var G__6844__3 = (function (tsym6815,k,not_found){
var this__6824 = this;
var tsym6815__6825 = this;
var coll__6826 = tsym6815__6825;
return cljs.core._lookup.call(null,coll__6826,k,not_found);
});
G__6844 = function(tsym6815,k,not_found){
switch(arguments.length){
case 2:
return G__6844__2.call(this,tsym6815,k);
case 3:
return G__6844__3.call(this,tsym6815,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6844;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym6812,args6813){
return tsym6812.call.apply(tsym6812,[tsym6812].concat(cljs.core.aclone.call(null,args6813)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6827 = this;
return (new cljs.core.PersistentTreeSet(this__6827.meta,cljs.core.assoc.call(null,this__6827.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6828 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__6828.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__6829 = this;
var this$__6830 = this;
return cljs.core.pr_str.call(null,this$__6830);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__6831 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__6831.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__6832 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__6832.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__6833 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__6834 = this;
return cljs.core._comparator.call(null,this__6834.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6835 = this;
return cljs.core.keys.call(null,this__6835.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__6836 = this;
return (new cljs.core.PersistentTreeSet(this__6836.meta,cljs.core.dissoc.call(null,this__6836.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6837 = this;
return cljs.core.count.call(null,this__6837.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6838 = this;
var and__3822__auto____6839 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____6839)
{var and__3822__auto____6840 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____6840)
{return cljs.core.every_QMARK_.call(null,(function (p1__6794_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6794_SHARP_);
}),other);
} else
{return and__3822__auto____6840;
}
} else
{return and__3822__auto____6839;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6841 = this;
return (new cljs.core.PersistentTreeSet(meta,this__6841.tree_map,this__6841.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6842 = this;
return this__6842.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6843 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__6843.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6845 = cljs.core.seq.call(null,coll);
var out__6846 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__6845)))
{{
var G__6847 = cljs.core.next.call(null,in$__6845);
var G__6848 = cljs.core.conj_BANG_.call(null,out__6846,cljs.core.first.call(null,in$__6845));
in$__6845 = G__6847;
out__6846 = G__6848;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__6846);
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
sorted_set.cljs$lang$applyTo = (function (arglist__6849){
var keys = cljs.core.seq(arglist__6849);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__6851){
var comparator = cljs.core.first(arglist__6851);
var keys = cljs.core.rest(arglist__6851);
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
{var n__6852 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____6853 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____6853))
{var e__6854 = temp__3971__auto____6853;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6854));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6852,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6850_SHARP_){
var temp__3971__auto____6855 = cljs.core.find.call(null,smap,p1__6850_SHARP_);
if(cljs.core.truth_(temp__3971__auto____6855))
{var e__6856 = temp__3971__auto____6855;
return cljs.core.second.call(null,e__6856);
} else
{return p1__6850_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6864 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6857,seen){
while(true){
var vec__6858__6859 = p__6857;
var f__6860 = cljs.core.nth.call(null,vec__6858__6859,0,null);
var xs__6861 = vec__6858__6859;
var temp__3974__auto____6862 = cljs.core.seq.call(null,xs__6861);
if(cljs.core.truth_(temp__3974__auto____6862))
{var s__6863 = temp__3974__auto____6862;
if(cljs.core.contains_QMARK_.call(null,seen,f__6860))
{{
var G__6865 = cljs.core.rest.call(null,s__6863);
var G__6866 = seen;
p__6857 = G__6865;
seen = G__6866;
continue;
}
} else
{return cljs.core.cons.call(null,f__6860,step.call(null,cljs.core.rest.call(null,s__6863),cljs.core.conj.call(null,seen,f__6860)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__6864.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6867 = cljs.core.PersistentVector.fromArray([]);
var s__6868 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6868)))
{{
var G__6869 = cljs.core.conj.call(null,ret__6867,cljs.core.first.call(null,s__6868));
var G__6870 = cljs.core.next.call(null,s__6868);
ret__6867 = G__6869;
s__6868 = G__6870;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6867);
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
{if((function (){var or__3824__auto____6871 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____6871)
{return or__3824__auto____6871;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__6872 = x.lastIndexOf("/");
if((i__6872 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6872 + 1));
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
if((function (){var or__3824__auto____6873 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__6874 = x.lastIndexOf("/");
if((i__6874 > -1))
{return cljs.core.subs.call(null,x,2,i__6874);
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
var map__6877 = cljs.core.ObjMap.fromObject([],{});
var ks__6878 = cljs.core.seq.call(null,keys);
var vs__6879 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6880 = ks__6878;
if(cljs.core.truth_(and__3822__auto____6880))
{return vs__6879;
} else
{return and__3822__auto____6880;
}
})()))
{{
var G__6881 = cljs.core.assoc.call(null,map__6877,cljs.core.first.call(null,ks__6878),cljs.core.first.call(null,vs__6879));
var G__6882 = cljs.core.next.call(null,ks__6878);
var G__6883 = cljs.core.next.call(null,vs__6879);
map__6877 = G__6881;
ks__6878 = G__6882;
vs__6879 = G__6883;
continue;
}
} else
{return map__6877;
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
var G__6886__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6875_SHARP_,p2__6876_SHARP_){
return max_key.call(null,k,p1__6875_SHARP_,p2__6876_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6886 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6886__delegate.call(this, k, x, y, more);
};
G__6886.cljs$lang$maxFixedArity = 3;
G__6886.cljs$lang$applyTo = (function (arglist__6887){
var k = cljs.core.first(arglist__6887);
var x = cljs.core.first(cljs.core.next(arglist__6887));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6887)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6887)));
return G__6886__delegate(k, x, y, more);
});
G__6886.cljs$lang$arity$variadic = G__6886__delegate;
return G__6886;
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
var G__6888__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6884_SHARP_,p2__6885_SHARP_){
return min_key.call(null,k,p1__6884_SHARP_,p2__6885_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6888 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6888__delegate.call(this, k, x, y, more);
};
G__6888.cljs$lang$maxFixedArity = 3;
G__6888.cljs$lang$applyTo = (function (arglist__6889){
var k = cljs.core.first(arglist__6889);
var x = cljs.core.first(cljs.core.next(arglist__6889));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6889)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6889)));
return G__6888__delegate(k, x, y, more);
});
G__6888.cljs$lang$arity$variadic = G__6888__delegate;
return G__6888;
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
var temp__3974__auto____6890 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6890))
{var s__6891 = temp__3974__auto____6890;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6891),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6891)));
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
var temp__3974__auto____6892 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6892))
{var s__6893 = temp__3974__auto____6892;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6893))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6893),take_while.call(null,pred,cljs.core.rest.call(null,s__6893)));
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
var comp__6894 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__6894.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__6895 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____6896 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____6896))
{var vec__6897__6898 = temp__3974__auto____6896;
var e__6899 = cljs.core.nth.call(null,vec__6897__6898,0,null);
var s__6900 = vec__6897__6898;
if(cljs.core.truth_(include__6895.call(null,e__6899)))
{return s__6900;
} else
{return cljs.core.next.call(null,s__6900);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__6895,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____6901 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____6901))
{var vec__6902__6903 = temp__3974__auto____6901;
var e__6904 = cljs.core.nth.call(null,vec__6902__6903,0,null);
var s__6905 = vec__6902__6903;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__6904))?s__6905:cljs.core.next.call(null,s__6905)));
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
var include__6906 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____6907 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____6907))
{var vec__6908__6909 = temp__3974__auto____6907;
var e__6910 = cljs.core.nth.call(null,vec__6908__6909,0,null);
var s__6911 = vec__6908__6909;
if(cljs.core.truth_(include__6906.call(null,e__6910)))
{return s__6911;
} else
{return cljs.core.next.call(null,s__6911);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__6906,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____6912 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____6912))
{var vec__6913__6914 = temp__3974__auto____6912;
var e__6915 = cljs.core.nth.call(null,vec__6913__6914,0,null);
var s__6916 = vec__6913__6914;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__6915))?s__6916:cljs.core.next.call(null,s__6916)));
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
var this__6917 = this;
var h__364__auto____6918 = this__6917.__hash;
if((h__364__auto____6918 != null))
{return h__364__auto____6918;
} else
{var h__364__auto____6919 = cljs.core.hash_coll.call(null,rng);
this__6917.__hash = h__364__auto____6919;
return h__364__auto____6919;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__6920 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__6921 = this;
var this$__6922 = this;
return cljs.core.pr_str.call(null,this$__6922);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__6923 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__6924 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__6925 = this;
var comp__6926 = (((this__6925.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__6926.call(null,this__6925.start,this__6925.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__6927 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__6927.end - this__6927.start) / this__6927.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__6928 = this;
return this__6928.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__6929 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6929.meta,(this__6929.start + this__6929.step),this__6929.end,this__6929.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__6930 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__6931 = this;
return (new cljs.core.Range(meta,this__6931.start,this__6931.end,this__6931.step,this__6931.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__6932 = this;
return this__6932.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__6933 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__6933.start + (n * this__6933.step));
} else
{if((function (){var and__3822__auto____6934 = (this__6933.start > this__6933.end);
if(and__3822__auto____6934)
{return (this__6933.step === 0);
} else
{return and__3822__auto____6934;
}
})())
{return this__6933.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__6935 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__6935.start + (n * this__6935.step));
} else
{if((function (){var and__3822__auto____6936 = (this__6935.start > this__6935.end);
if(and__3822__auto____6936)
{return (this__6935.step === 0);
} else
{return and__3822__auto____6936;
}
})())
{return this__6935.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__6937 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6937.meta);
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
var temp__3974__auto____6938 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6938))
{var s__6939 = temp__3974__auto____6938;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__6939),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6939)));
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
var temp__3974__auto____6941 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6941))
{var s__6942 = temp__3974__auto____6941;
var fst__6943 = cljs.core.first.call(null,s__6942);
var fv__6944 = f.call(null,fst__6943);
var run__6945 = cljs.core.cons.call(null,fst__6943,cljs.core.take_while.call(null,(function (p1__6940_SHARP_){
return cljs.core._EQ_.call(null,fv__6944,f.call(null,p1__6940_SHARP_));
}),cljs.core.next.call(null,s__6942)));
return cljs.core.cons.call(null,run__6945,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6945),s__6942))));
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
var temp__3971__auto____6956 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3971__auto____6956))
{var s__6957 = temp__3971__auto____6956;
return reductions.call(null,f,cljs.core.first.call(null,s__6957),cljs.core.rest.call(null,s__6957));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6958 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3974__auto____6958))
{var s__6959 = temp__3974__auto____6958;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6959)),cljs.core.rest.call(null,s__6959));
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
var G__6961 = null;
var G__6961__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6961__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6961__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6961__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6961__4 = (function() { 
var G__6962__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6962 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6962__delegate.call(this, x, y, z, args);
};
G__6962.cljs$lang$maxFixedArity = 3;
G__6962.cljs$lang$applyTo = (function (arglist__6963){
var x = cljs.core.first(arglist__6963);
var y = cljs.core.first(cljs.core.next(arglist__6963));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6963)));
return G__6962__delegate(x, y, z, args);
});
G__6962.cljs$lang$arity$variadic = G__6962__delegate;
return G__6962;
})()
;
G__6961 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6961__0.call(this);
case 1:
return G__6961__1.call(this,x);
case 2:
return G__6961__2.call(this,x,y);
case 3:
return G__6961__3.call(this,x,y,z);
default:
return G__6961__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6961.cljs$lang$maxFixedArity = 3;
G__6961.cljs$lang$applyTo = G__6961__4.cljs$lang$applyTo;
return G__6961;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__6964 = null;
var G__6964__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6964__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6964__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6964__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6964__4 = (function() { 
var G__6965__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6965 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6965__delegate.call(this, x, y, z, args);
};
G__6965.cljs$lang$maxFixedArity = 3;
G__6965.cljs$lang$applyTo = (function (arglist__6966){
var x = cljs.core.first(arglist__6966);
var y = cljs.core.first(cljs.core.next(arglist__6966));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6966)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6966)));
return G__6965__delegate(x, y, z, args);
});
G__6965.cljs$lang$arity$variadic = G__6965__delegate;
return G__6965;
})()
;
G__6964 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6964__0.call(this);
case 1:
return G__6964__1.call(this,x);
case 2:
return G__6964__2.call(this,x,y);
case 3:
return G__6964__3.call(this,x,y,z);
default:
return G__6964__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6964.cljs$lang$maxFixedArity = 3;
G__6964.cljs$lang$applyTo = G__6964__4.cljs$lang$applyTo;
return G__6964;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__6967 = null;
var G__6967__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6967__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6967__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6967__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6967__4 = (function() { 
var G__6968__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6968 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6968__delegate.call(this, x, y, z, args);
};
G__6968.cljs$lang$maxFixedArity = 3;
G__6968.cljs$lang$applyTo = (function (arglist__6969){
var x = cljs.core.first(arglist__6969);
var y = cljs.core.first(cljs.core.next(arglist__6969));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6969)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6969)));
return G__6968__delegate(x, y, z, args);
});
G__6968.cljs$lang$arity$variadic = G__6968__delegate;
return G__6968;
})()
;
G__6967 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6967__0.call(this);
case 1:
return G__6967__1.call(this,x);
case 2:
return G__6967__2.call(this,x,y);
case 3:
return G__6967__3.call(this,x,y,z);
default:
return G__6967__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6967.cljs$lang$maxFixedArity = 3;
G__6967.cljs$lang$applyTo = G__6967__4.cljs$lang$applyTo;
return G__6967;
})()
});
var juxt__4 = (function() { 
var G__6970__delegate = function (f,g,h,fs){
var fs__6960 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__6971 = null;
var G__6971__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__6946_SHARP_,p2__6947_SHARP_){
return cljs.core.conj.call(null,p1__6946_SHARP_,p2__6947_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__6960);
});
var G__6971__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6948_SHARP_,p2__6949_SHARP_){
return cljs.core.conj.call(null,p1__6948_SHARP_,p2__6949_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__6960);
});
var G__6971__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6950_SHARP_,p2__6951_SHARP_){
return cljs.core.conj.call(null,p1__6950_SHARP_,p2__6951_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__6960);
});
var G__6971__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6952_SHARP_,p2__6953_SHARP_){
return cljs.core.conj.call(null,p1__6952_SHARP_,p2__6953_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__6960);
});
var G__6971__4 = (function() { 
var G__6972__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6954_SHARP_,p2__6955_SHARP_){
return cljs.core.conj.call(null,p1__6954_SHARP_,cljs.core.apply.call(null,p2__6955_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__6960);
};
var G__6972 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6972__delegate.call(this, x, y, z, args);
};
G__6972.cljs$lang$maxFixedArity = 3;
G__6972.cljs$lang$applyTo = (function (arglist__6973){
var x = cljs.core.first(arglist__6973);
var y = cljs.core.first(cljs.core.next(arglist__6973));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6973)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6973)));
return G__6972__delegate(x, y, z, args);
});
G__6972.cljs$lang$arity$variadic = G__6972__delegate;
return G__6972;
})()
;
G__6971 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6971__0.call(this);
case 1:
return G__6971__1.call(this,x);
case 2:
return G__6971__2.call(this,x,y);
case 3:
return G__6971__3.call(this,x,y,z);
default:
return G__6971__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6971.cljs$lang$maxFixedArity = 3;
G__6971.cljs$lang$applyTo = G__6971__4.cljs$lang$applyTo;
return G__6971;
})()
};
var G__6970 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6970__delegate.call(this, f, g, h, fs);
};
G__6970.cljs$lang$maxFixedArity = 3;
G__6970.cljs$lang$applyTo = (function (arglist__6974){
var f = cljs.core.first(arglist__6974);
var g = cljs.core.first(cljs.core.next(arglist__6974));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6974)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6974)));
return G__6970__delegate(f, g, h, fs);
});
G__6970.cljs$lang$arity$variadic = G__6970__delegate;
return G__6970;
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
var G__6976 = cljs.core.next.call(null,coll);
coll = G__6976;
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
if(cljs.core.truth_((function (){var and__3822__auto____6975 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3822__auto____6975))
{return (n > 0);
} else
{return and__3822__auto____6975;
}
})()))
{{
var G__6977 = (n - 1);
var G__6978 = cljs.core.next.call(null,coll);
n = G__6977;
coll = G__6978;
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
var matches__6979 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6979),s))
{if((cljs.core.count.call(null,matches__6979) === 1))
{return cljs.core.first.call(null,matches__6979);
} else
{return cljs.core.vec.call(null,matches__6979);
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
var matches__6980 = re.exec(s);
if((matches__6980 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__6980) === 1))
{return cljs.core.first.call(null,matches__6980);
} else
{return cljs.core.vec.call(null,matches__6980);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6981 = cljs.core.re_find.call(null,re,s);
var match_idx__6982 = s.search(re);
var match_str__6983 = ((cljs.core.coll_QMARK_.call(null,match_data__6981))?cljs.core.first.call(null,match_data__6981):match_data__6981);
var post_match__6984 = cljs.core.subs.call(null,s,(match_idx__6982 + cljs.core.count.call(null,match_str__6983)));
if(cljs.core.truth_(match_data__6981))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6981,re_seq.call(null,re,post_match__6984));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__6986__6987 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___6988 = cljs.core.nth.call(null,vec__6986__6987,0,null);
var flags__6989 = cljs.core.nth.call(null,vec__6986__6987,1,null);
var pattern__6990 = cljs.core.nth.call(null,vec__6986__6987,2,null);
return (new RegExp(pattern__6990,flags__6989));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6985_SHARP_){
return print_one.call(null,p1__6985_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____6991 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3822__auto____6991))
{var and__3822__auto____6995 = (function (){var G__6992__6993 = obj;
if((G__6992__6993 != null))
{if((function (){var or__3824__auto____6994 = (G__6992__6993.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{return G__6992__6993.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6992__6993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6992__6993);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6992__6993);
}
})();
if(cljs.core.truth_(and__3822__auto____6995))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____6995;
}
} else
{return and__3822__auto____6991;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3822__auto____6996 = (obj != null);
if(and__3822__auto____6996)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____6996;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__6997__6998 = obj;
if((G__6997__6998 != null))
{if((function (){var or__3824__auto____6999 = (G__6997__6998.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3824__auto____6999)
{return or__3824__auto____6999;
} else
{return G__6997__6998.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__6997__6998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__6997__6998);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__6997__6998);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__7000 = cljs.core.first.call(null,objs);
var sb__7001 = (new goog.string.StringBuffer());
var G__7002__7003 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__7002__7003))
{var obj__7004 = cljs.core.first.call(null,G__7002__7003);
var G__7002__7005 = G__7002__7003;
while(true){
if((obj__7004 === first_obj__7000))
{} else
{sb__7001.append(" ");
}
var G__7006__7007 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7004,opts));
if(cljs.core.truth_(G__7006__7007))
{var string__7008 = cljs.core.first.call(null,G__7006__7007);
var G__7006__7009 = G__7006__7007;
while(true){
sb__7001.append(string__7008);
var temp__3974__auto____7010 = cljs.core.next.call(null,G__7006__7009);
if(cljs.core.truth_(temp__3974__auto____7010))
{var G__7006__7011 = temp__3974__auto____7010;
{
var G__7014 = cljs.core.first.call(null,G__7006__7011);
var G__7015 = G__7006__7011;
string__7008 = G__7014;
G__7006__7009 = G__7015;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____7012 = cljs.core.next.call(null,G__7002__7005);
if(cljs.core.truth_(temp__3974__auto____7012))
{var G__7002__7013 = temp__3974__auto____7012;
{
var G__7016 = cljs.core.first.call(null,G__7002__7013);
var G__7017 = G__7002__7013;
obj__7004 = G__7016;
G__7002__7005 = G__7017;
continue;
}
} else
{}
break;
}
} else
{}
return sb__7001;
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
var sb__7018 = cljs.core.pr_sb.call(null,objs,opts);
sb__7018.append("\n");
return [cljs.core.str(sb__7018)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__7019 = cljs.core.first.call(null,objs);
var G__7020__7021 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__7020__7021))
{var obj__7022 = cljs.core.first.call(null,G__7020__7021);
var G__7020__7023 = G__7020__7021;
while(true){
if((obj__7022 === first_obj__7019))
{} else
{cljs.core.string_print.call(null," ");
}
var G__7024__7025 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__7022,opts));
if(cljs.core.truth_(G__7024__7025))
{var string__7026 = cljs.core.first.call(null,G__7024__7025);
var G__7024__7027 = G__7024__7025;
while(true){
cljs.core.string_print.call(null,string__7026);
var temp__3974__auto____7028 = cljs.core.next.call(null,G__7024__7027);
if(cljs.core.truth_(temp__3974__auto____7028))
{var G__7024__7029 = temp__3974__auto____7028;
{
var G__7032 = cljs.core.first.call(null,G__7024__7029);
var G__7033 = G__7024__7029;
string__7026 = G__7032;
G__7024__7027 = G__7033;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____7030 = cljs.core.next.call(null,G__7020__7023);
if(cljs.core.truth_(temp__3974__auto____7030))
{var G__7020__7031 = temp__3974__auto____7030;
{
var G__7034 = cljs.core.first.call(null,G__7020__7031);
var G__7035 = G__7020__7031;
obj__7022 = G__7034;
G__7020__7023 = G__7035;
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
pr_str.cljs$lang$applyTo = (function (arglist__7036){
var objs = cljs.core.seq(arglist__7036);;
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
prn_str.cljs$lang$applyTo = (function (arglist__7037){
var objs = cljs.core.seq(arglist__7037);;
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
pr.cljs$lang$applyTo = (function (arglist__7038){
var objs = cljs.core.seq(arglist__7038);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__7039){
var objs = cljs.core.seq(arglist__7039);;
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
print_str.cljs$lang$applyTo = (function (arglist__7040){
var objs = cljs.core.seq(arglist__7040);;
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
println.cljs$lang$applyTo = (function (arglist__7041){
var objs = cljs.core.seq(arglist__7041);;
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
println_str.cljs$lang$applyTo = (function (arglist__7042){
var objs = cljs.core.seq(arglist__7042);;
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
prn.cljs$lang$applyTo = (function (arglist__7043){
var objs = cljs.core.seq(arglist__7043);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__7044 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__7044,"{",", ","}",opts,coll);
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
var pr_pair__7045 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__7045,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__7046 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__7046,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____7047 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____7047))
{var nspc__7048 = temp__3974__auto____7047;
return [cljs.core.str(nspc__7048),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____7049 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____7049))
{var nspc__7050 = temp__3974__auto____7049;
return [cljs.core.str(nspc__7050),cljs.core.str("/")].join('');
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
var pr_pair__7051 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__7051,"{",", ","}",opts,coll);
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
var pr_pair__7052 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__7052,"{",", ","}",opts,coll);
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
var this__7053 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__7054 = this;
var G__7055__7056 = cljs.core.seq.call(null,this__7054.watches);
if(cljs.core.truth_(G__7055__7056))
{var G__7058__7060 = cljs.core.first.call(null,G__7055__7056);
var vec__7059__7061 = G__7058__7060;
var key__7062 = cljs.core.nth.call(null,vec__7059__7061,0,null);
var f__7063 = cljs.core.nth.call(null,vec__7059__7061,1,null);
var G__7055__7064 = G__7055__7056;
var G__7058__7065 = G__7058__7060;
var G__7055__7066 = G__7055__7064;
while(true){
var vec__7067__7068 = G__7058__7065;
var key__7069 = cljs.core.nth.call(null,vec__7067__7068,0,null);
var f__7070 = cljs.core.nth.call(null,vec__7067__7068,1,null);
var G__7055__7071 = G__7055__7066;
f__7070.call(null,key__7069,this$,oldval,newval);
var temp__3974__auto____7072 = cljs.core.next.call(null,G__7055__7071);
if(cljs.core.truth_(temp__3974__auto____7072))
{var G__7055__7073 = temp__3974__auto____7072;
{
var G__7080 = cljs.core.first.call(null,G__7055__7073);
var G__7081 = G__7055__7073;
G__7058__7065 = G__7080;
G__7055__7066 = G__7081;
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
var this__7074 = this;
return this$.watches = cljs.core.assoc.call(null,this__7074.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__7075 = this;
return this$.watches = cljs.core.dissoc.call(null,this__7075.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__7076 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__7076.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__7077 = this;
return this__7077.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__7078 = this;
return this__7078.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__7079 = this;
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
var G__7088__delegate = function (x,p__7082){
var map__7083__7084 = p__7082;
var map__7083__7085 = ((cljs.core.seq_QMARK_.call(null,map__7083__7084))?cljs.core.apply.call(null,cljs.core.hash_map,map__7083__7084):map__7083__7084);
var validator__7086 = cljs.core.get.call(null,map__7083__7085,"\uFDD0'validator");
var meta__7087 = cljs.core.get.call(null,map__7083__7085,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__7087,validator__7086,null));
};
var G__7088 = function (x,var_args){
var p__7082 = null;
if (goog.isDef(var_args)) {
  p__7082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7088__delegate.call(this, x, p__7082);
};
G__7088.cljs$lang$maxFixedArity = 1;
G__7088.cljs$lang$applyTo = (function (arglist__7089){
var x = cljs.core.first(arglist__7089);
var p__7082 = cljs.core.rest(arglist__7089);
return G__7088__delegate(x, p__7082);
});
G__7088.cljs$lang$arity$variadic = G__7088__delegate;
return G__7088;
})()
;
atom = function(x,var_args){
var p__7082 = var_args;
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
var temp__3974__auto____7090 = a.validator;
if(cljs.core.truth_(temp__3974__auto____7090))
{var validate__7091 = temp__3974__auto____7090;
if(cljs.core.truth_(validate__7091.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5917))))].join('')));
}
} else
{}
var old_value__7092 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__7092,new_value);
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
var G__7093__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__7093 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7093__delegate.call(this, a, f, x, y, z, more);
};
G__7093.cljs$lang$maxFixedArity = 5;
G__7093.cljs$lang$applyTo = (function (arglist__7094){
var a = cljs.core.first(arglist__7094);
var f = cljs.core.first(cljs.core.next(arglist__7094));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7094)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7094))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7094)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7094)))));
return G__7093__delegate(a, f, x, y, z, more);
});
G__7093.cljs$lang$arity$variadic = G__7093__delegate;
return G__7093;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__7095){
var iref = cljs.core.first(arglist__7095);
var f = cljs.core.first(cljs.core.next(arglist__7095));
var args = cljs.core.rest(cljs.core.next(arglist__7095));
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
var this__7096 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__7096.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__7097 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__7097.state,(function (p__7098){
var curr_state__7099 = p__7098;
var curr_state__7100 = ((cljs.core.seq_QMARK_.call(null,curr_state__7099))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__7099):curr_state__7099);
var done__7101 = cljs.core.get.call(null,curr_state__7100,"\uFDD0'done");
if(cljs.core.truth_(done__7101))
{return curr_state__7100;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__7097.f.call(null)});
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
var map__7102__7103 = options;
var map__7102__7104 = ((cljs.core.seq_QMARK_.call(null,map__7102__7103))?cljs.core.apply.call(null,cljs.core.hash_map,map__7102__7103):map__7102__7103);
var keywordize_keys__7105 = cljs.core.get.call(null,map__7102__7104,"\uFDD0'keywordize-keys");
var keyfn__7106 = (cljs.core.truth_(keywordize_keys__7105)?cljs.core.keyword:cljs.core.str);
var f__7112 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__625__auto____7111 = (function iter__7107(s__7108){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7108__7109 = s__7108;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7108__7109)))
{var k__7110 = cljs.core.first.call(null,s__7108__7109);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__7106.call(null,k__7110),thisfn.call(null,(x[k__7110]))]),iter__7107.call(null,cljs.core.rest.call(null,s__7108__7109)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____7111.call(null,cljs.core.js_keys.call(null,x));
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
return f__7112.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__7113){
var x = cljs.core.first(arglist__7113);
var options = cljs.core.rest(arglist__7113);
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
var mem__7114 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__7118__delegate = function (args){
var temp__3971__auto____7115 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__7114),args);
if(cljs.core.truth_(temp__3971__auto____7115))
{var v__7116 = temp__3971__auto____7115;
return v__7116;
} else
{var ret__7117 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__7114,cljs.core.assoc,args,ret__7117);
return ret__7117;
}
};
var G__7118 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7118__delegate.call(this, args);
};
G__7118.cljs$lang$maxFixedArity = 0;
G__7118.cljs$lang$applyTo = (function (arglist__7119){
var args = cljs.core.seq(arglist__7119);;
return G__7118__delegate(args);
});
G__7118.cljs$lang$arity$variadic = G__7118__delegate;
return G__7118;
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
var ret__7120 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__7120))
{{
var G__7121 = ret__7120;
f = G__7121;
continue;
}
} else
{return ret__7120;
}
break;
}
});
var trampoline__2 = (function() { 
var G__7122__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__7122 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7122__delegate.call(this, f, args);
};
G__7122.cljs$lang$maxFixedArity = 1;
G__7122.cljs$lang$applyTo = (function (arglist__7123){
var f = cljs.core.first(arglist__7123);
var args = cljs.core.rest(arglist__7123);
return G__7122__delegate(f, args);
});
G__7122.cljs$lang$arity$variadic = G__7122__delegate;
return G__7122;
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
var k__7124 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__7124,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__7124,cljs.core.PersistentVector.fromArray([])),x));
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
var or__3824__auto____7125 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____7125)
{return or__3824__auto____7125;
} else
{var or__3824__auto____7126 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3824__auto____7126)
{return or__3824__auto____7126;
} else
{var and__3822__auto____7127 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____7127)
{var and__3822__auto____7128 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____7128)
{var and__3822__auto____7129 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____7129)
{var ret__7130 = true;
var i__7131 = 0;
while(true){
if((function (){var or__3824__auto____7132 = cljs.core.not.call(null,ret__7130);
if(or__3824__auto____7132)
{return or__3824__auto____7132;
} else
{return (i__7131 === cljs.core.count.call(null,parent));
}
})())
{return ret__7130;
} else
{{
var G__7133 = isa_QMARK_.call(null,h,child.call(null,i__7131),parent.call(null,i__7131));
var G__7134 = (i__7131 + 1);
ret__7130 = G__7133;
i__7131 = G__7134;
continue;
}
}
break;
}
} else
{return and__3822__auto____7129;
}
} else
{return and__3822__auto____7128;
}
} else
{return and__3822__auto____7127;
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
var tp__7138 = "\uFDD0'parents".call(null,h);
var td__7139 = "\uFDD0'descendants".call(null,h);
var ta__7140 = "\uFDD0'ancestors".call(null,h);
var tf__7141 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____7142 = ((cljs.core.contains_QMARK_.call(null,tp__7138.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__7140.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__7140.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__7138,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__7141.call(null,"\uFDD0'ancestors".call(null,h),tag,td__7139,parent,ta__7140),"\uFDD0'descendants":tf__7141.call(null,"\uFDD0'descendants".call(null,h),parent,ta__7140,tag,td__7139)});
})());
if(cljs.core.truth_(or__3824__auto____7142))
{return or__3824__auto____7142;
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
var parentMap__7143 = "\uFDD0'parents".call(null,h);
var childsParents__7144 = (cljs.core.truth_(parentMap__7143.call(null,tag))?cljs.core.disj.call(null,parentMap__7143.call(null,tag),parent):cljs.core.set([]));
var newParents__7145 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__7144))?cljs.core.assoc.call(null,parentMap__7143,tag,childsParents__7144):cljs.core.dissoc.call(null,parentMap__7143,tag));
var deriv_seq__7146 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__7135_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__7135_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__7135_SHARP_),cljs.core.second.call(null,p1__7135_SHARP_)));
}),cljs.core.seq.call(null,newParents__7145)));
if(cljs.core.contains_QMARK_.call(null,parentMap__7143.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__7136_SHARP_,p2__7137_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__7136_SHARP_,p2__7137_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__7146));
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
var xprefs__7147 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____7149 = (cljs.core.truth_((function (){var and__3822__auto____7148 = xprefs__7147;
if(cljs.core.truth_(and__3822__auto____7148))
{return xprefs__7147.call(null,y);
} else
{return and__3822__auto____7148;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____7149))
{return or__3824__auto____7149;
} else
{var or__3824__auto____7151 = (function (){var ps__7150 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__7150) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__7150),prefer_table)))
{} else
{}
{
var G__7154 = cljs.core.rest.call(null,ps__7150);
ps__7150 = G__7154;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____7151))
{return or__3824__auto____7151;
} else
{var or__3824__auto____7153 = (function (){var ps__7152 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__7152) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__7152),y,prefer_table)))
{} else
{}
{
var G__7155 = cljs.core.rest.call(null,ps__7152);
ps__7152 = G__7155;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____7153))
{return or__3824__auto____7153;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____7156 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____7156))
{return or__3824__auto____7156;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__7165 = cljs.core.reduce.call(null,(function (be,p__7157){
var vec__7158__7159 = p__7157;
var k__7160 = cljs.core.nth.call(null,vec__7158__7159,0,null);
var ___7161 = cljs.core.nth.call(null,vec__7158__7159,1,null);
var e__7162 = vec__7158__7159;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__7160))
{var be2__7164 = (cljs.core.truth_((function (){var or__3824__auto____7163 = (be == null);
if(or__3824__auto____7163)
{return or__3824__auto____7163;
} else
{return cljs.core.dominates.call(null,k__7160,cljs.core.first.call(null,be),prefer_table);
}
})())?e__7162:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__7164),k__7160,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__7160),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__7164)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__7164;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__7165))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__7165));
return cljs.core.second.call(null,best_entry__7165);
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
if((function (){var and__3822__auto____7166 = mf;
if(and__3822__auto____7166)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____7166;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____7167 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7167)
{return or__3824__auto____7167;
} else
{var or__3824__auto____7168 = (cljs.core._reset["_"]);
if(or__3824__auto____7168)
{return or__3824__auto____7168;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____7169 = mf;
if(and__3822__auto____7169)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____7169;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____7170 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7170)
{return or__3824__auto____7170;
} else
{var or__3824__auto____7171 = (cljs.core._add_method["_"]);
if(or__3824__auto____7171)
{return or__3824__auto____7171;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____7172 = mf;
if(and__3822__auto____7172)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____7172;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____7173 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7173)
{return or__3824__auto____7173;
} else
{var or__3824__auto____7174 = (cljs.core._remove_method["_"]);
if(or__3824__auto____7174)
{return or__3824__auto____7174;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____7175 = mf;
if(and__3822__auto____7175)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____7175;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____7176 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7176)
{return or__3824__auto____7176;
} else
{var or__3824__auto____7177 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____7177)
{return or__3824__auto____7177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____7178 = mf;
if(and__3822__auto____7178)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____7178;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____7179 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7179)
{return or__3824__auto____7179;
} else
{var or__3824__auto____7180 = (cljs.core._get_method["_"]);
if(or__3824__auto____7180)
{return or__3824__auto____7180;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____7181 = mf;
if(and__3822__auto____7181)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____7181;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____7182 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7182)
{return or__3824__auto____7182;
} else
{var or__3824__auto____7183 = (cljs.core._methods["_"]);
if(or__3824__auto____7183)
{return or__3824__auto____7183;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____7184 = mf;
if(and__3822__auto____7184)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____7184;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____7185 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{var or__3824__auto____7186 = (cljs.core._prefers["_"]);
if(or__3824__auto____7186)
{return or__3824__auto____7186;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____7187 = mf;
if(and__3822__auto____7187)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____7187;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____7188 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3824__auto____7188)
{return or__3824__auto____7188;
} else
{var or__3824__auto____7189 = (cljs.core._dispatch["_"]);
if(or__3824__auto____7189)
{return or__3824__auto____7189;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__7190 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__7191 = cljs.core._get_method.call(null,mf,dispatch_val__7190);
if(cljs.core.truth_(target_fn__7191))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__7190)].join('')));
}
return cljs.core.apply.call(null,target_fn__7191,args);
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
var this__7192 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__7193 = this;
cljs.core.swap_BANG_.call(null,this__7193.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7193.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7193.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__7193.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__7194 = this;
cljs.core.swap_BANG_.call(null,this__7194.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__7194.method_cache,this__7194.method_table,this__7194.cached_hierarchy,this__7194.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__7195 = this;
cljs.core.swap_BANG_.call(null,this__7195.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__7195.method_cache,this__7195.method_table,this__7195.cached_hierarchy,this__7195.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__7196 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__7196.cached_hierarchy),cljs.core.deref.call(null,this__7196.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__7196.method_cache,this__7196.method_table,this__7196.cached_hierarchy,this__7196.hierarchy);
}
var temp__3971__auto____7197 = cljs.core.deref.call(null,this__7196.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____7197))
{var target_fn__7198 = temp__3971__auto____7197;
return target_fn__7198;
} else
{var temp__3971__auto____7199 = cljs.core.find_and_cache_best_method.call(null,this__7196.name,dispatch_val,this__7196.hierarchy,this__7196.method_table,this__7196.prefer_table,this__7196.method_cache,this__7196.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____7199))
{var target_fn__7200 = temp__3971__auto____7199;
return target_fn__7200;
} else
{return cljs.core.deref.call(null,this__7196.method_table).call(null,this__7196.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7201 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7201.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__7201.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__7201.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7201.method_cache,this__7201.method_table,this__7201.cached_hierarchy,this__7201.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__7202 = this;
return cljs.core.deref.call(null,this__7202.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__7203 = this;
return cljs.core.deref.call(null,this__7203.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__7204 = this;
return cljs.core.do_dispatch.call(null,mf,this__7204.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__7205__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__7205 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7205__delegate.call(this, _, args);
};
G__7205.cljs$lang$maxFixedArity = 1;
G__7205.cljs$lang$applyTo = (function (arglist__7206){
var _ = cljs.core.first(arglist__7206);
var args = cljs.core.rest(arglist__7206);
return G__7205__delegate(_, args);
});
G__7205.cljs$lang$arity$variadic = G__7205__delegate;
return G__7205;
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
