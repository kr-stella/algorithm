const std = { "1":`w`, "-1":`s`, "10":`d`, "-10":`a`};
const solution = log => log.slice(1).reduce((a, c, i) => a += std[c - log[i]], ``);