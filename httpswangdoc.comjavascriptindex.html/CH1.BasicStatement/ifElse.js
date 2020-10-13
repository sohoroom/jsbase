var x = 2;
var y = 2;
var comp = true;
// 比較請用嚴格相等運算符===與!==，勿用相等運算符==，勿用賦值運算符=
console.log('x = ' + x);
console.log('y = ' + y);
if (comp = x === y) {
console.log('x compare y is equal.comp: ' + comp);
} else {
console.log('x compare y is not equal.comp: ' + comp);
}