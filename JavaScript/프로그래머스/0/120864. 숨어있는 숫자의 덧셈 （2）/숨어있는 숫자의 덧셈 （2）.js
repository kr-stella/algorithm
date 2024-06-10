const solution = (str) => {
    const match = str.match(/\d+/g);
    return !match? 0:match.map(e => +(e)).reduce((a, c) => a += c, 0);
}