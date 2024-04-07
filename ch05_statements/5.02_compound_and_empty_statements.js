// A statement block combines multiple statements into a single compound statement.
let x, cx;
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log(`cons(n) = ${cx}`);
}

// Empty statement
// ;

// The js interpreter takes no action when it executes an empty statement.
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; arr[i++] = 0);
console.log(arr);

// The accidental inclusion of a semicolon can cause frustrating bugs.
const a = 0,
  b = 1;
let o = { x: 111, y: 222 };

if (a === 0 || b === 0); // Oops! This line does nothing...
o = null; // and this line is always executed.

// It is a good idea to comment the code when the empty statement is used.
for (let i = 0; i < arr.length; arr[i++] = 0 /* empty */);
console.log(arr);
