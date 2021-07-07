// function to tokenize the input
// function to parse the tokenization -> build AST
// function to execute parsed result
// function to calculate derivative, return in prefix notation
// each token beween parens is a function, need to identify the identifier and arguments -> calculate derivative

const head = (a) => a.length ? a[0] : null

const operators = ["+", "-", "*", "/", "^", "cos", "sin", "tan", "exp", "ln"]
const isOpeningParen = (v) => v === "("
const isClosingParen = (v) => v === ")"
const isOperator = (v) => operators.includes(v)
const pop = (a) => a.shift()

const isNum = (char) => char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58
const prepare = (input) => {
  const arr = input.split("")
  const returnArr = []
  let i = 0
  while (i < arr.length) {
    if (isNum(arr[i])) {
      let num = ""
      while (isNum(arr[i])) {
        num += arr[i]
        i += 1
      }
      returnArr.push(num)
    }
    if (arr[i] !== " ") {
      returnArr.push(arr[i])
    }
    i += 1
  }
  return returnArr
}

const parenthesize = (tokens) => {
  // add tokens to array if part of a parenthesis, otherwise just returns token
  const token = pop(tokens)
  if (isOpeningParen(token)) {
    const expression = []
    while (!isClosingParen(head(tokens))) {
      expression.push(parenthesize(tokens))
    }
    pop(tokens)
    return expression
  }
  return token
}

const parse = (tokens) => {
  if (Array.isArray(tokens)) {
    const [ first ] = tokens
    let rest = tokens.slice(1)
    const operator = operators.find((op) => op.startsWith(first))
    if (operator.length > 1) {
      rest = rest.slice(operator.length - 1)
    }
    return {
      type: "FunctionCall",
      value: operator,
      args: rest.map(parse)
    }
  }
  const token = tokens
  if (token === "x") {
    return {
      type: "Variable",
      value: "x"
    }
  }
  return {
    type: "Number",
    value: parseInt(token),
  }
}

console.log(JSON.stringify(parse(parenthesize(prepare("(* (+ x 3) 5)")))))

const parseArgs = (args) => [ args.find((a) => a.type !== "Variable"), args.find((a) => a.type === "Variable") ]
const diffRules = {
  "*": (args) => {
    const [ multiplier, variable ] = parseArgs(args)
    return multiplier
  },
  "/": (args) => {
    const [ divisor, variable ] = parseArgs(args)
    return divisor
  },
  "+": () => {
    return 0
  },
  "-": () => {
    return 0
  },
  "^": (args) => {
    const [ exponent, variable ] = parseArgs(args)
    return `(* ${exponent} (^ ${exponent -1} ${variable}))`
  },
  "cos": (args) => {
    const [, variable ] = parseArgs(args)
    return `(* ${exponent} (^ ${exponent -1} ${variable}))`
  },


}
const differentiate = (fn, args) => {

}

