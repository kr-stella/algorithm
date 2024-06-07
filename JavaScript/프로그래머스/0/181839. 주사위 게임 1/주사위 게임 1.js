function solution(a, b) {
    
    if(isOdd(a) && isOdd(b)) return a ** 2 + b ** 2;
    else if(!isOdd(a) && !isOdd(b)) return Math.abs(a - b);
    else return (a + b) * 2;
    
}

const isOdd = (v) => v % 2;