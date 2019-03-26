const uniqueCharacters = str => {
    if (str.length > 128)
        return false
    let newArr = new Array(128).fill(null)
    for (let i = 0; i < str.length; i++) {
        if (newArr[str.charCodeAt(i)])
            return false
        newArr[str.charCodeAt(i)] = true;
    }
    return true
}
