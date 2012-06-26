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
{var s__15345 = s;
var limit__15346 = limit;
var parts__15347 = cljs.core.PersistentVector.fromArray([]);
while(true){
if(cljs.core._EQ_.call(null,limit__15346,1))
{return cljs.core.conj.call(null,parts__15347,s__15345);
} else
{var temp__3971__auto____15348 = cljs.core.re_find.call(null,re,s__15345);
if(cljs.core.truth_(temp__3971__auto____15348))
{var m__15349 = temp__3971__auto____15348;
var index__15350 = s__15345.indexOf(m__15349);
{
var G__15351 = s__15345.substring((index__15350 + cljs.core.count.call(null,m__15349)));
var G__15352 = (limit__15346 - 1);
var G__15353 = cljs.core.conj.call(null,parts__15347,s__15345.substring(0,index__15350));
s__15345 = G__15351;
limit__15346 = G__15352;
parts__15347 = G__15353;
continue;
}
} else
{return cljs.core.conj.call(null,parts__15347,s__15345);
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
var index__15354 = s.length;
while(true){
if((index__15354 === 0))
{return "";
} else
{var ch__15355 = cljs.core.get.call(null,s,(index__15354 - 1));
if((function (){var or__3824__auto____15356 = cljs.core._EQ_.call(null,ch__15355,"\n");
if(or__3824__auto____15356)
{return or__3824__auto____15356;
} else
{return cljs.core._EQ_.call(null,ch__15355,"\r");
}
})())
{{
var G__15357 = (index__15354 - 1);
index__15354 = G__15357;
continue;
}
} else
{return s.substring(0,index__15354);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__15358 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3824__auto____15359 = cljs.core.not.call(null,s__15358);
if(or__3824__auto____15359)
{return or__3824__auto____15359;
} else
{var or__3824__auto____15360 = cljs.core._EQ_.call(null,"",s__15358);
if(or__3824__auto____15360)
{return or__3824__auto____15360;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__15358);
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
var buffer__15361 = (new goog.string.StringBuffer());
var length__15362 = s.length;
var index__15363 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__15362,index__15363))
{return buffer__15361.toString();
} else
{var ch__15364 = s.charAt(index__15363);
var temp__3971__auto____15365 = cljs.core.get.call(null,cmap,ch__15364);
if(cljs.core.truth_(temp__3971__auto____15365))
{var replacement__15366 = temp__3971__auto____15365;
buffer__15361.append([cljs.core.str(replacement__15366)].join(''));
} else
{buffer__15361.append(ch__15364);
}
{
var G__15367 = (index__15363 + 1);
index__15363 = G__15367;
continue;
}
}
break;
}
});
