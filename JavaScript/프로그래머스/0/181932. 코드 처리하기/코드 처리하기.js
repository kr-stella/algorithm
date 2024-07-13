// 17:14 ~ 17:27
function solution(code) {
    
    let res = [];
    let mode = false;
    // return과 continue의 차이
    // (1) foreach에서는 return;
    // (2) for문에서는 continue;
    // 현재 반복을 건너뛰고 다음 순회로 넘어감.
    [...code].forEach((a, i) => {
        
        if(a === `1`){
            mode = !mode;
            return;
        }
        
        if((!mode && !(i % 2)) || (mode && i % 2))
            res.push(a);
        
    });
    
    return res.length? res.join(``):`EMPTY`;
    
//     // 문자열 "1" 만나면 mode 변경 ( 1, 0 ) >>> 시작 mode = 0 + 빈 문자열 = "EMPTY"
//     // mode가 "1"일 때 홀수 문자열만 추가
//     // mode가 "0"일 때 짝수 문자열만 추가
//     let res = ``;    // 문자열은 immutable. 따라서 덧붙일때마다 문자열을 생성하므로 큰 입력에 대해서는 성능저하가 발생할 수 있음.
//     let mode = 0;
//     [...code].forEach((a, i) => {
        
//         if(a === `1`){
//             mode = !mode;
//             return;
//         }
        
//         if((!mode && !(i % 2)) || (mode && i % 2))
//             res.push(a);
        
//         // // mode가 false인 경우 짝수 문자열만 추가
//         // if(!mode && !(i % 2))
//         //     res += a;
//         // // 홀수 문자열만 추가
//         // else if(mode && i % 2)
//         //     res += a;
        
//     });
    
//     return res.length? res.join(``):`EMPTY`;
    
}