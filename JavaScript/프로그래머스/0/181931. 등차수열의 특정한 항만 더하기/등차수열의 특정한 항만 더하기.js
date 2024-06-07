const solution = (a, d, arr) => arr.reduce((r, c) => {
        
    if(c) r += a;
    a += d;

    return r;

}, 0);