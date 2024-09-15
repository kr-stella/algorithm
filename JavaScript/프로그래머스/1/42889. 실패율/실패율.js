const solution = (v, arr) => {
    
    // 각 스테이지에 있는 사용자 수
	const usersAtStage = Array(v + 1).fill(0);
    // 각 스테이지에 도달한 총 사용자 수
	const usersReached = Array(v + 1).fill(0);

	// 각 사용자가 멈춰 있는 스테이지를 카운트
	arr.forEach(stage => {
		if(stage <= v)
			usersAtStage[stage]++;
	});
    
	// 누적 사용자 수 계산
	let total = arr.length;
	for(let i = 1; i <= v; i++) {
		usersReached[i] = total;
		total -= usersAtStage[i];
	}
    
    // console.log(usersAtStage)
    // console.log(usersReached)

	// 각 스테이지의 실패율 계산
	let rates = [];
	for(let i = 1; i <= v; i++) {
		let rate = usersReached[i] > 0? usersAtStage[i] / usersReached[i] : 0;
		rates.push({ stage: i, rate });
	}

	// 실패율에 따라 내림차순으로 정렬 ( 실패율이 같다면 스테이지 번호가 작은 것이 먼저 )
	rates.sort((a, b) => {
		if (a.rate === b.rate) return a.stage - b.stage;
		return b.rate - a.rate;
	});

	// 정렬된 스테이지 번호만 추출
	return rates.map(stage => stage.stage);
    
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