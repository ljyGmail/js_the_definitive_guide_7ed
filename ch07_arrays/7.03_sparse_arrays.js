let a = new Array(5); // No elements, but a.length is 5;
console.log(`a.length: ${a.length}`);
a = []; // Create an array with no elements and length = 0;
a[1000]=0; // Assignment adds one element but sets length to 1001;
console.log(`a.length: ${a.length}`);

let a1=[,];// This array has no elements and length 1
console.log(`a1.length: ${a1.length}`);
let a2=[undefined];// This array has one undefined element
console.log(`a2.length: ${a2.length}`);
console.log(`0 in a1: ${0 in a1}`); // => false: a1 has no element with index 0
console.log(`0 in a2: ${0 in a2}`); // => true: a2 has the undefined value at index 0
