const solution = (arr, v) => {
    
    const filtered = arr.filter(a => !(a % v));
    if(filtered.length) return filtered.sort((a, b) => a - b);
    else return [-1];
    
}