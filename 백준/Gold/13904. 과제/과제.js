let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let c = Number(input[0])

let tasks = []
for(let i = 1; i <= c; i++) {
    let [d,w] = input[i].split(' ').map(Number);
    tasks.push({d,w})
}

tasks.sort((a,b) => b.w - a.w)

let maxDay = Math.max(...tasks.map(task => task.d));

let days = new Array(maxDay + 1).fill(false);

let totalScore = 0;

for (let task of tasks) {
    for (let day = task.d; day > 0; day--) {
        if (!days[day]) {  
            days[day] = true;
            totalScore += task.w;
            break;
        }
    }
}

console.log(totalScore);