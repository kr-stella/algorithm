const solution = (n, slicer, arr) => {
    
    const [ a, b, c ] = slicer;
    switch(n) {
            
        case 1: return arr.slice(0, b + 1);
        case 2: return arr.slice(a, arr.length);
        case 3: return arr.slice(a, b + 1);
        case 4: {
            
            const result = [];
            for(let i=a; i<=b; i+=c)
                result.push(arr[i]);
            
            return result;
            
        };
        
    }
    
}

// function solution(n, slicer, arr) {
    
//     const [ a, b, c ] = slicer;
//     if(n === 1) return arr.slice(0, b + 1);
//     if(n === 2) return arr.slice(a, arr.length);
//     if(n === 3) return arr.slice(a, b + 1);
//     if(n === 4) return arr.slice(a, b + 1).filter((_, i) => !(i % 2));
    
// }