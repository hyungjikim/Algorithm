let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a,b) => a - b);

let targetCount = Number(input[2]);
let targetArr = input[3].split(' ').map(Number);



let result = [];

for(let i = 0; i < targetArr.length; i++) {
    let target = targetArr[i];
    let flag = false;
    
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if(arr[mid] < target) start = mid + 1;
    else if(arr[mid] == target) {
        flag = true;
        break;
    } else {
        end = mid - 1;
    }    
    }
    if(flag) result.push(1);
    else result.push(0);
}

console.log(result.join('\n'))

