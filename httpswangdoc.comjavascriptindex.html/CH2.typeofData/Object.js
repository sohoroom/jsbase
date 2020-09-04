/*
²���A����N�O�@����ȹ�(key��W-value���)�����X{}�A���L�Ǫ��ƦX�ƾڶ��X�C
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
javascript�y�y�H���������A����F�����ݭn���������C�@���b��F���᭱�K�[�����A�h
JavaScript�����N�N��F�������y�y�A�o�˷|���ͤ@�ǨS������N�q���y�y(��F���y�y���~)�C

����ĥΤj�A����ܡA���D�p�G�歺�O�@�Ӥj�A���A���쩳�N���O��F��(expressions)
�٬O�y�y(statements)�H
*/
obj.key1 = '.key1value';
console.log(obj.key1);
console.log(obj['23']);
//console.log(obj.23);  �ƭ���W�L�k�ϥ�.�B�ݨϥ�[]
console.log(Object.keys(obj));
console.log(delete obj['key1']);
console.log(Object.keys(obj));
console.log('key1' in obj);  //false
console.log('method2' in obj);  //true
console.log('toString' in obj);  //true
console.log(obj.hasOwnProperty('toString'));  //false

//�i�C�|��(enumerable)�ݩʤ��M��for...in
obj.add1 = 'add1value'
obj.add2 = 'add2value'
obj.add3 = 'add3value'
obj['add4'] = 'add4value'
for (var i in obj) {
  console.log('key: ', i);
  console.log('value: ', obj[i]);
}

//with�y�y�A�ާ@�P�@����(�J��)�h�ݩʮɡA���ѽs�X���K�Q�ʡC
with (obj) {
  add1 = 'withadd1';
  add2 = 'withadd2';
  add3 = 'withadd3';
}
for (var i in obj) {
  console.log('key: ', i);
  console.log('value: ', obj[i]);
}
console.log(Object.keys(obj));    //Object.keys() �d�ݪ���Ҧ����ݩ�
delete obj.add4;    //���ݩʪ��R��
console.log(delete obj.add5);    //�R�����󤤤��s�b�����ݡA�������A��^�ȥ笰true
var newobj = new obj();
delete newobj.add4;    //�|��^false�Ȧb����R����������ݩʬ�����R��������(�p�~������)
console.log(Object.keys(newobj));