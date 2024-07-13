const solution = (t, p) => {
    
    let cnt = 0;
    let limit = p.length;
    for(let i=0; i<=t.length - p.length; i++) {
        if(+p >= +t.substr(i, limit))
            cnt++;
    }
        
    return cnt;
    
}