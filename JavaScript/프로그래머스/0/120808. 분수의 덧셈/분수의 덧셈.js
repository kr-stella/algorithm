const solution = (dn1, n1, dn2, n2) => {
    
    let answer = [];
    let dn3 = (dn1 * n2) + (dn2 * n1); // 분자
    let n3 = n1 * n2; // 분모
    let v = 1; // 최대공약수
    
    // 약분 = 분모 / 최대공약수 + 분자 / 최대공약수
    // 최대공약수 = 분모, 분자를 나눠서 나머지가 0이되는 가장 큰 수
    for(let i=1; i<=dn3; i++) {
        if(!(n3 % i) && !(dn3 % i))
            v = i;
    }
    
    answer = [(dn3/v), (n3/v)];
    return answer;
    
}