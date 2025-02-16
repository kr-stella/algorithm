import java.util.stream.*;

class Solution {
    public int[] solution(int[] arr, int n) {
        
        int[] answer = {};
        boolean isEven = arr.length % 2 == 0? true : false;
        return IntStream.rangeClosed(0, arr.length - 1).map(i -> {
            if(isEven) {
                if(i % 2 == 0) return arr[i];
                else return arr[i] + n;
            } else {
                if(i % 2 == 0) return arr[i] + n;
                else return arr[i];
            }
        }).toArray();
        
    }
}