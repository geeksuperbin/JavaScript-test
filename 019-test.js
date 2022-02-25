/*
闭包（closure）是 JavaScript 语言的一个难点，
也是它的特色，很多高级应用都要依靠闭包实现。


正常情况下，函数外部无法读取函数内部声明的变量
如果出于种种原因，需要得到函数内的局部变量。
正常情况下，这是办不到的，只有通过变通方法才能实现。
那就是在函数的内部，再定义一个函数。

*/

function f1() {
    var n = 999;
    function f2() {
        console.log(n); // 999
    }
  }

  /*

    既然f2可以读取f1的局部变量，那么只要把f2作为返回值，
    我们不就可以在f1外部读取它的内部变量了吗！

  */

function f1() {
    var n = 999;
    function f2() { // 闭包，目的是获取 n 值
      console.log(n);
    }
    return f2;
  }
  
  var result = f1();
  result(); // 999