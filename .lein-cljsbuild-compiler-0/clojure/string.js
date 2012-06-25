goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__7382 = s;
var limit__7383 = limit;
var parts__7384 = cljs.core.PersistentVector.fromArray([]);
while(true){
if(cljs.core._EQ_.call(null,limit__7383,1))
{return cljs.core.conj.call(null,parts__7384,s__7382);
} else
{var temp__3971__auto____7385 = cljs.core.re_find.call(null,re,s__7382);
if(cljs.core.truth_(temp__3971__auto____7385))
{var m__7386 = temp__3971__auto____7385;
var index__7387 = s__7382.indexOf(m__7386);
{
var G__7388 = s__7382.substring((index__7387 + cljs.core.count.call(null,m__7386)));
var G__7389 = (limit__7383 - 1);
var G__7390 = cljs.core.conj.call(null,parts__7384,s__7382.substring(0,index__7387));
s__7382 = G__7388;
limit__7383 = G__7389;
parts__7384 = G__7390;
continue;
}
} else
{return cljs.core.conj.call(null,parts__7384,s__7382);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__7391 = s.length;
while(true){
if((index__7391 === 0))
{return "";
} else
{var ch__7392 = cljs.core.get.call(null,s,(index__7391 - 1));
if((function (){var or__3824__auto____7393 = cljs.core._EQ_.call(null,ch__7392,"\n");
if(or__3824__auto____7393)
{return or__3824__auto____7393;
} else
{return cljs.core._EQ_.call(null,ch__7392,"\r");
}
})())
{{
var G__7394 = (index__7391 - 1);
index__7391 = G__7394;
continue;
}
} else
{return s.substring(0,index__7391);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__7395 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3824__auto____7396 = cljs.core.not.call(null,s__7395);
if(or__3824__auto____7396)
{return or__3824__auto____7396;
} else
{var or__3824__auto____7397 = cljs.core._EQ_.call(null,"",s__7395);
if(or__3824__auto____7397)
{return or__3824__auto____7397;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__7395);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__7398 = (new goog.string.StringBuffer());
var length__7399 = s.length;
var index__7400 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__7399,index__7400))
{return buffer__7398.toString();
} else
{var ch__7401 = s.charAt(index__7400);
var temp__3971__auto____7402 = cljs.core.get.call(null,cmap,ch__7401);
if(cljs.core.truth_(temp__3971__auto____7402))
{var replacement__7403 = temp__3971__auto____7402;
buffer__7398.append([cljs.core.str(replacement__7403)].join(''));
} else
{buffer__7398.append(ch__7401);
}
{
var G__7404 = (index__7400 + 1);
index__7400 = G__7404;
continue;
}
}
break;
}
});
