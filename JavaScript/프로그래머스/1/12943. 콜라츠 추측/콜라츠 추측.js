const solution = v => {
    
    let cnt = -1;
    if(v === 1) return 0;
    while(cnt <= 500) {

        cnt++;
        v % 2 === 0? v = v / 2: v = (v * 3) + 1;
        if(v === 1) {
            return cnt + 1;
        }
        
    }
    
    return -1;
    
}