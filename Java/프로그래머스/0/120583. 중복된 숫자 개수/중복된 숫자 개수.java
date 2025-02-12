import java.util.stream.*;

class Solution {
    public int solution(int[] array, int n) {
        
//         int result = 0;
//         for(int i : array) {
//             if(n == i)
//                 result++;
//         }
        
//         return result;
        return (int) IntStream.of(array).filter(a -> a == n).count();
        
    }
}