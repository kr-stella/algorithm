function solution(str) {
    
    const arr = str.split(` `);
    const [ left, center, right ] = arr;
    switch(center){
        case "+":
            return +left + +right;
        case "-":
            return +left - +right;
        case "*":
            return +left * +right;
    };
    
}