const getCoeff = (term) => term.slice(0, term.indexOf("x"))

const differentiatePowerTerm = (term) => {
  if (!term) return [0, 0]
  const exp = term.slice(term.indexOf("^") + 1)
  const coeff = getCoeff(term)
  const newCoeff = exp * coeff
  const newExp = exp - 1
  return [newCoeff, newExp]
}

const differentiateLinearTerm = getCoeff


const evaluatePowerTerm = (coeff, exp, point) => coeff * Math.pow(point, exp)
const evaluateConstantTerm = (coeff, point) => coeff * point

const includes = (ele, arr) => arr.includes(ele)
const isPowerTerm = (term) => includes("^", term)
const isLinearTerm = (term) => !isPowerTerm(term) && term.includes("x")
const curriedFind = (pred) => (arr) => arr.find(pred)
const getTerms = (eqn) => eqn.split(/[\+\-]/g)
const powerTerm = curriedFind(isPowerTerm)
const linearTerm = curriedFind(isLinearTerm)

const differentiate = (equation, point) => {
  const powerTermValue = evaluatePowerTerm(...differentiatePowerTerm(powerTerm(getTerms(equation))), point)
  const linearTermValue = differentiateLinearTerm(linearTerm(getTerms(equation)))
  return parseInt(powerTermValue + linearTermValue)
}

console.log(getTerms("x^2-x"))
console.log(differentiate("x^2-x"))
/*
differentiate("12x+2", 3), 12);
differentiate("x^2-x", 3), 5);
differentiate("-5x^2+10x+4", 3), -20);
*/
