const solution = arr => {
    
    // 이거 최대 한 번씩
    const can = [`aya`, `ye`, `woo`, `ma`];
    return arr.reduce((a, b) => {
        const data = [...can].reduce((c, d) => c.replaceAll(d, ` `), b).replaceAll(/\s/g, ``);
        if(!data) return a += 1; else return a;
    }, 0);
    
}





//     let test = new Array();
//     arr.map(v => {
//         // v.replace()
//         // can 돌리면서 없애봐
//         // wyeoo >> ye먼어 없애고 그다음 woo라서 없다고 나옴
//         // console.log([...can].reduce((a, b, i) => a.replaceAll(b, ""), v));
        
//         const data = [...can].reduce((a, b) => a.replaceAll(b, " "), v).replaceAll(/\s/g, "");
//         // if(!data) console.log("if data"); else console.log("else data");
//         if(!data)
//             test = [...test, ""]
    
    // let answer = 0;
    // const regex = /^(aya|ye|woo|ma)+$/;
    // arr.forEach(word => {
    //     if(regex.test(word))
    //         answer++;
    // });
    // return answer;
        
//     });
    // console.log(test.length);
    