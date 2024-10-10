// 14:10 ~ 16:20
function solution(size, roll, arr) {
    
    let res = 0;
    
    // 벽 크기 설정 ( def: true )
    const data = new Array(size).fill(true);
    
    // 페인트 벗겨진 곳 false로
    arr.forEach(v => data[v - 1] = false);
    // console.log(data);
    
    // 페인트 벗겨진 곳 찾아서 ( false )
    // 카운트 + 칠하기
    arr.forEach((v) => {
        if(!data[v - 1]) {
            res++;
            data.fill(true, v - 1, v - 1 + roll);
        }
    });
    
    return res;
    
//     let cnt = 0;
//     while(arr.length) {
        
//         let cur = arr.shift();
//         console.log(cur);
//         console.log(arr);
//         while(arr[0] < cur+roll)
//             arr.shift();
        
//         cnt++;
        
//     }
    
//     return cnt;
    
//     let result = 0;
//     let painted = 0;
//     for (const wall of arr) {
//         if (wall > painted) {
//             painted = wall + roll - 1;
//             result++;
//         }
//     }
    
//     return result;
    
}