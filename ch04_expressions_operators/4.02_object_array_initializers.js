console.log(`[]: ${[]}`); // An empty array: no expressions inside brackets means no elements
console.log(`[1 + 2, 3 + 4]: ${[1 + 2, 3 + 4]}`); // A 2-element array. First element is 3, second is 7

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`matrix: ${matrix}`);

let sparseArray = [1, , , , 5];
console.log(`sparseArray: ${sparseArray}`);

// Object initializer
let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3;
q.y = -1.2; // Now q has the same properties as p
console.log(`q: ${q}`);

let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 },
};

console.log(`rectangle: ${rectangle}`);
