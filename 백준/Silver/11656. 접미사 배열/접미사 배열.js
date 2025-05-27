const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const arr = [...stdin]
const 접미사배열 = []

for(let i = 0; i < arr.length; i++) {
    const 접미사 = arr.slice(i).join('')
    접미사배열.push(접미사)
}

접미사배열.sort().map((접미사) => {
    console.log(접미사)
})