// callbac with ananommus function
function calculate (a,b, callback)
{
     callback (a,b);
}
calculate(5,10, function(x,y)
{
    console.log(x+y);
});

//Noraml function

function greet()
{
    console.log("Hello ");
}
greet();

//Function with parameter

function greet(name)
{
    console.log("Hello " + name);
}

greet("Chandu");

//Callback with parameter

function calculate1 (a,b, operation)
{
    operation(a,b);
}

function multiply(x,y)
{
    console.log(x*y);
}

calculate1(5,10,multiply);
