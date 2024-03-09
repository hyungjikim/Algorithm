let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [c, nth] = input[0].split(' ').map(Number);

let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

console.log(arr[nth-1]);
