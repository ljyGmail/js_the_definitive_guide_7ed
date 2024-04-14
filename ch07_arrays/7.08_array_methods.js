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
