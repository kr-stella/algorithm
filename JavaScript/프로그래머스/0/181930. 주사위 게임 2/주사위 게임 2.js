function solution(a, b, c) {

    if(a === b && b === c) return (a * 3) * (Math.pow(b, 2) * 3) * (Math.pow(c, 3) * 3);
    if(a !== b && b !== c && c !== a) return a + b + c;
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    
}