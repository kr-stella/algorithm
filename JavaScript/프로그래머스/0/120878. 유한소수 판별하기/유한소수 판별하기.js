function solution(a, b) {
    
    let i = 2;
    let gcd = 1;
    while(Math.min(a, b) >= i){
        
        if(a % i === 0 && b % i === 0)
            gcd = i;
        
        i++;
        
    }
    
    const v = b / gcd;
    const prime = n => {
        let factor = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                factor = [...factor, i];
                n /= i;
            }
        }
        if (n > 2)
            factor = [...factor, n];
        
        return factor;
        
    }
    
    // console.log((a/b).toString().length > 10 ? 2 : 1);
    // 무한소수 10자리가 넘어가지 않으면 효율적일듯;
    // console.log(Number((a/b).toFixed(10)));
    // console.log(Number((a/b).toFixed(10)) == a/b ? 1 : 2);
    
    return prime(v).find(n => n !== 2 && n !== 5)? 2 : 1;
    
}