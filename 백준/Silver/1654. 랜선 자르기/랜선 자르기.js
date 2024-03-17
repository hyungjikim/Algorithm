let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [c, t] = input[0].split(' ').map(Number);

let arr = [];

for(let i = 1; i <= c; i++) {
    arr.push(Number(input[i]));
}

let start = 1;
let end = arr.reduce((a,c) => Math.max(a,c));

let result = 0;

while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for(x of arr) {
        if(x >= mid) total += parseInt(x/mid);
    }
    if(total<t) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}

console.log(result);