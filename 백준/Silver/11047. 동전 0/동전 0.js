let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

input.shift(); 

let arr = input.map(Number); 

arr.sort((a, b) => b - a); 

let result = 0;

for(let i = 0; i < arr.length; i++) {
   result += parseInt(k / arr[i]);
   k %= arr[i];
}

console.log(result);


