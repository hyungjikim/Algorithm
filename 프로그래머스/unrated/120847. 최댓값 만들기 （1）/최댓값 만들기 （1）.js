function solution(numbers) {
    const sorted = numbers.sort((a,b) => a - b).reverse();
    return sorted[0] * sorted[1];
}