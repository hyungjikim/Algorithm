let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let numbers = input[1].split(' ').map(Number);

let target = Number(input[2]);

let result = numbers.filter((n) => n === target).length

console.log(result);