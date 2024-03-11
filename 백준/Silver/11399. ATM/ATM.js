let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let arr = input[1].split(' ').map(Number).sort((a,b) => a-b);

let sum = 0;
let result = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result += sum;
}

console.log(result);