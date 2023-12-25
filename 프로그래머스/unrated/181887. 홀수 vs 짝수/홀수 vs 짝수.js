function solution(num_list) {
    return Math.max(num_list.filter((_,i)=>i%2===0).reduce((a,c)=>a+c), num_list.filter((_,i)=>i%2===1).reduce((a,c)=>a+c))
}