function solution(arr) {
    var cnt = 0;
    let before = [];
    while(true) {

        before = arr;
        arr = arr.map((v) => {
            if(v >= 50 && !(v % 2)) return v / 2;
            if(v < 50 && (v % 2)) return (v * 2) + 1;
            
            return v;
        });
        
        if(before.every((a, i) => a === arr[i]))
            break;
        
        cnt++;
        
    }
    
    return cnt;
    
}