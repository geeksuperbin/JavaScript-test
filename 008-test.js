var a = undefined;


var a = null;


if(!undefined){
    console.log('undefined  is false');
}


if(!null){
    console.log('null is false');
}

if(undefined == null){
    console.log("~~~~~~~~");
}


var a  = Number(null) + 5;

console.log(a);

console.log(Number(null));
console.log(Number(undefined));


function ff(x){
    return x;
}

console.log(ff() + 1);




var  o   =  new  Object();

console.log(o.p);


if(!''){
    console.log(typeof 'true');
    console.log(typeof true);
}


if([]){
    console.log('true');
}

if({}){
    console.log('true');
}
