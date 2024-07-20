const solution = arr => {
    
    const maxArray = [];
    const minArray = [];
    arr.forEach(([x, y]) => {
        if(x > y) {
            maxArray.push(x);
            minArray.push(y);
        }
        
        else {
            maxArray.push(y);
            minArray.push(x);
        }
    });
    
    return Math.max(...maxArray) * Math.max(...minArray);
    
};