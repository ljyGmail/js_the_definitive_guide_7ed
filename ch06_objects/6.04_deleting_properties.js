// "use strict";
const book = {
  author: {
    surname: "Zhou Huajian",
  },
  "main title": "Node.js",
};
console.log(book);

delete book.author; // The book object now has not author property
console.log(book);

delete book["main title"]; // Now it doesn't have "main title", either
console.log(book);

let o = { x: 1 }; // o has own property x and inherits property toString
console.log(o);
console.log(delete o.x); // => true: deletes property x
console.log(o);
console.log(delete o.x); // => true: does nothing (x doesn't exist) but true anyway
console.log(o);
console.log(delete o.toString); // => true: does nothing (toString isn't an own property)
console.log(o);
console.log(delete 1); // => true: nonsense, but true anyway

// In strict mode, all these deletions throw TypeError instead of returning false
console.log(delete Object.prototype); // => false: property is non-configurable
let x = 1; // Declare a global variable
console.log(x);
console.log(delete globalThis.x); // => true: but can't delete this property, different from book
console.log(x);

function f() {} // Declare a global function
console.log(delete globalThis.f); // => true: but can't delete this property, different from book
f();

globalThis.y = 3; // Create a configurable global property (no let or var)
console.log(y);
console.log(delete y); // => true: this property can be deleted
// console.log(y); // !ReferenceError: y is not defined

delete z; // SyntaxError in strict mode
delete globalThis.z; // This works
