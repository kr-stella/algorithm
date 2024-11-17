import java.util.*;

class Solution {
    public int[] solution(int n, int[] numlist) {
        
        List<Integer> answer = new ArrayList<>();
        for(int v : numlist) {
            if(v % n == 0) 
                answer.add(v);
        };
        
        return answer.stream().mapToInt(x -> x).toArray();
        
    }
}