import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int[] arr) {
        
        // IntStream.of(arr).forEach(System.out::println);
        // IntStream.of(a).rangeClosed(0, a - 1).map(i -> a);
        
        
        return IntStream.of(arr).flatMap(a -> IntStream.rangeClosed(0, a - 1).map(i -> a)).toArray();
        
        // List<Integer> list = new ArrayList<>();
        // for(int v : arr) {
        //     list.add(Integer.parseInt(String.valueOf(v).repeat(v)));
        // }
        
        // return list.stream().mapToInt(Integer::intValue).toArray();
        
        // 근데 이건 한자리 숫자만 됨
        // return IntStream.of(arr).flatMap(a -> Arrays.stream(String.valueOf(a).repeat(a).split("")).mapToInt(Integer::parseInt)).toArray();
        
    }
}