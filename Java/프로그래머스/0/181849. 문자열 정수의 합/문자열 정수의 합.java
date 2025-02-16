import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(String str) {
        
//         int answer = 0;
//         for(String v : str.split(""))
//             answer += Integer.parseInt(v);
        
//         return answer;
        
        return Arrays.stream(str.split("")).mapToInt(Integer::parseInt).sum();
        
        // return Stream.of(str.split("")).mapToInt(Integer::parseInt).sum();
        
    }
}