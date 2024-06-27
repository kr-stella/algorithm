const solution = arr => {
    
    let i = 0;
    const res = [];
    while(i !== arr.length) {
        if(!res.length || res[res.length - 1] < arr[i]) {
            res.push(arr[i]);
            i++;
        } else res.pop()
    };
    
    return res;
    
}