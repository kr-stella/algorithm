const solution = dots => {
    
    const xArr = dots.flatMap(([x, y]) => x);
    const yArr = dots.flatMap(([x, y]) => y);
    
    return (Math.max(...xArr) - Math.min(...xArr)) * (Math.max(...yArr) - Math.min(...yArr));
    
}