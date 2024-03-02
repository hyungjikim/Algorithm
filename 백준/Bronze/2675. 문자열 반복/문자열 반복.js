let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);

for(let i = 1; i<=count; i++) {
    let [r,s] = input[i].split(' ');
    let result = '';
    
    for (let j = 0; j <= s.length; j++) {
        result += s.charAt(j).repeat(r)
    }
    console.log(result);
}
