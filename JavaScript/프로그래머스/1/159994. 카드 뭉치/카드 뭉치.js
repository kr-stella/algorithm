const solution = (cards1, cards2, goal) => {
    
    for(let str of goal) {
        /** shift로 처리해도 됨 */
        if(cards1[0] === str) cards1.splice(0, 1);
        else if(cards2[0] === str) cards2.splice(0, 1);
        else return `No`;
        
    }
    
    return `Yes`;
    
}