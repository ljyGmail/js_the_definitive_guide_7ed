let s = "hello"; // Start with some lowercase text
console.log(`s.toUpperCase(): ${s.toUpperCase()}`); // Return "HELLO", but doesn't alter s
console.log(`s: ${s}`); // => "hello": the original string has not changed

/*
let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property

let a = [1, 2, 3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element
*/

/*
let o = { x: 1 },
  p = { x: 1 }; // Two objects with the same properties
console.log(`o === p: ${o === p}`); // => false: distinct objects are never equal
let a = [],
  b = []; // Two distinct, empty arrays
console.log(`a === b: ${a === b}`); // => false: distinct arrays are never equal
*/

/*
let a = []; // The variable a refers to an empty array.
let b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
console.log(`a[0]: ${a[0]}`); // => 1: the change is also visible through variable a.
console.log(`a === b: ${a === b}`); // => true: a and b refer to the same object, so they are equal.
*/

let a = ["a", "b", "c"]; // An array we want to copy
let b = []; // A distinct array we'll copy into
for (let i = 0; i < a.length; i++) {
  // For each index of a[]
  b[i] = a[i]; // Copy an element of a into b
}
console.log(`b: ${b}`);
let c = Array.from(b); // In ES6, copy arrays with Array.from()
console.log(`c: ${c}`);

function equalsArrays(a, b) {
  if (a === b) return true; // Identical arrays are equal
  if (a.length !== b.length) return false; // Different-size arrays not equal
  // Loop through all elements
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
  }
  return true;
}
