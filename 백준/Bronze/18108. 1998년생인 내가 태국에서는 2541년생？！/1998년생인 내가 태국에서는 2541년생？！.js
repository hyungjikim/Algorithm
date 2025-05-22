const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const DIFF = 543

const get불기연도 = y => y - DIFF
const 불기연도 = get불기연도(stdin)

console.log(불기연도)