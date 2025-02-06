import java.util.regex.Pattern;
import java.util.regex.Matcher;

class Solution {
    public String solution(String str) {
        
        // Pattern pattern = Pattern.compile("[aeiouAEIOU]");
        // Matcher matcher = pattern.matcher(str);
        
        // return matcher.replaceAll("");
        
        return str.replaceAll("[aeiouAEIOU]", "");
        
    }
}