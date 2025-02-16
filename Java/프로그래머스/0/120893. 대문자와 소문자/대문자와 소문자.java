import java.util.*;
import java.util.stream.*;

class Solution {
    public String solution(String str) {
        
        /** T1 */
//         String answer = "";
//         for(String v : str.split("")) {
            
//             String upper = v.toUpperCase();
//             String lower = v.toLowerCase();
            
//             if(v.equals(upper)) answer += lower;
//             else answer += upper;
            
//         }
        
        /** T2 */
//         String answer = "";
//         for(int i = 0; i < str.length(); i++){
            
//             char c = str.charAt(i);
//             if(Character.isUpperCase(c))
//                 answer += String.valueOf(c).toLowerCase();
//             else answer += String.valueOf(c).toUpperCase();
            
//         }
        
//         return answer;
        
        
        /** T3 */
        return Arrays.stream(str.split("")).map(v -> {
            String upper = v.toUpperCase();
            if(v.equals(upper)) return v.toLowerCase();
            else return upper;
        }).collect(Collectors.joining());
        
        
    }
}