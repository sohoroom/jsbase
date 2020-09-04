/*
javascript有三種聲明函數的方法：function命令、函數表達式、Function構造函數。
*/

//function命令後面為函數名，於後之()裡面為參數，函數代碼於後{}內。
function hello(s) {
  console.log('hello,', s + '.');
}
hello();
hello('linen');

//如將一個匿名函數賦值給變量，這個匿名函數又稱為函數表達式(function expression)。
var print = function(x) {console.log(x);}
print('print function' , 'two arug');
print('print function' + 'two arug');

//Function構造函數(不直觀，少人使用)，Function類的實例
var addtwo = new Function(
  'x',
  'y',
  'return x + y'
);
//等同比較
function addtwo2(x,y) {
  return x + y;
}

print('"Function Class new-"addtwo(1,2) = ' + addtwo(1,2));
print('"function Command-"addtwo2(1,2) = ' + addtwo2(1,2));

/*
遞迴(recursion)便是運用函數呼叫函數自身，如搭配終止條件(邊界條件)，便可以簡化
迴圈的效果。數學中經典的遞迴例子為斐波那契數列(Fibonacci number)，黃金分割螺
旋圖。
*/
//迴圈、遞迴簡例：求 S(N) = N + (N-1) + (N-2) + … + 2 + 1
function sumloop(num){
  let sn = 0
  for (let i=1; i<=num; i++) {sn = sn + i}  //sn += i
  return sn
}
console.log('sumloop(10)= ', sumloop(10));

function sumRecursion(num){
  if(num < 1){
    return 'error';
  } 
  else if(num == 1){
    return 1;
  }else{
    const sn = sumRecursion(num-1)+num
    return sn
  }
}
console.log('sumRecursion(0) = ' + sumRecursion(0));
console.log('sumRecursion(1) = ' + sumRecursion(1));
console.log('sumRecursion(10) = ' + sumRecursion(10));

//斐波那契數列(費氏數列)
//https://medium.com/tomsnote/javascript%E7%9A%84%E9%81%9E%E8%BF%B4-recursive-f8ce5d084533
function factorial(num){
  if(num<=1){
    return 1;
  }else{
    return num * factorial(num-1);
  }
}
console.log('factorial(6) = ' + factorial(6));

//遞迴觀察
function factorial2(num){
  console.log('num = ', num);
  if(num<=1){
    return 1;
  }else{
    const Fn = num * factorial2(num-1);
    console.log('num in F:', num, 'Fn:', Fn);
    return Fn;
  }
}
console.log(factorial2(6));

//fib(n):fib(n-2)+fib(n-1) except n=0 or n=1
function fibeasy(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  console.log('num:',num);
  return fibeasy(num - 2) + fibeasy(num - 1);
}
console.log(fibeasy(6));

function fib(n) {
  var fib_n = function(curr, next, n) {
    if (n == 0) {
      return curr;
      }else{
        console.log("curr:",curr,",next:",next,",n:",n);
        return fib_n(next, curr+next, n-1);
        }
      }
    return fib_n(0, 1, n);
}
console.log('fib(6): ',fib(6));


/*
javascript中函數名似同於變量名，故 function命令 存在變量提升(函數名提升)的現像，
例：
f();
function f() {}
//函數名提升，並不會報錯

但相對於 var函數賦值 於變量則不存在變量提升現象(會報錯)，例：
f();
var f = function (){};
// TypeError: undefined is not a function

上面兩行代碼等同於如下三行：
var f;
f();
f = function () {};
//變量提升於是首行申明變數f，第二行調用f()這就報錯，並未賦值f為函數

若同名函數 同時使用 function命令 與 var函數賦值，需注意因函數名提升現象，會使得
function命令內容 被 var函數賦值內容覆蓋。
*/

/* function常用屬性、方法
.name 返回函數名稱
.length 返回函數預期傳入的參數個數
.toString() 返回函數源碼的字串符(原生函數無法使用)
*/

