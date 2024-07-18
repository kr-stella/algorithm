const solution = s => {
    
    const data = {};
    return [...s].map((a, i) => {
        /** 값이 없으면 현재 내 위치를 남겨주고 return -1 */
        if(!data[a]?.toString()) {
            
            data[a] = i;
            return -1;
            
        }
        /** 값이 있으면 현재 내 위치와 이전에 나왔던 위치를 뺀 후 현재 내 위치를 갱신하고 뺀 값을 return */
        else {
            
            const calc = i - data[a];
            data[a] = i;
            return calc;
            
        }
    });
    
};