const solution = (key, board) => {
    
    /** 현재위치 */
    let pos = [0, 0];
    /** board 맵 */
    board = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    /** 사용자 인터랙션 */
    let act = { "left": [-1, 0], "right": [1, 0], "up": [0, 1], "down": [0, -1] };
    key.map(v => act[v]).forEach(([x, y]) => {
        
        /** 더했을 때 board 맵을 넘어가면 동작x */
        if (Math.abs(x + pos[0]) > board[0] || Math.abs(y + pos[1]) > board[1])
             return;
        
        pos[0] += x;
        pos[1] += y;
        
    });
    
    return pos;
    
}