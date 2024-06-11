const solution = arr => {
    return arr.reduce((a, c) => {
        
        let cnt = 0;
        while(c !== 1) {
            if(c % 2) c--;
            c /= 2;
            cnt++;
        };
        
        return a += cnt;
        
    }, 0);
}