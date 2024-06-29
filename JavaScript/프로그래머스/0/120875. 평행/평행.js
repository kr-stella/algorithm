const solution = dots => {
    
    if(isParallel(dots[0], dots[1], dots[2], dots[3])) return 1;
    if(isParallel(dots[0], dots[2], dots[1], dots[3])) return 1;
    if(isParallel(dots[0], dots[3], dots[1], dots[2])) return 1;
    return 0;
    
}
const isParallel = (dot1, dot2, dot3, dot4) => {
    
    const dx1 = dot1[0] - dot2[0];
    const dy1 = dot1[1] - dot2[1];
    const dx2 = dot3[0] - dot4[0];
    const dy2 = dot3[1] - dot4[1];
    
    return dy1 * dx2 === dy2 * dx1;
    
};