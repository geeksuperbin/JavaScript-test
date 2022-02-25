function createIncrementor(start){
    return function(){
        return start++;
    };
}


var inc = createIncrementor(5);
console.log(inc()); // 5
console.log(inc()); // 6
console.log(inc()); // 7

(function(){ console.log("123") })();
