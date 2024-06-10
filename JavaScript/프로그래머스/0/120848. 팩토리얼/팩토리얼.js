function solution(n) {
    
    let res = 1;
    for(let i=1; i<=n; i++) {
        
        res *= i;
        if(res === n) return i;
        else {
            if(res > n)
                return i - 1;
        }
        
    }
    
}