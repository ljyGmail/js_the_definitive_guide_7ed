// # 6.10.1 Shorthand Properties

let x = 1,
  y = 2;
let o = {
  x: x,
  y: y,
};

console.log(o);

// In ES6 and later, object literal syntax can be shortened like this:
o = {
  x,
  y,
};

console.log(o.x + o.y); // => 3
console.log("-".repeat(30));

// # 6.10.2 Computed Property Names
const PROPERTY_NAME = "p1";
function computePropertyName() {
  return "p" + 2;
}

o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
console.log(o);

// ES6 feature: computed properties
let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
};
console.log(p.p1 + p.p2);
console.log("-".repeat(30));

// # 6.10.3 Symbols as Property Names
const extension = Symbol("my extension symbol");

o = {
  [extension]: {
    /* extension data stored in this object */
  },
};
o[extension].x = 0; // This won't conflict with other properties of o
console.log(o);
