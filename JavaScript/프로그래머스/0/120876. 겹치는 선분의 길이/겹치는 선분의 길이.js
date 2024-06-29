const solution = arr => Object.values(arr.reduce((a, [s, e]) => {
    for(let i=s; i<e; i++)
        a[i] = (a[i] || 0) + 1;
    return a;
}, {})).filter(a => a > 1).length;