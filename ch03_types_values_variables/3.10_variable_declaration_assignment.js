// 3.10.1 Declarations with let and const

// let i;
// let sum;
// => let i, sum;

let message = "hello";
let i = 0,
  j = 0,
  k = 0;
// let x = 2,
//   y = x * x; // Initializers can use previously declared variables

const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496e8; // Astronomical Unit: distance to the sun (km)

/*
for(let i=0, len = data.length; i < len; i++) console.log(data[i])
for(let datum of data) console.log(datum);
for(let property in object) console.log(property);

for(const datum of data) console.log(datum);
for(const property in object)  console.log(property);
*/

// Variable and constant scope

// Repeated declarations
const x = 1; // Declare x as a global constant
if (x === 1) {
  let x = 2; // Inside a block x can refer to a different value
  console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now
// let x = 3; // ERROR! Syntax error trying to re-declare x

// Declarations and types
let ten = 10;
ten = "ten";

// 3.10.2 Variable Declarations with var

// var x;
// var data = [],
//   count = data.length;
// for (var i = 0; i < count.length; i++) console.log(data[i]);

// 3.10.3 Destructuring Assignment
// let [x, y] = [1, 2]; // Same as let x=1, y=2
// [x, y] = [x + 1, y + 2]; // Same as x = x + 1, y = y + 1
// [x, y] = [y, x]; // Swap the value of the two variables
// [x, y] // => [3, 2]: the incremented and swapped values

// Convert [x, y] coordinates to [r, theta] polar coordinates
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, thera) {
  return [r * Math.cos(thera), r * Math.sin(thera)];
}

// let [r, thera] = toPolar(1.0, 1.0); // r == Math.sqrt(2); thera == Math.PI / 4
// let [x, y] = toCartesian(r, thera); // [x, y] == [1.0, 1.0]

let o = { x: 1, y: 2 }; // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); // Prints "x 1" and "y 2"
}

// let [x, y] = [1]; // x == 1; y == undefined
// [x, y] = [1, 2, 3]; // x == 1; y == 2
// [, x, , y] = [1, 2, 3, 4]; // x == 2; y == 4

// let [x, ...y] = [1, 2, 3, 4]; // y == [2, 3, 4]

// let [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5

// let [first, ...rest] = "Hello"; // first == "H"; rest == ["e", "l", "l", "o"]

// let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; // A RGBA color
// let { r, g, b } = transparent;

// Same as const sin = Math.sin, cos = Math.cos, tan = Math.tan
// const { sin, cos, tan } = Math;

// Same as const cosine = Math.cos, tangent = Math.tan
// const {cos: cosine, tan: tangent} = Math;

// let points = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ]; // An array of two point objects
// let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points; // destructured into 4 variables.
// console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); // => true

let points = { p1: [1, 2], p2: [3, 4] }; // An object with 2 array props
let {
  p1: [x1, y1],
  p2: [x2, y2],
} = points; // destructured into 4 vars
console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); // => true
