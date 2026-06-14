//Creating a promise
var checkStockPromise = new Promise(function (resolve, reject) {
    var itemAvailable = false;

    if (itemAvailable) {
        resolve("Item is available in stock");
    } else {

        reject("Item is not available in stock");
    }
});

//Consuming the promise
checkStockPromise
    .then(function (successMessage) {
        console.log("Success: " + successMessage);
    })
    .catch(function (errorMessage) {
        console.log("Error: " + errorMessage)
    })
    .finally(function () {
        console.log("Stock check complete.");
    });
