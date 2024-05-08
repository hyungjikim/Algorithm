let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,k] = input[0].split(' ').map(Number);
let scores = input[1].split(' ').map(Number).sort((a,b) => b-a);
let answer = scores[k-1];
console.log(answer);