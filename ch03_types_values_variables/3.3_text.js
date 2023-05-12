// 3.3.1 String Literals
console.log(`"": ${""}`);
console.log(`'testing': ${"testing"}`);
console.log(`"3.14": ${"3.14"}`);
console.log(`'name="myform"': ${'name="myform"'}`);
console.log(
  `"Wouldn't you prefer O'Reilly's book?": ${"Wouldn't you prefer O'Reilly's book?"}`
);
console.log(
  `"PI is the ratio of a circle's circumference to its radius": ${"PI is the ratio of a circle's circumference to its radius"}`
);
console.log(`"She said 'hi'", he said.`);

console.log(`'two\nlines': ${"two\nlines"}`); // A string representing 2 lines written on one line

console.log(
  "one\
long\
line"
);

// A two-line string written on two lines
console.log(`the newline character at the end of this line
is included literally in this string`);

// <button onclick="alert('Thank you')"></button>

// 3.3.2 Escape Sequences in String Literals
console.log(`"\xA9": ${"\xA9"}`);
console.log(`"\u03c0": ${"\u03c0"}`);
console.log(`"\u{1f600}": ${"\u{1f600}"}`);
console.log(`"\\": ${"\\"}`);
console.log(`"\#": ${"#"}`);

// 3.3.3 Working with Strings
let msg = "Hello, " + "world"; // Produces the string "Hello, world"
console.log(`msg: ${msg}`);

const name = "js";
let greeting = "Welcome to my blog," + " " + name;
console.log(`greeting: ${greeting}`);

const s = "Hello, world"; // Start with some text.
console.log(`s.length: ${s.length}`);

// Obtaining portions of a string
console.log(`s.substring(1, 4): ${s.substring(1, 4)}`); // => "ell": the 2nd, 3rd, and 4th characters.
console.log(`s.slice(1, 4): ${s.slice(1, 4)}`); // => "ell": same thing
console.log(`s.slice(-3): ${s.slice(-3)}`); // => "rld": last 3 characters
console.log(`s.split(", "): ${s.split(", ")}`); // => ["Hello", "world"]: split at delimiter string

// Searching a string
console.log(`s.indexOf("l"): ${s.indexOf("l")}`); // => 2: position of first letter "l"
console.log(`s.indexOf("l", 3): ${s.indexOf("l", 3)}`); // => 3: position of fisrt letter "l" at or after 3
console.log(`s.indexOf("zz"): ${s.indexOf("zz")}`); // => -1: s does not include the substring "zz"
console.log(`s.lastIndexOf("l"): ${s.lastIndexOf("l")}`); // => 10: position of last letter "l"

// Boolean searching functions in ES6 and later
console.log(`s.startsWith("Hell"): ${s.startsWith("Hell")}`); // => true: the string starts with these
console.log(`s.endsWith("!"): ${s.endsWith("!")}`); // => false: s does not end with that
console.log(`s.includes("or"): ${s.includes("or")}`); // => true: s includes substring "or"

// Creating modified versions of a string
console.log(`s.replace("llo", "ya"): ${s.replace("llo", "ya")}`); // => "Heya, world"
console.log(`s.toLowerCase(): ${s.toLowerCase()}`); // => "hello, world"
console.log(`s.toUpperCase(): ${s.toUpperCase()}`); // => "HELLO, WORLD"
console.log(`s.normalize(): ${s.normalize()}`); // Unicode NFC normalization: ES6
console.log(`s.normalize("NFD"): ${s.normalize("NFD")}`); // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
console.log(`s.charAt(0): ${s.charAt(0)}`); // => "H": the first character
console.log(`s.charAt(s.length - 1): ${s.charAt(s.length - 1)}`); // => "d": the last character
console.log(`s.charCodeAt(0): ${s.charCodeAt(0)}`); // => 72: 16-bit number at the specified position
console.log(`s.codePointAt(0): ${s.codePointAt(0)}`); // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
console.log(`"x".padStart(3): ${"x".padStart(3)}`); // => "  x": add spaces on the left to a length of 3
console.log(`"x".padEnd(3): ${"x".padEnd(3) + "@"}`); // => "x  ": add spaces on the right to a length of 3
console.log(`"x".padStart(3, "*"): ${"x".padStart(3, "*")}`);
console.log(`"x".padEnd(3, "-"): ${"x".padEnd(3, "-")}`);

// Space trimming functions. trim() is ES5; others ES2019
console.log(`" test ".trim(): ${" test ".trim()}`); // => "test": remove spaces at start and end
console.log(`" test ".trimStart(): ${" test ".trimStart()}`); // => "test ": remove spaces on left. Also trimLeft
console.log(`" test ".trimEnd(): ${" test ".trimEnd()}`); // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods"
console.log(`s.concat("!"): ${s.concat("!")}`); // => "Hello, world!": just use + operator instead
console.log(`"<>".repeat(5): ${"<>".repeat(5)}`); // => "<><><><><>": concatenate n copies. ES6

// Strings can be treated like read-only arrays.
console.log(`s[0]: ${s[0]}`);
console.log(`s[s.length - 1]: ${s[s.length - 1]}`);

// 3.3.4 Template Literals

const filename = "test.py";
const linenumber = 10;
const exception = {
  message: "NullPointerException",
  stack: "xxx",
};

let errorMessage = `\
\u2718 Test failure at ${filename}: ${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

console.log(`errorMessage: ${errorMessage}`);

// Tagged template literals
console.log(`'\n'.length: ${"\n".length}`); // => 1: the string has a single newline character
console.log(String.raw`\n`.length); // => 2: a backslash character and the letter n

// 3.3.5 Pattern Matching
console.log(`/^HTML/: ${/^HTML/}`); // Match the letters H T M L at the start of a string
console.log(`/[1-9][0-9]*/: ${/[1-9][0-9]*/}`); // Match a nonzero digit, followed by any # of digits
console.log(`/\bjavascript\b/i: ${/\bjavascript\b/i}`); // Match "javascript" as a world, case-insensitive

let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
console.log(`pattern.test(text): ${pattern.test(text)}`); // => true: a match exists
console.log(`text.search(pattern): ${text.search(pattern)}`); // => 9: position of first match
console.log(`text.match(pattern): ${text.match(pattern)}`); // => ["1", "2", "3"]: array of all matches
console.log(`text.replace(pattern, "#"): ${text.replace(pattern, "#")}`); // "testing: #, #, #"
console.log(`text.split(/\D+/): ${text.split(/\D+/)}`); // => ["", "1", "2", "3"]: split on nondigits
