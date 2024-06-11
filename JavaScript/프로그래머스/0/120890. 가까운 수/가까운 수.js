/** 핵심: 배열의 각 요소와 n을 뺐을 때 절대값이 가장 가까운 게 n과 가장 가까운 수 */
const solution = (arr, n) => arr.sort((a, b) => a - b).find(v => Math.abs(v - n) === Math.min(...arr.map(a => Math.abs(a - n))));