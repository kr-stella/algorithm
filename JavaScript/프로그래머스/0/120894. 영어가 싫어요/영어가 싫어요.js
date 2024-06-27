function solution(numbers) {
    
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i in arr)
        numbers = numbers.split(arr[i]).join(i);
    
    return +numbers;
    
}