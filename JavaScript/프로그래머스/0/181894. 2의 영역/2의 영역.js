const solution = (arr) => {
    
    const flag = 2;
    if(!arr.includes(flag))
        return [-1];
    
    const [ start, end ] = [arr.indexOf(flag), arr.lastIndexOf(flag)];
    const res = arr.splice(start, end - start + 1);
    
    return res;
    
}