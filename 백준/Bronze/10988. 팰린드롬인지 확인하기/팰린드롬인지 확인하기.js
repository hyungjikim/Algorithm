let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
let midStr = input[Math.floor(input.length/2)]
let left = 0;
let right = input.length - 1
let 팰린드롬인가 = true;

while (left < right) {
    let leftStr = input[left];
    let rightStr = input[right];

    if (leftStr !== rightStr) {
        팰린드롬인가 = false;
        break;
    }

    left++;
    right--;
}

console.log(팰린드롬인가 ? 1 : 0);

