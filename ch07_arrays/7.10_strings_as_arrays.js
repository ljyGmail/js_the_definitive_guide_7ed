let s = "test";
console.log(s.charAt(0)); // => "t"
console.log(s[1]); // => "e"

// apply generic array methods to strings (array-like)
console.log(Array.prototype.join.call("JavaScript", " ")); // => "J a v a S c r i p t"
console.log(Array.prototype.map.call("abc", (x) => "@" + x + "#")); // => ["@a#", "@b#", "@c#"]
