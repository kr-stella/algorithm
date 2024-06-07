function solution(n) {
    
    let res = 0;
    for(let i=4; i<=n; i++) {
        if(find(i))
            res++;
    }
    
    return res;
}

// 1 * n 2종 제외 최소한 제곱근이 있는경우 ++
const find = (v) => {
    
    for(let i=2; i<=Math.sqrt(v); i++) {
        if(v % i === 0)
            return true;
    }
    
    return false;
}