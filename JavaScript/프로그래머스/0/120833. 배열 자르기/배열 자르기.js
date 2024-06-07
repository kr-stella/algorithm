function solution(arr, v1, v2) {
    [...arr].splice(v1, v2 + 1);
    return arr.filter((v, i) => v1 <= i && i <= v2);
}