function solution(data) {
    
    let cnt = 0;
    const recursive = (array, number) => {
        
        /** 추가된 배열이 3개라면 계산해서 확인함 */
        if(array.length === 3) {
            if(array.reduce((a, c) => a + c, 0) === 0)
                cnt++;
            
            return;
        }

        for(let i=number; i<data.length; i++)
            recursive([...array, data[i]], i + 1);
        
    }
    
    recursive([], 0);
    return cnt;
    
}
