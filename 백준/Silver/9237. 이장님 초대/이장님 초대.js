let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

arr.sort((a,b) => b-a)

let maxDays = 0

for(let i = 0; i < n; i++) {
    maxDays = Math.max(maxDays, arr[i] + i + 1);
}

console.log(maxDays+1)