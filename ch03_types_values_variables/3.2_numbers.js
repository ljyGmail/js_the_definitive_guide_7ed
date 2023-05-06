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

// ES6 defines more functions on the Math object:
console.log(`Math.cbrt(27): ${Math.cbrt(27)}`); // => 3: cube root
console.log(`Math.hypot(3, 4): ${Math.hypot(3, 4)}`); // => 5: square root of sum of squares of all arguments
console.log(`Math.log10(100): ${Math.log10(100)}`); // => 2: Base-10 logarithm
console.log(`Math.log2(1024): ${Math.log2(1024)}`); // => 10: Base-2 logarithm
console.log(`Math.log1p(4): ${Math.log1p(4)}`); // => Natural log of (1+x); accurate for very small x
console.log(`Math.expm1(4): ${Math.expm1(4)}`); // => Math.exp(x)-1; the inverse of Math.log1p()
console.log(`Math.sign(4): ${Math.sign(4)}`); // -1, 0, or 1 for arguments <, ==, or > 0
console.log(`Math.imul(2, 3): ${Math.imul(2, 3)}`); // => 6: optimized multiplication of 32 bit integers
console.log(`Math.clz32(0xf): ${Math.clz32(0xf)}`); // => 28: number of leading zero bits in a 32-bit integer
console.log(`Math.trunc(3.9): ${Math.trunc(3.9)}`); // => 3: convert to an integer by truncating fractional part
console.log(`Math.fround(3.1): ${Math.fround(3.1)}`); // Round to nearest 32-bit float number
console.log(`Math.sinh(Math.PI): ${Math.sinh(Math.PI)}`); // Hyperbolic sine. Also Math.cosh(), Math.tanh()
console.log(`Math.asinh(Math.PI): ${Math.asinh(Math.PI)}`); // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

// Predefined global constants in JavaScript
console.log(`Infinity: ${Infinity}`); // A positive number too big to represent
console.log(`Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}`); // The same value
console.log(`1 / 0: ${1 / 0}`); // => Infinity
console.log(`Number.MAX_VALUE * 2: ${Number.MAX_VALUE * 2}`); // => Infinity; overflow

console.log(`-Infinity: ${-Infinity}`); // A negative number too big to represent
console.log(`Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}`); // The same value
console.log(`-1 / 0: ${-1 / 0}`); // => -Infinity
console.log(`-Number.MAX_VALUE * 2: ${-Number.MAX_VALUE * 2}`); // => -Infinity

console.log(`NaN: ${NaN}`); // The not-a-number value
console.log(`Number.NaN: ${Number.NaN}`); // The same value, written another way
console.log(`0 / 0: ${0 / 0}`); // NaN
console.log(`Infinity / Infinity: ${Infinity / Infinity}`); // NaN

console.log(`Number.MIN_VALUE / 2: ${Number.MIN_VALUE / 2}`); // => 0: underflow
console.log(`-Number.MIN_VALUE / 2: ${-Number.MIN_VALUE / 2}`); // => -0: negative zero
console.log(`-1 / Infinity: ${-1 / Infinity}`); // => -0: also negative zero
console.log(`-0: ${-0}`);

// The following Number properties are defined in ES6
console.log(`Number.parseInt('3.4'): ${Number.parseInt("3.4")}`); // Same as the global parseInt() function
console.log(`Number.parseInt('3.14'): ${Number.parseInt("3.14")}`); // Same as the global parseFloat() function
console.log(`Number.isNaN(3.14): ${Number.isNaN(3.14)}`); // Is x the NaN value?
console.log(`Number.isFinite(3.14): ${Number.isFinite(3.14)}`); // Is x a number and finite?
console.log(`Number.isInteger(3.14): ${Number.isInteger(3.14)}`); // Is x an integer?
console.log(`Number.isSafeInteger(1234): ${Number.isSafeInteger(1234)}`); // Is x an integer -(2**53) < x < (2**53)?
console.log(`Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`); // -(2**53 - 1)
console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`); // 2**53 - 1
console.log(`Number.EPSILON: ${Number.EPSILON}`); // 2**-52: smallest difference between numbers

let zero = 0; // Regular zero
let negz = -0; // Negative zero
console.log(`zero === negz: ${zero === negz}`); // => true: zero and negative zero are equal
console.log(`1 / zero === 1 / negz: ${1 / zero === 1 / negz}`); // => false: Infinity and -Infinity are not equal
