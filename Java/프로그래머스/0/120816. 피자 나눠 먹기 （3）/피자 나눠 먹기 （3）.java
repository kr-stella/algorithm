class Solution {
    public int solution(int slice, int n) {
        
        int ahrt = n / slice;
        int skajwl = n % slice;
        
        if(skajwl == 0) return ahrt;
        else return ahrt + 1;
        
    }
}