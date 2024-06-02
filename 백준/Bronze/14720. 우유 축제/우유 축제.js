let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0])
let arr = input[1].split(' ').map(Number);

let result = 0
let expected = 0;

for(let i = 0; i < n; i++) {
    if(arr[i] === expected) {
        result ++
        expected = (expected + 1) % 3
    }
}

console.log(result)