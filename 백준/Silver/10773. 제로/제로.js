let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let k = Number(input[0])
let arr = []
for (let i = 1; i <= k; i++) {
    let num = Number(input[i])
    if(num ===0) arr.pop()
    else arr.push(num)
}

let sum = arr.reduce((a, c) => a + c, 0)

console.log(sum);
