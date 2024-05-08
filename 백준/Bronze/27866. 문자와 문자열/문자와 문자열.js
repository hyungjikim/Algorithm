let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let str = input[0];
let n = Number(input[1]);
console.log(str[n-1]);