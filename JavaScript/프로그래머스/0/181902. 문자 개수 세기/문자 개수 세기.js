function solution(str) {
    
    const capital = 65;
    const result = Array.from({ length: 52 }).fill(0);
    [...str].forEach(a => {
        const code = a.charCodeAt();
        if(code <= 90) result[a.charCodeAt() - capital]++;
        else result[a.charCodeAt() - capital - 6]++;
    });
    
    return result;
    
};