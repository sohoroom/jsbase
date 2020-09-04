/*
數組、陣列(array)是按次序排列的一組值。位置由0往後編號，以[]表示。
*/
var arr = ['a', 'b', 'c', 'd'];
console.log(arr);
arr[0] = 'e';
arr[1] = 'f';
arr[2] = 'g';
console.log(arr);
//
arr[0] = {a: 1};
arr[1] = [1, 2, 3];
arr[2] = function() {return 1;}
console.log(arr);
console.log(typeof(arr));  //object，特殊的物件
console.log(Object.keys(arr));  //[ '0', '1', '2', '3' ]
console.log(arr.length);  //4，length可讀寫，最大值為2的32次方-1
arr.length = 3;  //length設為0，即可清空array
console.log(arr);
arr[-1] = '168';  //非合法整數鍵值，不影響array.length
arr[4294967296] = '169';
arr['long'] = '170';
console.log(arr.length);
console.log(arr);

//in運算，鍵名檢查
console.log(1 in arr);  //true
console.log(long in arr);  //Uncaught ReferenceError: long is not defined
console.log('long' in arr);  //true
arr.length = 5;
console.log(4 in arr);  //false

//for...in & for while，遍歷的差異
//遍歷數組，含非數值鍵名
for (var i in arr) {
  console.log(arr[i]);
}
//遍歷數組，不含非數值鍵名
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//
var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//array-like object
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

obj[0] // 'a'
obj[1] // 'b'
obj.length // 3
obj.push('d') // TypeError: obj.push is not a function

//array-like 1-2-3
//arguments對象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

//DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

//字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

//上三例1-2-3，它們都不是數組(instanceof運算符返回false)，
//但是看上去都非常像數組。
//數組的slice方法可以將"類似數組的對象物件"變成真正的數組。
arrayLike.forEach(function (chr){console.log(chr)});  //Uncaught TypeError: arrayLike.forEach is not a function
var arrslice = Array.prototype.slice.call(arrayLike);
arrslice instanceof Array;
arrslice.forEach(function (chr){console.log(chr)});  //a,b

