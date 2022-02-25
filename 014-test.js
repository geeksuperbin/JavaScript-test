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