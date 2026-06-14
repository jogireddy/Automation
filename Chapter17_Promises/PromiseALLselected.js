let p1 = Promise.resolve("Success1");
let p2 = Promise.resolve("Error");
let p3 = Promise.resolve("Success3");

Promise.allSettled([p1,p2,p3])
.then(results=>{
    console.log(results);
});