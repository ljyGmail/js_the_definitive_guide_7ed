// 7.1.1 Array Literals
// simplest way to create an array
let empty = []; // An array with no elements
console.log(`empty: ${empty}`);
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
console.log(`primes: ${primes}`);
let misc = [1.1, true, "a"]; // 3 elements of various types + trailing comma
console.log(`misc: ${misc}`);

// elements can be arbitrary expressions
let base = 1024;
let table = [base, base + 1, base + 2, base + 3];
console.log(`table: ${table}`);

// Array literal can contain object literals or other array literals:
let b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];
console.log(`b: ${b}`);

// sparse arrays
let count = [1, , 3]; // Elements at indexes 0 and 2. No element at index 1
console.log(`count: ${count}`);
let undefs = [, ,]; // An array with no elements but a length of 2
console.log(`undefs: ${undefs}`);
console.log(`undefs.length: ${undefs.length}`);