console.log(hello.name);
console.log(hello.length);
console.log(print.name);
console.log(print.length);
console.log(addtwo.name);
console.log(addtwo.length);
console.log(addtwo2.name);
console.log(addtwo2.length);
console.log(sumloop.name);
console.log(sumloop.length);
console.log(sumRecursion.name);
console.log(sumRecursion.length);
console.log(factorial.name);
console.log(factorial.length);
console.log(factorial2.name);
console.log(factorial2.length);
console.log(fibeasy.name);
console.log(fibeasy.length);
console.log(fib.name);
console.log(fib.length);
console.log(fib.toString());
console.log(Math.sqrt.toString());

/*函數本身的作用域(scope)，例：
函數的作用域與變量觀念相同，其聲明所在之scope與其運行所在之scope無關。
函數x()於函數f內調用，但其聲明於外部，故x()之scope於外層，f()內部變量
之var a = 2與x()無關。簡言，雖f()調用x()，但其函數個自的scope不同。
*/
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1

//省略參數
function skip(a,b) {
  return a;
}

//console.log(skip(,2)); //直接省略參數會報錯
console.log(skip(undefined,1)); //省略參數，傳入undefined

//函數scope、值的複製與、傳遞
//原始類型的值，於函數中是傳值傳遞，而函數內的此值僅是原始值的複本，
//於函數內不論如何修改此複本值，不影響外部之原始值
//passes by value
var value = 999;

function ff(value) {
  value = 777;
  return value;
}

console.log(ff(value));    // 777
console.log(ff(888));    // 777
console.log(value);    // 999

//複合類型的值(如函數參數、數組、物件)，於函數中是傳址傳遞，因此若
//在函數內部修改此參數，將會影響此外部之原始值。
//pass by reference
//若非物件單一屬性修改，而是替換整個物件內容，則不會影響原始值
//因替換整個物件內容即為重新賦值，其所指向之位址會與原址不同
var obj = { p: 1 };
var obj2 = [1,2,3];

function f(o) {
  o.p = 2;
}
function f2(o) {
  o = [4,5,6]
}
f(obj);
f2(obj2);

console.log(obj.p)    // 2
console.log(obj2)    // 1,2,3

//同名參數，取最後的那個值
function same(a, a) {
  console.log(a);
}
function same2(a, a) {
  console.log(arguments[0]);  //指定第一個參數
}

console.log(same(1, 2));  // 2
console.log(same(1));  // undefined
console.log(same2(1, 2));  //1

//嚴格模式
var normal = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}
console.log(normal(1, 1)); // 5

var strict = function(a, b) {
  'use strict';
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}
console.log(strict(1, 1)); // 2

//作用域、閉包
var m = 999;

function f1() {
  console.log(m);
}
f1() // 999，函數內讀取全域變數

//
function f2() {
  var n = 999;
}

console.log(n)  //全域讀取函數內變數，錯誤
// Uncaught ReferenceError: n is not defined(

//
function f3() {
  var o = 999;
  function f2() {
　　console.log(o); // 999，子函數讀取父函數內變數，chain scope
  }
}

//f5()為f4()子函數，於f4()尾return f5做為f4()返回值到外部，以供使用
function f4() {
  var n = 999;
  function f5() {
    console.log(n);
  }
  return f5;
}

var result = f4();  //f4() = Function: f5 => result()
result(); // 999

////IIFE，立即調用的函數表達式
//函數語句
function f() {}
//函數表達式
var f = function f() {}
//函數以表達式定義後，立即加上()調用，沒有問題
var f = function f(){ return 1}();
f; // 1
//於JS中，行首若是function關鍵字，一律會解釋為語句，於其後再加上()便報錯
function f() {return 1} ();  //Uncaught SyntaxError: Unexpected token ')'
//IIFE，函數語句立即調用的解決方法為，讓行首不為function，例：
(function IIFE(){ }());
// or
(function IIFE(){ })();
//二上之IIFE字元可省略，即可為立即調用之匿名函數
//IIFE匿名：一避免污染全局變量、二IIFE為單獨作用域，可封裝外部無法讀取的私有變數

//eval()，有安全風險、別名調用無法明辨
