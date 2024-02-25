let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[0].split(' ');

let a = numbers[0];
let b = numbers[1];

console.log(a-b);