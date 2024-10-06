// 11:05 ~ 11:45
const solution = str => {
    
    /**
    사용자가 3번 던짐
    - 3번 던져서 나오는 형태
    = "점수(0 ~ 10)/보너스(S, D, T)/옵션(*, #, '')"형태가 3세트
    */
    
    // \d 혹은 [0-9] = 숫자만 + {1,2}는 한자리 ~ 두자리(10처리)
    // [SDT]문자열 + {1}는 문자열 단 하나
    // [*#]문자열 + ?는 없을 수도 있다는 표시
    // gi는 global + ignore case ( 대소문자 구분x. 즉, example _ ExAmPLe 모두 캐치 )
    const regex = /\d{1,2}[SDT]{1}[*#]?/gi;
    // console.log(str.match(regex));
    const score = [];
    str.match(regex).forEach((a, i) => {
        
        // 이렇게 처리하면 "10S*" 이게 처리가 안됨
        // let [ number, bonus, option ] = a;
        
        let [ number, bonus, option ] = a.split(/([SDT]{1})/gi);
        
        // bonus가 S인 경우는 처리x, 어차피 같은 값
        if(bonus === `D`) number = number ** 2;
        if(bonus === `T`) number = number ** 3;
        if(option === `*`) {

            // console.log(`스타상 옵션이 튀어나왔어요. = 이전값과 현재값을 2배로 만들어줘야 해요.`);
            const latest = i - 1;
            // 이전값이 0일수도 있기 때문에 undefined로 처리함.
            if(score[latest] !== undefined)
                score[latest] *= 2;
            
            number *= 2;
            
        }
        
        if(option === `#`) number = -number;
        score.push(number);
        
    });
    
    
    return score.reduce((a, c) => a += +c, 0);
    
}