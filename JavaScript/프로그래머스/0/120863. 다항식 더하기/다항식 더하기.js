const solution = arr => {
    
    const calc = 
          arr.split(" + ").reduce((v, c) => (
              c.includes('x')?
              { ...v, x: v.x + cntX(c) }
              :
              { ...v, num: v.num + +c }),
              { x: 0, num: 0,} // default value
          );
    
    // 아 1x;;
    const x = calc.x>0?`${calc.x>1? calc.x:""}x`:"";
    const num = calc.num? calc.num:"";
    const plus = x !== "" && num !== ""? " + ":"";
    
    // return `${x}${calc.x !== 0 && calc.num !== 0? " + ":""}${calc.num !== 0? calc.num:""}`;
    return x + plus + num;
}

const cntX = (v) => {
    const count = v.replaceAll("x", ""); // x가 있으면 지우기
    return count === ""? 1:+count;
}