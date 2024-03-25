let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let currentCase = 1;

for(let i = 0; i < testCase; i++) {    
    let [aCount, bCount] = input[currentCase++].split(' ').map(Number);
    let a = input[currentCase++].split(' ').map(Number).sort((a,b) => a - b);
    let b = input[currentCase++].split(' ').map(Number); 

    let result = 0;

    for(t of b) {
        let start = 0;
        let end = a.length;
        
        while (start < end) {
           let mid = parseInt((start + end) / 2);
            if(a[mid] <= t) start = mid + 1;
            else end = mid;
        }
            result += a.length - start;
    }
    console.log(result);
}