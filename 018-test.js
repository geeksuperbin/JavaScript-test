/*
    arguments 读取函数中不定数目的参数

    1
    2
    3
    4
*/
'use strict';

var f = function(...args){ // 多参数
    for(var i = 0; i < args.length; i++){
        console.log(arguments[i]);
    }
}

f(1,2,3,4);