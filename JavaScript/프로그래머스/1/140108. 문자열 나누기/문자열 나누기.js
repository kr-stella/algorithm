const solution = s => {
    
    /** 단순 문자열로 처리하는 경우 */
    let [ res, cnt, str ] = [ 0, 0, `` ];
    for(let v of s) {
        /** cnt가 0이라면 첫 글자 OR 분리한 후 첫 글자를 설정하고 결과를 세야 함. */
        if(cnt === 0) {
            str = v;
            res++;
            cnt++;
        /** 아니라면 문자열 비교 */
        } else {
            /** 문자열이 일치하면 cnt를 올리고 아닌경우 cnt를 내림 = cnt가 0인경우 일치 */
            if(str === v) cnt++;
            else cnt--;
        }
    }
    
    return res;
    
    /** Object 형태로 처리하는 경우 */
//     let res = 0;
//     let str = ``;
//     let data = {};
//     [...s].forEach((a, i) => {
        
//         /** undefined인 것을 확인한 후 Object에 설정함 */
//         if(data[str] === undefined)
//             str = a;
        
//         /** 문자열이 같으면 +1, 다르면 -1 */
//         if(str === a) data[str] = (data[str] || 0) + 1;
//         else data[str] = data[str] -= 1;
        
//         /** 0의 경우 같은 문자, 다른 문자 출현이 같아졌다는 의미 = res + 1 */
//         if(data[str] === 0) { data = {}; res++; }
//         /** 마지막에 남아있는 경우 */
//         if(i === s.length - 1 && data[str]) res++;
        
//     });
    
//     return res;
    
    /** 배열 형태로 처리하는 경우 */
//     let res = 0;
//     let key = ``;
//     const arr = [ 0, 0 ];
//     [...s].forEach(a => {
        
//         if(arr[0] === arr[1]) key = a;
        
//         if(key === a) arr[0]++;
//         else arr[1]++;
        
//         if(arr[0] === arr[1]) { res++; key = ``; }
        
//     });
    
//     return arr[0] === arr[1]? res : res + 1;
    
}