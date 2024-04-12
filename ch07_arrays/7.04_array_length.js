console.log(`[].length: ${[].length}`); // => 0: the array has no elements
console.log(`["a", "b", "c"].length: ${["a", "b", "c"].length}`); // => 3: highest index is 2, length is 3

const a = [1, 2, 3, 4, 5]; // Start with a 5-element array
a.length = 3; // a is now [1, 2, 3]
console.log(`a: ${a}`);
a.length = 0; // Delete all elements. a is []
console.log(`a: ${a}`);
a.length = 5; // Length is 5, but no elements, like new Array(5)
console.log(`a: ${a}`);
