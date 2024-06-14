// const solution = (arr) => Math.max(...Object.values(arr.map(a => a.length).reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})));

const solution = (arr) => {
    
    const cnt = {};
    let res = 0;
    for(const str of arr) {
        const length = str.length;
        cnt[length] = (cnt[length] || 0) + 1;
        if(cnt[length] > res)
            res = cnt[length];
    }
    
    return res;
    
};