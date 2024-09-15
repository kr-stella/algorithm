const solution = (v, arr) => new Array(v).fill(0).reduce((a, c, i) => {
        
    const stage = i + 1;
    // console.log(`${stage} 단계 도전자 ===> ${arr.filter(a => a >= stage).length}`);
    // console.log(`${stage} 단계 실패 ===> ${arr.filter(a => a === stage).length}`);
    const challenger = arr.length;
    const fail = arr.filter(v => v === stage).length;
    arr = arr.filter(v => v !== stage);

    const rate = fail / challenger;
    return a = [...a, { stage, rate }];

}, []).sort((a, b) => {
    if(a.rate === b.rate) return 1;
    else return b.rate - a.rate;
}).map(a => a.stage);