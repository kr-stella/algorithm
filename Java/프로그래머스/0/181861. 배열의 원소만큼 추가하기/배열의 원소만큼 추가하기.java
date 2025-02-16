import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int[] arr) {
        
        /** T2 */
        int pos = 0;
        int[] result = new int[Arrays.stream(arr).sum()];
        for(int v : arr) {
            Arrays.fill(result, pos, pos + v, v);
            pos += v;
        }
        
        return result;
        
        
        /** T1 */
        // return IntStream.of(arr).flatMap(a -> IntStream.rangeClosed(0, a - 1).map(i -> a)).toArray();
        
        
        
        
        
        
        
        
        // List<Integer> list = new ArrayList<>();
        // for(int v : arr) {
        //     list.add(Integer.parseInt(String.valueOf(v).repeat(v)));
        // }
        
        // return list.stream().mapToInt(Integer::intValue).toArray();
        
        // 근데 이건 한자리 숫자만 됨
        // return IntStream.of(arr).flatMap(a -> Arrays.stream(String.valueOf(a).repeat(a).split("")).mapToInt(Integer::parseInt)).toArray();
        
    }
}