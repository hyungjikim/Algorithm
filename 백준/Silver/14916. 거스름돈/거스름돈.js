const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const target = Number(stdin)

let result = -1

for(let i = Math.floor(target/5); i >= 0; i--){
   const rest = target - (5 * i)
   if(rest%2 ===0) {
      result = i + (rest/2)
      break;
   }
}

console.log(result)