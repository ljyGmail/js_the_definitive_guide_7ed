console.log(`10 + " objects": ${10 + " objects"}`); // => "10 objects": Number 10 converts to a string
console.log(`"7" * "4": ${"7" * "4"}`);
let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
console.log(`n + " objects": ${n + " objects"}`); // "NaN objects": NaN converts to string "NaN"

// 3.9.1 Conversions and Equality
console.log(`null == undefined: ${null == undefined}`); // => true: These two values are treated as equal.
console.log(`"0" == 0: ${"0" == 0}`); // => true: String converts to a number before comparing.
console.log(`0 == false: ${0 == false}`); // => true: Boolean converts to number before comparing.
console.log(`"0" == false: ${"0" == false}`); // => true: Both operands convert to 0 before comparing!

// 3.9.2 Explicit Conversions
console.log(`Number("3"): ${Number("3")}`); // => 3
console.log(`String(false): ${String(false)}`); // => "false": Or use false.toString()
console.log(`Boolean([]): ${Boolean([])}`); // => true

/*
x + ""; // => String(x)
x; // => Number(x)
x - 0; // => Number(x)
!!x; // => Boolean(x): Note double !
*/

let x = 17;
let binary = "0b" + x.toString(2); // binary == "0b10001"
console.log(`binary: ${binary}`);
let octal = "0o" + x.toString(8); // octal == "0o21"
console.log(`octal: ${octal}`);
let hex = "0x" + x.toString(16); // hex == "0x11"
console.log(`hex: ${hex}`);

let y = 123456.789;
console.log(`y.toFixed(0): ${y.toFixed(0)}`); // => "123457"
console.log(`y.toFixed(2): ${y.toFixed(2)}`); // => "123456.79"
console.log(`y.toFixed(5): ${y.toFixed(5)}`); // => "123456.79000"
console.log(`y.toExponential(1): ${y.toExponential(1)}`); // => "1.2e+5"
console.log(`y.toExponential(3): ${y.toExponential(3)}`); // => "1.235e+5"
console.log(`y.toPrecision(4): ${y.toPrecision(4)}`); // => "1.235e+5"
console.log(`y.toPrecision(7): ${y.toPrecision(7)}`); // => "123456.8"
console.log(`y.toPrecision(10): ${y.toPrecision(10)}`); // => "123456.7890"

console.log(`parseInt("3 blind mice"): ${parseInt("3 blind mice")}`); // => 3
console.log(`parseFloat("  3.14 meters"): ${parseFloat("  3.14 meters")}`); // => 3.14
console.log(`parseInt("-12.34"): ${parseInt("-12.34")}`); // => -12
console.log(`parseInt("0xFF"): ${parseInt("0xFF")}`); // => 255
console.log(`parseInt("0xff"): ${parseInt("0xff")}`); // => 255
console.log(`parseInt("-0xFF"): ${parseInt("-0xFF")}`); // => -255
console.log(`parseFloat(".1"): ${parseFloat(".1")}`); // => 0.1
console.log(`parseInt("0.1"): ${parseInt("0.1")}`); // => 0
console.log(`parseInt(".1"): ${parseInt(".1")}`); // => NaN: integers can't start with "."
console.log(`parseFloat("$72.47"): ${parseFloat("$72.47")}`); // => NaN: numbers can't shart with "$"

console.log(`parseInt("11", 2): ${parseInt("11", 2)}`); // => 3: (1*2 + 1)
console.log(`parseInt("ff", 16): ${parseInt("ff", 16)}`); // => 255: (15*16)= 15
console.log(`parseInt("zz", 36): ${parseInt("zz", 36)}`); // => 1295: (35*36 + 35)
console.log(`parseInt("077", 8): ${parseInt("077", 8)}`); // => 63: (7*8 + 7)
console.log(`parseInt("077", 10): ${parseInt("077", 10)}`); // => 77 (7*10 + 7)
