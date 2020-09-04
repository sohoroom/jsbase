/*
�ƲաB�}�C(array)�O�����ǱƦC���@�խȡC��m��0����s���A�H[]��ܡC
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
console.log(typeof(arr));  //object�A�S������
console.log(Object.keys(arr));  //[ '0', '1', '2', '3' ]
console.log(arr.length);  //4�Alength�iŪ�g�A�̤j�Ȭ�2��32����-1
arr.length = 3;  //length�]��0�A�Y�i�M��array
console.log(arr);
arr[-1] = '168';  //�D�X�k�����ȡA���v�Tarray.length
arr[4294967296] = '169';
arr['long'] = '170';
console.log(arr.length);
console.log(arr);

//in�B��A��W�ˬd
console.log(1 in arr);  //true
console.log(long in arr);  //Uncaught ReferenceError: long is not defined
console.log('long' in arr);  //true
arr.length = 5;
console.log(4 in arr);  //false

//for...in & for while�A�M�����t��
//�M���ƲաA�t�D�ƭ���W
for (var i in arr) {
  console.log(arr[i]);
}
//�M���ƲաA���t�D�ƭ���W
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
//arguments��H
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

//DOM������
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

//�r�Ŧ�
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

//�W�T��1-2-3�A���̳����O�Ʋ�(instanceof�B��Ū�^false)�A
//���O�ݤW�h���D�`���ƲաC
//�Ʋժ�slice��k�i�H�N"�����Ʋժ���H����"�ܦ��u�����ƲաC
arrayLike.forEach(function (chr){console.log(chr)});  //Uncaught TypeError: arrayLike.forEach is not a function
var arrslice = Array.prototype.slice.call(arrayLike);
arrslice instanceof Array;
arrslice.forEach(function (chr){console.log(chr)});  //a,b

