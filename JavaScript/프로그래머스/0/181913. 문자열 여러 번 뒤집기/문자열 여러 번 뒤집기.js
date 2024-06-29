const solution = (str, queries) => {
    
    let arr = [ ...str ];
    queries.forEach(([s, e]) => {
        arr = [...arr.slice(0, s), ...arr.slice(s, e + 1).reverse(), ...arr.slice(e + 1)];
    });
    
    return arr.join(``);
    
}

// const solution = (str, queries) => {
    
//     queries.forEach(([s, e]) => {
        
//         let temp = ``;
//         const prefix = str.substr(0, s);
//         const suffix = str.substr(e + 1, str.length);
//         for(let i=e; i>=s; i--) {
//             temp += str[i];
//         }
//         str = prefix + temp + suffix;
//         temp = ``;
        
//     });
    
//     return str;
    
// }