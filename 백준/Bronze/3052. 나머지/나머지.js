let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input.map(Number);

let calc = numbers.map((n) => n % 42);

let set = new Set(calc);

console.log(set.size)