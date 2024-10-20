class Solution {
    public int solution(int[] array, int height) {
        int result = 0;
        for(int h:array) {
            if(h > height)
                result++;
        }
        return result;
    }
}