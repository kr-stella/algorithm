function solution(arr) {
    return seq(arr)? arr[arr.length - 1] + (arr[1] - arr[0]):
    arr[arr.length - 1] * (arr[1] / arr[0]);
}

const seq = (arr) => {
    return arr[2] - arr[1] === arr[1] - arr[0];
}