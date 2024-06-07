function solution(arr) {
    
    const asc = [...arr].sort((a, b) => {
        return a - b;
    }).slice(0, 2).reduce((c, v) => c *= v);
    const desc = [...arr].sort((a, b) => {
        return b - a;
    }).slice(0, 2).reduce((c, v) => c *= v);
    
    // asc slice떼고 0번째 1번째 / legnth-1번째 length-2번째 비교해도 됨.
    // return asc > desc ? asc : desc;
    return Math.max(asc, desc);
    
}