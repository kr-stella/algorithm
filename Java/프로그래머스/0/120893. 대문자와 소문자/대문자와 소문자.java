class Solution {
    public String solution(String str) {
        
//         String answer = "";
//         for(String v : str.split("")) {
            
//             String upper = v.toUpperCase();
//             String lower = v.toLowerCase();
            
//             if(v.equals(upper)) answer += lower;
//             else answer += upper;
            
//         }
        
        String answer = "";
        for(int i = 0; i < str.length(); i++){
            
            char c = str.charAt(i);
            if(Character.isUpperCase(c))
                answer += String.valueOf(c).toLowerCase();
            else answer += String.valueOf(c).toUpperCase();
            
        }
        
        return answer;
        
    }
}