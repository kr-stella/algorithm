function solution(v){
    
    v = v.toLowerCase();
    return [...v].filter(e => e === "p").length === [...v].filter(e => e === "y").length;
    
}