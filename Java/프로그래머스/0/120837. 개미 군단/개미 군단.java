class Solution {
    public int solution(int hp) {
        
        int answer = 0;
        
        /** 장군개미 */
        answer += hp / 5;
        hp = hp % 5;
        
        /** 병정개미 */
        answer += hp / 3;
        hp = hp % 3;
        
        /** 일개미 */
        answer += hp;
        
        return answer;
        
    }
}