const solution = n => {
    
    let p = 6;
    let res = 0;
    
    do { res++; }
    while((p * res) % n);
    
    return res;
    
}