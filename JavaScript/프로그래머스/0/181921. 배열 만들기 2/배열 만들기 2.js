const solution = (l, r) => {
    
    let res = [];
    for(let i=l; i<=r; i++) {
        if(i.toString().replaceAll(`5`, ``).replaceAll(`0`, ``) === ``)
            res.push(i);
    }
    
    return !res.length? [-1]:res;
    
}