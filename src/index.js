module.exports = function reverse (n) {
    let arr = Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(arr, 10)
}
