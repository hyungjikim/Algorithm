let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
let n = input[0]
let b = Number(input[1])
let result = parseInt(n, b)
console.log(result)