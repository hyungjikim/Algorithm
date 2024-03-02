let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let string = input[1];

let result = 0;

for(let s of string) {
    result += Number(s)
}

console.log(result);