import java.util.stream.*;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        
        // int cnt = 0;
        int[] answer = new int[num2 - num1 + 1];
        System.arraycopy(numbers, num1, answer, 0, num2 - num1 + 1);
        return answer;
        // return IntStream.rangeClosed(num1, num2).map(a -> numbers[a]).toArray();
        // return Arrays.stream(numbers, num1, num2 + 1).toArray();
//         for(int i = num1; i <= num2; i++) {
//             answer[cnt] = numbers[i];
//             cnt++;
//         }
            
        
//         return answer;
    }
}