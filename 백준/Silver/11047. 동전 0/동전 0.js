const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n,k] = stdin[0].split(' ').map(Number)
const coins = []

for(let i = 1; i <= n; i++) {
    const coin = Number(stdin[i])
    coins.push(coin)
}

let rest = k
let result = 0

while(rest > 0) {
    let point = coins.filter((coin) => coin <= rest).reverse()[0]
    const left = rest % point
    const divided = Math.floor(rest/point)
    
    rest = left
    result += divided
}

console.log(result)