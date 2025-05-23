const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const obj = {
  가로: [],
  세로: []
}

for(let i = 0; i < stdin.length; i++) {
    const line = stdin[i].split(' ')
    obj['가로'].push(line[0])
    obj['세로'].push(line[1])
}

const count = (arr) => arr.reduce((a,c) => {
  a[c] = (a[c] || 0) + 1
  return a
}, {})

const getUniqueValue = (obj) => {
  for(const [key,value] of Object.entries(obj)) {
    if(value === 1) return key
  }
}

const 가로 = getUniqueValue(count(obj['가로']))
const 세로 = getUniqueValue(count(obj['세로']))

console.log(가로, 세로)