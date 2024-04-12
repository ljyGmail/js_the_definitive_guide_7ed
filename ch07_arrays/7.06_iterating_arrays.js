// use for/of loop to iterator through each of the elements of an array (or any iterable object)
let letters = [..."Hello world"]; // An array of letters
let string = "";
for (let letter of letters) {
  string += letter;
}
console.log(`string: ${string}`); // "Hello world"; we reassembled the original text

// get array elements as well as indexes
let everyOther = "";
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) {
    everyOther += letter; // letters at even indexes
  }
}

console.log(`everyOther: ${everyOther}`); // => "Hlowrd"

// a functional approach: forEach()
// forEach() is aware of sparse arrays and does not invoke the function for elements that are not there
let uppercase = "";
letters.forEach((letter) => {
  uppercase += letter.toUpperCase();
});

console.log(`uppercase: ${uppercase}`); // => "HELLO WORLD"

// good old-fashioned for loop
let vowels = "";
for (let i = 0; i < letters.length; i++) {
  // For each index in the array
  let letter = letters[i]; // Get the element at that index
  if (/[aeiou]/.test(letter)) {
    // Use a regular expression test
    vowels += letter; // If it is a vowel, remember it
  }
}

console.log(`vowels: ${vowels}`); // => "eoo"

// In some contexts where performance is critical, array length is only looked up once rather than on each iteration
// Save the array length into a local variable
console.log("-".repeat(20));
for (let i = 0, len = letters.length; i < len; i++) {
  console.log(letters[i]);
}

// Iterate backwards from the end of the array to the start
console.log("-".repeat(20));
for (let i = letters.length - 1; i >= 0; i--) {
  console.log(letters[i]);
}

// Skip undefined and nonexistent elements
for (let i = 0; i < letters.length; i++) {
    if(letters[i]===undefined)continue; // Skip undefined + nonexistent elements
    // loop body here
}
