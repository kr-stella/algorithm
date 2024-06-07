function solution(str) {
    
    let res = "";
    let reverse = [...str].reverse().join("");
    for(let i=str.length-1; i>=0; i--)
        res += str[i];
    
    return res;
    
}