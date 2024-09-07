const solution = (name, yearning, photo) => {
    
    /** 중괄호 한줄Return은 소괄호와 함께 */
    const data = name.reduce((a, c, i) => (a[c] = yearning[i], a), {});
    return photo.map(v => v.reduce((a, c) => a += (data[c] || 0), 0))
    
}