let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [c, v] = input[0].split(' ').map(Number);

input.shift();

input.sort((a,b) => b-a);

let count = 0;

for(let i =0; i < input.length; i++) {
    count += parseInt(v/input[i])
    v %= Number(input[i]);
}

console.log(count);