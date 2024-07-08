let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [a, b, c, d, e, f] = input.map(Number);

let determinant = a * e - b * d;

let x = (c * e - b * f) / determinant;
let y = (a * f - c * d) / determinant;

console.log(`${x} ${y}`);
