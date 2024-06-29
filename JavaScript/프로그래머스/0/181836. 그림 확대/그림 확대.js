const solution = (picture, k) => {
    
    const res = [];
    picture.forEach(a => {
        for(let i=0; i<k; i++)
            res.push([...a].map(b => b.repeat(k)).join(``));
    })
    
    return res;
    
}