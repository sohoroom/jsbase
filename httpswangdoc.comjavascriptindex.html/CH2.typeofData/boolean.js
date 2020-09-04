/*
返回布林值運算三類：
前置邏輯運算符：!(Not)
相等運算符：===、!==、==、!=
比較運算符：>、>=、<、<=
*/
if(!undefined) console.log('undefined -> false');
if(!null) console.log('null -> false');
if(!false) console.log('false -> false');
if(!0) console.log('0 -> false');
if(!NaN) console.log('NaN -> false');
if(!"") console.log('"" -> false');
if(!'') console.log("'' -> false");
if([]) console.log("[] -> true");
if({}) console.log("{} -> true");
if(1 === 1.0) console.log('1 === 1.0 is true.');
