let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n,m] = input[0].split(' ').map(Number);

let [a,b] = [[],[]]

for(let i=1; i<=n; i++) {
    a.push(input[i].split(' ').map(Number));
}

for(let i=n+1; i<=2*n; i++) {
    b.push(input[i].split(' ').map(Number));
}

let sum = []

for(let i = 0; i<n; i++) {
    let row = [];
    for(let j= 0; j<m; j++) {
        row.push(a[i][j] + b[i][j])
    }
      sum.push(row)
}

sum.forEach((row) => {
    console.log(row.join(' '));
});