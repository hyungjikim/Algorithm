let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let numbers = input.split(' ');

let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);
let c = parseInt(numbers[2]);

console.log(a+b+c);