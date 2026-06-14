// // 1. Creating the Promise

const checkStockPromise = new Promise((resolve, reject) => {
    const itemAvailable = true;

    if (itemAvailable) {
        resolve("Item is available in stock");
    }
    else {
        reject("Item is not available in stock");
    }

});

//consuming the promise

checkStockPromise
.then((successMessage)=> console.log("Success: " + successMessage))
.catch((errorMessage)=> console.log("Error: " + errorMessage))
.finally(()=> console.log("Stock check complete."));
