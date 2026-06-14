let p1 = new Promise(resolve =>
    setTimeout(() => resolve("Task 1"), 1000)
);

let p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Task2 Failed"), 2000)
);

Promise.allSettled([p1, p2])
    .then(results => {
        console.log(results);
    });