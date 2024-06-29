function solution(arr) {
    
    // 0 1
    //     2 3 4 5
    //       3 4 5 6 7 8 9
    
    // -1 0 1
    //      1 2 3
    //          3 4 5 6 7 8 9
    
    // 0 1 2 3 4 5
    //       3 4 5 6 7 8 9
    //   1 2 3 4 5 6 7 8 9 10
    
    // arr = [[-1, 1], [2, 4], [3, 9]]
    const v = new Object();
    arr.map(([x, y]) => {
        // console.log(x, y);
        for(let i=Math.min(x, y); i<Math.max(x, y); i++) {
            v[i] = 
                v[i]? v[i]+1 : 1;
            // if(!v[i])
            //     v[i] = 1;
            // else
            //     v[i] = v[i] + 1;
            // if(!v[i])
            //     console.log("??");
        }
    });
    
    // 오브젝트에서 값만 빼서 배열로 만들고, 1보다 큰 것들의 길이
    return Object.values(v).filter(a => a > 1).length;
    
}