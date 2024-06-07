function solution(arr, dir) {
    
    switch(dir) {
        case "right":
            
            let v = arr.pop();
            arr.unshift(v);
            
        break;
        case "left":
            
            let v2 = arr.shift();
            arr.push(v2);
            
        break;
    }
    
    return arr;
    
}