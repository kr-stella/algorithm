import java.util.stream.*;

class Solution {
    public int solution(int[] arr1, int[] arr2) {
        
        int len1 = arr1.length;
        int len2 = arr2.length;
        if(len1 > len2) return 1;
        else if(len1 < len2) return -1;
        else {
            
            int sum1 = IntStream.of(arr1).sum();
            // int sum2 = IntStream.of(arr2).reduce(0, (a, b) -> a + b);
            int sum2 = IntStream.of(arr2).reduce((a, b) -> a + b).getAsInt();
            if(sum1 > sum2) return 1;
            else if(sum1 == sum2) return 0;
            else return -1;
            
        }
        
    }
}