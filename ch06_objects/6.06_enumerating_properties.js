let o = { x: 1, y: 2, z: 3 }; // Three enumerable own properties
console.log(o.propertyIsEnumerable("toString")); // => false: not enumerable

for (let p in o) {
  // Loop through the properties
  console.log(p); // Prints x, y, and z, but to toString
}

for (let p in o) {
  if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
  console.log(p);
}

for (let p in o) {
  if (typeof o[p] === "function") continue; // Skip all methods
  console.log(p);
}
