let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let payment = Number(input);

let changes = 1000 - payment;

let coins = [500, 100, 50, 10, 5, 1];

let result = 0;

for(let coin of coins) {
    if(changes === 0) break;
    let maxCoins = Math.floor(changes / coin); 
    
    result += maxCoins;
    changes -= maxCoins * coin;
}

console.log(result);