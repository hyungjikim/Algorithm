let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let chess = [1, 1, 2, 2, 2, 8]

let result = []

for(let i = 0; i < input.length; i++) {
    let diff = chess[i] - input[i]
    result.push(diff)
}

console.log(result.join(' '))