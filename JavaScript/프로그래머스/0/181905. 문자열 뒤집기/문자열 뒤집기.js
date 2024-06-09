function solution(str, s, e) {
    const split = [...str];
    return split.map((a, i) => (s <= i && i <= e)? split[e - i + s]:a).join(``);
}