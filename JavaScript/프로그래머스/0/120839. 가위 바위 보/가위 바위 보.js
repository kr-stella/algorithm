const conv = { 2: 0, 0: 5, 5: 2 };
const solution = rsp => [...rsp].map((v) => conv[v]).join("");