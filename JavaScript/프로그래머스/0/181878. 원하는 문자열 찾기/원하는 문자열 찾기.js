function solution(str, pat) {
    
    // const r = `/${pat}/gi`; // 동작x 아마 문자열이라
    return (str.match(new RegExp(pat, `gi`))?.length || 0)? 1:0;
    
}