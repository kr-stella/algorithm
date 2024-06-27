const solution = (str, v) => {
    
    let res = [];
    for(let i = 0; i < (str.length / v); i++)
        res.push(str.slice(i*v, i*v + v));
    
    return res;
    
}