let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(Number);

let max = numbers.reduce((a,c)=> Math.max(a,c), - Infinity);
let maxIdx = numbers.indexOf(max) + 1;

console.log(`${max}\n${maxIdx}`);