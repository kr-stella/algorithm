import java.util.*;
import java.util.stream.*;

class Solution {
    public String[] solution(String my_string) {
        
        System.out.println(my_string.trim());
        return my_string.trim().split("\\s+");
        
        /** T1 */
//         String[] answer = {};
//         List<String> result = new ArrayList<>();
//         for(String str : my_string.split(" "))
//             if(!str.equals(""))
//                 result.add(str);
        
//         // List<Integer> s2 = Arrays.asList(1, 2, 3, 4, 5);
//         // int[] t2 = s2.stream().mapToInt(Integer::intValue).toArray();
        
//         // return result.stream().map(a -> String.valueOf(a)).toArray();
//         return result.stream().toArray(String[]::new);
        
    }
}