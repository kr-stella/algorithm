const solution = (spell, dic) => {
    
    spell = spell.sort((a, b) => a > b? 1:-1).join(``);
    for(const str of dic) {
        if(spell === [...str].sort((a, b) => a > b? 1:-1).join(``))
            return 1;
    }
    
    return 2;
    
};


// function solution(spell, dic) {
    
//     // [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0))
//     // console.log([...spell].sort((a, b) => {
//     //     return a < b;
//     // }).join(""));
//     // @@@.sort((a, b) =>
    
//     // 문자열 오름차순
//     // console.log(spell.map(e => e.toUpperCase()).sort((a, b) => (a > b)? 1:(a < b)? -1:0));
//     // console.log(sort(spell));
//     const arr = dic.find((v) => {
//         // if(undefined)
//         //     console.log("undefined니?");
//         // else
//         //     console.log("으하하하하");
//         return calc(spell) === calc(v);
//     });
//     console.log(arr?1:2);
//     //console.log(dic.find(v => v ==="s"));
//     //console.log(spell.join(''));
//     // console.log(dic.map((v) => {
//     //     return sort(v) === sort(spell.join(""));
//     // }));
//     // console.log(dic.find((v) => {
//     //     return sort(v) === sort(spell.join(""));
//     // }));
    
//     // console.log(dic.find(dic => sort(dic) === sort(spell.join(""))) ? 1 : 2);
//     // dic.map(v => 
//     //         console.log(v)
//     //     // v.split("").filter(a => {
//     //     //     arr.push(spell.filter(v => a === v).length);
//     //     // })
//     // )
    
//     // console.log(arr);
//     return arr? 1:2;
// }

// const calc = (arr) => {
//     return [...arr].map(e => e.toUpperCase()).sort((a, b) => (a > b)? 1:(a < b)? -1:0).join("");
// }