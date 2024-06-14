function solution(arr) {
    
    const sort = [...arr].sort((a, b) => b - a);
    return arr.map(e => sort.findIndex(s => s === e) + 1);
    
}