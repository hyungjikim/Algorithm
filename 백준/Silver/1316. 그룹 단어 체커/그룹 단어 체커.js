let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

function isGroupWord(data){
    let setData = new Set(data[0]);
    for(let i=0; i< data.length -1; i++) {
        if(data[i] !== data[i+1]) {
            if(setData.has(data[i+1])) {
                return false;
            } else {
                setData.add(data[i+1])
            }
        }
    }
            return true;
}

let result = 0;

for(let i = 1; i<=count; i++) {
    let data = input[i];
    if(isGroupWord(data)) result += 1
}

console.log(result);