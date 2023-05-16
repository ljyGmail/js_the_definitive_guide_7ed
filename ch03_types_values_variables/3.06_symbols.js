let strname = "string name"; // A string to use as a property name
let symname = Symbol("propname"); // A symbol to use as a property name
console.log(`typeof strname: ${typeof strname}`); // => "string": strname is a string
console.log(`typeof symname: ${typeof symname}`); // => "symbol": symname is a symbol

let o = {}; // Create a new object
o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a Symbol name
console.log(`o[strname]: ${o[strname]}`); // => 1: access the string-named property
console.log(`o[symname]: ${o[symname]}`); // => 2: access the symbol-named property

let s = Symbol("sym_x");
console.log(`s.toString(): ${s.toString()}`); // => "Symbol(sym_x)"

let a = Symbol.for("shared");
let b = Symbol.for("shared");
console.log(`a === b: ${a === b}`); // => true
console.log(`a.toString(): ${a.toString()}`); // => "Symbol(shared)"
console.log(`Symbol.keyFor(b): ${Symbol.keyFor(b)}`); // => "shared"

// 3.7 The Global Object
