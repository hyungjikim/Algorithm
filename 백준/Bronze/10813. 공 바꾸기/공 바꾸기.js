let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let arr = [];

for (let i = 1; i <= n; i++) arr.push(i);

for (let x = 1; x <= m; x++) {
    let [i, j] = input[x].split(' ').map(Number);

    if (i >= 1 && i <= n && j >= 1 && j <= n) {
        [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
    }
}

console.log(arr.join(' '));
