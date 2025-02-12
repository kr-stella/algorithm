import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int[] sides) {
        
        // int answer = 1;
        int max = IntStream.of(sides).max().getAsInt();
        // System.out.println(max);
        // System.out.println(IntStream.of(sides).filter(a -> a != max).sum());
        // if(max >= IntStream.of(sides).filter(a -> a != max).sum())
        if(max >= IntStream.of(sides).sum() - max)
            return 2;
        // List<Integer> convert = Arrays.stream(sides).boxed().collect(Collectors.toList());
        
        // IntSummaryStatistics stats = IntStream.of(sides).summaryStatistics();
        // System.out.println("최소값: " + stats.getMin());
        // System.out.println("최대값: " + stats.getMax());
        // System.out.println("합계: " + stats.getSum());
        // System.out.println("평균: " + stats.getAverage());
        // System.out.println("개수: " + stats.getCount());
        
        return 1;
    }
}