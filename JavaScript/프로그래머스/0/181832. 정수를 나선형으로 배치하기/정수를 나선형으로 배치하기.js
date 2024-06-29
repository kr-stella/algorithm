const solution = n => {
    
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    let [ y, x ] = [ 0, 0 ];
    
    // 오른쪽, 아래쪽, 왼쪽, 위쪽
    let dirIndex = 0;
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for(let k = 0; k < Math.pow(n, 2); k++) {
        
        res[y][x] = k + 1;
        const [dy, dx] = dir[dirIndex];
        
        const ny = y + dy;
        const nx = x + dx;
	    if(ny >= 0 && ny < n && nx >= 0 && nx < n && !res[ny][nx]) [y, x] = [ny, nx];
        else {
            
            dirIndex = (dirIndex + 1) % 4;
            const [ ndy, ndx ] = dir[dirIndex];
            y += ndy;
            x += ndx;
            
        }
        
	}
    
    return res;
    
}