function fibonacci(num) {
  let memo = [];
  return fibRecursive(num, memo);
}

function fibRecursive(num, memo) {
  if (num === 0 || num == 1) return num;

  if (!memo[num]) {
    memo[num] = fibRecursive(num - 1, memo) + fibRecursive(num - 2, memo);
  }
  return memo[num];
}
