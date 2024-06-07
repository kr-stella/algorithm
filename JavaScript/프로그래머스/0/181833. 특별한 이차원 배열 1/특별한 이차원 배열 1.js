const solution = n => {
    
    let answer = [];
    for(let i=0; i<n; i++) {
        
        const arr = new Array(n).fill(0);
        arr[i] = 1;
        
        answer.push(arr)
        
    }
    
    return answer;
    
    // // 각 행에 대해 n개의 요소를 가진 배열 생성. j가 i와 같다면 1, 아니면 0
    // return Array.from({ length: n }, (x, i) => 
    //     Array.from({ length: n }, (y, j) => (i === j ? 1 : 0))
    // );
    
}