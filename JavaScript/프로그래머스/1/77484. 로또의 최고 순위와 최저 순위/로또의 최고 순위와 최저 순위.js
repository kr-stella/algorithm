const solution = (lottos, win) => {
    
    /** 맞춘개수 : 랭킹 */
    const ranking = { "2": 5, "3": 4, "4": 3, "5": 2, "6": 1 };
    let [ cnt, unknown ] = [ 0, 0 ];
    lottos.forEach(a => {
        if(a === 0) unknown++;
        else if(win.includes(a))
            cnt++;
    });
    
    return [ranking[cnt + unknown] || 6, ranking[cnt] || 6];    
    
}