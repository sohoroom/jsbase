//JavaScript為動態類型語言，一般變量沒有類型的限制，可以隨時賦予任意值。
var x = y ? 1 : 'a';  //y值為true，x = 1; y值為flase，x = 'a'
//類型手動轉換，Number()、String()、Boolean()
//Number()
console.log(Number(1234));  //1234
console.log(Number('1234'));  //1234
console.log(Number('1234abcd'));  //NaN，包含不可轉換字符即為NaN
console.log(Number(''));  //0
console.log(Number(true));  //1
console.log(Number(false));  //0
console.log(Number(undefined))  //NaN
console.log(Number(null));  //0
console.log(Number({a: 1}));  //NaN，物件對象
console.log(Number([1, 2, 3]));  //NaN，多鍵值陣列
console.log(Number([5]));  //5，陣列為單一、可轉換數值或字符

//Number()對於物件對象之轉換三步驟
//第一，調用對象自身的valueOf()方法，若返回原始類型值，則直接對該值調用Number()函數結束，若否則二。
//第二，第一步調用自身valueOf()方法，若返回為物件對象，則改行調用toString()方法，
//若toString()方法返回原始類型值，則對該值使用Number()函數結束，若否則三。
//第三，若經第二步改行調用toString()方法返回依然為物件對象，即報錯返回結束。
var obj = {x: 1};
Number(obj) // NaN
//上述兩行等同於，
if (typeof obj.valueOf() === 'object') {  //true
  Number(obj.toString());  //obj.toString() => [object Object]
} else {
  Number(obj.valueOf());
}

//自定義valueOf()、toString()
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};
Number(obj);  //Uncaught TypeError: Cannot convert object to primitive value

//String()數可以將任意類型的值轉化成字符串，轉換規則如下述。分為原始類型值與物件對象。
//原始類型值
//  ．數值：轉為相應的字符串。
//  ．字符串：轉化後依然為原來的值。
//  ．布林值：true轉化為'true'；false夕化為'false'。
//  ．undefined：轉化後為字符串'undefined'。
//  ．null：轉化為字符串'null'。
//物件對象
//  ．鍵值對物件({})：轉化為'[object Object]'
//  ．陣列物件([])：轉化為相對應之數組字符串形式。
//  ．函數(())：無法轉化，返回TypeError。
//
//String()對於物件對象之轉換三步驟(和Number()轉換順序相異)
//第一，調用對象自身的toString()方法，若返回原始類型值，則直接對該值調用String()函數結束，若否則二。
//第二，第一步調用自身toString()方法，若返回為物件對象，則改行調用valueOf()方法，
//若valueOf()方法返回原始類型值，則對該值使用String()函數結束，若否則三。
//第三，若經第二步改行調用valueOf()方法返回依然為物件對象，即報錯返回結束。
String({a: 1})  //"[object Object]"
//上述等同於
String({a: 1}.toString())  //"[object Object]"

//自定義valueOf()、toString()之二
String({
  toString: function () {
    return 1;
  }
})  //"1"

String({
  valueOf: function () {
    return 2;
  }
})  //"[object Object]"

String({
  valueOf: function () {
    return 3;
  },
  toString: function () {
    return 4;
  }
})  // "4"

//Boolean()函數可將任意類型的值轉為布林值。
//轉換原則為以下五值轉為false，其他值均轉為true(含所有物件對象(含空物件{}))，
//而布林值true、false兩值不轉化。
//  ．undefined
//  ．null
//  ．0 (含+0與-0)
//  ．NaN
//  ．'' (空字符串)
Boolean(undefined)  //false
Boolean(null)  //false
Boolean(0)  //false
Boolean(NaN)  //false
Boolean('')  //false

Boolean({})  //true
Boolean([])  //true
Boolean(new Boolean(false))  //true

Boolean(true)  //true
Boolean(false)  //false
//布林運算補充
0 ? true : false;  //false
'' ? true : false;  //false
0+'' ? true : false;  //true
0+'a' ? true : false;  //true
0*'a' ? true : false;  //true

//類型自動轉換，自動轉換具不確定性、亦不易除錯，在可預期為布林值、數值、字串符之處，
//替換為使用Boolean()、Number()、String()函數進行顯式轉換。
//類型自動轉換情況之三(運算中轉化是自動完成的，使用者不可見)：
//一、不同類型的數據相互運算。
console.log(1234 + 'abcd');  //"1234abcd"
//二、對非布林值類型之數據求布林值。
if ('1234') {
  console.log('1234,hello world!')
}  // "1234,hello world!"
//三、對非數值類型之值使用一元運算符(例正數+和負數-)。
+{a: 'abar'}  //NaN
-[1, 2, 3]  //NaN

//布林值自動轉換補充(上移)

//字符串自動轉換補充
//JavaScript中，字符串的自動轉換主要發生在包含字符串運符子的加法運算，其轉換
//規則是先將複合類型的值轉為原始類型的值，再將其原始類型的值轉為字符串。
'9' + 11;  //'911'
'9' + true;  //"9true"
'9' + false;  //"9false"
'9' + {};  //"9[object Object]"
'9' + [];  //"9"
'9' + function (){};  //"9function (){}"
'9' + undefined;  //"9undefined"
'9' + null;  //"9null"

var obj = {
  width: '100',
  width2: 100
};

obj.width + 20;  //"10020"
obj.width2 + 20;  //120

//數值自動轉換補充
//除了加法運算符(+)有可能會把運算子轉為字符串，其他運算符如預期轉化為數值，系統內部會
//調用Number()函數自動轉成數值。
'5' - '2';  //3
'5' * '2';  //10
true - 1;  //0
false - 1;  //-1
'1' - 1;  //0
'5' * [];  //0
false / '5';  //0
'abc' - 1;  //NaN
null + 1;  //1，null轉化為數值為0
undefined + 1;  //NaN，undefined轉化為數值為NaN

//一元運算符亦會把運算子轉化為數值
+'abc';  //NaN
-'abc';  //NaN
+true;  //1
-false;  //-0