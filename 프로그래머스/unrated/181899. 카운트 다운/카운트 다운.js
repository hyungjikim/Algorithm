function solution(start, end) {
    return new Array(start - end +1).fill(1).map((_, idx) => idx + end).reverse()
}