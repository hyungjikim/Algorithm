let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];

let numbers = input.shift();

let result = ''

for(let i = 0; i < count; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    result += (a + b) + '\n';
}

console.log(result);