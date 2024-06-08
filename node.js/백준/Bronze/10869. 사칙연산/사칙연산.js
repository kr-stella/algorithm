const input = require(`fs`).readFileSync(`/dev/stdin`).toString().split(` `);
const a = +input[0];
const b = +input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
/** 몫 */
console.log(~~(a / b));
console.log(a % b);