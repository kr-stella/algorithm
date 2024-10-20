import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int[] numbers) {
        
        List<Integer> sorted = IntStream.of(numbers)
            .boxed().sorted((a, b) -> b - a)
            .collect(Collectors.toList());
            // .toList();
        
        return sorted.get(0) * sorted.get(1);
        
//         int max1 = Integer.MIN_VALUE;
//         int max2 = Integer.MIN_VALUE;
//         for(int number:numbers) {
//             if(number > max1) {
//                 max2 = max1;
//                 max1 = number;
//             }
//             else if (number > max2) {
//                 max2 = number;
//             }
//         }

//         return max1 * max2;
        
    }
}