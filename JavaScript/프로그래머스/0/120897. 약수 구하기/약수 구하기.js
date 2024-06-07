function solution(v) {
    
    let arr = new Array();
    for(let i=1; i<=Math.sqrt(v); i++) {
        if(!(v % i))
            arr = [...arr, v/i, i];
        
    }
    
    return [...new Set(arr)].sort((a, b) => a - b);
    
}