const solution = (balls, share) => factorial(balls) / (factorial(balls - share) * factorial(share));
const factorial = a => {
    
    /** 일반 int로는 감당 불가능한 수의 길이 */
    let v = BigInt(1);
    for(let i=1; i<=a; i++)
        v *= BigInt(i);
    
    return v;
    
};