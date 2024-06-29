const solution = arr => {
    
    const [ x, y ] = arr;
    const max = Math.max(x, y);
    const min = Math.min(x, y);
    
    return (max + min) - (max - min) - 1
    
    // 삼각형 공식 = 최소값 * 2 - 1
    // return Math.min(...arr) * 2 -1;
    
}