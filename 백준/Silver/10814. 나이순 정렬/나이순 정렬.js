let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

input.shift();

let arr = [];

for(let i =0; i< count; i++) {
    let [a,n] = input[i].split(' ');
    a = Number(a);  
    arr.push([a, n]);
}

arr.sort((a,b) => a[0] - b[0]);

let answer = '';

arr.forEach((a) => answer += a[0] + " " + a[1] + "\n");

console.log(answer);