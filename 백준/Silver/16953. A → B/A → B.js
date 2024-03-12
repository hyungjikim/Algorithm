let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let [a,b] = input.split(' ').map(Number);

let result = 0;

while(a<b) {
    if(b%2===0) {
        b = parseInt(b/2);
    } else if(b%10===1) {
        b = parseInt(b/10);
    } else {
        console.log(-1)
        return;
    }
    result ++;
}

if (a === b) {
    console.log(result + 1);
} else {
    console.log(-1); 
}