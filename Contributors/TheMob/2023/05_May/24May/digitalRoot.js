/*
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

base case: when length of output (as string) is 1 OR (as number) is < 10
get the digits of the number
get the sum of those digits
string: good for JS
*/

// n = 194
[1, 9, 4]

const toDigits = (n) => {
  let digits = [];

  while (n > 9) {
    digits.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  digits.unshift(n);
  return digits;
}

const digitalRoot = (n) => {
  if (n < 10) return n;
  return digitalRoot(toDigits(n).reduce((acc, v) => acc + v, 0));
}

console.log(digitalRoot(493193));
console.log(digitalRoot(132189));
