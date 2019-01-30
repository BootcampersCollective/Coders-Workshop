function productFib(prod) {
  let factors = [],
    i = 0,
    k = 1,
    q = k;

  function fib() {
    while (k <= prod) {
      q = k;
      k += i;
      i = q;
      factors.push(k);
      return fib();
    }
  }
  fib();

  let result = factors.filter(
    (el, i, arr) => el * arr[i + 1] === prod || el * arr[i - 1] === prod
  );

  if (result.length === 0) {
    result = factors.filter(
      (el, i, arr) => el * arr[i + 1] > prod || el * arr[i - 1] > prod
    );

    result = result.splice(0, 2);
    result.push(false);
    return result;
  } else {
    result.push(true);
    return result;
  }
}

productFib(5895);
