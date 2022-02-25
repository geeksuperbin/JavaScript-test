// 将字符串转为整数
console.log();
console.log(parseInt('123'));
// 字符串转换头部有空格，空格会自动被去除
console.log(parseInt('     81'));
console.log(parseInt(1.23));
// 字符串转为整数的时候，是一个个字符依次转换
var a = parseInt('8a'); // 8
var b = parseInt('12**'); // 12
var c = parseInt('12.34'); // 12
var d = parseInt('15e2'); // 15
var e = parseInt('15px'); // 15
var f =  parseInt('0x10'); // 16
var g = parseInt('011'); // 11


// 将字符串转换为浮点数
var g1 = parseFloat('3.14');  // 3.14
var g2 = parseFloat('5.5moremore');  // 3.14
var g2 = parseFloat('\t\v\r12.34\n');  // 3.14



var h;



