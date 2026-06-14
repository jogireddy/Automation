 function fetchdata()
 {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        resolve("User data fetched successfully");
    },3000);
 });
}

//Consuming the promise
 fetchdata()
 .then(data => console.log(data))
 .catch(error => console.error(error)
 );