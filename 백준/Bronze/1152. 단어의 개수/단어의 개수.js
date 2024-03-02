let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let value = input.split(' ').filter((s) =>s);

console.log(value.length)