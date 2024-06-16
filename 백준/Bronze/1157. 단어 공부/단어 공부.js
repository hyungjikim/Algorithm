let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let alphabetFrequency = new Array(26).fill(0);

for (let char of input) {
    let index = char.charCodeAt(0) - 65;
    alphabetFrequency[index]++;
}

let maxCount = Math.max(...alphabetFrequency);
let maxCharIndex = alphabetFrequency.indexOf(maxCount);

let isTie = alphabetFrequency.filter(count => count === maxCount).length > 1;

console.log(isTie ? '?' : String.fromCharCode(maxCharIndex + 65));
