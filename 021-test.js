// 'use strict'; // ReferenceError: a is not defined
// eval 命令接收一个字符串作为参数，并将这个字符串当作语句执行。
eval('var a = 1;');
console.log(a); // 1