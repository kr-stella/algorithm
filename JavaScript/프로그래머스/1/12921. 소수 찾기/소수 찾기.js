// function solution(n) {
    
//     // 12:15 Start
//     // 1은 어차피 소수가 아님
//     // 2~5
//     // 2 3 4 5
//     // 2~9
//     // 2 3 4 5 6 7 8 9
    
//     const data = new Array(n-1).fill("");
//     return data.reduce((a, _, i) => isPrime(i+2)? a += 1:a, 0);
    
// }

// const isPrime = (v) => {
    
//     for(let i=2; i<=Math.sqrt(v); i++) {
//         // console.log("v => ", v, ", i => ", i);
//         // console.log(v % i);
//         // if(v % i !== 0)  return false; << 멍청하게 헤맴
//         // 나눠 떨어지면 소수아님
//         if(v % i === 0) return false;
//     }
    
//     return true;
//     // else 
// //     for(let i=2; i<=Math.sqrt(v); i++) {
        
// //         console.log(v)
// //         console.log(i)
// //     }
// }

function solution(n) {
    
    // 12:15 Start 시간때문에 되다 안되다 함
    // const data = new Array(n-1).fill("");
    // return data.reduce((a, _, i) => isPrime(i+2)? a += 1:a, 0);
    // 12:27 End
    
    // ??? 에라토스테네스의 체
    // https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
    let arr = Array(n+1).fill(true).fill(false, 0, 2);
    // 들어온 값의 제곱근까지만 돌려라
    // 즉 23이 들어왔다 = 23의 제곱근인 4.xxxx => 2~4까지만 반복
    for(let i=2; i*i<=n; i++){
        // console.log("i ===> " + i);
        if(arr[i]){
            // i의 배수를 모조리 false로 바꿔라
            // 여기에 통과되는 i는 소수
            for(let j=i*i; j<=n; j+=i){
                // console.log(j)
                arr[j] = false;
            }
        }
    }
    
    return arr.filter(e => e).length;
    
}

const isPrime = (v) => {
    
    for(let i=2; i * i < v; i++)
        if(v % i === 0) 
            return false;
    
    return true;
    
}