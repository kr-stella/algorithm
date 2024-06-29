const solution = (rank, attendance) => Object.keys(attendance.reduce((a, c, i) => {
    if(c) a[i] = c;
    return a;
}, {})).sort((a, b) => rank[a] - rank[b]).slice(0, 3).reduce((a, c, i) => a += (c * Math.pow(10, 4 - (i * 2))), 0);