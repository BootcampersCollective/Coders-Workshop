// # Embolden HTML

// Implement the function embolden(s, lst) which takes in a strig`s`
// and list of substrings `lst`, and wraps all substrings in s with an HTML
// bold tag `<b>` and `</b>`.

// If two bold tags overlap or are contiguous, they should be merged.

// For example, given `s = abcdefg` and `lst = ["bc", "ef"]`,
// return the string `a<b>bc</b>d<b>ef</b>g`.

// Given `s = "abcdefg" and lst = ["bcd", "def"]`,
// return the string `a<b>bcdef</b>g`, since they overlap.

// `s = "abcdefg"
// lst = ["bcd", "def"]`
// a<b>bc<b>d</b>ef</b>g
// a<b>bcdef</b>g

// `s = abcdefg`
// `lst = ["bc", "ef"]`
// `a<b>bc</b>d<b>ef</b>g`

const assert = require('assert')

const emboldenOneLine = (s, lst) => lst.reduce((str, item) => str.replace(item, `<b>${item}</b>`), s)

function embolden(s, lst) {
  let newStr = s
  const replaceWithRegex = (item) => {
    newStr = newStr.replace(item, `<b>${item}</b>`)
  }

  lst.forEach(replaceWithRegex)

  return newStr
}

// function cleanupHtml(html) {
//   let newHtml = html
//   let bold = false

//   let tempTag = ''
//   for (let i = 0; i < html.length; i++) {
//     const currChar = html.charAt(i)

//     if (currChar === '<' || currChar === 'b' || currChar === '/' || currChar === '>') {
//       tempTag += currChar
//     }

//     if (tempTag === '<b>') {
//       bold = true
//       tempTag = ''
//     } else if (tempTag === '</b>') {
//       bold = false
//       tempTag = ''
//     }

//   }
// }

console.log(emboldenOneLine('abcdefg', ['bcd', 'def']))
assert.strictEqual(embolden('abcdefg',["bc", "ef"]), 'a<b>bc</b>d<b>ef</b>g')

console.log('All tests passed!')