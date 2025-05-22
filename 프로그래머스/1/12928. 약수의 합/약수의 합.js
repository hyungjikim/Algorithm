function solution(n) {
    const 약수 = []
    for(let i= 1; i <=n; i++) {
        if(n%i===0) 약수.push(i)
    }
    return 약수.reduce((a,c) => a+c, 0)
}