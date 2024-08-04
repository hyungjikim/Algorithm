let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let numbers = input[1].split(' ').map(Number)

let isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let result = 0;

for (let i = 0; i < n; i++) {
    if (isPrime(numbers[i])) {
        result++;
    }
}

console.log(result);