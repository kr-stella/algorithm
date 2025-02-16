import java.util.*;
import java.util.stream.*;
import java.util.AbstractMap.SimpleEntry;
import java.util.Map.Entry;

class Solution {
    public int[] solution(int n) {
        
        /** T2 */
        Set<Integer> set = new HashSet<>();
        /** 본인들 */
        set.add(1); set.add(n);
        for(int i = 1; i <= (int) Math.sqrt(n); i++) {
            if(n % i == 0) {
                set.add(i);
                set.add((int) n / i);
            }
        }
        
        int[] result = set.stream().mapToInt(Integer::intValue).toArray();
        Arrays.sort(result);
        
        return result;
        
        /** T1 */
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
        
//         int[] result = list.stream().mapToInt(Integer::intValue).toArray();
//         Arrays.sort(result);
//         // System.out.println(test);
//         return result;
        
        
        
        
        
//         // int[] test = list.stream().mapToInt(Integer::intValue).toArray();
//         // System.out.println(test);
        
//         // System.out.println(test);
//         // IntStream.of(test).forEach(System.out::println);
        
//         // System.out.println(Arrays.sort());
//         // list.stream().mapToInt(Integer::intValue).sort();
//             // .forEach(System.out::println);
        
//         // System.out.println(list);
//         // int[] abc = new int[]{ 1, 1 };
//         int[] test = list.stream().mapToInt(Integer::intValue).toArray();
//         Arrays.sort(test);
//         // System.out.println(test);
//         return test;
//         // return Arrays.sort(test);
        
        // List<Entry<Integer, Integer>> divisors = IntStream.rangeClosed(1, (int) Math.sqrt(n))
        //         .filter(a -> n % a == 0)
        //         .mapToObj(b -> new SimpleEntry<>(b, n / b))  // 각 약수 b에 대해 SimpleEntry 생성
        //         .collect(Collectors.toList());
        // // return IntStream.rangeClosed(1, (int) Math.sqrt(n)).filter(a -> n % a == 0)
        // //     .mapToObj(b -> new SimpleEntry<>(b, n / b))
        // //         .collect(Collectors.toList());
        // divisors.forEach(entry -> System.out.println("Divisor: " + entry.getKey() + ", Quotient: " + entry.getValue()));
        // return answer;
        
//         // ㅣㅑㄴ
//         int[] answer = {};
//         List<Integer> list = new ArrayList<>();
//         // System.out.println((int) Math.sqrt(n));
        
//         // IntStream.rangeClosed(1, Integer.parseInt(String.valueOf(Math.sqrt(n)).split("\\.")[0])).forEach(System.out::println);
//         List<Entry<Integer, Integer>> divisors = IntStream.rangeClosed(1, (int) Math.sqrt(n))
//                 .filter(a -> n % a == 0)
//                 .mapToObj(b -> new SimpleEntry<>(b, n / b))  // 각 약수 b에 대해 SimpleEntry 생성
//                 .collect(Collectors.toList());
//         // return IntStream.rangeClosed(1, (int) Math.sqrt(n)).filter(a -> n % a == 0)
//         //     .mapToObj(b -> new SimpleEntry<>(b, n / b))
//         //         .collect(Collectors.toList());
//         divisors.forEach(entry -> System.out.println("Divisor: " + entry.getKey() + ", Quotient: " + entry.getValue()));
//         return answer;
        
    }
}