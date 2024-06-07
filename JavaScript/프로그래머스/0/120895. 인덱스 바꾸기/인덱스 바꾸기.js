function solution(str, v1, v2) {
    
    const array = [...str];
    [array[v1], array[v2]] = [array[v2], array[v1]];
    
    return array.join(``);
    
}