function f(num) {
  console.log(`num: ${num}`);
}

f(0); // f is the function expression; 0 is the argument expression.
// Math.max is the function; x, y, and z are arguments.
console.log(`Math.max(x, y, z): ${Math.max(4, 7, 6)}`);

const a = [4, 6, 1, 3, 2];
a.sort(); // a.sort is the function; there no arguments.
console.log(a);

// 4.5.1 Condition Invocation
function square(x, log) {
  // The second argument is an optional function
  if (log) {
    // if the optional function is passed
    log(x); // Invoke it
  }
  return x * x; // Return the square of the argument
}

console.log(`square(2, console.log): ${square(2, console.log)}`);
console.log(`square(3): ${square(3)}`);
// square(3, 4); TypeError

// After ES2020, using the conditional invocation syntax, the function above can written like this:
function square2(x, log) {
  // The second argument is an optional function
  log?.(x); // Call the function if there is one
  return x * x; // Return the square of the argument
}

console.log(`square2(4, console.log): ${square2(4, console.log)}`);
console.log(`square2(5): ${square2(5)}`);
// square2(3, 4); TypeError

// ?.() is short-circuiting
let func = null,
  x = 0;

try {
  func(x++); // Throws TypeError because f is null
} catch (e) {
  console.log(`x: ${x}`); // => 1: x gets incremented before the exception is thrown
}

console.log(`func?.(x++): ${func?.(x++)}`); // => undefined: f is null, but no exception thrown
console.log(`x: ${x}`); // => 1: increment is skipped because of short-circuiting

// Conditional invocation expressions with ?.() work well with methods too.
const o = {
  a: 111,
  m: function () {
    console.log("m method inside object o");
  },
};

// o = null;
// o.m = null;

o.m(); // Regular property access, regular invocation
o?.m(); // Conditional property access, regular invocation
o.m?.(); // Regular property access, condition invocation
