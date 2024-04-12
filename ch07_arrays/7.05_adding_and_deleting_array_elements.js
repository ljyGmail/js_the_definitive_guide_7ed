let a = []; // Start with an empty array
a[0] = "zero"; // And add elements to it
a[1] = "one";
console.log(`a: ${a}`);

// use push() method to add one or more values to the end of an array:
a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]
console.log(`a: ${a}`);

// delete array elements with the delete operator
a = [1, 2, 3];
delete a[2]; // a now has no element at index 2
console.log(`2 in a: ${2 in a}`); // false: no array index 2 is defined
console.log(`a.length: ${a.length}`); // => 3: delete does not affect array length
