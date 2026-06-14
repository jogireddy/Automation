//Using callback fucntion
function getData(callback) {
    setTimeout(() => {
        callback("Data Received");
    }, 2000);
}
getData(function (result) {

    console.log(result);
});

//Using Promise

function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    })
}

getData1
.then(result=> {
    console.log(result);
});
