const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const tcCount = stdin[0]

let result = ''

for(let i = 1; i <= tcCount; i++) {
    const str = [...stdin[i]]
    const first = str[0]
    const last = str[str.length-1]
    result += `${first}${last}\n`
}

console.log(result)