// const zerofill = (v, n) => `${`0`.repeat(n - v.length)}${v}`;
// const solution = (n, arr1, arr2) => {
    
//     const data1 = [...arr1].map(a => a.toString(2)).map(v => v.length === n?v:zerofill(v, n));
//     const data2 = [...arr2].map(a => a.toString(2)).map(v => v.length === n?v:zerofill(v, n));
    
//     return data1.map((v, i) => [...v].map((a, j) => (+a || +[...data2[i]][j])? `#`:` `).join(``));
    
// }




const zerofill = (n, v) => `0`.repeat(n - v.length) + v;
const solution = (n, arr1, arr2) => 
    arr1.map((v, i) => zerofill(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? `#`:` `));
