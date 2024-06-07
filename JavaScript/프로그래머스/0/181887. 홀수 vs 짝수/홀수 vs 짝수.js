function solution(arr) {
    return Math.max(
        arr.reduce((a, c, i) => !(i % 2)? a += c:a, 0),
        arr.reduce((a, c, i) => (i % 2)? a += c:a, 0)
    );
}