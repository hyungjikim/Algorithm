function solution(arr) {
    const sum = arr.reduce((a,c) => a + c)
    return sum / arr.length
}