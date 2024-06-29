const solution = n => {
    
    let res = 0;
    for(let i=1; i<=Math.sqrt(n); i++) {
        /** 나눠떨어지면 약수 */
        if(!(n % i)) {
            
            /** 나누는 수를 더함 */
            res += i;
            
            /** 몫을 더해야 함 ( 조건 = 나누는 수와 같지 않은 경우 ( 9의 약수 > 3 ) )*/
            const quot = n / i;
            if(i !== quot)
                res += quot;
            
        }
    };
    
    return res;
    
}