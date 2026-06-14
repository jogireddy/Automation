//promise in javascript is an object that represents the future  result of an asynchronous operation. 
 
//Creating a promise
let promise  = new Promise(
    function(resolve, reject) 
 {
         let success = true;
         if (success)
         {
            resolve("Task Completed Successfully")
         }else
         {
            reject("Task Failed")
         }
 });

 //consuming a promise

promise.then(
    function(result){
    console.log(result);
}
)
.catch(function(error){
    console.log(error);
});