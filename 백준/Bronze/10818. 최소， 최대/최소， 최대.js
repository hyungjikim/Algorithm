let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[1].split(' ').map(Number);

let max = numbers.reduce((a, c) => Math.max(a, c));
let min = numbers.reduce((a, c) => Math.min(a, c));

console.log(min, max);
