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
