const solution = (arr, flag) => {
    return flag.reduce((a, c, i) => {
        if(c) return a.concat(Array(arr[i] * 2).fill(arr[i]));
        else {
            a.splice(-arr[i]);
            return a;
        }
    }, []);
}