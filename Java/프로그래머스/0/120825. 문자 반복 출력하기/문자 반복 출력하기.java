import java.util.*;
import java.util.stream.*;

class Solution {
    public String solution(String str, int n) {
        
//         String answer = "";
//         for(String str : str.split(""))
//             answer += str.repeat(n);
            
//         return answer;
        
        // String[] test = "12345".split("");
        // List<Integer> test2 = Arrays.stream(test).mapToInt(Integer::parseInt)
        //.boxed()
        //.collect(Collectors.toList());
        // int[] test2 = Arrays.stream(test).mapToInt(Integer::parseInt).toArray();
        
        // boxed = int를 Integer로 변환 / 이게 없다면 List<int> 가 되는데 이건 불가능함
        
        
        
        
        // String[] arr = str.split("");
        // List<String> arr2 = Arrays.asList(arr);
        // return Arrays.stream(arr).map(a -> a.repeat(n)).collect(Collectors.joining());
        // return arr2.stream().map(a -> a.repeat(n)).collect(Collectors.joining());
        // return Arrays.stream(str.split("")).map(a -> a.repeat(n)).collect(Collectors.joining());
        // return Arrays.stream(str.split("")).map(a -> a.repeat(n)).collect(Collectors.joining());
        return Arrays.asList(str.split("")).stream().map(a -> a.repeat(n)).collect(Collectors.joining());
        
        
    }
}