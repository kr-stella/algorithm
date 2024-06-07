function solution(n) {
    const res = [n];
    while(n !== 1) {
        if(!(n % 2))  n /= 2;
        else n = (n * 3) + 1;
        res.push(n);
    }
    
    return res;
    
}