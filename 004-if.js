// var m = 3;

// if(m === 3)
// m = m + 1;



// console.log(m);


// if(m===3){
//     m += 1;
// }


// var x = 1;
// var y = 2;
// if( x = y){ // 将y赋值给x
//     console.log(x);
// }


// var m  = 3;
// if(m === 3){
//     console.log("满足条件时，执行的语句");
// }else{
//     console.log("不满足条件时，执行的语句");
// }


// var m = 4;
// if( m === 0){

// }else if(m === 1){

// }else if(m === 2){

// }else{

// }




// var m = 1;
// var n = 2;

// if(m !== 1)
// if(n === 2)console.log('hello');
// else console.log('world');



// if(m !== 1){ // 不恒等于
//     if(n === 2){
//         console.log('hello');
//     }else{
//         console.log('world')
//     }
// }

// function f(){
//     console.log("111");
// }

// var fruit = "banana";

// switch(fruit){
//     case "banana":
//         console.log('11');
//         f();
//         break;
//     case "apple":
//         console.log('222');
//         break;
//     default:
//         break;    
// }


var x = 1;
switch(x){
    case true:
        console.log('x 发生类型转换');
        break;
    default:
        console.log('x 没有发生类型转换');
}


n = 10;

var even = (n % 2 === 0) ? true : false;


var even;
if(n % 2 === 0){
    even = true;
}else{
    even = false;
}





var myVar;

console.log(myVar ? 'myVar has a value' : 'myVar does not have a value');


var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '基数');

console.log(msg)