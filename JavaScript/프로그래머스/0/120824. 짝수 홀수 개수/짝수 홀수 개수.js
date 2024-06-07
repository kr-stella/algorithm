let i = 0, j = 0;
const solution = (arr) => {
    
    arr.forEach((a) => {
        (a % 2)? j++ : i++;
    });
    
    return [i, j];
    
}