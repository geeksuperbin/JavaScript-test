/*
    JS 语言的每一个值，都属于一种数据类型。
    JS 的数据类型共有六种
    E6 又新增第7种 Symbol 类型的值

*/

var a = 1;
var b = "Hello World";
var c = true; // false;

var d = undefined;

var e  = null;

var f = function(){};

function g(){

}

console.log(typeof  a);
console.log(typeof  b);
console.log(typeof  c);
console.log(typeof  d);
console.log(typeof  e);
console.log(typeof  f);
console.log(typeof  g);

console.log(typeof hhh);


if(typeof hhh === "undefined"){
    console.log('哈哈');
}

console.log(typeof {});
console.log(typeof []);
console.log(typeof Window);


var o = {};
var a = [];


console.log(o instanceof Array);
console.log(a instanceof Array);
