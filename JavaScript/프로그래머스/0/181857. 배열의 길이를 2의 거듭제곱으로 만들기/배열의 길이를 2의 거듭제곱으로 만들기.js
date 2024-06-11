function solution(arr) {
    
    let target = 1;
    while(target < arr.length)
        target *= 2;

    while(arr.length < target)
        arr.push(0);
    
    return arr;
    
}