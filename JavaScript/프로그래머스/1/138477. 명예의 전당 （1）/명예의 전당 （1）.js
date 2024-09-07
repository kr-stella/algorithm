const solution = (k, score) => {
    
    const data = [];
    return score.map(a => {
        
        /** 정렬된 위치로 삽입 */
        const index = data.findIndex(x => x > a);
        if(index === -1) data.push(a);
        /** splice로 정렬된 위치로 삽입하는 것. 두번째 요소 0 = 아무것도 자르지 않음 */
        else data.splice(index, 0, a);

        /** 배열의 크기를 초과하는 경우, 가장 작은 원소를 제거 */
        if(data.length > k)
            data.shift();
        
        return data[0];
        
    });
    
};