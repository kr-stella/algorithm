const solution = s => {
    
    const len = Math.floor(s.length / 2);
    return s.length % 2? s[len]:s.slice(len-1, len+1);
    
}