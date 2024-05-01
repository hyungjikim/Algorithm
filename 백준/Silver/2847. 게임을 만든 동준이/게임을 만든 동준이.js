let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let scores = input.slice(1, N + 1).map(Number);

let decreaseCount = 0;

for (let i = N - 1; i >= 0; i--) {
    if (scores[i] <= scores[i - 1]) {
        let needed = scores[i - 1] - scores[i] + 1;
        decreaseCount += needed;
        scores[i - 1] = scores[i] - 1;
    }
}

console.log(decreaseCount);
