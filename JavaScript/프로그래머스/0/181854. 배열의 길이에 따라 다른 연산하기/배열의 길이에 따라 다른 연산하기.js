function solution(arr, n) {
    // 배열의 길이가 짝수라면 홀수인덱스에 v + n
    // 배열의 길이가 홀수라면 짝수인덱스에 v + n
    return arr.map((v, i) => !(arr.length % 2)? i%2? v+n:v : !(i%2)? v+n:v);
}