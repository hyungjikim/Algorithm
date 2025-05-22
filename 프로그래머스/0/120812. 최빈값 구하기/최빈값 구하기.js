function solution(array) {
    const count = {}
    
    array.forEach((a) => {
        count[a] = ( count[a] || 0 ) + 1
    })
    
    const max = Math.max(...Object.values(count))
    
    const 최빈값후보 = Object.keys(count).filter((key) => count[key] === max)
    
    return 최빈값후보.length > 1 ? -1 : Number(최빈값후보[0])
}