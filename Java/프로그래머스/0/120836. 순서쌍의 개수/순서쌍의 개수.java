class Solution {
    public int solution(int n) {
        
        int answer = 0;
        for(int i = 1; i <= Math.sqrt(n); i++) {
            
            int ahrt = n / i;
            if(n % i == 0) {
                if(ahrt == i) answer += 1;
                else answer += 2;
            }
            
        }
        
        return answer;
        
    }
}