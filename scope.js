// hoisting
x=4;
console.log(x);
var x;

function add(x,y){
    var result = x+y;
    return result;
}
console.log(result);
console.log(add(2,3));
