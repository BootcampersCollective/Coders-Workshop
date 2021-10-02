const assert = require("assert")

const getTotalLineLength = (arr) => arr.reduce((acc, curr) => acc + curr.length, arr.length - 1)

const generateLines = (words, k) => {
  const lines = []
  let currentLine = []
  words.forEach((word) => {
    if (getTotalLineLength(currentLine) + word.length <= k) {
      currentLine.push(word)
    } else {
      lines.push(currentLine)
      currentLine = [word]
    }
  })
  if (currentLine.length) {
    lines.push(currentLine)
  }
  return lines
}

const padRightToK = (str, k) => str + " ".repeat(k - str.length > 0 ? k - str.length : 0)

const padWord = (word) => word + " "

const padLeft = (arr, k) => {
  let i = 0
  let paddedArr = [...arr]
  while (getTotalLineLength(paddedArr) < k) {
    if (i === arr.length - 1) {
      i = 0
    }
    paddedArr = paddedArr.map((word, idx) => idx === i ? padWord(word) : word)
    i += 1
  }
  return paddedArr
}

const addSpaces = (lines, k) => {
  return lines.map((line) => {
    let lineStr = ""
    if (line.length === 1) {
      lineStr = padRightToK(line[0], k)
    } else {
      lineStr = padLeft(line, k).join(" ")
    }
    return lineStr
  })
}

const justifyText = (words, k) => addSpaces(generateLines(words, k), k)

assert.deepStrictEqual(justifyText(
  ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16),
[
  "the  quick brown",
  "fox  jumps  over",
  "the   lazy   dog"
])

console.log("👍")
