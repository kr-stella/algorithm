function solution(str, pat) {
    return [...str].reduce((a, c) => c === "A"? a += "B":a += "A", "").includes(pat)?1:0;
}