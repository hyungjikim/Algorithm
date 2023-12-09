function solution(n, k) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.filter((num, idx) => num %k === 0);
}