function maxRot(num) {
  num = num.toString().split('')
  for (i = 0; i < num.length; i++) {
    num.push(num.splice(i, 1)[0])
  }
  return parseInt(num.join(''))
}

console.log(maxRot(56789))
