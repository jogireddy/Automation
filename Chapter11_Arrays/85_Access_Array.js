//Accessing & Modifying Array Elements

let statuses = ["Pass", "Fail", "Pending"];
console.log(statuses[0]); // Pass
console.log(statuses[2]); // Pending


// browwed functions
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));

//Modify
statuses[1] = "Incomplete";
console.log(statuses); 
