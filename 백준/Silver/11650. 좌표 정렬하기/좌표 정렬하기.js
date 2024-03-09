let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

let arr = []

for(let i = 1; i<= count; i++) {
    arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});


let result = ''

for(let i = 0; i< arr.length; i++) {
    result += arr[i].join(' ') + '\n';
}

console.log(result.trim());