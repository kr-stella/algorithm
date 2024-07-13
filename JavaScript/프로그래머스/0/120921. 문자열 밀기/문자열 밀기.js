const solution = (v1, v2) => {
    
    if(v1 === v2)
        return 0;
    
    let i = 0;
    while(i <= v1.length) {
        
        i++;
        v1 = `${v1.substr(-1)}${v1.substr(0, v1.length - 1)}`;
        if(v1 === v2) {
            return i;
            break;
        }
        
    }
    
    return i <= v1.length ? i : -1;
    
}