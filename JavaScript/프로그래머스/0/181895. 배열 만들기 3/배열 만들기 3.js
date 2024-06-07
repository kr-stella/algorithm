function solution(arr, intervals) {
    return intervals.reduce((a, [s, e]) => {
        return a = [ ...a, ...arr.slice(s, e + 1) ];
    }, []);
}