const solution = (s, skip, index) => {
    
    const data = `abcdefghijklmnopqrstuvwxyz`.match(new RegExp(`[^${skip}]`, `g`), ``);
    return [...s].map(v => data[(data.indexOf(v) + index) % data.length]).join(``);
    
}