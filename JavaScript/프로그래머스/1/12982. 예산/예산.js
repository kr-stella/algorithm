const solution = (arr, v) => {
    
    /** 누계, 카운트 */
    let [ sum, cnt ] = [ 0, 0 ];
    
    /** 미리 오름차순 */
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        
        sum += arr[i];
        if(sum > v) return cnt;
        else cnt++;
    
    }
    
    return cnt;
    
}