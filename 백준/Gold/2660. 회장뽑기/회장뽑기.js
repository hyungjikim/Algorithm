const floydWarshall = (n, edges) => {
    const INF = Infinity;
    let dist = Array.from({ length: n }, () => Array(n).fill(INF));

    for (let i = 0; i < n; i++) dist[i][i] = 0;
    for (const [u, v] of edges) {
        dist[u - 1][v - 1] = 1;
        dist[v - 1][u - 1] = 1;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let scores = dist.map(row => Math.max(...row));
    let minScore = Math.min(...scores);
    let candidates = [];
    for (let i = 0; i < n; i++) {
        if (scores[i] === minScore) candidates.push(i + 1);
    }

    return { score: minScore, candidates: candidates };
};


let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let edges = [];

for (let i = 1; i < input.length; i++) {
    let [u, v] = input[i].split(' ').map(Number);
    if (u === -1 && v === -1) break;
    edges.push([u, v]);
}

const result = floydWarshall(n, edges);

console.log(result.score, result.candidates.length);
console.log(result.candidates.join(' '));