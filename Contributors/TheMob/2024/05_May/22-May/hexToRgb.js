const assert = require("assert")
/*
For example, given "#FF9933" your function should return `{ r: 255, g: 153, b: 51 }`.
parseInt(inputValue, base aka radix == 16) 
exclude #
first 2, r, second 2 g, last 2 b
*/

function hextoRGB(hexString){

    const arr = hexString.split("")
    arr.shift()
    let result = { r: 0, g:0, b:0}
    for(let i = 0; i < arr.length; i += 2){
        if(i === 0){
            result.r = parseInt(arr[i] + arr[i+1], 16)
        }else if(i === 2){
            result.g = parseInt(arr[i] + arr[i+1], 16)
        }else{
            result.b = parseInt(arr[i] + arr[i+1], 16)
        }
    }
    return result

}


assert.deepStrictEqual(hextoRGB("#FF9933"), { r: 255, g: 153, b: 51 });
assert.deepStrictEqual(hextoRGB("#FFFFFF"), { r: 255, g: 255, b: 255 });
console.log('👍')
