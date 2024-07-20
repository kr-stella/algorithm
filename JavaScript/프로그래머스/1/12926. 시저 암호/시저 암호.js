const solution = (s, n) => [...s].map(a => {
        
    if(a !== ` `) {
        const next = a.charCodeAt() + n;
        a = String.fromCharCode((a.toLowerCase().charCodeAt() + n > 122)? next - 26:next);
    }

    return a;

}).join(``);