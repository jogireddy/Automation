let p1 = new Promise(resolve=>{
      setTimeout(()=> resolve("task 1"),1000);
});

let p2 = new Promise(resolve=>{
    setTimeout(()=>resolve("task 2"),2000)
});

let p3 = new Promise(resolve=>{
  setTimeout(()=> resolve("task 3"),3000)
})


