import java.util.regex.*;

class Solution {
    public String solution(String str) {
        
        return str.replaceAll("m", "rn");
//         Pattern pattern = Pattern.compile("[m]");
//         Matcher matcher = pattern.matcher(str);
//         while(matcher.find())
//             str = str.replace(matcher.group(), "rn");
            
//         return str;
        
    }
}