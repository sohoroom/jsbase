/*
JavaScript提供8個比較運算符，其可以比較各類型的值，不僅限於數值，傳回布林值。

> 大於運算符
< 小於運算符
<= 小於或等於運算符
>= 大於或等於運算符
== 相等運算符
=== 嚴格相等運算符
!= 不相等運算符
!== 嚴格不相等運算符

*/
//字串符的比較
console.log('cat' > 'dog');  //false
console.log('cat' > 'catalog');  //false
console.log('cat'.charCodeAt(0));  //c->99
console.log('Cat'.charCodeAt(0));  //C->67
console.log('cat' > 'Cat');  //true
console.log('大'.charCodeAt(0));  //大->22823
console.log('小'.charCodeAt(0));  //小->23567
console.log('大' > '小');  //false

//非字串符的比較
//原始類型值
console.log(5 > "4");  //同 5 > Number("4");
console.log(true > false);  //同 Number(true) > Number(false);
//NaN不論與任何值(含自身)比較運算，返回值皆為false
console.log(1 > NaN);  //false
console.log(1 <= NaN);  //false
console.log(NaN <= NaN);  //false
console.log(NaN > NaN);  //false
//物件對象的比較，若運算子為物件，會轉換為原始類型值，再進行比較
//其轉換的方式為先行調用valueOf()，若其返回值依然為物件，會再行
//調用toString()。
console.log('11'.charCodeAt());  //49
console.log('2'.charCodeAt());  //50
console.log('2' > '11')  //true
var x = [2];
x > '11' //true，同[2].valueOf().toString() > '11'，即'2' > '11'

//相等運算符(==)、嚴格相等運算符(===)
//相等運算符會比較兩個運算子的值是否相等，會進行類型的轉換再比較其值(原始類型值)
//嚴格相等運算符，若兩個運算子不是同一類型，會直接返回false
console(1  == 1.0);  //true
console(1 == '1');  //true
console(1 == true);  //true
console(1 == 'true');  //false
console(1 === '1');  //false
console(NaN === NaN);  //false
console(+0 === -0);  //true

//複合類型值的比較，不是值的比較、而是否比較其是否指向同一個位址(嚴格相等比較)
//大於、小於的比較則是值的比較
{} === {};  //false
[] === [];  //false
var v1 = {kk: 1};
var v2 = v1;  //賦值時，其所指為同一個位址
v1 === v2;  //true
k1 = [1,2,3];
k2 = [1,2,3];
k1 === k2;  //false
k1 = k2;
k1 === k2;  //true
//undefined與null
undefined === undefined;  //true
null === null;  //true
null === undefined;  //false
var s1;  //undefined
var s2;  //undefined
s1 === s2;  //true

//相等運算符(==)，原始類型值
1 == true;  //true
0 == false;  //true
'true' == true;  //false
//同 Number('true') == Number(true);
'' == 0;  //true
//同 Number('') == Number(0);
'' == false;  //true
//同 Number('') == Number(false);

//相等運算符(==)，物件與原始類型值的比較
//物件與數值比較時，物件轉為數值後比較之
[1] == 1;  //true，同 Number([1]) == 1;
//物件與字串符比較時，物件轉為字串符後比較之
[1] == '1';  //true，同 String([1]) == '1';
//物件與布林值比較時，兩邊皆轉為數值後比較之
[1] == true;  //true，同 Number([1]) == Number(true);

//相等運算符(==)，undefined與null
//undefined與null和其他類型的任意值比較時，其結果皆為false
//undefined與null兩者相互比較或與其自身比較時，其值為true
undefined == undefined;  //true
null == null;  //true
undefined == null;  //true
undefined === null;  //false
undefined == false;  //false
null == false;  //false
undefined == 0;  //false
null == 0;  //false

//相等運算符(==)，隱藏的類型轉換所帶來的一些反直覺結果
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

//反值(取反)運算符!，比較完各種運算符後返回布林值，再運算其相反值回傳
1 != '1';  //false
!(1 == '1');  //false
null != undefined;  //false
!(null == undefined);  //false
null !== undefined;  //true
!(null === undefined);  //true