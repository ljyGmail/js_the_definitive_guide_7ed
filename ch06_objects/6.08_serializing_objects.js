let o = { x: 1, y: { z: [false, null, ""] } }; // Define a test object
let s = JSON.stringify(o); // s == '{"x": 1, "y": {"z": [false, null, ""]}}'
console.log(s);
let p = JSON.parse(s); //
console.log(p); // p == {x: 1, y: {z: [false, null, ""]}}
