let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input.map(Number);

let rest = numbers.map((n) => n%42);

let set = new Set(rest);

console.log(set.size)