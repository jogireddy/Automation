//Normal function
function add(a, b) {

    return a + b;
}
console.log(add(2, 3)); // Output: 5

//Arrow fucntion
 const add1 = (a,b)=>{
 return  a+b;
};
console.log(add1(2, 3)); // Output: 5

//Arrow fucntion with no parameter

const greet =() =>
{
   console.log("Hello, World!");
};

greet();

//Arrow function wixth one parameter
const square = x=>
{
  return x*x;
}
console.log (square(5));

//Arrow function with multiple parameters
 const multiply = (a,b)=>
 {
    return a*b;
 }
console.log(multiply(4, 5));

//Single line arrow function

const add = (a,b)=> a=b;
console.log(add(2, 3)); // 

//Using Arrow function with Arrays
let numbers =[10,20,30];

numbers.forEach(num => 
    console.log(num)); // Output: 10, 


//using map()

let numbers = [1, 2, 3, 4, 5];

let Squares = numbers .map(num => num*num);
console.log(Squares); // Output: [1, 4, 9, 16, 25]

// example

const person =
{
    name: "Chandu",

normalFunction: function ()
{
    console.log(this.name);
},

arrowFunction: () =>
{
    console.log(this.name);
}

};

person.normalFunction(); // Output
person.arrowFunction(); // 