function solution(age) {
    
    let res = "";
    const target = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for(let v of age.toString())
        res += target[v];
    
    return res;
    
}