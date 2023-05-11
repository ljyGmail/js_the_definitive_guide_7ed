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
