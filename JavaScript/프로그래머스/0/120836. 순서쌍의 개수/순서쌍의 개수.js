function solution(n) {
    
    let res = 0;
    let sq = Math.sqrt(n);
    for(let i=1; i<sq; i++)
        if(!(n % i))
            res += 2; // (1, n)(n, 1) 1쌍이므로 2씩
    
    if(!(n % sq)) // 같은 숫자의 경우
        res++;
    
    return res;
    
}