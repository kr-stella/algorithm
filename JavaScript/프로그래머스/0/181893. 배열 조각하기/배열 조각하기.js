const solution = (arr, query) => {
    
    query.forEach((a, i) => {
        if(i % 2) arr = arr.slice(a);
        else arr = arr.slice(0, a + 1);
    });
    
    return arr;
    
}