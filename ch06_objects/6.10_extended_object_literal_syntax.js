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
console.log("-".repeat(30));

// # 6.10.4 Spread Operator
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
console.log(rect.x + rect.y + rect.width + rect.height); // => 175

o = { x: 1 };
p = { x: 0, ...o };
console.log(p.x); // => 1: the vlaue from object o overrides the initial value
let q = { ...o, x: 2 };
console.log(q.x); // => 2: the value 2 overrides the previous value from o

// Note that the spread operator only spreads the own properties of an object, not any inherited ones:
o = Object.create({ x: 1 }); // o inherits the property x
p = { ...o };
console.log(p.x); // => undefined
