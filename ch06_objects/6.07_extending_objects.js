let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}

console.log(target);

let o = { a: 1 };
let p = { a: 3, b: 4 };

console.log(Object.assign(o, p)); // overwrites everything in o with p

o = { a: 1 };
p = { a: 3, b: 4 };
o = Object.assign({}, p, o);
console.log(o);

o = { a: 1 };
p = { a: 3, b: 4 };
o = { ...p, ...o };
console.log(o);

// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // This is different than Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}

console.log(Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 })); // => {x: 22, y: 3, z: 4}
console.log(merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 })); // => {x:1, y: 2, z: 4}
