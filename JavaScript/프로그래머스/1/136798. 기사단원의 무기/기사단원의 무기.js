
const solution = (usr, limit, power) => {
    
    const calc = v => {

        let cnt = 0;
        for(let i = 1; i * i <= v; i++) {
            /** 나머지가 0인게 약수 */
            if((v % i) === 0) {
                /** i와 나눈 몫이 같은 경우 ( 4 >>> 1 "2" 4 ) */
                if(v / i === i) cnt += 1;
                else cnt += 2;
            }
        }

        return (cnt > limit)? power:cnt;

    }
    
    /** limit가 넘어가는 경우 2로, 아닌 경우 약수의 개수 */
    // const result = [1, 2]; > 이렇게 처리하고, 반복문을 3부터 돌리지 않는 이유느 number가 1부터 시작할 수 있으므로
    const result = [];
    for(let i = 1; i <= usr; i++) {
        if(i === 1) result.push(1);
        else if(i === 2) result.push(2);
        else result.push(calc(i, limit));
    }
    
    
    return result.reduce((a, c) => a += c, 0);
    
}