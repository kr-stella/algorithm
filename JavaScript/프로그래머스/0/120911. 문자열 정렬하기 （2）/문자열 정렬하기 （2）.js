function solution(arr) {
    return [...arr.toLowerCase()].sort((a, b) => a > b ? 1 : -1).join("");
}