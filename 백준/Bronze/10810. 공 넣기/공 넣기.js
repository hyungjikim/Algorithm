let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);

let arr = new Array(n).fill(0);

for (let x = 1; x <= m; x++) {
    let command = input[x].split(' ').map(Number);
    let [i, j, k] = command;

    for (let l = i - 1; l <= j - 1; l++) {
        arr[l] = k;
    }
}

console.log(arr.join(' '));
