function solution(str) {
    return [...str].reduce((a, _, i) => a = [...a, str.substr(i, str.length)], []).sort((a, b) => a > b? 1:-1);
}