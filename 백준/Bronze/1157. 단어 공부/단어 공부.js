let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let map = new Map();

for (let char of input) {
    if (map.has(char)) {
        map.set(char, map.get(char) + 1);
    } else {
        map.set(char, 1);
    }
}

let maxCount = 0;
let maxChar = '';
let isTie = false;

for (let [char, count] of map) {
    if (count > maxCount) {
        maxCount = count;
        maxChar = char;
        isTie = false;
    } else if (count === maxCount) {
        isTie = true;
    }
}

console.log(isTie ? '?' : maxChar);
