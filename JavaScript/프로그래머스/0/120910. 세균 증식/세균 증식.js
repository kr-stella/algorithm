function solution(n, t) {
    const arr = new Array(t).fill(2);
    return n * arr.reduce((a, c) => a * c);
}