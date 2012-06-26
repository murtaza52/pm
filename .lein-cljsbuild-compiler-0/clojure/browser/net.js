goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__15378){
var vec__15379__15380 = p__15378;
var k__15381 = cljs.core.nth.call(null,vec__15379__15380,0,null);
var v__15382 = cljs.core.nth.call(null,vec__15379__15380,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15381.toLowerCase()),v__15382]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
void 0;clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____15383 = this$;
if(and__3822__auto____15383)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____15383;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{return (function (){var or__3824__auto____15384 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15384)
{return or__3824__auto____15384;
} else
{var or__3824__auto____15385 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15385)
{return or__3824__auto____15385;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____15386 = this$;
if(and__3822__auto____15386)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____15386;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{return (function (){var or__3824__auto____15387 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15387)
{return or__3824__auto____15387;
} else
{var or__3824__auto____15388 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15388)
{return or__3824__auto____15388;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____15389 = this$;
if(and__3822__auto____15389)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____15389;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____15390 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15390)
{return or__3824__auto____15390;
} else
{var or__3824__auto____15391 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15391)
{return or__3824__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____15392 = this$;
if(and__3822__auto____15392)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____15392;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____15393 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15393)
{return or__3824__auto____15393;
} else
{var or__3824__auto____15394 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15394)
{return or__3824__auto____15394;
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
if((function (){var and__3822__auto____15395 = this$;
if(and__3822__auto____15395)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____15395;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{return (function (){var or__3824__auto____15396 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15396)
{return or__3824__auto____15396;
} else
{var or__3824__auto____15397 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15397)
{return or__3824__auto____15397;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____15398 = this$;
if(and__3822__auto____15398)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____15398;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____15399 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15399)
{return or__3824__auto____15399;
} else
{var or__3824__auto____15400 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15400)
{return or__3824__auto____15400;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____15401 = this$;
if(and__3822__auto____15401)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____15401;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____15402 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15402)
{return or__3824__auto____15402;
} else
{var or__3824__auto____15403 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15403)
{return or__3824__auto____15403;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____15404 = this$;
if(and__3822__auto____15404)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____15404;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____15405 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15405)
{return or__3824__auto____15405;
} else
{var or__3824__auto____15406 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15406)
{return or__3824__auto____15406;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____15407 = this$;
if(and__3822__auto____15407)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____15407;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____15408 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15408)
{return or__3824__auto____15408;
} else
{var or__3824__auto____15409 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15409)
{return or__3824__auto____15409;
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
if((function (){var and__3822__auto____15410 = this$;
if(and__3822__auto____15410)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____15410;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{return (function (){var or__3824__auto____15411 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15411)
{return or__3824__auto____15411;
} else
{var or__3824__auto____15412 = (clojure.browser.net.close["_"]);
if(or__3824__auto____15412)
{return or__3824__auto____15412;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
void 0;goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__15413){
var vec__15414__15415 = p__15413;
var k__15416 = cljs.core.nth.call(null,vec__15414__15415,0,null);
var v__15417 = cljs.core.nth.call(null,vec__15414__15415,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15416.toLowerCase()),v__15417]);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__15418){
var vec__15419__15420 = p__15418;
var k__15421 = cljs.core.nth.call(null,vec__15419__15420,0,null);
var v__15422 = cljs.core.nth.call(null,vec__15419__15420,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15421.toLowerCase()),v__15422]);
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
if((function (){var and__3822__auto____15423 = this$;
if(and__3822__auto____15423)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____15423;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____15424 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15424)
{return or__3824__auto____15424;
} else
{var or__3824__auto____15425 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____15425)
{return or__3824__auto____15425;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____15426 = this$;
if(and__3822__auto____15426)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____15426;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____15427 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);
if(or__3824__auto____15427)
{return or__3824__auto____15427;
} else
{var or__3824__auto____15428 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____15428)
{return or__3824__auto____15428;
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
var temp__3974__auto____15429 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____15429))
{var config__15430 = temp__3974__auto____15429;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__15430)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__15431){
var vec__15432__15433 = p__15431;
var k__15434 = cljs.core.nth.call(null,vec__15432__15433,0,null);
var v__15435 = cljs.core.nth.call(null,vec__15432__15433,1,null);
var temp__3971__auto____15436 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__15434);
if(cljs.core.truth_(temp__3971__auto____15436))
{var field__15437 = temp__3971__auto____15436;
var G__15438__15439 = sum;
(G__15438__15439[field__15437] = v__15435);
return G__15438__15439;
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
