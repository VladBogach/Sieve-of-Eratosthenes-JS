function getNaturalNumbers(n = 2) {
    const numbers = [...Array(n + 1).keys()]
    for(let e = 2; e <= n; e++) {
        if(!e) continue
        for(let i = 2 * e; i <= n; i += e) {
            numbers[i] = null
        }
    }
    return numbers.filter(i => i).splice(1, numbers.length)
}

// console.log(getNaturalNumbers(27)) // test

module.exports = getNaturalNumbers