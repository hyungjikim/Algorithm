let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);

let scores = input[1].split(' ').map(Number);

let max = scores.reduce((a,c) => Math.max(a,c));

let result = scores.map(score => (score / max) * 100);

let sum = result.reduce((a,c) => a+c);

console.log(sum/testCase);