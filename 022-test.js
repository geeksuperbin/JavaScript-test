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
  for-in 遍历数组
  1
  2
  3
  */
for(i in arr3){
    console.log(arr3[i]);
}

/*
  for 循环数组
*/

for(var i = 0; i<arr3.length;i++){
  console.log(arr3[i]);
}


/**
 * while 循环数组 
 *
 */
var i = 0;
while(i<arr3.length){
  console.log(arr3[i]);
  i++;
}
// while 循环逆打印
var i = arr3.length;
while(i--){
  console.log(arr3[i]);
}

// forEach 遍历数组
arr3.forEach(function(arr){
  console.log(arr);
});

//类似数组的对象
var obj = {
  0:'a',
  1:'b',
  2:'c',
  length:3
};

console.log(obj[0]);

// 将类似数组的对象转换为数组
var arr = Array.prototype.slice.call(arrayLike);

// 遍历字符串(类似数组的对象),处理效率比较慢
Array.prototype.forEach.call('abc',function(chr){
  console.log(chr);
});

