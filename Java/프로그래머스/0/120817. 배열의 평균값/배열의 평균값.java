import java.util.stream.*;

class Solution {
    public double solution(int[] numbers) {
        // System.out.println(IntStream.of(numbers).average());
        // System.out.println(IntStream.of(numbers).average().getAsDouble());
        return IntStream.of(numbers).average().getAsDouble();
    }
}