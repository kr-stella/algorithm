/** 폭탄이 존재할 때 해당 지역의 주변 지역을 의미하는 값 [x, y] */
const area = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1]
];
const solution = (board) => {
    
    const isBoard = (a) => a >= 0 && a < board.length;
    return board.reduce((a, _, y) => a += _.reduce((acc, now, x) => {

        if(!now && !area.some(([ay, ax]) => {
            ay = ay + y; ax = ax + x;
            return isBoard(ay) && isBoard(ax) && board[ay][ax];
        })) acc += 1;
        
        return acc;

    }, 0), 0);
    
};


// 두 번째 해결
// function solution(board) {
    
//     let cnt = 0;
//     const len = board.length;
//     const isBoard = (a) => a >= 0 && a < len;
//     board.forEach((_, y) => {
//         _.forEach((now, x) => {
//             /** 해당 조건을 완벽하게 일치하는 경우가 안전지대 */
//             // 현재 자기 자신이 1이 아니어야 함. = 나 지금 폭탄입니다.
//             // 위에 작성한 area범위 내에 1이 아니어야 함. = 니 옆에서 폭탄 터져서 폭발 범위내에 있음 ( 폭탄이 하나라도 있으면 안 됨. )
//             // 즉, 안전지대를 세는 것이므로, 현재 위치가 0인것만 확인하면 됨.
//             if(!now && !area.some(([ay, ax]) => {
//                 ay = ay + y; ax = ax + x;
//                 return isBoard(ay) && isBoard(ax) && board[ay][ax];
//             })) { cnt++; }
    
//         });
//     });
    
//     return cnt;
    
// };


// 첫 해결
// function solution(board) {
    
//     let cnt = 0;
    
//     const isBoard = (a) => a >= 0 && a < board.length;
    
//     /** y라인 한칸씩 증가시키면서 x라인 전체 확인 */
//     board.forEach((_, y) => {
//         _.forEach((now, x) => {
//             /** 해당 조건을 완벽하게 일치하는 경우가 안전지대 */
//             // 현재 자기 자신이 1이 아니어야 함. = 나 지금 폭탄입니다.
//             // 위에 작성한 area범위 내에 1이 아니어야 함. = 니 옆에서 폭탄 터져서 폭발 범위내에 있음 ( 폭탄이 하나라도 있으면 안 됨. )
//             if(!now && !area.some(([ay, ax]) => {
//                 const posY = ay + y;
//                 const posX = ax + x;
//                 if(isBoard(posY) && isBoard(posX)) {
//                     // console.log(`둘 다 판떼기 안에 있어요`, posY, posX, board[posY][posX]);
//                     if(board[posY][posX] == 1) return true;
//                     else return false;
//                 }
//                 else false;
//                 // console.log(ay + y, ax + x);
//                 // console.log(isBoard(ay + y), ay + y, "y");
//                 // console.log(isBoard(ax + x), ax + x, "X");
                
//             })) {
//                 // console.log(y, x)
//                 cnt++;
//             }
            
//         });
//     });
    
//     return cnt;
    
// };