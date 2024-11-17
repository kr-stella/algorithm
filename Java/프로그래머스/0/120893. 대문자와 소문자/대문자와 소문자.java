class Solution {
    public String solution(String str) {
        
        String answer = "";
        for(String v : str.split("")) {
            
            String upper = v.toUpperCase();
            String lower = v.toLowerCase();
            
            if(v.equals(upper)) answer += lower;
            else answer += upper;
            
        }
        
        return answer;
        
    }
}