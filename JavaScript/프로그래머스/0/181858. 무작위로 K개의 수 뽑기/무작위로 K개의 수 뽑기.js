const solution = (arr, k) => {
    
    const res = [];
    const sets = new Set();
    for(let n of arr) {
        if(!sets.has(n)) {
            
            res.push(n);
            sets.add(n);
            if(res.length === k)
                return res;
            
        }
    }
    
    while(res.length < k)
        res.push(-1);
    
    return res;
//     const res = Array.from({ length: k }).fill(-1);
//     [...new Set(arr)].forEach((a, i) => {
//         if(k > i)
//             res[i] = a;
//     });
    
//     return res;
    
}