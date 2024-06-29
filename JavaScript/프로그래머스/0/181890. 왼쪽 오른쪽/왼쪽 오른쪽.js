const solution = list => {
    
    const index = list.findIndex(a => a === `l` || a === `r`);
    if(index === -1)
        return [];

    return list[index] === `l`? list.slice(0, index):list.slice(index + 1, list.length)
    
};