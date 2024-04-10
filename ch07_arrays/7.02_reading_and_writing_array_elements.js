let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3
console.log(`a: ${a}`);

console.log(`a.length: ${a.length}`); // => 4

// Arrays are a special kinkd of object.
let o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer
console.log(`o[1]: ${o[1]}`); // => "one"; numeric and string property names are the same

a[-1.23] = true; // This creates a property named "-1.23"
console.log(`a: ${a}`);
a["1000"] = 0; // This the 1001st elemeent of the array
console.log(`a.length: ${a.length}`); // => 1001
a[1.0] = 1; // Array index 1. Same as a[1] = 1
// console.log(`a: ${a}`);

// JS arrays have no notion of an "out of bounds" error
// because array indexes are simply a special type of property name.
let a2 = [true, false]; //This array has elements at indexes 0 and 1
console.log(`a2[2]: ${a2[2]}`);
console.log(`a2[-1]: ${a2[-1]}`);
