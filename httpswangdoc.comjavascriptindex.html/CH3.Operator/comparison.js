/*
JavaScript����8�Ӥ���B��šA��i�H����U�������ȡA���ȭ���ƭȡC

> �j��B���
< �p��B���
<= �p��ε���B���
>= �j��ε���B���
== �۵��B���
=== �Y��۵��B���
!= ���۵��B���
!== �Y�椣�۵��B���

*/
//�r��Ū����
console.log('cat' > 'dog');  //false
console.log('cat' > 'catalog');  //false
console.log('cat'.charCodeAt(0));  //c->99
console.log('Cat'.charCodeAt(0));  //C->67
console.log('cat' > 'Cat');  //true
console.log('�j'.charCodeAt(0));  //�j->22823
console.log('�p'.charCodeAt(0));  //�p->23567
console.log('�j' > '�p');  //false

//�D�r��Ū����
//��l������
console.log(5 > "4");  //�P 5 > Number("4");
console.log(true > false);  //�P Number(true) > Number(false);
//NaN���׻P�����(�t�ۨ�)����B��A��^�ȬҬ�false
console.log(1 > NaN);  //false
console.log(1 <= NaN);  //false
console.log(NaN <= NaN);  //false
console.log(NaN > NaN);  //false
//�����H�����