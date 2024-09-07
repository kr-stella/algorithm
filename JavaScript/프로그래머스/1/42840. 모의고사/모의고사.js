const solution = (answer) => {
    
    /** 학생들의 방식 */
    const std1 = [1, 2, 3, 4, 5];
    const std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    /** 각 학생들이 몇개 맞았는지 */
    const result = answer.reduce((a, c, i) => {
        if(std1[i % std1.length] === c) a[0] += 1;
        if(std2[i % std2.length] === c) a[1] += 1;
        if(std3[i % std3.length] === c) a[2] += 1;
        return a;
    }, [0, 0, 0]);
    
    /** 최고점수 */
    const first = Math.max(...result);
   
    // console.log(result, first);
    /** 걸러내기 - 이렇게 걸러내면 1번, 3번 학생이 높은점수로 같을 때 해결이 안 됨*/
    // return result.filter(a => a === first).map((_, i) => i + 1);
    return result.reduce((a, c, i) => ((c === first)? a.push(i + 1):a, a), []);
    
}