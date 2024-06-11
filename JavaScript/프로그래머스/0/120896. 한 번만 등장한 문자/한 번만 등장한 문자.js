function solution(str) {
    
    const res = [];
    for(let c of str) {
        if(str.indexOf(c) === str.lastIndexOf(c))
            res.push(c);
    }
    
    return res.sort((a, b) => a > b? 1:-1).join(``);
    
}