const solution = (a, b) => {
    
    const date = new Date(`${2016}-${a}-${b}`);
    const days = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`];
    
    return days[date.getDay()];
    
}