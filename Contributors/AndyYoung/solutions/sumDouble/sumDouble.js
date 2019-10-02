// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

const sum_double = (n1, n2) => n1 == n2 ? (n1 + n2) * 2 : n1 + n2;

console.log(
  sum_double(2, 4)  // 6
)

console.log(
  sum_double(5, 5)  // 20
)