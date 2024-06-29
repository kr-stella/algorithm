const solution = n => {
    
    let cnt = 1;
    let curse = 1;
    while(cnt < n) {
        
        curse++;
        /** 3의 배수가 아니거나, 3이 포함되지 않는경우 */
        if(curse % 3 && !curse.toString().includes(`3`))
            cnt++;
        
    };
    
    return curse;
    
};