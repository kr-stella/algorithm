function solution(left, right) {
    const arr = new Array(right - left + 1).fill(0);
    return arr.reduce((a, c, i) => sqrt(left + i)? a += (left+i):a -= (left+i), 0);
}

const sqrt = (v) => {
    
    const arr = new Array();
    for(let i=1; i * i<=v; i++) {
        if(v % i === 0) arr.push(i, v / i);
    }
    
    return [...new Set(arr)].length % 2 === 0;
    
}