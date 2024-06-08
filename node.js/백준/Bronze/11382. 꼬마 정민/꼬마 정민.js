const input = require(`fs`).readFileSync(`/dev/stdin`).toString().split(` `);
console.log(input.reduce((a, c) => a += +c, 0));