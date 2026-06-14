let myPromise = new Promise(
    function(resolve, reject) {
        setTimeout(()=>{
            resolve("Data Received");
        },2000);
}
);
myPromise .then
    (function (data){
        console.log(data);
    });
