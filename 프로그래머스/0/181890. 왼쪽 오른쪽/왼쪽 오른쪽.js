function solution(str_list) {
    let lIdx = str_list.indexOf('l');
    let rIdx = str_list.indexOf('r');

    if (lIdx !== -1 && (rIdx === -1 || lIdx < rIdx)) {
        return str_list.slice(0, lIdx);
    } else if (rIdx !== -1 && (lIdx === -1 || rIdx < lIdx)) {
        return str_list.slice(rIdx + 1);
    }
    return [];
}
