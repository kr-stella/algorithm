function solution(arr, n) {
    
    const res = [];
    while(arr.length)
        res.push(arr.splice(0, n));
    
    return res;
    
}