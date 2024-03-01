let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let n = Number(input);

let result = '';

for(let i = 1; i <= n; i++){
    result += '*';
    console.log(result);
}
