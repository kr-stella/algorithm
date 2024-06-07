function solution(n) {
    
    const even = n % 2;
    const arr = new Array(Math.ceil(n / 2)).fill(even? 1:2).map((v, i) => v + i * 2);
    
    return arr.reduce((a, c) => even? a + c: a + c ** 2, 0);
    
}