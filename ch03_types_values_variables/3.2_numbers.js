// 3.2.1 Integer Literals
console.log(`0: ${0}`);
console.log(`3: ${3}`);
console.log(`10000000: ${10000000}`);

// hexadecimal values
console.log(`0xff: ${0xff}`); // => 255: (15*16 + 15)
console.log(`0xbadcafe: ${0xbadcafe}`); // => 195939070

// binary or octal
console.log(`0b10101: ${0b10101}`); // => 21: (1*16 + 0*8+ 1*4 + 0*2 + 1*1)
console.log(`0o377: ${0o377}`); // => 255: (3*64 + 7 * 8 + 7 * 1)

// 3.2.2 Floating-Point Literals
console.log(`3.14: ${3.14}`);
console.log(`2345.6789: ${2345.6789}`);
console.log(`.333333333333333333: ${0.333333333333333333}`);
console.log(`6.02e23: ${6.02e23}`); // 6.02 x 10 ** 23
console.log(`1.4738223E-32: ${1.4738223e-32}`); // 1.4738223 x 10 ** -32

// Separators in Numeric Literals
let billion = 1_000_000_000; // Underscore as a thousands separator.
console.log(`billion: ${billion}`);

let bytes = 0x89_ab_cd_ef; // As a bytes separator.
console.log(`bytes: ${bytes}`);

let bits = 0b0001_1101_0111; // As a nibble separator.
console.log(`bits: ${bits}`);

let fraction = 0.123_456_789; // Works in the fractional part, too.
console.log(`fraction: ${fraction}`);

// 3.2.3 Arithmetic in JavaScript
console.log(`Math.pow(2, 53): ${Math.pow(2, 53)}`); // => 9007199254740992: 2 to the power 53
console.log(`Math.round(.6): ${Math.round(0.6)}`); // => 1: round to the nearest integer0
console.log(`Math.ceil(.6): ${Math.ceil(0.6)}`); // => 1: round up to an integer
console.log(`Math.floor(.6): ${Math.floor(0.6)}`); // => 1: round down to an integer
console.log(`Math.abs(-5): ${Math.abs(-5)}`); // => 5: absolute value
console.log(`Math.max(1, 2, 3): ${Math.max(1, 2, 3)}`); // Return the largest argument
console.log(`Math.min(1, 2, 3): ${Math.min(1, 2, 3)}`); // Return the smallest argument
console.log(`Math.random(): ${Math.random()}`); // Pseudo-random number x where 0 <= x < 1.0
console.log(`Math.PI: ${Math.PI}`); // pie: circumference of a circle / diameter
console.log(`Math.E: ${Math.E}`); // e: The base of the natural logarithm
console.log(`Math.sqrt(3): ${Math.sqrt(3)}`); // => 3 ** 0.5: the square root of 3
console.log(`Math.pow(3, 1 / 3): ${Math.pow(3, 1 / 3)}`); // => 3 ** (1 / 3): the cube root of 3
console.log(`Math.sin(0): ${Math.sin(0)}`); // Trigonometry: also Math.cos, Math.atan, etc
console.log(`Math.log(10): ${Math.log(10)}`); // Natural logarithm of 10
console.log(`Math.log(100) / Math.LN10: ${Math.log(100) / Math.LN10}`); // Base 10 logarithm of 100
console.log(`Math.log(512) / Math.LN2: ${Math.log(512) / Math.LN2}`); // Base 2 logarithm of 512
console.log(`Math.exp(3): ${Math.exp(3)}`); // Math.E cubed
