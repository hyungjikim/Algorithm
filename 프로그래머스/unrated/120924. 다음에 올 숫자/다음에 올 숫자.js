const solution = common => {
    const is등차수열 = common[2] - common[1] === common[1] - common[0];
    const 등차 =  common[2] - common[1]
    const 등비 = common[2] / common[1]
    
    return is등차수열 ? (common.reverse()[0]) + 등차 : (common.reverse()[0]) * 등비
}