import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int n) {
        
        int[] result = new int[(n + 1) / 2];
        for(int i = 0; i < result.length; i++)
            result[i] = i * 2 + 1;
        
        return result;
        
    }
}