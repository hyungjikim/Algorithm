const lowerBound = (arr, target, start, end) => {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid]>=target) end = mid;
        else start = mid + 1
    }
    return end;
}

let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let arr = input[1].split(' ').map(Number);

arr.reverse();

let d = [0];

for(x of arr) {
    if(d[d.length -1] < x) d.push(x);
    else {
        let idx = lowerBound(d, x, 0, d.length)
        d[idx] = x;
    }
}

console.log(count - (d.length - 1));