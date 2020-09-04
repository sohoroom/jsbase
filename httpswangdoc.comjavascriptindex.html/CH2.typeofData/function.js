/*
javascript���T���n����ƪ���k�Gfunction�R�O�B��ƪ�F���BFunction�c�y��ơC
*/

//function�R�O�᭱����ƦW�A��ᤧ()�̭����ѼơA��ƥN�X���{}���C
function hello(s) {
  console.log('hello,', s + '.');
}
hello();
hello('linen');

//�p�N�@�ӰΦW��ƽ�ȵ��ܶq�A�o�ӰΦW��ƤS�٬���ƪ�F��(function expression)�C
var print = function(x) {console.log(x);}
print('print function' , 'two arug');
print('print function' + 'two arug');

//Function�c�y���(�����[�A�֤H�ϥ�)�AFunction�������
var addtwo = new Function(
  'x',
  'y',
  'return x + y'
);
//���P���
function addtwo2(x,y) {
  return x + y;
}

print('"Function Class new-"addtwo(1,2) = ' + addtwo(1,2));
print('"function Command-"addtwo2(1,2) = ' + addtwo2(1,2));

/*
���j(recursion)�K�O�B�Ψ�ƩI�s��Ʀۨ��A�p�f�t�פ����(��ɱ���)�A�K�i�H²��
�j�骺�ĪG�C�ƾǤ��g�媺���j�Ҥl�����i�����ƦC(Fibonacci number)�A����������
�۹ϡC
*/
//�j��B���j²�ҡG�D S(N) = N + (N-1) + (N-2) + �K + 2 + 1
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

//���i�����ƦC(�O��ƦC)
//https://medium.com/tomsnote/javascript%E7%9A%84%E9%81%9E%E8%BF%B4-recursive-f8ce5d084533
function factorial(num){
  if(num<=1){
    return 1;
  }else{
    return num * factorial(num-1);
  }
}
console.log('factorial(6) = ' + factorial(6));

//���j�[��
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
javascript����ƦW���P���ܶq�W�A�G function�R�O �s�b�ܶq����(��ƦW����)���{���A
�ҡG
f();
function f() {}
//��ƦW���ɡA�ä��|����

���۹�� var��ƽ�� ���ܶq�h���s�b�ܶq���ɲ{�H(�|����)�A�ҡG
f();
var f = function (){};
// TypeError: undefined is not a function

�W�����N�X���P��p�U�T��G
var f;
f();
f = function () {};
//�ܶq���ɩ�O����ө��ܼ�f�A�ĤG��ե�f()�o�N�����A�å����f�����

�Y�P�W��� �P�ɨϥ� function�R�O �P var��ƽ�ȡA�ݪ`�N�]��ƦW���ɲ{�H�A�|�ϱo
function�R�O���e �Q var��ƽ�Ȥ��e�л\�C
*/

/* function�`���ݩʡB��k
.name ��^��ƦW��
.length ��^��ƹw���ǤJ���ѼƭӼ�
.toString() ��^��Ʒ��X���r���(��ͨ�ƵL�k�ϥ�)
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

/*��ƥ������@�ΰ�(scope)�A�ҡG
��ƪ��@�ΰ�P�ܶq�[���ۦP�A���n���Ҧb��scope�P��B��Ҧb��scope�L���C
���x()����f���եΡA�����n����~���A�Gx()��scope��~�h�Af()�����ܶq
��var a = 2�Px()�L���C²���A��f()�ե�x()�A�����ƭӦ۪�scope���P�C
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

//�ٲ��Ѽ�
function skip(a,b) {
  return a;
}

//console.log(skip(,2)); //�����ٲ��ѼƷ|����
console.log(skip(undefined,1)); //�ٲ��ѼơA�ǤJundefined

//���scope�B�Ȫ��ƻs�P�B�ǻ�
//��l�������ȡA���Ƥ��O�ǭȶǻ��A�Ө�Ƥ������ȶȬO��l�Ȫ��ƥ��A
//���Ƥ����צp��ק惡�ƥ��ȡA���v�T�~������l��
//passes by value
var value = 999;

function ff(value) {
  value = 777;
  return value;
}

console.log(ff(value));    // 777
console.log(ff(888));    // 777
console.log(value);    // 999

//�ƦX��������(�p��ưѼơB�ƲաB����)�A���Ƥ��O�ǧ}�ǻ��A�]���Y
//�b��Ƥ����ק惡�ѼơA�N�|�v�T���~������l�ȡC
//pass by reference
//�Y�D�����@�ݩʭק�A�ӬO������Ӫ��󤺮e�A�h���|�v�T��l��
//�]������Ӫ��󤺮e�Y�����s��ȡA��ҫ��V����}�|�P��}���P
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

//�P�W�ѼơA���̫᪺���ӭ�
function same(a, a) {
  console.log(a);
}
function same2(a, a) {
  console.log(arguments[0]);  //���w�Ĥ@�ӰѼ�
}

console.log(same(1, 2));  // 2
console.log(same(1));  // undefined
console.log(same2(1, 2));  //1

//�Y��Ҧ�
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

//�@�ΰ�B���]
var m = 999;

function f1() {
  console.log(m);
}
f1() // 999�A��Ƥ�Ū�������ܼ�

//
function f2() {
  var n = 999;
}

console.log(n)  //����Ū����Ƥ��ܼơA���~
// Uncaught ReferenceError: n is not defined(

//
function f3() {
  var o = 999;
  function f2() {
�@�@console.log(o); // 999�A�l���Ū������Ƥ��ܼơAchain scope
  }
}

//f5()��f4()�l��ơA��f4()��return f5����f4()��^�Ȩ�~���A�H�Ѩϥ�
function f4() {
  var n = 999;
  function f5() {
    console.log(n);
  }
  return f5;
}

var result = f4();  //f4() = Function: f5 => result()
result(); // 999

////IIFE�A�ߧY�եΪ���ƪ�F��
//��ƻy�y
function f() {}
//��ƪ�F��
var f = function f() {}
//��ƥH��F���w�q��A�ߧY�[�W()�եΡA�S�����D
var f = function f(){ return 1}();
f; // 1
//��JS���A�歺�Y�Ofunction����r�A�@�߷|�������y�y�A����A�[�W()�K����
function f() {return 1} ();  //Uncaught SyntaxError: Unexpected token ')'
//IIFE�A��ƻy�y�ߧY�եΪ��ѨM��k���A���歺����function�A�ҡG
(function IIFE(){ }());
// or
(function IIFE(){ })();
//�G�W��IIFE�r���i�ٲ��A�Y�i���ߧY�եΤ��ΦW���
//IIFE�ΦW�G�@�קK�ìV�����ܶq�B�GIIFE����W�@�ΰ�A�i�ʸ˥~���L�kŪ�����p���ܼ�

//eval()�A���w�����I�B�O�W�եεL�k����
