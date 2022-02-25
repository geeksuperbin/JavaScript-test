/*
 顺序
*/
var a = "Hello ";
var b = " World";
console.log(a + b);




/* 
if 分支
*/
var m = 3;
if(m === 3){
    console.log("满足条件时，执行的语句");
}else{
    console.log("不满足条件时，执行的语句");
}







/* 
if-else 分支
*/
var m = 4;
if(m === 4){
    console.log("满足条件时，执行的语句");
}else{
    console.log("不满足条件时，执行的语句");
}








/* 
if-else if-else 分支
*/
var m = 5;
if( m === 0){
    console.log("0");
}else if(m === 1){
    console.log("1");
}else if(m === 2){
    console.log("2");
}else{
    console.log("other");
}







/* 
switch 分支
*/
var fruit = "banana";
switch(fruit){
    case "banana":
        console.log('banana');
        // f();
        break;
    case "apple":
        console.log('apple');
        break;
    default:
        console.log('other');
        break;    
}







/* 
for 循环
*/
for(var a = 1; a <= 10; a++){
    console.log(a);
}







/* 
while 循环
*/
var n = 10;
while(n > 0){
    console.log(n);
    n--;
}







/* 
do-while 循环
*/
var c = 10;
do{
    console.log("gogogo");
    c--;
}while(c>0);








/*
 三元运算符
*/
var even = (n % 2 === 0) ? true : false;
// 上面代码运行效果与下面相同
var even;
if(n % 2 === 0){
    even = true;
}else{
    even = false;
}







/*
 标签，类似goto语句
*/
foo:{
    console.log(1);
    break foo;
    console.log("本行不会输出");
}
console.log(2);


/*
强制类型转换

*/

Number('123');
Boolean('123');




/*
false 情况


除了下面六个值被转为false，其他值都视为true。

undefined
null
false
0
NaN
""或''（空字符串）

*/










/*
ES5 6 种 数据类型，ES6 七种 Symbol

number
string
boolean
undefined
object
function

*/
var a = 1;
var b = "Hello World";
var c = true; // false;
var d = undefined;
var e  = null;
var f = function(){};
console.log(typeof  a);
console.log(typeof  b);
console.log(typeof  c);
console.log(typeof  d);
console.log(typeof  e);
console.log(typeof  f);
console.log(typeof  g);






/*
    instanceof 判断数据类型
*/

var o = {};
var a = [];
console.log(o instanceof Array);
console.log(a instanceof Array);








/*
函数调用
*/

function greeMe(yourname){
    console.log("Hello " + yourname);
}

greeMe("函数调用");




/*
判断是否是NaN
利用NaN为唯一不等于自身的值的这个特点，进行判断。
*/
function myIsNaN(value) {
  return value !== value;
}




/*
非 ASCII 码 Base64编码
*/
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
  }
/*
非 ASCII 码 Base64解码
*/
  function b64Decode(str) {
    return decodeURIComponent(atob(str));
  }
  
  console.log(b64Encode('你好 Hell哦World'));  // JUU0JUJEJUEwJUU1JUE1JUJEJTIwSGVsbCVFNSU5MyVBNldvcmxk
  console.log(b64Decode('JUU0JUJEJUEwJUU1JUE1JUJEJTIwSGVsbCVFNSU5MyVBNldvcmxk'));  // 你好 Hell哦World









///////////////////////////////////////////////////////////////////










// parseInt 方法，用于将字符串转为整数 
console.log(parseInt('123'));


// 字符串转换头部有空格，空格会自动被去除
console.log(parseInt('     81'));


// 字符串转为整数的时候，是一个个字符依次转换
var a = parseInt('8a') // 8
var b = parseInt('12**') // 12
var c = parseInt('12.34') // 12


// 将字符串转换为浮点数
var g1 = parseFloat('3.14');  // 3.14
var g2 = parseFloat('5.5moremore');  // 3.14


// 判断一个值是否为NaN
var a = isNaN(NaN);


// 判断一个值是否是正常的数值
var c = isFinite(NaN);



// 返回字符串长度
console.log("Hello".length);



// 任意值转为 Base64 编码
console.log(btoa("Hello World"));
// 非 ASCII 码字符转换，需要进行转码
console.log(btoa(encodeURIComponent("你好")));
// Base64 编码转为原来的值
console.log(atob("SGVsbG8gV29ybGQ="));
// 非 ASCII 码字符转换，需要进行解码
console.log(decodeURIComponent(atob("JUU0JUJEJUEwJUU1JUE1JUJE")));