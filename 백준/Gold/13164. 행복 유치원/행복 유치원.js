let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let diffs = [];
for (let i = 1; i < n; i++) {
    diffs.push(arr[i] - arr[i - 1]);
}

diffs.sort((a, b) => b - a);

let minCost = 0;
for (let i = k - 1; i < diffs.length; i++) {
    minCost += diffs[i];
}

console.log(minCost);
