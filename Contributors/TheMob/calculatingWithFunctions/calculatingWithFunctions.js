const assert = require("assert")

function zero(operation) {
  if (!operation) {
    return 0
  } else {
    return Math.floor((0 + operation))
  }
}
function one(operation) {
  if (!operation) {
    return 1
  } else {
    return Math.floor((eval(1 + operation)))
  }
}
function two(operation) {
  if (!operation) {
    return 2
  } else {
    return Math.floor((eval(2 + operation)))
  }
}
function three(operation) {
  if (!operation) {
    return 3
  } else {
    return Math.floor((eval(3 + operation)))
  }
}
function four(operation) {
  if (!operation) {
    return 4
  } else {
    return Math.floor((eval(4 + operation)))
  }
}
function five(operation) {
  if (!operation) {
    return 5
  } else {
    return Math.floor((eval(5 + operation)))
  }
}
function six(operation) {
  if (!operation) {
    return 6
  } else {
    return Math.floor((eval(6 + operation)))
  }
}
function seven(operation) {
  if (!operation) {
    return 7
  } else {
    return Math.floor((eval(7 + operation)))
  }
}
function eight(operation) {
  if (!operation) {
    return 8
  } else {
    return Math.floor((eval(8 + operation)))
  }
}
function nine(operation) {
  if (!operation) {
    return 9
  } else {
    return Math.floor((eval(9 + operation)))
  }
}

function plus(number) {
  return "+" + number
}
function minus(number) {
  return "-" + number
}
function times(number) {
  return "*" + number
}
function dividedBy(number) {
  return "/" + number
}

assert.deepStrictEqual(seven(times(five())), 35)
assert.deepStrictEqual(four(plus(nine())), 13)
assert.deepStrictEqual(eight(minus(three())), 5)
assert.deepStrictEqual(six(dividedBy(two(times(one())))), 3)
assert.deepStrictEqual(six(times(two(plus(one())))), 18) // 6 * 2 + 1 / 6 * 3

assert.deepStrictEqual(two(dividedBy(six())), 0)

console.log("All test passed!")
