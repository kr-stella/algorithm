const solution = (arr, db) => {
    
    const [ id, pw ] = arr;
    if(db.some(([iv, pv]) => iv === id && pw === pv))
        return `login`;
    
    if(db.some(([iv, pv]) => iv === id && pw !== pv))
        return `wrong pw`;
    
    return `fail`;
    
}