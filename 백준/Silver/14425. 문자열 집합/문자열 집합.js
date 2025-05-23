const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = stdin[0].split(' ').map(Number)[0]

const sArr = []
const target = []

for(let i = 1; i < stdin.length; i++) {
    if(i>=1 && i<=n) sArr.push(stdin[i])
    else target.push(stdin[i])
}

const s = new Set(sArr)

const count = target.reduce((a,c) => {
    a[c] = (a[c] || 0) + 1
    return a
}, {})

let result = 0

for(const [key,value] of Object.entries(count)) {
    if(s.has(key)) result += Number(value)
}

console.log(result)