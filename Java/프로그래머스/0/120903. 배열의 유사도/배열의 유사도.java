import java.util.*;

class Solution {
    public int solution(String[] s1, String[] s2) {
        
        List<String> convert1 = Arrays.asList(s1);
        // List<String> convert2 = Arrays.asList(s2);
        /** 중복값 제거 */
        Set<String> convert2 = new HashSet<>(Arrays.asList(s2));
        //return (int) convert1.stream().filter(convert2::contains).count();
        return (int) Arrays.stream(s1).filter(convert2::contains).count();
        
//         int answer = 0;
//         Set<String> ref = new HashSet<>(Arrays.asList(s2));
//         for(String a : s1) {
//             if(ref.contains(a))
//                 answer++;
//             // System.out.println(a);
//             // ㅁ
//         }
        
//         return answer;
        
        
    }
}