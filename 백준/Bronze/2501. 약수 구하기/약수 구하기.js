const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const numbers = [...stdin].map(Number)
const target = numbers[0]
const nth = numbers[1]

let 약수 = []

for(let i = 1; i <=target; i++) {
    if(target%i ===0) 약수.push(i)    
}

const sorted약수 = 약수.sort((a,b) => a - b)

const result = 약수.length < nth ? 0 : sorted약수[nth -1]
console.log(result)