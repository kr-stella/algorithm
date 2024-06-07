function solution(arr) {
    
    const max = Math.max(...arr);
    const calc = [...arr].reduce((a, v) => a + v, 0) - max;
    
    return max >= calc ? 2 : 1;
}