const solution = (a, b, c, d) => {
    
    const data = {};
    [a, b, c, d].forEach(a => {
        data[a] = (data[a] || 0) + 1
    });
    
    const keys = Object.keys(data).map(Number);
    const values = Object.values(data);
    const pattern = [...values].sort((a, b) => b - a).join(`-`);
    // console.log(pattern);
    
    // 패턴에 따른 점수 계산 매핑
	const scoreMap = {
        /** 모든 주사위가 같은 경우 */
		"4": () => 1111 * keys[0],
        /** 세 개가 같고 하나가 다른 경우 */
		"3-1": () => (10 * keys[values.indexOf(3)] + keys[values.indexOf(1)]) ** 2,
        /** 두 개씩 두 그룹 */
		"2-2": () => {
			const [ p, q ] = keys;
			return (p + q) * Math.abs(p - q);
		},
        /** 하나의 숫자가 두 번, 나머지 두 개가 각각 다른 경우 */
		"2-1-1": () => keys.filter(a => data[a] === 1).reduce((a, c) => a *= c, 1),
        /** 모든 주사위가 다른 경우 */
		"1-1-1-1": () => Math.min(...keys)
	};

	/** 패턴에 따라 해당하는 함수를 호출하여 점수를 계산 */
	return scoreMap[pattern]();
    
}




// function solution(a, b, c, d) {
    
//     const data = {};
//     [a, b, c, d].forEach(v => data[v] = (data[v] || 0) + 1);
    
//     const keys = Object.keys(data).map(Number);
//     const values = Object.values(data);
//     switch(keys.length) {
//         case 1: return 1111 * keys[0];
//         case 2:
//             /** 한 숫자가 세 번, 다른 하나가 한 번 나타나는 경우 */
//             if(values.includes(3))
//                 return (10 * keys[values.indexOf(3)] + keys[values.indexOf(1)]) ** 2;
//             /** 두 숫자가 각각 두 번씩 나타나는 경우 */
//             else {
//                 const [ p, q ] = keys;
//                 return (p + q) * Math.abs(p - q);
//             }
//         case 3: return keys.filter(a => data[a] === 1).reduce((a, c) => a *= c, 1);
//         case 4: return Math.min(...keys);
//     }
    
// }



// function solution(a, b, c, d) {
    
//     const arr = [a, b, c, d];
//     const data = {};
//     arr.forEach(v => data[v] = (data[v] || 0) + 1);
    
//     const len = Object.keys(data).length;
//     /** key가 하나뿐이라면 모든 값이 같다는 의미 */
//     if(len === 1) return 1111 * a;
//     /** key가 2개라면 나온 key 조합이 2개라는 의미 = 4, 1, 4, 4 혹은 6, 3, 3, 6 */
//     if(len === 2) {
//         /** 6, 3, 3, 6 처럼 2회씩 동일하기 나타나는 경우 */
//         if(Object.keys(data).every(a => data[a] === 2)) {
//             const [ a, b ] = Object.keys(data).map(Number);
//             return (a + b) * Math.abs(a - b);
//         }
//         /** 4, 1, 4, 4 처럼 key 조합은 2개이나, key가 등장하는 횟수가 다른 경우 */
//         else {
            
//             const [ min, max ] = Object.entries(data).sort((a, b) => a[1] - b[1]).map(a => +a[0]);
//             return Math.pow(10 * max + min, 2);
            
//             /** 2, 3, 6, 12, 31 반례걸림 */
//             /** 문제 잘못읽음 - 아래 로직은 단순 주사위 수의 min, max로 처리함. */
//             /** 요구사항은 튀어나온 주사위 '횟수'의 min, max로 처리해야 하는 것임. 1, 1, 1, 2인 경우 처리x */
//             // const [ min, max ] = Object.keys(data).map(Number).sort((a, b) => a - b);
//             // return Math.pow(10 * max + min, 2);
//         }
//     }
//     /** key가 3개라면 하나의 값이 같고 나머지 두 개가 다르다는 의미 = 2, 5, 2, 6 같은 형태 */
//     /** 나타난 횟수가 1인 key들만 추려서 곱해줌 */
//     if(len === 3) return Object.keys(data).filter(a => data[a] === 1).map(Number).reduce((a, c) => a *= c, 1);
//     /** key가 4개라면 모든 값이 다르다는 의미 */
//     if(len === 4) return Math.min(...arr);
    
// }