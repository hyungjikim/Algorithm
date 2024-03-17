const lowerBound = (arr, target, start, end) => {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid]>=target) end = mid;
        else start = mid + 1;
    }
    return end;
}

const upperBound = (arr, target, start, end) => {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid]>target) end = mid;
        else start = mid + 1;
    }
    return end;
}

const countByRange = (arr, leftValue, rightValue) => {
    let leftIdx = lowerBound(arr, leftValue, 0, arr.length);
    let rightIdx = upperBound(arr, rightValue, 0, arr.length);
    return rightIdx - leftIdx;
}

let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cardCount = Number(input[0]);

let numbers = input[1].split(' ').map(Number).sort((a,b) => a - b);

let targetCount = Number(input[2]);

let targetArr = input[3].split(' ').map(Number);

let result = '';

for(let i = 0; i < targetCount; i++) {
    let count = countByRange(numbers, targetArr[i], targetArr[i]);
    result += count + ' ' ;
}

console.log(result);