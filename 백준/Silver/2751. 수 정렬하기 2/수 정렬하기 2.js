let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

input.shift();

let numbers = input.map(Number).sort((a,b) => a-b);

let result = ''

for(let i = 0; i< numbers.length; i++) {
    result += `${numbers[i]}\n`
}

console.log(result)