let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[0].split(' '); 

let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);
let c = parseInt(numbers[2]);

console.log((a + b) % c);

console.log(((a % c) + (b % c)) % c); 

console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
