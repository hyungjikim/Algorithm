let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [a,b,c] = input.map(Number)
let multiply = a * b * c

let multiplyArr = [...String(multiply)]

let obj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9:0
}

for(let i = 0; i < multiplyArr.length; i++) {
    let num = multiplyArr[i]
    obj[num] += 1
}

console.log(Object.values(obj).join('\n'));