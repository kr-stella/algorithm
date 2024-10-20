import java.util.stream.IntStream;

class Solution {
    public int solution(int n) {
        
        return IntStream.iterate(2, i -> i <= n, i -> i + 2).sum();
        /** 0에서 n까지 만들고 나머지 비교해서 필터링 한 후 sum = 비효율 */
        // return IntStream.rangeClosed(0, n).filter(a -> a % 2 == 0).sum();
        // for(int i=2; i<=n; i+=2){ answer += i; } return answer;
    }
}