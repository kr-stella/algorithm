const solution = (arr, queries) => queries.map(([s, e, n]) => {
    
    let temp = Infinity;
    for(let i=s; i<=e; i++)
        if(arr[i] > n && temp > arr[i])
            temp = arr[i];
    
    return temp === Infinity? -1:temp;
    
}, []);