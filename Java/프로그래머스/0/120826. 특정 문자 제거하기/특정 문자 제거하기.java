import java.util.regex.Pattern;
import java.util.regex.Matcher;

class Solution {
    public String solution(String my_string, String letter) {
        
        String answer = "";
        // Pattern pattern = Pattern.compile("[" + Pattern.quote(letter) + "]");
        // Matcher matcher = pattern.matcher(my_string);
        // if(matcher.find())
        //     System.out.println(matcher.group());
        
        // System.out.println();
        
        return my_string.replaceAll(letter, "");
    }
}