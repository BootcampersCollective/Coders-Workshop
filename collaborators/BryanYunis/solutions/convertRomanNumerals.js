function convertRomans(string) {
    let romans = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1 
    }
    let result = 0

    for (let i = 0; i < string.length; i++) {
        const current = romans[string[i]]
        const next = romans[string[i + 1]]

        if (next > current) {
            result += next - current
            i++
        }
        else {
            result += current
        }
    }
    return result
}

console.log(convertRomans("MMMMCCXXXIII")) // 4233