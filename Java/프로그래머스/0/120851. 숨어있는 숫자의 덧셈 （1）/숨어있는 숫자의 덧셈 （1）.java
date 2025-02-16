import java.util.regex.*;

class Solution {
    public int solution(String my_string) {
        
        int answer = 0;
        String[] str = my_string.split("\\d");
        Pattern pattern = Pattern.compile("[0-9]{1}");  // 한자리 수
        // Pattern pattern = Pattern.compile("[0-9]+");    // 연속된 수(123, 10)
        Matcher matcher = pattern.matcher(my_string);
        while(matcher.find()) {
            answer += Integer.parseInt(matcher.group());
            System.out.println(matcher.group());
        }
            
        
        return answer;
        
    }
}