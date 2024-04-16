// # 6.2.1 Object Literals
let empty = {}; // An object with no properties
console.log(empty);
let point = { x: 0, y: 0 }; // Two numeric properties
console.log(point);
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
console.log(p2);
let book = {
  "main title": "JavaScript", // These property names include spaces,
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan",
  },
};
console.log("-".repeat(30));

// # 6.2.2 Creating Objects with new
let o = new Object(); // Create an empty object: same as {}
console.log(o);
let a = new Array(); // Create an empty Array: same as []
console.log(a);
let d = new Date(); // Create a Date object representing the current time
console.log(d);
let r = new Map(); // Create a Map object for key/value mapping
console.log(r);
