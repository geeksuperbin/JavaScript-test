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



/*
JavaScrpit 对象 申明和使用
*/

var obj = {
    foo: 'Hello',
    bar: 'World',
    p:function(x){
        return 2 * x;
    },
    g:{ma:"666"}
};

console.log(obj); // { foo: 'Hello', bar: 'World', p: [Function: p], g: { ma: '666' } }
console.log(obj.bar); // World
console.log(obj.p(2)); // 4 匿名函数
console.log(obj.g.ma); // 666 链式引用

// 查看一个对象本身的所有属性
console.log(Object.keys(obj)); // [ 'foo', 'bar', 'p', 'g' ]

// 删除对象属性
console.log(delete(obj.g)); // true
console.log(obj); // { foo: 'Hello', bar: 'World', p: [Function: p] }

// in 判断对象属性键名是否存在
console.log("p" in obj); // true
console.log("toString" in obj); // true 继承的属性
console.log(obj.hasOwnProperty("toString")); // false 只查看本对象的属性



/*
    for-in 对象遍历

    键名： a
    键值： 1
    键名： b
    键值： 2
    键名： c
    键值： 3
*/
var obj1 = {a:1, b:2, c:3};

for(var i in obj1){
    console.log('键名：' , i);
    console.log('键值：' , obj1[i]);
}




/*
with 操作同一个对象的多个属性时，提供一些书写的方便/
*/

var obj = {
    p1:1,
    p2:2
}

with(obj){
    console.log(p1); // 1
    console.log(p2); // 2
}



/*
 三种声明 JavaScript 函数的方式

 JavaScript 语言将函数看作一种值，
 与其它值（数值、字符串、布尔值等等）地位相同。
 凡是可以使用值的地方，就能使用函数。
 比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，
 或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

*/

// 1、function 命令-函数的申明
function print1(s){
    console.log(s);
}

// 2、匿名函数-函数表达式-变量赋值
var print2 = function(s){
    console.log(s);
};

// 3、构造函数,最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体
var add = new Function(
    'x',
    'y',
    'z',
    'return x + y + z'
);
console.log(add(1,2,3));


var foo = new Function(
    'console.log("222");'
);
foo();



function f1(a,b){}
// 函数的 name 属性返回函数的名字
console.log(f1.name);
// 函数的length属性返回函数预期传入的参数个数
console.log(f1.length);
// 函数的toString()方法返回一个字符串，内容是函数的源码
console.log(f1.toString());



/*
作用域（scope）指的是变量存在的范围
在 ES5 规范中，JS 只有两种作用域：全局作用域、函数作用域
ES6 中增加了块级作用域

全局作用域：变量在整个程序中一直存在，所有地方都可以读取；
函数作用域：变量只在函数内部存在。

*/

// 1、对于顶层函数来说，函数外部声明的变量就是全局变量 global variable，它可以在函数内部读取。
var v = 1;
function f(){
    console.log(v);
}
f(); // 1

// 2、在函数内部定义的变量，外部无法读取，称为局部变量 local variable
function f1(){
    var g = 1;
}
// console.log(g); // g is not defined





/*
    arguments 读取函数中不定数目的参数

    1
    2
    3
    4
*/


var f = function(...args){ // 获取形参中的多参数
    for(var i = 0; i < args.length; i++){
        console.log(arguments[i]);
    }
}

f(1,2,3,4);




/*
闭包（closure）是 JavaScript 语言的一个难点，
也是它的特色，很多高级应用都要依靠闭包实现。


正常情况下，函数外部无法读取函数内部声明的变量
如果出于种种原因，需要得到函数内的局部变量。
正常情况下，这是办不到的，只有通过变通方法才能实现。
那就是在函数的内部，再定义一个函数。

*/

function f1() {
    var n = 999;
    function f2() {
        console.log(n); // 999
    }
  }

  /*

    既然f2可以读取f1的局部变量，那么只要把f2作为返回值，
    我们不就可以在f1外部读取它的内部变量了吗！

  */

function f1() {
    var n = 999;
    function f2() { // 闭包，目的是获取 n 值
      console.log(n);
    }
    return f2;
  }
  
  var result = f1();
  result(); // 999


  /*
  闭包累加
  */

  function createIncrementor(start){
    return function(){
        return start++;
    };
}


var inc = createIncrementor(5);
console.log(inc()); // 5
console.log(inc()); // 6
console.log(inc()); // 7



/*
立即调用函数表达式 IIFE
*/

(function(){ console.log("123") })();  //123
















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



// eval 命令接收一个字符串作为参数，并将这个字符串当作语句执行。
eval('var a = 1;');
console.log(a); // 1


// 数组定义时赋值
var arr = ['a', 'b', 'c'];

// 先定义后赋值
var arr1 = [];
arr1[0] = 'a1';
arr1[1] = 'a2';
arr1[2] = 'a3';

console.log(arr);
console.log(arr1);

// 数组杂货铺
var arr2 = [
    {a:1},
    [1,2,3],
    function(){return true;}
];
console.log(arr2); // [{…}, Array(3), ƒ]
console.log(Object.keys(arr2)); // ['0', '1', '2']

// 清空数组的最有效的方式是将 length 设置为0
arr.length = 0;
console.log(arr); // []

// 数组 in
var arr3 = ['1','2','3'];
console.log('1' in arr3); // true

/* 
  for-in 遍历数组
  1
  2
  3
  */
for(i in arr3){
    console.log(arr3[i]);
}

/*
  for 循环数组
*/

for(var i = 0; i<arr3.length;i++){
  console.log(arr3[i]);
}


/**
 * while 循环数组 
 *
 */
var i = 0;
while(i<arr3.length){
  console.log(arr3[i]);
  i++;
}
// while 循环逆打印
var i = arr3.length;
while(i--){
  console.log(arr3[i]);
}

// forEach 遍历数组
arr3.forEach(function(arr){
  console.log(arr);
});

//类似数组的对象
var obj = {
  0:'a',
  1:'b',
  2:'c',
  length:3
};

console.log(obj[0]);

// 将类似数组的对象转换为数组
arrayLike = {'a':1};
var arr = Array.prototype.slice.call(arrayLike);

// 遍历字符串(类似数组的对象),处理效率比较慢
Array.prototype.forEach.call('abc',function(chr){
  console.log(chr);
});


var obj = {p:1};
console.log(obj +2); // [object Object]2

var obj = {
    p:1,
    valueOf:function(){ //重写方法，返回原始值
        return 1;
    }
};
console.log(obj +2); //3


/**
 * 自增自减运算符有一个需要注意的地方
 * ++x   x++
 * 就是放在变量之后，会先返回变量操作前的值，再进行自增或自减操作
 * 放在变量之前，会先进行自增或自减操作，再返回变量操作后的值
 * 
 *  */ 

var x = 1;
var y = 1;

console.log(x++); // 1
console.log(++y); // 2




// 用户点击链接提交表单，但是不产生页面跳转
/* <a href="javascript:void(document.form.submit())">提交<a/> */


// 强制类型转换
var x = 1;
Number(x);
String(x);
Boolean(x);


















