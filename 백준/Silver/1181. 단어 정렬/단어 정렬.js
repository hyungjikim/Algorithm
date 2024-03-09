let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

input.shift();

let arr = Array.from(new Set(input))

arr.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length; 
    } else {
        return a.localeCompare(b); 
    }
});

let result = arr.join('\n');

console.log(result);