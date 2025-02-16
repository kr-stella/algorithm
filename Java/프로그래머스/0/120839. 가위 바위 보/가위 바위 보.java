import java.util.*;
import java.util.stream.*;

class Solution {
    public String solution(String rsp) {
        
        return Arrays.stream(rsp.split("")).map(a -> {
            if(a.equals("2")) return "0";
            else if(a.equals("0")) return "5";
            else return "2";
        }).collect(Collectors.joining());
        
        // String answer = "";
        // for(String a : rsp.split("")) {
        //     if(a.equals("2")) answer += "0";
        //     if(a.equals("0")) answer += "5";
        //     if(a.equals("5")) answer += "2";
        // }
        // return answer;
        
    }
}