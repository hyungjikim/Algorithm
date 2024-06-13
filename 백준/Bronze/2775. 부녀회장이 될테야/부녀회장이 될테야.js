let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let t = Number(input[0]);

const numberOfPeople = (k, n) => {
    let apt = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        apt[0][i] = i;
    }

    for (let floor = 1; floor <= k; floor++) {
        for (let room = 1; room <= n; room++) {
            apt[floor][room] = apt[floor][room - 1] + apt[floor - 1][room];
        }
    }

    return apt[k][n];
}

let index = 1;
for (let i = 0; i < t; i++) {
    let k = Number(input[index]);
    let n = Number(input[index + 1]);
    console.log(numberOfPeople(k, n));
    index += 2;
}
