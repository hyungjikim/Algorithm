function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const total1 = arr1.reduce((a,c) => a+c)
        const total2 = arr2.reduce((a,c) => a+c)
        return total1 > total2 ? 1: total1 === total2 ? 0 : -1
    }
    return arr1.length > arr2.length ? 1 : arr1.length === arr2.length ? 0 : -1
}