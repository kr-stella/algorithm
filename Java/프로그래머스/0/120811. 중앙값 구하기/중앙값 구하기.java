import java.util.stream.*;

class Solution {
    public int solution(int[] array) {
        return IntStream.of(array).sorted().toArray()[array.length / 2];
    }
}