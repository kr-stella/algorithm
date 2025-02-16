import java.util.stream.*;

class Solution {
    public int[] solution(int[] array) {
        
//         int[] answer = new int[2];
//         for(int i = 0; i < array.length; i++) {
//             if(answer[0] <= array[i]) {
//                 answer[0] = array[i];
//                 answer[1] = i;
//             }
//         }
        
//         return answer;
        
        // int max = IntStream.of(array).max().getAsInt();
        // int pos = IntStream.rangeClosed(0, array.length - 1).reduce((i, j) -> {
        //     // System.out.println("i ===> " + i + ", j ===> " + j);
        //     if(array[i] > array[j]) return i;
        //     else return j;
        // }).getAsInt();
        // System.out.println(IntStream.rangeClosed(0, array.length - 1).reduce(0, (i, j) -> {
        //     System.out.println("i ===> " + i + ", j ===> " + j);
        //     if(array[i] > array[j]) return i;
        //     else return j;
        // }));
        
        int pos = IntStream.rangeClosed(0, array.length - 1).reduce((i, j) -> array[i] > array[j]? i : j).getAsInt();
        return new int[]{array[pos], pos};
        
    }
}