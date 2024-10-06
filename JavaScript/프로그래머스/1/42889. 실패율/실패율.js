const solution = (v, arr) => {
    
    let users = arr.length;
    
    /** 스테이지 도착 */
    const arrived = new Array(v + 1).fill(0);
    arr.forEach(a => {
        arrived[a] = (arrived[a] || 0) + 1;
    });
    
    /** 각 스테이지 별 실패율 */
    const rates = [];
    for(let stage = 1; stage <= v; stage++) {
        
        const rate = arrived[stage] / users;
        rates.push({ stage, rate });
        
        /** 총 유저를 줄여줌 */
        users -= arrived[stage];

    }
    
    /** 실패율이 같은경우 스테이지별로 오름차순, 아닌 경우 실패율 내림차순( 높은 순서 ) 정렬 */
    rates.sort((a, b) => {
        if(a.rate == b.rate) return a.stage - b.stage;
        else return b.rate - a.rate;
    });
    
    return rates.map(a => a.stage);
    
}








// // 비효율
// const solution = (v, arr) => new Array(v).fill(0).reduce((a, c, i) => {
        
//     const stage = i + 1;
//     // console.log(`${stage} 단계 도전자 ===> ${arr.filter(a => a >= stage).length}`);
//     // console.log(`${stage} 단계 실패 ===> ${arr.filter(a => a === stage).length}`);
//     const challenger = arr.length;
//     const fail = arr.filter(v => v === stage).length;
//     arr = arr.filter(v => v !== stage);

//     const rate = fail / challenger;
//     return a = [...a, { stage, rate }];

// }, []).sort((a, b) => {
//     if(a.rate === b.rate) return 1;
//     else return b.rate - a.rate;
// }).map(a => a.stage);