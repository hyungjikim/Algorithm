let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);

let result = '';

for(let i = 1; i<=t; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    let answer = `Case #${i}: ${a} + ${b} = ${a+b}`;
    result += answer + '\n';
}

console.log(result);