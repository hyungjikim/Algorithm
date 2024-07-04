let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [a,b,c] = input.map(Number)
let multiply = a*b*c

let numString = String(multiply)

let count = Array(10).fill(0);

for (let i = 0; i < numString.length; i++) {
    count[parseInt(numString[i])] += 1;
}

for (let i = 0; i < count.length; i++) {
    console.log(count[i]);
}