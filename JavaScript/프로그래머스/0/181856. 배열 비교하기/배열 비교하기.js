function solution(arr1, arr2) {
    if(arr1.length > arr2.length) { return 1; }
    else if(arr1.length < arr2.length) { return -1; }
    else {
        
        const cnt1 = arr1.reduce((a, c) => a + c, 0);
        const cnt2 = arr2.reduce((a, c) => a + c, 0);
        if(cnt1 === cnt2) { return 0; }
        else if( cnt1 > cnt2 ) { return 1; }
        else return -1;
        
    }
}