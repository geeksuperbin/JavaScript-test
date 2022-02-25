/*
 三种声明 JavaScript 函数的方式

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