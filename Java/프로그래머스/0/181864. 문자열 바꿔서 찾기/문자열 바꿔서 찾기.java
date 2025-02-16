import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(String myString, String pat) {
        
        // String convert = Arrays.stream(myString.split("")).map(a -> "A".equals(a)? "B":"A").collect(Collectors.joining());
        // return convert.contains(pat)? 1 : 0;
        
        return Arrays.stream(myString.split("")).map(a -> "A".equals(a)? "B":"A").collect(Collectors.joining()).contains(pat)? 1 : 0;
        
    }
}