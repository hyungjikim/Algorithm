let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let number = parseInt(input);

let result = 0;

for(let i=1; i <= number; i++) {
    result += i;
}

console.log(result);