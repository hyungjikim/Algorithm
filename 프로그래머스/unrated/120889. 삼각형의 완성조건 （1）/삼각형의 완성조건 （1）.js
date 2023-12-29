function solution(sides) {
    const max = sides.reduce((a,c)=>a<c ? c: a);
    const maxIdx = sides.indexOf(max);
    const [idx1, idx2] = sides.filter((_,i) => i !== maxIdx).map((n) => sides.indexOf(n));
    
    const restSum = sides[idx1] + sides[idx2]
    
    return max < restSum ? 1 : 2
}