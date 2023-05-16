let a = 4;
let b = 5;

console.log(`a === 4: ${a === 4}`);

if (a === 4) {
  b = b + 1;
} else {
  a = a + 1;
}

// falsy values
console.log(`undefined: ${undefined}`);
console.log(`null: ${null}`);
console.log(`0: ${0}`);
console.log(`-0: ${-0}`);
console.log(`NaN: ${NaN}`);
console.log(`"": ${""}`);

/*
if ((x === 0 && y === 0) || !(z === 0)) {
  // x and y are both zero or z is non-zero
}
*/

// 3.5 null and undefined
