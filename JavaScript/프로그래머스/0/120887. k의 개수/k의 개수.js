function solution(i, j, k) {
    
    let res = 0;
    for(let a=i; a<=j; a++)
        res += [...a.toString()].reduce((c, v) => (v == k)? c += 1:c, 0);
    
    return res;
    
}