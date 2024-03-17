let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [c,m] = input[0].split(' ').map(Number);

let arr = input[1].split(' ').map(Number);

let start = 0;
let end = arr.reduce((a,c)=> Math.max(a,c));

let h = 0;

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for(x of arr) {
        if(x > mid) total += x - mid;
    }
    if(total < m) end = mid - 1;
    else {
        h = mid;
        start = mid + 1;
    }
}

console.log(h);