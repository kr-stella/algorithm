class Solution {
    public int solution(int n) {
        return (int) (n % Math.sqrt(n)) == 0 ? 1 : 2;
    }
}