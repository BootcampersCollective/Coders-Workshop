// Implement the function embolden(s, list) which takes in a string s and list of substrings lst, and wraps all substrings in s with an HTML bold tag `<b>` and `</b>`.

// For example, given `s = abcdefg` and `list = ["bcd", "def"]`, return the string `a<b>bc</b>d<b>ef</b>g`.

// regex?
// indexOf? find the index of each list item
// "abcdefg".indexOf("bc") => 1;

// loop through each item in list and conditionally add <b> at the index point </b> at the index point + item length

const embolden = (str,arr) => {
    let indexArr=[]
    for(let i=0; i<arr.length; i++){
        indexArr.push(str.indexOf(arr[i]))
    }
    arr.forEach(elem=>{
        str = str.replaceAll(elem, "<b>" + elem + "</b>")
    })
    return str
}

console.log(embolden('abcdefg', ['bc', 'ef']))
