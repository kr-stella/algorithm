class Solution {
    public String solution(String my_string, int n) {
        
        String answer = "";
        for(String str : my_string.split(""))
            answer += str.repeat(n);
            
        return answer;
        
    }
}