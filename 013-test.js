
// JavaScrpit 对象 申明和使用
var obj = {
    foo: 'Hello',
    bar: 'World',
    p:function(x){
        return 2 * x;
    },
    g:{ma:"666"}
};

// console.log(obj);   // { foo: 'Hello', bar: 'World' }
// console.log(obj.bar); // World
// console.log(obj.p(2)); // 4 匿名函数
// console.log(obj.g.ma); // 666 链式引用

// // 查看一个对象本身的所有属性
// console.log(Object.keys(obj)); // [ 'foo', 'bar', 'p', 'g' ]
// console.log(obj); // { foo: 'Hello', bar: 'World', p: [Function: p], g: { ma: '666' } }

// var obj1 = {};
// obj1.foo = 123;
// obj1.bar = "sss";

// console.log(delete(obj.g)); // delete(obj.g);
// console.log(obj); // { foo: 'Hello', bar: 'World', p: [Function: p] }

// in 判断对象属性键名是否存在
// console.log("p" in obj); // true
// console.log("toString" in obj); // true 继承的属性
// console.log(obj.hasOwnProperty("toString")); // false 只查看本对象的属性


/*
    对象遍历

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
