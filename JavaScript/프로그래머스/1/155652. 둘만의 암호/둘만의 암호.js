const solution = (s, skip, index) => {
    
//     skip = [...skip].map(v => v.charCodeAt());
//     return [...s].map(v => v.charCodeAt()).map(v => {
        
//         let len = 0;
//         // true 일 때
//         while(len !== index) {
            
//             v += 1;
//             if(v > 122) v = 97;
//             if(!skip.includes(v)) len++;
            
//         }
        
//         return String.fromCharCode(v);
        
//     }).join(``);
    
    
    const data = `abcdefghijklmnopqrstuvwxyz`.match(new RegExp(`[^${skip}]`, `g`), ``);
    return [...s].map(v => data[(data.indexOf(v) + index) % data.length]).join(``);
    
}