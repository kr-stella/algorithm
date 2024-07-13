const solution = (arr, n) => {
    return arr.sort((a, b) => {
        
        const [ c, d ] = [Math.abs(n-b), Math.abs(n-a)];
        if(c === d)
            return b - a;
        
        return d - c;
        
    });
}