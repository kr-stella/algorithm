function solution(n) {
    
    let cnt = 0;
    for(let i=2; i<=n; i += 2)
        cnt += i;
    
    return cnt;
    
}