const solution=(arr)=>{
    arr.sort((a,b)=>a-b)
    let mid = Math.floor(arr.length/2);
    return arr[mid]
}