let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [n,m] = input.map(Number);

let arr = [];
for(let i = 1; i<=n; i++) arr.push(i);

let visited = new Array(n).fill(false);
let selected = [];

let answer = '';

function dfs(start, depth) {
    if(depth === m) {
        let result = [];
        for(let i of selected) result.push(arr[i]);
        for(let x of result) answer += x + " ";
        answer += '\n';
        return;
    }
    for(let i = start; i < arr.length; i++) {
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(i+1, depth+1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(0, 0);

console.log(answer);