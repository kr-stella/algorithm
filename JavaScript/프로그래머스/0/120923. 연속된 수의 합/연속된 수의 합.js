function solution(v, calc) {
    
    const arr = [...Array(v).keys()];
    const sum = [...arr].reduce((a, c) => a + c, 0);
    return arr.map(a => (a - (sum - calc)  / v));
    
}