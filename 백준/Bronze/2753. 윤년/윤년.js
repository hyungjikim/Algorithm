let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let year = Number(input);

let 윤년인가 = year %4 === 0 && year % 100 !== 0 || year%400 === 0;

console.log(+윤년인가)