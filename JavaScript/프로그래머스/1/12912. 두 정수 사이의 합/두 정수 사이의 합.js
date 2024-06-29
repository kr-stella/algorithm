const solution = (a, b) => {
    
    let res = 0;
    const [ min, max ] = [ Math.min(a, b), Math.max(a, b) ];
    for(let i=min; i<=max; i++)
        res += i;
    
    return res;
    
}