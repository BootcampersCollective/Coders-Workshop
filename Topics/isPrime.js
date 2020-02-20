const isPrime = num => {
  if (typeof num !== "number") {
    return "Not a number";
  }
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
isPrime(22); //?
