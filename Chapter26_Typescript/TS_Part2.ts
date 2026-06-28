//primitive types

let name: string = "Lokshi";
let age: number = 30;
let pi: number = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

//Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["jogi", "Reddy"];

//Any (avoid when possible)
let anything: any = "hello";

//umknown(Safer than any)
let unknown: unknown = "hello";

let message: string = "Hello Tyyepescript";
let count: number = 42;

console.log("Message", message);
console.log("count", count);
console.log("IsActive", isActive);