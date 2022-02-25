'Did she say  \'Hello\'';

'a \
b \
c';


var a = 'sss' + 'fff' + 'cccc';


console.log(a);


(function () { /*
    line 1
    line 2
    line 3
    */}).toString().split('\n').slice(1, -1).join('\n') 


    console.log((function () { /*
        line 1
        line 2
        line 3
        */}).toString().split('\n').slice(1,-1).join("\n"));
    // "line 1
    // line 2
    // line 3

// console.log('1\n2');


console.log("\251");
console.log("\xA9");
console.log("\u00A9");


var s = 'hello';
console.log(s[0]);
console.log(s[1]);
console.log(s[4]);


console.log('hello'[11]);
console.log('hello'[1]);
console.log('hello'['h']);

// 返回字符串长度
console.log("Hello".length);



console.log('\u00a9');
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// 任意值转为 Base64 编码
console.log(btoa("Hello World"));
// 非 ASCII 码字符转换，需要进行转码
console.log(btoa(encodeURIComponent("你好")));

// Base64 编码转为原来的值
console.log(atob("SGVsbG8gV29ybGQ="));
// 非 ASCII 码字符转换，需要进行解码
console.log(decodeURIComponent(atob("JUU0JUJEJUEwJUU1JUE1JUJE")));




/*
非 ASCII 码 Base64编码
*/
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
  }
/*
非 ASCII 码 Base64解码
*/
  function b64Decode(str) {
    return decodeURIComponent(atob(str));
  }
  
  console.log(b64Encode('你好 Hell哦World'));  // JUU0JUJEJUEwJUU1JUE1JUJEJTIwSGVsbCVFNSU5MyVBNldvcmxk
  console.log(b64Decode('JUU0JUJEJUEwJUU1JUE1JUJEJTIwSGVsbCVFNSU5MyVBNldvcmxk'));  // 你好 Hell哦World






