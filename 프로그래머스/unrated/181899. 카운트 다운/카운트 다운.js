function solution(start_num, end_num) {
    return new Array(start_num - end_num +1).fill(1).map((_, idx) => idx + end_num).reverse()
}