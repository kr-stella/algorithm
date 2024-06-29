const solution = arr => {
    
    const min = Math.min(...arr);
    arr = arr.filter(a => a !== min);
    
    return arr.length? arr:[-1];
    
//     const min = Math.min(...arr);
//     arr.splice(arr.indexOf(min), 1);

//     return arr.length? arr:[-1];
    
}