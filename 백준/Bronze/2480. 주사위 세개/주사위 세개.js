let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let numbers = input.split(' ');

let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);
let c = parseInt(numbers[2]);

if(a === b && b === c) console.log(10000 + a * 1000);
else if(a !== b && b !== c && c !== a) console.log(Math.max(a, b, c) * 100);
else {
    if(a === b || a === c) console.log(1000 + a * 100);
    else if(b === c) console.log(1000 + b * 100);
}
