const solution = (arr) => {
    
    const flag = 2;
    let start = -1, end = -1;
    arr.forEach((a, i) => {
        if(a === flag) {
            if(start === -1) start = i;
            end = i;
        };   
    });
    
    if(start === -1) return [-1];
    return arr.slice(start, end + 1);
    
};


// const solution = (arr) => {
    
//     const flag = 2;
//     if(!arr.includes(flag))
//         return [-1];
    
//     const [ start, end ] = [arr.indexOf(flag), arr.lastIndexOf(flag)];
//     const res = arr.splice(start, end - start + 1);
    
//     return res;
    
// }