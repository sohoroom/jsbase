/*
JavaScript����8�Ӥ���B��šA��i�H����U�������ȡA���ȭ���ƭȡA�Ǧ^���L�ȡC

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
//�����H������A�Y�B��l������A�|�ഫ����l�����ȡA�A�i����
//���ഫ���覡������ե�valueOf()�A�Y���^�Ȩ̵M������A�|�A��
//�ե�toString()�C
console.log('11'.charCodeAt());  //49
console.log('2'.charCodeAt());  //50
console.log('2' > '11')  //true
var x = [2];
x > '11' //true�A�P[2].valueOf().toString() > '11'�A�Y'2' > '11'

//�۵��B���(==)�B�Y��۵��B���(===)
//�۵��B��ŷ|�����ӹB��l���ȬO�_�۵��A�|�i���������ഫ�A������(��l������)
//�Y��۵��B��šA�Y��ӹB��l���O�P�@�����A�|������^false
console(1  == 1.0);  //true
console(1 == '1');  //true
console(1 == true);  //true
console(1 == 'true');  //false
console(1 === '1');  //false
console(NaN === NaN);  //false
console(+0 === -0);  //true

//�ƦX�����Ȫ�����A���O�Ȫ�����B�ӬO�_�����O�_���V�P�@�Ӧ�}(�Y��۵����)
//�j��B�p�󪺤���h�O�Ȫ����
{} === {};  //false
[] === [];  //false
var v1 = {kk: 1};
var v2 = v1;  //��ȮɡA��ҫ����P�@�Ӧ�}
v1 === v2;  //true
k1 = [1,2,3];
k2 = [1,2,3];
k1 === k2;  //false
k1 = k2;
k1 === k2;  //true
//undefined�Pnull
undefined === undefined;  //true
null === null;  //true
null === undefined;  //false
var s1;  //undefined
var s2;  //undefined
s1 === s2;  //true

//�۵��B���(==)�A��l������
1 == true;  //true
0 == false;  //true
'true' == true;  //false
//�P Number('true') == Number(true);
'' == 0;  //true
//�P Number('') == Number(0);
'' == false;  //true
//�P Number('') == Number(false);

//�۵��B���(==)�A����P��l�����Ȫ����
//����P�ƭȤ���ɡA�����ର�ƭȫ�����
[1] == 1;  //true�A�P Number([1]) == 1;
//����P�r��Ť���ɡA�����ର�r��ū�����
[1] == '1';  //true�A�P String([1]) == '1';
//����P���L�Ȥ���ɡA������ର�ƭȫ�����
[1] == true;  //true�A�P Number([1]) == Number(true);

//�۵��B���(==)�Aundefined�Pnull
//undefined�Pnull�M��L���������N�Ȥ���ɡA�䵲�G�Ҭ�false
//undefined�Pnull��̬ۤ�����λP��ۨ�����ɡA��Ȭ�true
undefined == undefined;  //true
null == null;  //true
undefined == null;  //true
undefined === null;  //false
undefined == false;  //false
null == false;  //false
undefined == 0;  //false
null == 0;  //false

//�۵��B���(==)�A���ê������ഫ�ұa�Ӫ��@�ǤϪ�ı���G
0 == '';  // true
0 == '0';  // true

2 == true;  // false
2 == false;  // false

false == 'false';  // false
false == '0';  // true

false == undefined;  // false
false == null;  // false
null == undefined;  // true

' \t\r\n ' == 0;  // true

//�ϭ�(����)�B���!�A������U�عB��ū��^���L�ȡA�A�B���ۤϭȦ^��
1 != '1';  //false
!(1 == '1');  //false
null != undefined;  //false
!(null == undefined);  //false
null !== undefined;  //true
!(null === undefined);  //true