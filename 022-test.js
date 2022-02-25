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
console.log(arr2);