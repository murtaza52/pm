goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8953){
var vec__8954__8955 = p__8953;
var k__8956 = cljs.core.nth.call(null,vec__8954__8955,0,null);
var v__8957 = cljs.core.nth.call(null,vec__8954__8955,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__8956.toLowerCase()),v__8957]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
void 0;clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____8958 = this$;
if(and__3822__auto____8958)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____8958;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{return (function (){var or__3824__auto____8959 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8959)
{return or__3824__auto____8959;
} else
{var or__3824__auto____8960 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____8960)
{return or__3824__auto____8960;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____8961 = this$;
if(and__3822__auto____8961)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____8961;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{return (function (){var or__3824__auto____8962 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8962)
{return or__3824__auto____8962;
} else
{var or__3824__auto____8963 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____8963)
{return or__3824__auto____8963;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____8964 = this$;
if(and__3822__auto____8964)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____8964;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____8965 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8965)
{return or__3824__auto____8965;
} else
{var or__3824__auto____8966 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____8966)
{return or__3824__auto____8966;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____8967 = this$;
if(and__3822__auto____8967)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____8967;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____8968 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8968)
{return or__3824__auto____8968;
} else
{var or__3824__auto____8969 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____8969)
{return or__3824__auto____8969;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____8970 = this$;
if(and__3822__auto____8970)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____8970;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{return (function (){var or__3824__auto____8971 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8971)
{return or__3824__auto____8971;
} else
{var or__3824__auto____8972 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____8972)
{return or__3824__auto____8972;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____8973 = this$;
if(and__3822__auto____8973)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____8973;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____8974 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8974)
{return or__3824__auto____8974;
} else
{var or__3824__auto____8975 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____8975)
{return or__3824__auto____8975;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____8976 = this$;
if(and__3822__auto____8976)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____8976;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____8977 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8977)
{return or__3824__auto____8977;
} else
{var or__3824__auto____8978 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____8978)
{return or__3824__auto____8978;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____8979 = this$;
if(and__3822__auto____8979)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____8979;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____8980 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8980)
{return or__3824__auto____8980;
} else
{var or__3824__auto____8981 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____8981)
{return or__3824__auto____8981;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____8982 = this$;
if(and__3822__auto____8982)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____8982;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____8983 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8983)
{return or__3824__auto____8983;
} else
{var or__3824__auto____8984 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____8984)
{return or__3824__auto____8984;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____8985 = this$;
if(and__3822__auto____8985)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____8985;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{return (function (){var or__3824__auto____8986 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8986)
{return or__3824__auto____8986;
} else
{var or__3824__auto____8987 = (clojure.browser.net.close["_"]);
if(or__3824__auto____8987)
{return or__3824__auto____8987;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
void 0;goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8988){
var vec__8989__8990 = p__8988;
var k__8991 = cljs.core.nth.call(null,vec__8989__8990,0,null);
var v__8992 = cljs.core.nth.call(null,vec__8989__8990,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__8991.toLowerCase()),v__8992]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__8993){
var vec__8994__8995 = p__8993;
var k__8996 = cljs.core.nth.call(null,vec__8994__8995,0,null);
var v__8997 = cljs.core.nth.call(null,vec__8994__8995,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__8996.toLowerCase()),v__8997]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
void 0;clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____8998 = this$;
if(and__3822__auto____8998)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____8998;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____8999 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);
if(or__3824__auto____8999)
{return or__3824__auto____8999;
} else
{var or__3824__auto____9000 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____9000)
{return or__3824__auto____9000;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____9001 = this$;
if(and__3822__auto____9001)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____9001;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____9002 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);
if(or__3824__auto____9002)
{return or__3824__auto____9002;
} else
{var or__3824__auto____9003 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____9003)
{return or__3824__auto____9003;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
void 0;goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____9004 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____9004))
{var config__9005 = temp__3974__auto____9004;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9005)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9006){
var vec__9007__9008 = p__9006;
var k__9009 = cljs.core.nth.call(null,vec__9007__9008,0,null);
var v__9010 = cljs.core.nth.call(null,vec__9007__9008,1,null);
var temp__3971__auto____9011 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9009);
if(cljs.core.truth_(temp__3971__auto____9011))
{var field__9012 = temp__3971__auto____9011;
var G__9013__9014 = sum;
(G__9013__9014[field__9012] = v__9010);
return G__9013__9014;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
