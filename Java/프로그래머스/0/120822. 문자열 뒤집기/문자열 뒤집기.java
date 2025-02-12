import java.util.stream.*;

class Solution {
    public String solution(String str) {
        
        int cnt = 0;
        int len = str.length() - 1;
        String[] arr = str.split("");
        String answer = "";
        for(String s : arr) {
            // System.out.println(arr[len - cnt]);
            // System.out.println(s);
            answer += arr[len - cnt];
            cnt++;
        }
        
        return answer;
            
        
        // return IntStream.range(0, str.length())
        //             .mapToObj(i -> str.charAt(str.length() - i - 1))
        //             .map(Object::toString)
        //             .collect(Collectors.joining());
        
        
        // return String.valueOf(IntStream.range(0, str.split("").length).mapToObj(a -> str.split("")[str.split("").length - 1 - a]).collect(Collectors.joining()));
    }
}