const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [_, m] = stdin[0].split(' ').map(Number)
const coords = stdin[1].split(' ').map(Number)

const maxAbs = coords.reduce((a,b) => Math.max(Math.abs(a), Math.abs(b)))

let result = 0

const neg = coords.filter((c) => c < 0).sort((a,b) => Math.abs(b) - Math.abs(a))
const pos = coords.filter((c) => c > 0).sort((a,b) => Math.abs(b) - Math.abs(a))

for(let i = 0; i < neg.length; i += m) {
    result += Math.abs(neg[i]) *2
}

for(let i = 0; i < pos.length; i += m) {
    result += Math.abs(pos[i]) *2
}

result -= maxAbs

console.log(result)