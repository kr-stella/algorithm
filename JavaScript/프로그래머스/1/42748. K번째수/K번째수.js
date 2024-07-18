const solution = (arr, commands) => commands.map(a => {
    const [x, y, n] = a;
    return arr.slice(x - 1, y).sort((i, j) => i - j)[n - 1];
});