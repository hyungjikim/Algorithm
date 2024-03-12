let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let kg = Number(input);

let result = 0;
let flag = false;


while(kg>=0) {
    if(kg ===0 || kg%5 === 0) {
        result += parseInt(kg/5);
        console.log(result);
        flag = true;
        break;
    }
    kg -= 3;
    result += 1;
}

if(!flag) console.log(-1);