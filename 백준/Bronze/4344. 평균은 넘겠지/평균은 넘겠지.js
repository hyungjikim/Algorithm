let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

for(let i = 1; i <= count; i++) {
    let [c, ...scores] = input[i].split(' ').map(Number);
    let sum = scores.reduce((a,c) => a+c, 0);
    let avg = sum/c
    let aboveAvg = scores.filter((s) => s > avg).length;
    let result = (aboveAvg/c * 100).toFixed(3);
    console.log(result + '%'); 
}