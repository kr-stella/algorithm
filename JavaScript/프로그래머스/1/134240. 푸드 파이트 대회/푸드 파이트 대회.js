const solution = arr => {
    
    let str = ``;
    for(let i=1; i<arr.length; i++) {
        // console.log(`${i} 음식을 양쪽에서 ${Math.floor(arr[i] / 2)}개 씩 먹여야 함`);
        str += i.toString().repeat(Math.floor(arr[i] / 2));
    };
    
    return `${str}0${[...str].reverse().join(``)}`;
    
};