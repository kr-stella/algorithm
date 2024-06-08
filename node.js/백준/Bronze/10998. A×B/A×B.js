const input = require(`fs`).readFileSync(`/dev/stdin`).toString().split(` `);
let a = +input[0];
let b = +input[1];

console.log(a * b);