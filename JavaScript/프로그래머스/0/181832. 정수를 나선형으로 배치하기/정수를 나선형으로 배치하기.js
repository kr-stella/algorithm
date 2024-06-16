// 15:25 ~ 16:15
const solution = n => {
    
    // 동일한 참조(메모리 주소)를 갖는 또 다른 배열로 채움 = res[0][0] = '' 바꾸면 같은 위치 다 바뀜
    // const res = new Array(2).fill(new Array(2).fill(0));
    // const res = Array.from({ length: n }).fill(0).map(() => Array.from({ length: n }).fill(0));
    let dir = `incX`;
    let [ y, x ] = [ 0, 0 ];
    let [ top, bottom, left, right ] = [ 0, 0, 0, 0 ];
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for(let k=0; k<Math.pow(n, 2); k++) {
        switch(dir) {
            case `incX`: {
                res[y][x] = k + 1;
                if(x + right === n - 1) {
                    dir = `incY`;
                    top++;
                    y++;
                }
                else {
                    x++;
                }
                break;
            };
            case `incY`: {
                res[y][x] = k + 1;
                if(y + bottom === n - 1) {
                    dir = `decX`;
                    right++;
                    x--;
                }
                else {
                    y++;
                }
                break;
            };
            case `decX`: {
                res[y][x] = k + 1;
                if(x - left === 0) {
                    dir = `decY`;
                    bottom++;
                    y--;
                }
                else x--;
                break;
            };
            case `decY`: {
                res[y][x] = k + 1;
                if(y - top === 0){
                    dir = `incX`;
                    left++;
                    x++;
                }
                else y--;
                break;
            };
        }
    }
    
    
    
    return res;
    
}