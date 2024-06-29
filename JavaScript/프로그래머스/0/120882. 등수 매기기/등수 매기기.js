const solution = (score) => {
    
    const avg = score.map(v => v.reduce((a, c) => a + c, 0) / v.length);
    const data = [...avg].sort((a, b) => b - a).reduce((a, c, i) => {
        if(!a[c])
            a[c] = i + 1;
        return a;
    }, {});
    
    return avg.map(a => data[a]);
    
}