function solution(str, v) {

    // for문으로 비교해서 해도 됨
    // return str.split("").filter(e => e !== v).join("");
    
    return str.replace(new RegExp(`${v}`, "g"), "");
    
}