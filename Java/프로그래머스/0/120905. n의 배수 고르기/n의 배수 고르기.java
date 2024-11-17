class Solution {
    public int[] solution(int n, int[] numlist) {
        
        int size = 0;
        for(int v : numlist) {
            if(v % n == 0)
                size++;
        };
        
        int[] answer = new int[size];
        int index = 0;
        for(int v : numlist) {
            if(v % n == 0) {
                answer[index] = v;
                index++;
            };
        }
        
        return answer;
        
//         List<Integer> answer = new ArrayList<>();
//         for(int v : numlist) {
//             if(v % n == 0) 
//                 answer.add(v);
//         };
        
//         return answer.stream().mapToInt(x -> x).toArray();
//         return Arrays.stream(numlist)
//                 .filter(i -> i % n == 0)
//                 .toArray();
        
    }
}