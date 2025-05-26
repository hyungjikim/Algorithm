const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

const [a,b] = stdin

const aMin = a.replaceAll('6', '5')
const bMin = b.replaceAll('6', '5')

const aMax = a.replaceAll('5', '6')
const bMax = b.replaceAll('5', '6')

const minSum = Number(aMin) + Number(bMin)
const maxSum = Number(aMax) + Number(bMax)

console.log(minSum, maxSum)