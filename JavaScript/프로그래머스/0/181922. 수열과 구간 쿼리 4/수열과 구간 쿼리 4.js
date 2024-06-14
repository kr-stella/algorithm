const solution = (arr, queries) => {
    
    // s부터 e까지 반복돌리는데 i가 k의 배수라면 arr[i]에 1을 add
    queries.forEach(([s, e, k]) => {
        for(let i=s; i<=e; i++)
            if(!(i % k))
                arr[i]++;
    });
    
    return arr;
    
}