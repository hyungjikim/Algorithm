const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const arr = input[1].split(' ').map(Number);

const lengthOfLIS = (nums) => {
    const lis = [];
    for (let num of nums) {
        if (lis.length === 0 || lis[lis.length - 1] < num) {
            lis.push(num);
        } else {
            let low = 0, high = lis.length - 1;
            while (low < high) {
                const mid = Math.floor((low + high) / 2);
                if (lis[mid] < num) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            lis[low] = num;
        }
    }
    return lis.length;
}

console.log(lengthOfLIS(arr));


