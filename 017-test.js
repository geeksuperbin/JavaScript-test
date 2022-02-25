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
console.log(g); // g is not defined
