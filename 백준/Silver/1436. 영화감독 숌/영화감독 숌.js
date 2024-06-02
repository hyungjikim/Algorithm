let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
let n = Number(input);

let num = 666;
let count = 0;

while(true) {
    if(String(num).includes('666')) {
        count ++;
    }
    if(count === n) {
        console.log(num)
        break;
    }
    num ++;
}