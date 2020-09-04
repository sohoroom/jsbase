/*
JavaScript矗ㄑ8ゑ耕笲衡才ㄤゑ耕摸ぃ度计

> 笲衡才
< 笲衡才
<= ┪单笲衡才
>= ┪单笲衡才
== 单笲衡才
=== 腨单笲衡才
!= ぃ单笲衡才
!== 腨ぃ单笲衡才

*/
//﹃才ゑ耕
console.log('cat' > 'dog');  //false
console.log('cat' > 'catalog');  //false
console.log('cat'.charCodeAt(0));  //c->99
console.log('Cat'.charCodeAt(0));  //C->67
console.log('cat' > 'Cat');  //true
console.log(''.charCodeAt(0));  //->22823
console.log(''.charCodeAt(0));  //->23567
console.log('' > '');  //false

//獶﹃才ゑ耕
//﹍摸
console.log(5 > "4");  // 5 > Number("4");
console.log(true > false);  // Number(true) > Number(false);
//NaNぃ阶籔ヴ(ō)ゑ耕笲衡false
console.log(1 > NaN);  //false
console.log(1 <= NaN);  //false
console.log(NaN <= NaN);  //false
console.log(NaN > NaN);  //false
//ン癸禜ゑ耕