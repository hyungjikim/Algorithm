let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let submitted = new Set(input.map(Number));
let answer = [];

for(let i = 1; i <= 30; i++) {
    if (!submitted.has(i)) { 
        answer.push(i);
    }
}

console.log(answer.join('\n'));