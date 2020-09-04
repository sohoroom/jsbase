/*
JavaScript 共提供10個算術運算符，用來完成基本的算術運算。

加法運算符：x + y
減法運算符：x - y
乘法運算符：x * y
除法運算符：x / y
指數運算符：x ** y
餘數運算符：x % y
自增運算符：++x 或者 x++
自減運算符：--x 或者 x--
正數值運算符：+x
負數值運算符：-x
*/

//加法運算符，唯一會產生overload重載(相加或連接)之運算
//其餘運算，將所有運算子一律轉為數值，再進行數學運算
console.log('1 + 1 = ',1+1);  //2，相加
console.log('true + true = ',true+true);  //2，相加
console.log('"a" + "bc" = ',"a"+"bc");  //"abc"，連接
console.log("1 + 'a' + 2 + 'b' =",1+'a'+2+'b');  //1a2b，連接
console.log("'3' + 4 + 5 =",'3'+4+5);  //345，由左至右，連接
console.log("3 + 4 + '5' =",3+4+'5');  //75，由左至右，相加後連接
//物件的相加
var obj = { k: 1 };
obj.valueOf();  //{ k: 1 }
obj.valueOf().toString(); //'[object Object]'
console.log('obj + 2 =',obj+2);  //[object Object]2
//valueOf()與toString()
var obj = { valueOf: function (){return 1} };
//obj.valueOf = function () {return 1};
console.log('obj + 2 =',obj+2);  //3，相加
var obj = { toString: function (){return 'hello'} };
//obj.toString = function () {return 'hello'};
console.log('obj + 2 =',obj+2);  //hello2，連接

//餘數運算符%
console.log(13%5);  //3
console.log(-7%2);  //-1
console.log(7%-2);  //1，餘數運算正負號由第一個運算子決定
console.log(Math.abs(-7)%2);  //1

//自增與自減運算符++、--
var x = 5;
x++;  //5，自增符於變數後，先返回變數值再++(變數在前就先回(再加))
++x;  //7，自增符於變數先，先++再返回變數值(++在前就先加(再回))
x--;  //7，(變數在前就先回(再減))
--x;  //5，(--在前就先減(再回))
//自增與自減運算符為僅有的兩個會改變變數自身值的運算符

//正負值運算符(同為+加號、-減號，但為一元運算符)
+true; //1，非數值經正、負運算符後，皆會轉為數值，作用同Number()
Number(true);  //1
-(-true);  //1，兩連負值運算，等同正值運算符
+[];  //0
+{};  //NaN

//指數運算符**，前為底數、後為指數
2**5;  //32
2 ** 3 ** 2;  //512，指數運算為右結合，即多指數運算時它先進行最右運算再往左
2 ** (3 ** 2);  //512，同上
(2 ** 3) ** 2;  //64

//賦值運算符(Assignment Operators)，=等號
var x = 99;  //將數值99賦值給變數x
var y = 88;  //將數值88賦值給變數x
var x = y;  //將變數y的值賦值給變數x
var y = 5;
//賦值運算符與其他運算符結合例，複合賦值皆先進行指定運算再賦值給左邊之變數
x += y;  //x = x + y;
x -= y;  //x = x - y;
x *= y;  //x = x * y;
x /= y;  //x = x / y;
x %= y;  //x = x % y;
x **= y;  //x = x ** y;
//位元運算符
x >>= y;  //x = x >> y;
x <<= y;  //x = x << y;
x >>>= y;  //x = x >>> y;
x &= y;  //x = x & y;
x |= y;  //x = x | y;
x ^= y;  //x = x ^ y;



