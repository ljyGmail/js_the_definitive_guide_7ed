// # 6.9.1 The toString() Method
let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"
console.log(s);

let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};
console.log(String(point)); // => "(1, 2)": toString() is used for string conversions
console.log("-".repeat(30));

// # 6.9.2 The toLocaleString() Method
point = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  },
};

console.log(point.toString());
console.log(point.toLocaleString());
console.log("-".repeat(30));

// # 6.9.3 The valueOf() Method
point = {
  x: 3,
  y: 4,
  valueOf: function () {
    return Math.hypot(this.x, this.y);
  },
};

console.log(Number(point)); // => 5: valueOf() is used for conversions to numbers
console.log(point > 4); // => true
console.log(point > 5); // => false
console.log(point < 6); // => true
console.log("-".repeat(30));

// # 6.9.4 The toJSON() Method
point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function () {
    return this.toString();
  },
};
console.log(JSON.stringify([point])); // => '["(1, 2)"]'
