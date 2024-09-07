const solution = (a, b, n) => {
    
    /**
    # 3개 기준
    20개 - 18개( 6 * 3 ) = 2개 ( 6개 새로운걸 받음 )
    남은 2개 + 6개 - 6개( 2 * 3 ) = 2개 ( 2개 새로운걸 받음 )
    남은 2개 + 2개 - 3개 ( 1 * 3 ) = 1개 ( 1개 새로운걸 받음 )
    남은 1개 + 1개 = 3개 안되니까 끝
    
    # 보너스로 받은게 6 + 2 + 1 = 9
    */
    
    // n이 a보다 크거나 같은 경우에
    let cnt = 0;
    while(n >= a) {

        const calc = Math.floor(n / a) * b;
        
        cnt += calc;
        n = (n % a) + calc;

    }
    
    return cnt;
    
}