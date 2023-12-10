function solution(n) {
    let numbers = [];
    for(let i = 0; i <= n; i++) {
        if(i%2===0) numbers.push(i);
    }
    return numbers.reduce((acc, cur) => acc + cur)
}