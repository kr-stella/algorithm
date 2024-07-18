const solution = numbers => {
    
    const data = {};
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if(!data[sum])
                data[sum] = true;
        }
    }
    
    return Object.keys(data).map(Number).sort((a, b) => a - b);
    
};