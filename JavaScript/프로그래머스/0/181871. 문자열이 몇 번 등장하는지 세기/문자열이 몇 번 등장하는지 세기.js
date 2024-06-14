const solution = (str, pat) => {
    
    let res = 0;
    let match = ``;
    const regex = new RegExp(pat, `g`);
    while((match = regex.exec(str)) !== null) {
        res++;
        /** 다음 매치를 위해 시작 위치를 현재 매치의 다음 인덱스로 조정 */
        regex.lastIndex = match.index + 1;
    };
    
    return res;
    
};

// for(let i=0; i<=str.length-pat.length; i++) {
//     if(str.substr(i, pat.length) === pat)
//         res++;
// }