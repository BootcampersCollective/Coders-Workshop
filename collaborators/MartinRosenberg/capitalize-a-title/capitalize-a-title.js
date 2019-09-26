const titleCase = (s) => {
  const lowerWords = Object.freeze(['the', 'and', 'of', 'for'])
  const upperCase = (c) => String.fromCharCode(c.charCodeAt(0) - 32)

  return s.split(/\s/).map((word, i) =>
    (lowerWords.includes(word) && i !== 0)
      ? word
      : `${upperCase(word[0])}${word.slice(1)}`
  ).join(' ')
}

