class Solution {
    public int solution(int[] array, int n) {
        
        int result = 0;
        for(int i : array) {
            if(n == i)
                result++;
        }
        
        return result;
        
    }
}