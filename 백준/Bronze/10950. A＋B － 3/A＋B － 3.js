let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

for(let i =1; i<=count; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    console.log(a+b);
}