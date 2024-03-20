let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a,b) => a - b);
let targetCount = Number(input[2]);
let target = input[3].split(' ').map(Number);

let result = [];

for(let i = 0; i < targetCount; i++) {
    let start = 0;
    let end = arr.length - 1;
    let flag = false;
    
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] < target[i]) start = mid + 1;
        else if(arr[mid] === target[i]) {
            flag = true;
            break;
        }
        else end = mid - 1;
    }
    result.push(flag ? 1 : 0);
}

console.log(result.join(' '));