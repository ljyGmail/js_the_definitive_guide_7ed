// # 7.8.1 Array Iterator Methods

// ## forEach()
let data = [1, 2, 3, 4, 5],
  sum = 0;

// Compute the sum of the elements of the array
data.forEach((value) => {
  sum += value; // sum == 15
});

console.log(`sum: ${sum}`);

// Now increment each array element
data.forEach(function (v, i, a) {
  a[i] = v + 1;
}); // data == [2, 3, 4, 5, 6]

console.log(`data: ${data}`);
console.log("-".repeat(30));
// ## map()
let a = [1, 2, 3];
console.log(`a.map(x=>x*x): ${a.map((x) => x * x)}`); // => [1, 4, 9]: the function input x and returns x*x
console.log("-".repeat(30));

// ## filter()
a = [5, 4, 3, 2, 1];
console.log(`a.filter((x) => x < 3): ${a.filter((x) => x < 3)}`); // => [2, 1]; values less than 3
console.log(
  `a.filter((x, i) => i % 2 === 0): ${a.filter((x, i) => i % 2 === 0)}`
); // => [5, 3, 1]; every other value

const sparse = [12, , 17, 21, , 25];
console.log(`sparse: ${sparse}`);
let dense = sparse.filter(() => true);
console.log(`dense: ${dense}`);

const sparseAndNullArr = [12, , 15, , 11, null, 21, undefined, 31];
console.log(`sparseAndNullArr: ${sparseAndNullArr}`);
const cleanedArr = sparseAndNullArr.filter(
  (x) => x !== undefined && x !== null
);
console.log(`cleanedArr: ${cleanedArr}`);
console.log("-".repeat(30));

// ## find() and findIndex()
a = [1, 2, 3, 4, 5];
console.log(`a.findIndex((x) => x === 3): ${a.findIndex((x) => x === 3)}`); // => 2: the value 3 appears at index 2
console.log(`a.findIndex((x) => x < 0): ${a.findIndex((x) => x < 0)}`); // => -1: no negative numbers in the array
console.log(`a.find((x) => x % 5 === 0): ${a.find((x) => x % 5 === 0)}`); // => 5: this is a multiple of 5
console.log(`a.find((x) => x % 7 === 0): ${a.find((x) => x % 7 === 0)}`); // => undefined: no multiples of 7 in the array
console.log("-".repeat(30));

// ## every() and some()
a = [1, 2, 3, 4, 5];
console.log(`a.every((x) => x < 10): ${a.every((x) => x < 10)}`);
console.log(`a.every((x) => x % 2 === 0): ${a.every((x) => x % 2 === 0)}`);

a = [1, 2, 3, 4, 5];
console.log(`a.some((x) => x % 2 === 0): ${a.some((x) => x % 2 === 0)}`);
console.log(`a.some(isNaN): ${a.some(isNaN)}`);
console.log("-".repeat(30));

// ## reduce() and reduceRight()
a = [1, 2, 3, 4, 5];
console.log(`a.reduce((x, y) => x + y, 0): ${a.reduce((x, y) => x + y, 0)}`); // => 15: the sum of the values
console.log(`a.reduce((x, y) => x * y, 1): ${a.reduce((x, y) => x * y, 1)}`); // => 120: the product of the values
console.log(
  `a.reduce((x, y) => (x > y ? x : y)): ${a.reduce((x, y) => (x > y ? x : y))}`
); // => 5: the largest of the values

// Compute 2^(3^4): Exponentiation has right-to-left precedence
a = [2, 3, 4];

console.log(
  `a.reduceRight((acc, val) => Math.pow(val, acc)): ${a.reduceRight(
    (acc, val) => Math.pow(val, acc)
  )}`
); // => 2.4178516392292583e+24
console.log("-".repeat(30));

// # 7.8.2 Flattening arrays with flat() and flatMap()
console.log("[1, [2, 3]].flat():");
console.log([1, [2, 3]].flat()); // => [1, 2, 3]
console.log("[1, [2, [3]]].flat():");
console.log([1, [2, [3]]].flat()); // => [1, 2, [3]]

a = [1, [2, [3, [4]]]];
console.log(a); // => [1, [2, [3, [4]]]]
console.log(a.flat(1)); // => [1, 2, [3, [4]]]
console.log(a.flat(2)); // => [1, 2, 3, [4]]
console.log(a.flat(3)); // => [1, 2, 3, 4]
console.log(a.flat(4)); // => [1, 2, 3, 4]

// Calling a.flatMap(f) is the same as (but more efficient than) a.map(f).flat()
let phrases = ["hello, world", "the definitive guide"];
let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words); // => ["hello", "world", "the", "definitive", "guide"]

// flatMap() can be used as a generalization of map() that allows each element
// of the input array to map to any number of elements of the output array.

// Map non-negative numbers to their square roots
console.log([-2, -1, 1, 2].flatMap((x) => (x < 0 ? [] : Math.sqrt(x)))); // => [1, 2**0.5]
console.log("-".repeat(30));

// # 7.8.3 Adding arrays with concat()
a = [1, 2, 3];
console.log(a.concat(4, 5)); // => [1, 2, 3, 4, 5]
console.log(a.concat([4, 5], [6, 7])); // => [1, 2, 3, 4, 5, 6, 7]: arrays are flattened
console.log(a.concat(4, [5, [6, 7]])); // => [1, 2, 3, 4, 5, [6, 7]]: but not nested arrays
console.log(a); // => [1, 2, 3]: the original array is unmodified

console.log("-".repeat(30));

