let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let a = input[1].split(' ').map(Number);
a.sort((x, y) => x - y);

let b = input[2].split(' ').map(Number);

let bIndexed = b.map((value, index) => ({ value, index }));
bIndexed.sort((x, y) => y.value - x.value);

let s = 0;
for (let i = 0; i < n; i++) {
    let idx = bIndexed[i].index;
    s += a[i] * b[idx];
}

console.log(s)
