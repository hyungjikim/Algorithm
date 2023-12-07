function solution(my_string, is_prefix) {
    let list = [];
    for (let i = 0; i < my_string.length; i++) {
        list.push(my_string.substring(0, i+1))
    }
    return list.includes(is_prefix) ? 1: 0
}