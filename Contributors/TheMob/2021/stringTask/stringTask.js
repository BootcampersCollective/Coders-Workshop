// For example, given `tour`, return `.t.r`. `aBAcAba` should return `.b.c.b`
// Write a function that takes a string and performs the following operations on it:

// * Deletes all vowels
// * Inserts a character `.` before each consonant
// * Replaces all uppercase consonants with corresponding lowercase ones

// delete vowels - replace all vowels with ""
// use regex to replace vowels
// for-loop with some if statements

const deleteAllVowels = (string) => {
  // build a new string, add to that string if letter is not a vowel
  let result = ''
  for (const l of string) {
    if (!isVowel(l)) result += l
  }
  return result
}

const insertPeriod = (string) => {
  let result = ''
  for (const l of string) {
    result += `.${l}`
  }
  return result
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const isVowel = (letter) => {
  const vowels = 'aeiou'
  if (vowels.includes(letter)) {
    return true
  } else {
    return false
  }
}

const replaceUppercaseConsonants = (string) => {
  let result = ''
  for (const l of string) {
    if (l === l.toUpperCase()) {
      result += l.toLowerCase()
    } else {
      result += l
    }
  }
  return result
}

const stringTask = (string) => {
  let result = deleteAllVowels(string)
  result = insertPeriod(result)
  result = replaceUppercaseConsonants(result)
  return result
}

console.log(stringTask('hello'))
