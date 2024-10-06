const solution = bubbling => {
    
    /** 발음할 수 있는 배열 */
    const can = [`aya`, `ye`, `woo`, `ma`];
    
    /** 같은단어가 이어서 중복되는 경우 = 발음x */
    // ayayeaya는 가능해야 함. 왜? 연속되지 않고 가능한 발음만 있기 때문
    // ㅁㅊ;; yayae 얘는..? aya를 공백으로 바꾸면 ye가 됨.
    const regex = /(aya|ye|woo|ma)\1+/gi;
    return bubbling.reduce((a, c, i) => {
        
        // const regex = /(aya|ye|woo|ma)\1+/gi;
        // 정규식을 이 안에 쓰던지, 아래처럼 lastIndex를 초기화 해줘야 함.
        // 바깥에 썼는데, [`yeye`, `yeye`] 값이 들어오게 되면 첫번째 yeye는 true 두번째 yeye는 false
        // .test를 사용하면 lastIndex로 문자열의 끝을 가르키기 때문에 정상동작x
        regex.lastIndex = 0;
        
        /** 중복되는 경우 Pass */
        if(regex.test(c)) return a;
        /** 아닌경우 */
        else {
            
            // console.log(`이거 오냐?`)
            if(!can.reduce((acc, cur) => acc.replaceAll(cur, ` `), c).replaceAll(` `, ``))
                a += 1;
            
            return a;
            
        }
        
    }, 0);
    
}











            
            // yayae면 aya가 먼저 처리됨. 그다음 나오는 문자가 ye라서 가능한 단어로 판단함.
//             console.log(can.reduce((acc, cur) => {
                
//                 console.log(`acc ===>`,acc,`,cur ==>`,cur);
//                 acc = acc.replaceAll(cur, ``);
//                 // console.log(`after acc ===>` + acc);
//                 return acc;
                
//             }, c))
            
//             if(can.reduce((acc, cur) => {
                
//                 console.log(`acc ===>`,acc,`,cur ==>`,cur);
//                 acc = acc.replaceAll(cur, ` `);
//                 // console.log(`after acc ===>` + acc);
//                 return acc;
                
//             }, c)) console.log(`공백이 있어요.`)




// // 16:40 ~ 20:05
// function solution(arr) {
    
//     // 아래 2개 합친 거
//     // ?!뒤에 해당 패턴이 없어야 매칭.
//     const reg = /^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$/
//     return arr.reduce((a, c) => reg.test(c)? ++a:a, 0);
    
// //     const con = /(aya|ye|woo|ma)\1+/; // aya, ye, woo, ma가 1초과해서 나타나면 true
// //     const find = /^(aya|ye|woo|ma)+$/; // aya, ye, woo, ma로만 이뤄졌는지 find
    
// //     return arr.reduce((a, c) => !con.test(c) && find.test(c)? ++a:a, 0);
    
// //     let res = 0;
// //     const can = ["aya", "ye", "woo", "ma"];
// //     const num = /[0-9]/g;
// //     arr.map(v => {
        
// //         // can 매칭되는 것 모두 0, 1, 2, 3 중 하나로 교체
// //         [...can].map((a, i) => v = v.replaceAll(a, i));
        
// //         // 숫자 정규식에 매칭되는 것을 공백으로 치환
// //         // + 0123같은 숫자를 배열로 만들어서 옆 숫자와 비교해서 모두 다른것들만 통과되도록 함
// //         if(v.replaceAll(num, "").length === 0 && v.split("").every((b, j) => +b !== +v[j+1])) res++;
// //         // if(num.test(+v) && v.split("").every((b, j) => +b !== +v[j+1])) res++;
        
// //     });
    
// //     // 결과 도출
// //     return res;
    
// }



// // // 16:40 ~ 
// // function solution(arr) {
    
// //     // // 아래 2개 합친 거
// //     // // ?!뒤에 해당 패턴이 없어야 매칭.
// //     // const reg = /^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$/
// //     // return arr.reduce((a, c) => reg.test(c)? ++a:a, 0);
    
