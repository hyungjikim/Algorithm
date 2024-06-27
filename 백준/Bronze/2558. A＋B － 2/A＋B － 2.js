let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let [a,b] = input
console.log(a+b)