let a = {}; // Start with a regular empty object

// Add properties to make it "array-like"
let i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;

// Now iterate through it as if it were a real array
let total = 0;
for (let j = 0; j < a.length; j++) {
  total += a[j];
}
console.log(total);
console.log("~".repeat(30));

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excludeded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric  length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.
function isArrayLike(o) {
  if (
    o && // o is not null, undefined, etc.
    typeof o === "object" && // o is an object
    Number.isFinite(o.length) && // o.length is a finite number
    o.length >= 0 && // o.length is non-negative
    Number.isInteger(o.length) && // o.length is an  integer
    o.length < 4294967295 // o.length < 2^32 - 1
  ) {
    return true; // Then o is array-like
  } else {
    return false; // Other wise it is not
  }
}

console.log(isArrayLike(a));
console.log("~".repeat(30));
// Invoke array methods indirectly using the Function.call method:
a = { 0: "a", 1: "b", 2: "c", length: 3 }; // An array-like object
console.log(Array.prototype.join.call(a, "+")); // => "a+b+c"
console.log(Array.prototype.map.call(a, (x) => x.toUpperCase())); // => ["A", "B", "C"]
console.log(Array.prototype.slice.call(a, 0)); // => ["a", "b", "c"]: true array copy
console.log(Array.from(a)); // => ["a", "b", "c"]: easier array copy