// // //     const con = /(aya|ye|woo|ma)\1+/; // aya, ye, woo, ma가 1초과해서 나타나면 true
// // //     const find = /^(aya|ye|woo|ma)+$/; // aya, ye, woo, ma로만 이뤄졌는지 find
    
// // //     return arr.reduce((a, c) => !con.test(c) && find.test(c)? ++a:a, 0);
    
// // //     1, 11, 14, 20
// // //     ["ayayeaya"] , 1 ~> 발음 가능 (연속으로 같은 발음만 아니면 다시 사용 가능)
// // //     ["ayayeye"] , 0 ~> 발음 불가능

// // //     17
// // //     ["ayayeayayeayaaya"],0 ~> 발음 불가능 (마지막에 연속으로 같은 발음)
// //     // arr = ["ayayeaya", "ayayeye", "ayayeayayeayaaya", "mawoowoo"];
    
// //     let res = 0;
// //     const can = ["aya", "ye", "woo", "ma"];
// //     const num = /[1-9]/g;
// //     arr.map(v => {
// //         [...can].map((a, i) => v = v.replaceAll(a, i + 1));
// //         // v.test(num)으로 하면 안 됨; 왠지 모르겠음
// //         if(v.replace(num,"").length === 0 && v.split("").every((b, j) => +b !== +v[j+1])){
// //             // console.log(v);
// //             res++;
// //         }
// // //         let isTrue = true
// // //         for (var i=0; i<v.length; i++) {
// // //             if (v.length != i +1){
// // //                 if(v[i] == v[i+1]) isTrue = false
// // //             }
// // //         }
        
// // //         if(v.replace(num,"").length == 0 && isTrue) res+=1;
// //         // let data1 = v.replace(num,"");
// //         // if (data1.length == 0 && isTrue){
// //         //     res += 1
// //         // }
        
        
        
// // //         if(num.test(+v)) {
// // //             let test = 0;
// // //             let ck = false;
// // //             const split = v.split("");
// // //             console.log(split);
// // //             for(let c of split) {
                
// // //                 if(test == c) {
// // //                     ck = true;
// // //                     break;
// // //                 }
                
// // //                 test = c;
                
// // //             }
// // //             if(!ck) {console.log(v); res++;}
// // //                 // console.log(ck);
// // //             // split.map(c => {
// // //             //     if(c != test)
// // //             // })
// // //             // spli
// // //             // if(split.every((b, j) => b != split[j+1])) {
// // //             //     res++;
// // //             // }
// // //         }
// //         // 바로 다음 수랑 비교
// //         // console.log(v);
// //         // console.log(v.every((b, j) => 
// //         //     b !== v[j+1]
// //         // ));
// //         // console.log(v.join(""));
// //         // console.log(num.test(v.join("")));
// //         // v = v.split("");
        
// //         // console.log(v);
// //         // console.log(num.test(v.join("")));
// //         // if(num.test(v.join("")) && v.every(a => v.indexOf(a) === v.lastIndexOf(a))) {
// //         //     console.log(v);
// //         //     res++;
// //         // }
        
// //     });
    
// //     return res;
    
// // //     console.log(arr.map(v => {
// // //         [...can].map((a, i) => v = v.replaceAll(a, i));
// // //         v = v.split("");
// // //         // console.log(v);
// // //         // console.log("find, ", );
// // //         if(num.test(v.join("")) && v.every(a => v.indexOf(a) === v.lastIndexOf(a))) return 1;
// // //         else return 0;
        
// // //         // console.log(.every(a => v.split("").indexOf(a) === v.split("").lastIndexOf(a)));
// // //     }));
// // //     // return arr.reduce((a, b) => {
// // //     //     const data = [...can].reduce((c, d) => c.replaceAll(d, " "), b).replaceAll(/\s/g, "");
// // //     //     if(!data) return a += 1; else return a;
// // //     // }, 0);
    
    
// // }