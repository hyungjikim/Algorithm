let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let s = Number(input);

let n = Math.floor((-1 + Math.sqrt(1 + 8 * s)) / 2);

console.log(n);