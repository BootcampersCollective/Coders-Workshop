// # Format Phone Number

// Write a function that accepts a string of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// For example, with input `1234567890` your function should return `"(123) 456-7890"`

// Follow-up: The function should be able to handle arbitrary whitespace characters.
// For example, with input `-(52).44 7790 33`, your function should return `"(524) 477-9033"`

// turn the array into a string, formating as you go
// check if the length is correct
const formatPhoneNum = (phoneNum) => {
  const filteredPhoneNum = phoneNum.replace(/\D/g, '')

  if (filteredPhoneNum.length !== 10) {
    return null
  }

  const numArr = filteredPhoneNum.split('')

  let formattedNumber = ''

  numArr.forEach((num, index) => {
    if (index === 0) {
      formattedNumber = formattedNumber + `(${num}`
    } else if (index === 3) {
      formattedNumber = formattedNumber + `) ${num}`
    } else if (index === 6) {
      formattedNumber = formattedNumber + `-${num}`
    } else {
      formattedNumber = formattedNumber + num
    }
  })

  return formattedNumber
}

// Alternate solution
const formatPhoneNumAlt = (num) => {
  const filteredNum = num.replace(/\D/g, '')

  if (filteredNum.length !== 10) {
    return 'Invalid input'
  }

  const [p1, p2, p3] = [
    filteredNum.slice(0, 3),
    filteredNum.slice(3, 6),
    filteredNum.slice(6, 10)
  ]

  const formattedNum = `(${p1}) ${p2}-${p3}`
  return formattedNum
}

console.log(formatPhoneNum("1234o56  &&&&&& \n  fhhshhs''-9j0"))
console.log(formatPhoneNum("1234o56  &&&&&& \n  fhhshhs''-9j0000000000"))
console.log(formatPhoneNum("1234o5678  &&&&&& \n  fhhshhs''-9j0"))
console.log(formatPhoneNum('-(52).44 7790 33'))
