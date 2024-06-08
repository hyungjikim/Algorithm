let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let c = Number(input[0]);

for (let i = 1; i <= c * 2; i += 2) {
    let treeCount = Number(input[i]);
    let arr = input[i + 1].split(' ').map(Number).sort((a, b) => a - b);
    let rearranged = new Array(treeCount);
    let left = 0;
    let right = treeCount - 1;
    
    for (let j = 0; j < treeCount; j++) {
        if (j % 2 === 0) {
            rearranged[left] = arr[j];
            left++;
        } else {
            rearranged[right] = arr[j];
            right--;
        }
    }

    let maxDiff = 0;
    
    for (let j = 1; j < treeCount; j++) {
        maxDiff = Math.max(maxDiff, Math.abs(rearranged[j] - rearranged[j - 1]));
    }
    maxDiff = Math.max(maxDiff, Math.abs(rearranged[0] - rearranged[treeCount - 1]));
    
    console.log(maxDiff);
}
