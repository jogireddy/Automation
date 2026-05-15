console.log(0 == "");//true
console.log(0 == "0");//true
console.log("" == "0");  //  🤯 (transitivity broken!)


console.log(0 == false); //true
console.log(null == 0);//false
console.log(null == undefined); //avaScript treats null and undefined as equivalent for loose comparison purposes, so this returns true.
console.log(null === undefined);//The strict equality operator (===) checks both value AND type without any type coercion.c

//null is type "object" while undefined is type "undefined", so they are not strictly equal. This returns false.