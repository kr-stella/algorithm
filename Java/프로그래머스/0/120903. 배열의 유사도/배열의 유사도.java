import java.util.*;

class Solution {
    public int solution(String[] s1, String[] s2) {
        
        int answer = 0;
        Set<String> ref = new HashSet<>(Arrays.asList(s2));
        for(String a : s1) {
            if(ref.contains(a))
                answer++;
            // System.out.println(a);
            // ㅁ
        }
        
        return answer;
        
        
    }
}