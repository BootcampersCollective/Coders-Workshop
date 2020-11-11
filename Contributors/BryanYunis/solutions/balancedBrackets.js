const balancedBrackets = string => {
  const stack = []
  string.split("").forEach(bracket => {
    switch (bracket) {
      case "(":
      case "[":
      case "{":
        stack.push(bracket)
        break
      case ")":
      case "]":
      case "}":
        const popped = stack.pop()
        if (popped !== bracket) {
          return false
        }
        break
    }
  })
  if (stack.length === 0) return true
  return false
}
console.log(balancedBrackets('[(){}]'))
