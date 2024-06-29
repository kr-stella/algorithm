const solution = v => {
    
    /** 서비스치킨의 수량임 = 쿠폰 */
    let cnt = 0;
    while(v >= 10) {
        
        /** 서비스 치킨 = 10장에 1마리 */
        const chicken = Math.floor(v / 10);
        cnt += chicken;
        
        /** 서비스 치킨 처리하고 남은 쿠폰을 더해 줌 */
        v = chicken + (v % 10);
        
    }
    
    
    return cnt;
    
}