/*
Javascript所有數字都是64bit浮點數，1 === 1.0
浮點數不是精確的數，0.1 + 0.2 === 0.3 (false)

四種進制：
十進制：沒有前綴0的數值，為默認預設進制。
八進制：前綴0o或0O的數值。
十六進制：前綴0x或0X的數值。
二進制：前綴0b或0B的數值。

NaN -> Not a Number
*/

console.log('Number.MAX_VALUE = ' + Number.MAX_VALUE);
console.log('Number.MIX_VALUE = ' + Number.MIN_VALUE);

console.log('Dec 255= ' + 255);
console.log('Hex 0xff = ' + 0xff);
console.log('Oct 0o377 = ' + 0o377);
console.log('Bin 0b11111111 = ' + 0b11111111);

if (-0 === +0) console.log('-0 === +0 is true.');
if (!((1 / +0) === (1 / -0))) console.log('(1 / +0) === (1 / -0) is false.');
if (!(NaN === NaN)) console.log('Nan === NaN is flase.');

console.log("parseInt('654123') = " + parseInt('654123'));
console.log("parseInt('    87') = " + parseInt('    87'));
console.log("parseInt('12.345') = " + parseInt('12.345'));
console.log("parseInt('65535 組') = " + parseInt('65535 組'));
console.log("parseInt('xyz') = " + parseInt('xyz'));
console.log("parseInt('0xffff') = " +parseInt('0xffff'));
console.log("parseInt('ffff',16) = " +parseInt('ffff',16));

console.log("parseFloat('3.14') = " + parseFloat('3.14'));
console.log("parseFloat('314e-2') = " + parseFloat('314e-2'));
console.log("parseFloat('  5.5人次') = " + parseFloat('  5.5人次'));
console.log("parseFloat('  人次5.5') = " + parseFloat('  人次5.5'));
console.log("parseFloat('0') = " + parseFloat('0'));
console.log("Number('0') = " + Number('0'));
console.log("parseFloat('') = " + parseFloat(''));
console.log("Number('') = " + Number(''));
console.log("parseFloat('12.345人次') = " + parseFloat('12.345人次'));
console.log("Number('12.345人次') = " + Number('12.345人次'));

//isNaN()布林運算勿用，請利用NaN為唯一不等於自身值特點進行判定即可
console.log("isNaN('Hello World!!') = " + isNaN('Hello World!!'));
if ('Hello' === 'Hello') console.log("'Hello' === 'Hello' is true.");
if (!(NaN === NaN)) console.log('Nan === NaN is flase.');

//isFinite()布林運算，數值(Number)中除了Infinity、-Infinity、NaN、undefined返回false，
//其餘數值皆會返回true，包含null空值也會返回true。