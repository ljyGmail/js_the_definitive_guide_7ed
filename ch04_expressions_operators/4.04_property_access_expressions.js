/*
JavaScript defines two syntaxes for property access:
expression . identifier
expression [ expression ]
*/

let o = { x: 1, y: { z: 3 } }; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object

console.log(`o.x: ${o.x}`); // => 1: property x of expression o
console.log(`o.y.z: ${o.y.z}`); // => 3: property z of expression o.y
console.log(`o["x"]: ${o["x"]}`); // => 1: property of object o
console.log(`a[1]: ${a[1]}`); // => 4: element at index 1 of expression o
console.log(`a[2]["1"]: ${a[2]["1"]}`); // => 6: element at index 1 of expression a[2]
console.log(`a[0].x: ${a[0].x}`); // => 1: property x of expression a[0]

// 4.4.1 Conditional Property Access
/*
expression ?. identifier
expression ?.[expression]
*/
let p = { b: null };
console.log(`p.b?.c.d: ${p.b?.c.d}`);
// console.log(`p.b.c.d: ${p.b.c.d}`); // TypeError

let q = { b: {} };
console.log(`q.b?.c?.d: ${q.b?.c?.d}`);

let r; // Oops, we forgot to initialize this variable!
let index = 0;
try {
  r[index++]; // Throws TypeError
} catch (e) {
  console.log(`index: ${index}`); // => 1: increment occurs before TypeError is thrown
}
console.log(`r?.[index++]: ${r?.[index++]}`); // => undefined: because r is undefined
console.log(`index: ${index}`); // => 1: not incremented because ?.[] short-circuits
// console.log(`r[index++]: ${r[index++]}`); // !TypeError: can't index undefined
