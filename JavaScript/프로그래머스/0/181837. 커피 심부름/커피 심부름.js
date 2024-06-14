// 아아, 아무거나 = 4500 / 라떼 = 5000
const solution = order => order.reduce((a, c) => c.includes(`cafelatte`)? a += 5000:a += 4500, 0);