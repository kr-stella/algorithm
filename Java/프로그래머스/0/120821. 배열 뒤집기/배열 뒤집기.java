import java.util.stream.*;

class Solution {
    public int[] solution(int[] num_list) {
        
        return IntStream.range(0, num_list.length)
            .map(i -> num_list[num_list.length - (1 + i)]).toArray();
            
            // .collect(Collectors.toList());
        // return IntStream.iterate(num_list.length - 1, i -> i >= 0, i -> i - 1)
        //     .map(a -> num_list[a]).toArray();
    }
}