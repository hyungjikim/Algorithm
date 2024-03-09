let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let arr = input[1].split(' ').map(Number);

let sorted = Array.from(new Set(arr)).sort((a,b) => a -b);

let myMap = new Map();

for(let i=0; i<arr.length; i++) {
    myMap.set(sorted[i], i)
}

let answer = '';

arr.forEach((a) => answer+= myMap.get(a) + ' ')

console.log(answer);