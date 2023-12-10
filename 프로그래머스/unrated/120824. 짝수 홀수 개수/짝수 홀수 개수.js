function solution(num_list) {
    const arr= num_list.map((num) => (num % 2));
    return [arr.filter((el) => !el).length, arr.filter((el) => el).length]
}