const solution = v => {

    const sqrt = Math.sqrt(v);
    if(!(v % sqrt))
        return Math.pow(sqrt + 1, 2);
        
    return -1;

}