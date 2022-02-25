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
  遍历数组
  1
  2
  3
  */
for(i in arr3){
    console.log(arr3[i]);
}
https://wangdoc.com/javascript/types/array.html

