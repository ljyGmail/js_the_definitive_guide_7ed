// # 7.1.1 Array Literals
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

console.log("=".repeat(30));
// # 7.1.2 The Spread Operator
let a2 = [1, 2, 3];
let b2 = [0, ...a2, 4]; // b == [0, 1, 2, 3, 4]
console.log(`b2: ${b2}`);

// The spread operator is a convenient way to create a (shallow) copy of an array:
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // Modifyh the copy does change the original
console.log(`original[0]: ${original[0]}`); // => 1

// The spread operator works on any iterable object.
let digits = [..."0123456789ABCDEF"]; // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
console.log(`digits: ${digits}`);

// Use set to remove duplicates:
let letters = [..."hello world"]; // => ["h","e","l","o"," ","w","r","d"]
console.log(`[...new Set(letters)]: ${[...new Set(letters)]}`);

console.log("=".repeat(30));
// # 7.1.3 The Array() Constructor
// Invoke construoctor in three distinct ways:
// 1. Call it with no arguments:
let a31 = new Array();
console.log(`a31: ${a31}`); // equivalent to the array literal []

// 2. Call it with a single numeric argument, which specifies a length:
let a32 = new Array(10);
console.log(`a32: ${a32}`); // equivalent to the array literal []

// 3. Explicitly specify two or more array elements or a single non-numeric element:
let a33 = new Array(5, 4, 3, 2, 1, "testing, testing");
console.log(`a33: ${a33}`);

console.log("=".repeat(30));
// # 7.1.4 Array.of()
// a factory method that creates a new array using its argument values
console.log(`Array.of(): ${Array.of()}`);
console.log(`Array.of(10): ${Array.of(10)}`);
console.log(`Array.of(1, 2, 3): ${Array.of(1, 2, 3)}`);

console.log("=".repeat(30));

// # 7.1.5 Array.from()
let copy5 = Array.from(original);
console.log(`copy5: ${copy5}`);

// Array.from() also make a true-array copy of an array-like object
// let truearray = Array.from(arraylike);
