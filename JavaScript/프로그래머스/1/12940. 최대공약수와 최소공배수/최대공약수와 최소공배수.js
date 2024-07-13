const solution = (a, b) => {
    const gcd = getGCD(Math.max(a, b), Math.min(a, b));
    return [gcd, a * b / gcd];
}

const getGCD = (a, b) => {
    // 유클리드 호제법
    // 12 3
    // >>> 3, 0

    // 5, 2
    // >>> 2, 1
    // 2, 1
    // >>> 1, 0
    if(b === 0)
        return a;
    
    return getGCD(b, a % b);
    
}