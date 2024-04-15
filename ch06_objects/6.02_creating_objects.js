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
