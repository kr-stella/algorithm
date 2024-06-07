function solution(arr) {
    
    const data = ["0", "0"];
    arr.map(a => { a % 2? data[0] += a:data[1] += a })
   
    return +data[0] + +data[1];
    
}