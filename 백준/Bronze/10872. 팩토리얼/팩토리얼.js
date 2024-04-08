let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);

let result = 1;

for(let i = 1; i <= n; i++) {
    result *= i;
}

console.log(result);