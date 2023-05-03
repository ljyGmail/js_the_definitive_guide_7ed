// 3.2.1 Integer Literals
console.log(`0: $j{0}`);
console.log(`3: $j{3}`);
console.log(`10000000: ${10000000}`);

// hexadecimal values
console.log(`0xff: ${0xff}`); // => 255: (15*16 + 15)
console.log(`0xbadcafe: ${0xbadcafe}`); // => 195939070

// binary or octal
console.log(`0b10101: ${0b10101}`); // => 21: (1*16 + 0*8+ 1*4 + 0*2 + 1*1)
console.log(`0o377: ${0o377}`); // => 255: (3*64 + 7 * 8 + 7 * 1)
