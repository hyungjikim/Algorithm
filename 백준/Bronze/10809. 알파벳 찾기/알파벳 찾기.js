let fs = require('fs');
let s = fs.readFileSync('/dev/stdin').toString().trim();

let result = new Array(26).fill(-1);

for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0); 
    if (result[index] === -1) { 
        result[index] = i; 
    }
}

console.log(result.join(' ')); 
