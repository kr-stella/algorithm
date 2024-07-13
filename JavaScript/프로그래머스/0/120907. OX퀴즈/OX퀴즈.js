function solution(arr) {
    return arr.map((v) => {
        
        const [ data, calc ] = v.split("=");
        return +act(data) === +calc ? "O" : "X";
        
    });
}

const act = v => {
    return new Function('"use strict"; return (' + v + ')')();
}