function solution(n, k) {
    // 서비스 수량을 제외한 계산해야 하는 음료수
    let v = k - Math.floor(n / 10);
    return (n * 12000) + (2000 * v);
}