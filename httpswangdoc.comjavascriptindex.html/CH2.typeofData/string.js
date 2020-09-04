/*
字串符可使用''(約定使用)、""交互使用，於相同引號內使用需使用反斜線\轉義。
多行輸寫字串符可於每行尾使用反斜線\、或於每行行首使用+號。
常用轉義特殊字符：
\0 ：null（\u0000）
\b ：後退鍵（\u0008）
\f ：換頁符（\u000C）
\n ：換行符（\u000A）
\r ：回車鍵（\u000D）
\t ：製表符（\u0009）
\v ：垂直製表符（\u000B）
\' ：單引號（\u0027）
\" ：雙引號（\u0022）
\\ ：反斜線（\u005C）
*/

console.log("''");
console.log('""');
console.log('\'Hello!!');
console.log('a\
b\
c\
d');
console.log('a'
+'b'
+'c'
+'d');
console.log('a\nb\nc\nd');

//字符串(string)可視為字符數組(char set)[0-n]，但字符串內容無法增刪更改。
var ss = 'Hello World!!'
console.log(ss[0] + ss[1] + ss[2] + ss[3] + ss[4] + ss[11] + ss[12]);
console.log(ss.length);

//Unicode表示：HTML"&#xhhhh"、javascript'\uhhhh'、CSS"hhhh"
//javascript原生支援UTF-16
/* 特殊內碼例
\u00AE ®
\u00A9 ©
\u25CA ◊
\u2610 ☐
\u2611 ☑
*/
console.log('\u00AE \u00A9 \u25CA \u2610 \u2611');

//Base64編碼(供限ACSII)將任意值轉為0~9、A~Z、a~z、+、/此64個可打印字符組。
/*
btoa()：任意值轉為Base64編碼
atob()：Base64編碼轉為任意值
node.js原生未實作以上兩函數，可使用Buffer.from(二進制數據處理)，例
*/
var b64Encoded = Buffer.from('Hello World!').toString('base64');
console.log(Buffer.from('Hello World!').toString('base64'));
console.log(Buffer.from(b64Encoded, 'base64').toString());