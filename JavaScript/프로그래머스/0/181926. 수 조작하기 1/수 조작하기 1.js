const data = { w: 1, s: -1, d: 10, a: -10 };
const solution = (n, arr) => [...arr].reduce((a, c) => a += data[c], n);