let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[0].split(' ');

let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);

let sum = a + b;
let diff = a - b;
let multiple = a * b;
let divide = parseInt(a / b);
let rest = a % b;

console.log(`${sum}\n${diff}\n${multiple}\n${divide}\n${rest}`)