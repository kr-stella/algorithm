import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int n) {
        
        /** T4 */
        return IntStream.rangeClosed(1, (int) Math.sqrt(n))
                .filter(i -> n % i == 0)
                .flatMap(i -> IntStream.of(i, n / i))
                .distinct()
                // .peek(x -> System.out.println("Item: " + x))
                .sorted()
                // .peek(x -> System.out.println("Sorted: " + x))
                .toArray();
        
        
        
        // IntStream.of(1, 2, 3, 4).forEach(System.out::println);
        // IntStream.of(1, 2, 3, 4).peek(System.out::println);
        // IntStream.of(1, 2, 3, 4).peek(System.out::println).sum();
        // System.out.println(IntStream.of(1, 2, 3, 4));
        
        /** T3 */
        // return IntStream.rangeClosed(1, (int) Math.sqrt(n))
        //         .filter(i -> n % i == 0)
        //         .flatMap(i -> i * i == n ? IntStream.of(i) : IntStream.of(i, n / i))
        //         // .peek(x -> System.out.println("Item: " + x))
        //         .sorted()
        //         // .peek(x -> System.out.println("Sorted: " + x))
        //         .toArray();
        
        
//         /** T2 */
//         Set<Integer> set = new HashSet<>();
//         /** 본인들 */
//         set.add(1); set.add(n);
//         for(int i = 1; i <= (int) Math.sqrt(n); i++) {
//             if(n % i == 0) {
//                 set.add(i);
//                 set.add((int) n / i);
//             }
//         }
        
// //         int[] result = set.stream().sorted().mapToInt(Integer::intValue).toArray();
// //         Arrays.sort(result);
        
// //         return result;
        
//         return set.stream().sorted().mapToInt(Integer::intValue).toArray();
        
        
        
//         /** T1 */
//         List<Integer> list = new ArrayList<>();
//         /** 본인들 */
//         // list.add(1); list.add(n); >> 이렇게 하면 n이 1일때가 안됨
//         for(int i = 1; i <= (int) Math.sqrt(n); i++) {
//             if(n % i == 0) {
//                 list.add(i);
//                 int ahrt = (int) n / i;
//                 // 이미 list에 포함돼있으면 추가하면 안됨( 25의 경우 5, 5 )
//                 if(!list.contains(ahrt))
//                     list.add(ahrt);
//             }
//         }
        
//         // int[] result = list.stream().mapToInt(Integer::intValue).toArray();
//         // Arrays.sort(result);
//         // // System.out.println(result);
//         // return result;
//         return list.stream().sorted().mapToInt(Integer::intValue).toArray();
        
    }
}