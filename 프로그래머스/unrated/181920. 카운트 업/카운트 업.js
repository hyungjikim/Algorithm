function solution(start_num, end_num) {
    let arr = new Array(end_num - start_num +1);
    for(let i=0; i < arr.length; i++) {
        arr[i] = start_num + i
    }
    return arr;
}