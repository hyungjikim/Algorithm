const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const alphabet = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i','j', 'k', 'l','m', 'n','o', 'p','q', 'r', 's','t','u','v','w','x','y','z']

const getCount = (arr) => arr.reduce((a,c) => {
    a[c] = (a[c] || 0) + 1
    return a
}, {})

const count = new Map(Object.entries(getCount([...stdin])))

const result = alphabet.map((a) => {
    if(count.has(a)) return count.get(a)
    else return 0
})

console.log(result.join(' '))