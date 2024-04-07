// Assignment statements are one major category of expression statements.
const name = "ljy";
const greeting = "Hello " + name;
console.log(`greeting: ${greeting}`);

let i = 2;
i *= 3;
console.log(`i = ${i}`);

// The increment and decrement operators are related to assignment statements.
let counter = 1;
counter++;
console.log(`counter: ${counter}`);

// The delete operator has the import side effect of deleting an object property.
const o = { x: 111, y: 222 };
for (const a in o) {
  console.log(a, o[a]);
}
delete o.x;
console.log("------------------");
for (const a in o) {
  console.log(a, o[a]);
}

// Function calls are another major category of expression statements.
const debugMessage = "first wives club";
console.log(debugMessage);

function displaySpinner() {
  console.log("displaySpinner invoked!");
}

displaySpinner();

// There is no sense in calling a function that does not have any side effects.
Math.cos(3.14);

// It makes sense to compute the value and assign it to a variable for future use.
const result = Math.cos(3.14);
