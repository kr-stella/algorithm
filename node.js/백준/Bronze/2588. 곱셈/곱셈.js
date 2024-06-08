const fs = require(`fs`)
const isLinux = process.platform === `linux`;
const path = isLinux? `/dev/stdin`:`input.txt`;
const input = fs.readFileSync(path).toString().trim().split(`\n`).map(a => a.replace(`\r`, ``));

const a = input[0];
const b = input[1];

[...b].map(x => +x).reverse().forEach(x => console.log(x * a));
console.log(a * b);