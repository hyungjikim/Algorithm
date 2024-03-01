let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = parseInt(input[0]);

for (let i = 1; i <= count; i++) {
    let scores = input[i].split(' ').map(Number);
    let scoreCount = scores.shift();
    let sum = scores.reduce((a, c) => a + c);
    let avg = sum / scoreCount;
    let aboveAvg = scores.filter((s) => s > avg).length;
    console.log(((aboveAvg / scoreCount) * 100).toFixed(3) + '%'); // 결과 출력 형식에 '%' 추가
}
