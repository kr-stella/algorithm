const solution = arr => {
    
    const row = arr.length;
    const col = arr[0].length;
    if(col === row)
        return arr;
    
    if(row > col) {
        const zf = Array.from({ length:row-col }).fill(0);
        return arr.map(a => [...a, ...zf]);
    }
    else 
        return [...arr, ...Array.from({ length:col-row }).fill(Array.from({ length:col }).fill(0))]
    
    return arr;
    
}