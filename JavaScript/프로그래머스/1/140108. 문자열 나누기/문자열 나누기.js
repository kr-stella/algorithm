const solution = s => {
    
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
    
}