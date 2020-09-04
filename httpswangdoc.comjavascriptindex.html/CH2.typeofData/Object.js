/*
簡說，物件就是一組鍵值對(key鍵名-value鍵值)的集合{}，為無序的複合數據集合。
*/
var obj = {
  key1: 'key1value',
  method2: function(x) {return x**2;},
  property3: 'color-red',
  23: 'linen'
};
console.log('obj.key1 = ' + obj.key1);
console.log('obj.method2(9) = ' + obj.method2(9));
console.log('obj.property3 = ' + obj.property3);

/*
javascript語句以分號結束，但表達式不需要分號結尾。一旦在表達式後面添加分號，則
JavaScript引擎就將表達式視為語句，這樣會產生一些沒有任何意義的語句(表達式語句除外)。

物件採用大括號表示，問題如果行首是一個大括號，它到底意指是表達式(expressions)
還是語句(statements)？
*/
obj.key1 = '.key1value';
console.log(obj.key1);
console.log(obj['23']);
//console.log(obj.23);  數值鍵名無法使用.、需使用[]
console.log(Object.keys(obj));
console.log(delete obj['key1']);
console.log(Object.keys(obj));
console.log('key1' in obj);  //false
console.log('method2' in obj);  //true
console.log('toString' in obj);  //true
console.log(obj.hasOwnProperty('toString'));  //false

//可列舉的(enumerable)屬性之遍歷for...in
obj.add1 = 'add1value'
obj.add2 = 'add2value'
obj.add3 = 'add3value'
obj['add4'] = 'add4value'
for (var i in obj) {
  console.log('key: ', i);
  console.log('value: ', obj[i]);
}

//with語句，操作同一物件(既有)多屬性時，提供編碼的便利性。
with (obj) {
  add1 = 'withadd1';
  add2 = 'withadd2';
  add3 = 'withadd3';
}
for (var i in obj) {
  console.log('key: ', i);
  console.log('value: ', obj[i]);
}
console.log(Object.keys(obj));    //Object.keys() 查看物件所有鍵屬性
delete obj.add4;    //鍵屬性的刪除
console.log(delete obj.add5);    //刪除物件中不存在的鍵屬，不報錯，返回值亦為true
var newobj = new obj();
delete newobj.add4;    //會返回false僅在於欲刪除之物件該屬性為不能刪除的鍵屬(如繼承鍵屬)
console.log(Object.keys(newobj));