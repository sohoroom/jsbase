//三元運算符 (conditional expression) ? true : false;
var n = 90000;
var even;
if (n % 2 ===0) {
  even = true;
} else {
  even = false;
}
console.log('n = ' + n);
console.log('Is it even? ' + even);

n = 89999
even = (n % 2 === 0) ? true : false;
console.log('n = ' + n);
console.log('Is it even? ' + even);
var msg ='數字' + n + '是' + (n % 2 === 0 ? '偶數' : '奇數');
console.log(msg)