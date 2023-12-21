function solution(arr) {
    let result = [];
    arr.forEach((e) => {
        if(e >= 50 && e % 2 ===0) {
            result.push(e/2);
            return;
        }
        if(e < 50 && e % 2 ===1) {
            result.push(e*2);
            return;
        }
        result.push(e)
    });
    return result;
}