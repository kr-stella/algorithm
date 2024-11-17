// import java.util.stream.*;

class Solution {
    public int solution(String str) {
        
        int answer = 0;
        for(String v : str.split(""))
            answer += Integer.parseInt(v);
        
        return answer;
        // return Stream.of(str.split("")).mapToInt(Integer::parseInt).sum();
        
    }
}