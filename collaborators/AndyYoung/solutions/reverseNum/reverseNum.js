function reverse(x) {
  let reverse = 0,
    makeNeg;

  if (Math.sign(x) === -1) {
    makeNeg = true;
    x *= -1;
  }

  while (x > 0) {
    let last = x % 10;
    reverse = reverse * 10 + last;
    x = Math.floor(x / 10);
  }

  if (reverse > Math.pow(2, 31) - 1 || reverse < Math.pow(-2, 31)) {
    return 0;
  } else return makeNeg === true ? -reverse : reverse;
}

console.log(reverse(123)); // 321
console.log(reverse(1534236469)); // 0
console.log(reverse(-2147483648)); // 0
console.log(reverse(-2147483412)); // -2143847412
