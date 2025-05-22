const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [...stdin].map(Number)
const sum = arr.reduce((a,c) => a + c)
const avg = sum / arr.length
const sortedArr = arr.sort((a,b) => a - b)
const midIndex = Math.floor(arr.length / 2)
const mid = sortedArr[midIndex]

console.log(`${avg}\n${mid}`)