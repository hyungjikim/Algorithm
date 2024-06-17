let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 0; i < input.length; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    let sum = a + b;
    result.push(sum);
}

console.log(result.join('\n'));
