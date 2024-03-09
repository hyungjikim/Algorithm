let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = [...input];

let result = arr.sort((a,b) => b-a).join('')

console.log(result);