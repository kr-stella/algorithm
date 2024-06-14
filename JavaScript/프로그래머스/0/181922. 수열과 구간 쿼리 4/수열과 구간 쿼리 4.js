const solution = (arr, queries) => {

    // s부터 e까지 반복돌리는데 i가 k의 배수라면 arr[i]에 1을 add
    queries.forEach(([s, e, k]) => {
        if(!k) {
            for(let i = s; i <= e; i++)
                arr[i]++;
        } else {
            
            // k가 1 이상인 경우, s로부터 가장 가까운 k의 배수 찾기
            while(s <= e && s % k !== 0)
                s++;
            
            for(let i = s; i <= e; i += k)
                arr[i]++;
            
        }
    });
    
    return arr;
    
}



// const solution = (arr, queries) => {
    
//     // s부터 e까지 반복돌리는데 i가 k의 배수라면 arr[i]에 1을 add
//     queries.forEach(([s, e, k]) => {
//         for(let i=s; i<=e; i++)
//             if(!(i % k))
//                 arr[i]++;
//     });
    
//     return arr;
    
// }