// # 7.8.4 Stacks and Queues with push(), pop(), shift() and unshift()
let stack = []; // stack == []
stack.push(1, 2); // stack == [1, 2]
stack.pop(); // stack == [1]: returns 2
stack.push(3); // stack == [1, 3]
stack.pop(); // stack == [1]: returns 3
stack.push([4, 5]); // stack = [1, [4, 5]]
stack.pop(); // stack == [1]: returns [4, 5]
stack.pop(); // stack == []; returns 1
console.log(stack);

// flatten an array and past them to push()
// a.push(...values);

// Implement a queue data structure by using push() and shift() methods
let q = []; // q == []
q.push(1, 2); // q == [1, 2]
q.shift(); // q == [2]: returns 1
q.push(3); // q == [2, 3]
q.shift(); // q == [3]: returns 2
q.shift(); // q == []: returns 3
console.log(q);

// unshift()
a = []; // a == []
a.unshift(1); // a == [1]
a.unshift(2); // a == [2, 1]
a = []; // a == []
// When passing multiple arguments, they are inserted all at once.
a.unshift(1, 2); // a == [1, 2]
console.log(a);

console.log("-".repeat(30));

// # 7.8.5 Subarrays with slice(), splice(), fill() and copyWithin()
// ## slice()
a = [1, 2, 3, 4, 5];
console.log(a);
console.log(a.slice(0, 3)); // Returns [1, 2, 3]
console.log(a.slice(3)); // Returns [4, 5]
console.log(a.slice(1, -1)); // Returns [2, 3, 4]
console.log(a.slice(-3, -2)); // Returns [3]
console.log("~".repeat(30));

// ## splice()
a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(4)); // => [5, 6, 7, 8]; a is now [1, 2, 3, 4]
console.log(a);
console.log(a.splice(1, 2)); // => [2, 3]; a is now [1, 4]
console.log(a);
console.log(a.splice(1, 1)); // => [4]; a is now [1]
console.log(a);

// Additional arguments speicify elements to be inserted into the array
a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 0, "a", "b")); // => []
console.log(a); // a is now [1, 2, "a", "b", 3, 4, 5]
console.log(a.splice(2, 2, [1, 2], 3)); // => ["a", "b"]
console.log(a); // a is now [1, 2, [1, 2], 3, 3, 4, 5]
console.log("~".repeat(30));

// ## fill()
a = new Array(5); // Start with no elements and length 5
a.fill(0); // => [0, 0, 0, 0, 0]; fill the array with zeros
console.log(a);
a.fill(9, 1); // => [0, 9, 9, 9, 9]; fill with 9 starting at index 1
console.log(a);
a.fill(8, 2, -1); // => [0, 9, 8, 8, 9]; fill with 8 at indexes 2, 3
console.log(a);
console.log("~".repeat(30));

// ## copyWithin()
a = [1, 2, 3, 4, 5];
console.log(a.copyWithin(1)); // => [1, 1, 2, 3, 4]: copy array elements up one
console.log(a.copyWithin(2, 3, 5)); // => [1, 1, 3, 4, 4]: copy last 2 elements to index 2
console.log(a.copyWithin(0, -2)); // => [4, 4, 3, 4, 4]: negative offsets work, too

console.log("-".repeat(30));

// # 7.8.6 Array Searching and Sorting Methods
// ## indexOf() and lastIndexOf()
a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1)); // => 1: a[1] is 1
console.log(a.lastIndexOf(1)); // => 3: a[3] is 1
console.log(a.indexOf(3)); // => -1: no element has value 3

// The following function searches an array for a sepcified value
// and returns an array of all matching indexes.

// Find all occurrences of a value x in an array a and return an array of matching indexes
function findAll(a, x) {
  let results = [], // The array of indexes we'll return
    len = a.length, // The length off the array to be searched
    pos = 0; // The position to search from

  while (pos < len) {
    // While more elements to search...
    pos = a.indexOf(x, pos); // Search
    if (pos === -1) break; // If nothing found, we're done
    results.push(pos); // Otherwise, store index in array
    pos++; // And start next search at next element
  }
  return results; // Return array of indexes
}

const arr = [1, 3, 4, 1, 2, 5, 1];
const results = findAll(arr, 1);
console.log(results);
console.log("~".repeat(30));

// ## includes()
a = [1, true, 3, NaN];
console.log(a.includes(true)); // => true
console.log(a.includes(2)); // => false
console.log(a.includes(NaN)); // => true
console.log(a.indexOf(NaN)); // => -1; indexOf can't find Nan
console.log("~".repeat(30));

// ## sort()
a = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]
console.log(a);

a = [33, 4, 1111, 22];
a.sort(); // a == [1111, 222, 33, 4]; alphabetical order
console.log(a);
a.sort(function (a, b) {
  // Pass a comparator function
  return a - b; // Return < 0, 0, or > 0, depending on order
}); // a == [4, 33, 222, 111]
console.log(a);

a.sort((a, b) => b - a); // a == [1111, 222, 33, 4]; reverse number order
console.log(a);

a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // => ["Bug", "Dog", "ant", "cat"]; case-sensitive sort
console.log(a);

a.sort(function (s, t) {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(a); // a == ["ant", "Bug", "cat", "Dog"]; case-insensitive sort
console.log("~".repeat(30));

// ## reverse()
a = [1, 2, 3];
a.reverse();
console.log(a); // a == [3, 2, 1]

// # 7.8.7 Array to String Conversion
a = [1, 2, 3];
console.log(a.join()); // => "1,2,3"
console.log(a.join(" ")); // => "1 2 3"
console.log(a.join("")); // => "123"

let b = new Array(10); // An array of length 10 with no elements
console.log(b.join("-")); // => "---------": a string of 9 hyphens

// toString() works just like the join() method with no arguments:
console.log([1, 2, 3].toString()); // => "1,2,3"
console.log(["a", "b", "c"].toString()); // => "a,b,c"
console.log([1, [2, "c"]].toString()); // => "1,2,c"
