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

