const solution = (arr, n) => [...arr].sort((a, b) => {
    if(b[n] > a[n]) return -1;
    if(a[n] > b[n]) return 1;
    if(a[n] === b[n]) return b > a? -1:1;
});
