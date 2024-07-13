const solution = (array) => {
    
    // 중복 제거한 배열
    const arr = [...new Set(array)];
    const calc = arr.map((v, i) => {
        return array.filter(e => e === v).length;
    });
    
    const res = calc.map((v, i) => {
        if(v === Math.max(...calc))
            return i;
        
        return -1;
        
    }).filter(v => v != -1);
    
    // 3, 2, 4 중 1번 = 2
    return res.length > 1 ? -1 : arr[res[0]];
    
}