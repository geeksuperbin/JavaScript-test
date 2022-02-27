/**
 *  JS 错误处理机制
 * 
 *  message:错误提示信息
 *  name：错误名称（非标准属性）
 *  stack 错误的堆栈（非标准属性）
 */

// var err = new Error('出错了');
// console.log(err.message); // 出错了

function throwit(){
    throw new Error('');
}

function catchit(){
    try{
        throwit();
    }catch(e){
        console.log(e.stack);
    }
}

// catchit();


/**
 * SyntaxError：对象是解析代码时发生的错误
 * ReferenceError：对象是引用一个不存在的变量时发生的错误
 * RangeError：对象是一个值超出有效范围时发生的错误
 * TypeError：对象是变量或参数不是预期类型时发生的错误
 * URIError：对象是 URI 相关函数的参数不正确时抛出的错误
 * EvalError：函数没有被正确执行时，抛出错误
 * 
 * 以上这 6 种派生错误，连同原始的 Error 对象，都是构造函数，开发者可以使用它们，手动生成错误对象的实例
 * 这些构造函数都接受一个参数，代表错误提示信息（message）
 * var err1 = new Error('出错了');
 * var err2 = new RangeError('出错了，变量超出有效范围');
 * var err3 = new TypeError('出错了,变量类型无效');
 * err1.message;
 * err2.message;
 * err3.message;
 */


/**
 * 自定义错误
 */
function UserError(message){
    this.message = message || '默认信息';
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;


var aa  = new UserError("哈哈哈");

console.log(aa.message);