function solution(dot) {
    
    const [ x, y ] = dot;
    if(x > 0) return y > 0? 1:4;
    else return y > 0? 2:3;
    
}