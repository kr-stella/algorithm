const solution = (n) => {
    
    const result = [];
    for(let i=2; i<=Math.sqrt(n); i++) {
        while(!(n % i)) {
            if(!result.includes(i))
                result.push(i);
            n /= i;
        }
    }
    
    /** 남은 나머지 */
    if(n >= 2) 
        result.push(n);
    
    return result;
    
}