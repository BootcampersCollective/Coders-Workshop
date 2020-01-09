const hexToBase64 = hex => {
    // 'dead05ff2dde'
    const hexValuesArr = [];
    hex.split('').forEach(hexChar => {
        hexValuesArr.push(parseInt(hexChar, 16))
    })
    let sumOfDigits = 0;
    for (let i = 0; i < hexValuesArr.length; i++) {
        sumOfDigits += hexValuesArr[i]*16**(hexValuesArr.length-i-1);
    }
    //hexValuesArr.forEach(digit => {
    //    sumOfDigits += digit*16**(len(hexValuesArr));
    //})
    console.log(sumOfDigits);
}

hexToBase64("ff")
