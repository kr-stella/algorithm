import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        
        /** T1 */
        // 오름차순 정렬 후 앞 2개, 뒤 2개 곱해서 비교
        Arrays.sort(numbers);
        // for(int a : numbers)
        //     System.out.println(a);
        int a = numbers[0] * numbers[1];
        int b = numbers[numbers.length - 2] * numbers[numbers.length - 1];
        if(a > b) return a;
        else return b;
        // return Math.max(a, b);
        
        // return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 2] * numbers[numbers.length - 1]);
        
    }
}