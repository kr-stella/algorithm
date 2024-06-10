const solution = (v, av) => conv(v) === conv(av)? 1:0;
const conv = str => str.split(``).sort().join(``);