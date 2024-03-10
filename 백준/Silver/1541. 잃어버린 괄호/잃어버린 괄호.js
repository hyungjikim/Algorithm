let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let groups = input.split('-');
let result = 0;

for(let i = 0; i<groups.length; i++) {
    let sum = groups[i].split('+').map(Number).reduce((a,c)=>a+c);
    if(i===0) result += sum;
    else result -= sum;
}

console.log(result)