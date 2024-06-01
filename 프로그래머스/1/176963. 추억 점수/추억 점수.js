function solution(name, yearning, photo) {
    let map = {}
    for(let i = 0; i < name.length; i++) {
        map[name[i]] = yearning[i]
    }
    
    let sum = []
    
    for(let i = 0; i < photo.length; i++) {
        let people = photo[i];
        let score = 0;
        
        for(let j = 0; j < people.length; j++) {
            let person = people[j]
            if (map[person] !== undefined) {
                score += map[person];
            }
        }
        sum.push(score)
    }
    return sum
}