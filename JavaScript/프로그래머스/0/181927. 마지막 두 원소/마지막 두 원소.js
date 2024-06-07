function solution(arr) {
    arr[arr.length - 1] > arr[arr.length - 2]? arr.push(arr[arr.length - 1] - arr[arr.length - 2]):arr.push(arr[arr.length - 1] * 2);
    return arr;
}