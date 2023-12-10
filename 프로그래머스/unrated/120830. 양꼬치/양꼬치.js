function solution(n, k) {
    const cost = (12000*n) + (2000*k);
    const freeBeverage = Math.trunc(n/10) * 2000
    return cost - freeBeverage;
}