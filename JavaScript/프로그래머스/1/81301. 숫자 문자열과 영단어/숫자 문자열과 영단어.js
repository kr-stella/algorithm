const number = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
const solution = s => {
    
    number.forEach((a, i) => s = s.replaceAll(a, i));
    return +s;
    
};