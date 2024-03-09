let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let numbers = input.split(' ').map(Number);

let sorted = numbers.sort((a,b) => a-b);

console.log(sorted[0], sorted[1], sorted[2])