let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim()

let [a,b] = input.split(' ')

let aReverse = [...a].reverse().join('');
let bReverse = [...b].reverse().join('');

console.log(Number(aReverse)>Number(bReverse) ? Number(aReverse) :Number(bReverse) )
