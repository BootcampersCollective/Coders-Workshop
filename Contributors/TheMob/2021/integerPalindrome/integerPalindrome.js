// Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.

function isPalindrome(num) {
  const reverse = num.toString().split('').reverse().join('')
  //   let's not use loose equal
  return num === Number(reverse)
}

function isPalindromeNoStr(num) {
  let reversedInt = 0
  let num1 = num
  while (num1 > 0) {
    let lastDigit = num1 % 10
    reversedInt = reversedInt * 10 + lastDigit
    num1 = Math.floor(num1 / 10)
  }
  return reversedInt === num
}

console.log(isPalindrome(101))
console.log(isPalindrome(120))
console.log(isPalindromeNoStr(101))
console.log(isPalindromeNoStr(120))
console.log(isPalindromeNoStr(20))
