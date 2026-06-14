// let testResults = ["Pass", "Fail", "Pass", "Skip"];


// testResults.forEach(function (result, index) {
//     console.log("Test " + index + "=> " + result);
// })

// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1. 


// console.log("Starting the test execution");

// setTimeout
// (
//     function()
// {
//     console.log("Inside timeout");
// }, 2000);
// console.log("Ending  the test execution");


function fetchData(callback)
{
    setTimeout(function(){
        console.log("Data Received");
        callback();
    },3000);
}

function processData()
{
    console.log("Processing Data");
}

fetchData(processData);
console.log("Programe continues");