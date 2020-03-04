const numbers =[3,4,6,8];

const result = numbers.map(function(element,index,array){
    // console.log(element,index,array);
    return element*element;

})
// using arrow function
const result1= numbers.map(element=> element*element);
console.log(result1);

// filter
console.log("filter output");
const bigger = numbers.filter(element => element > 4);
console.log(bigger);

// find
console.log("find output");
const isthere = numbers.find(element => element > 4);
console.log(isthere);