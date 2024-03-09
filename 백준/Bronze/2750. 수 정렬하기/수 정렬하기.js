let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let arr = input.map(Number).sort((a,b) => a-b);

arr.forEach((a) => console.log(a))