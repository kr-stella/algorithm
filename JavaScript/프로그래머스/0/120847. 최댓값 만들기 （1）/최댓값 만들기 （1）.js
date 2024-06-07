function solution(arr) {
    
    arr.sort((a, b) => b - a);
    return arr[0] * arr[1];
    
}