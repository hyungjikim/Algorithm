let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,x] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);

let answer = a.filter((n) => n < x);

console.log(answer.join(' '));