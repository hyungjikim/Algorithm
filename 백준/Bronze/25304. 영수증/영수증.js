let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let x = Number(input[0]);
let n = Number(input[1]);

let total = 0;

for(let i = 2; i < input.length; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    total += a*b
}

console.log(total === x ? "Yes" : "No")