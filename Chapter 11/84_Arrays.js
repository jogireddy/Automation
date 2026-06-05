//creating Array// array literal
let browser = ["Chrome", "Firefox", "Edge", "Safari"];

//array Constructor
let scores = new Array(3);// 3 is the length of the array

let sccore2= new Array(10,20,30);
console.log(scores); // 
console.log(sccore2); // [10, 20, 30]

let numbers = new Array(100,200,300);
let test = Array.of(1,2,3,4,5);
console.log(test); // [1, 2, 3, 4, 5]

// Array.from() 
let chars= Array.from("Hello");
console.log(chars);
