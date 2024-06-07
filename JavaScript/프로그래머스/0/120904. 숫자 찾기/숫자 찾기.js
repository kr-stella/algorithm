function solution(arr, v) {
    const res = [...arr.toString()].indexOf(v.toString());
    return res === -1? -1 : res + 1;
}