const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (n) => {
    let sum = 0;
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i !== n) divisors.push(i);
            if (i !== n / i && i !== 1) divisors.push(n / i);
        }
    }
    
    divisors.sort((a, b) => a - b);
    sum = divisors.reduce((acc, val) => acc + val, 0);
    
    if (sum === n) {
        return `${n} = ${divisors.join(' + ')}`;
    } else {
        return `${n} is NOT perfect.`;
    }
}

let answer = [];

for (let i = 0; i < input.length; i++) {
    let num = input[i];
    if (num === -1) break;
    let result = solution(num);
    answer.push(result);
}

console.log(answer.join('\n'));
