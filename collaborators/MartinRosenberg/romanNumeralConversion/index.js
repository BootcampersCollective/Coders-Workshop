const numerals = Object.freeze({
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
});

const romanToArabic = roman => {
  let arabic = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = roman[i];
    if (!(current in numerals)) {
      return NaN;
    }
    const next = roman[i + 1];
    if (numerals[current] < numerals[next]) {
      arabic += numerals[next] - numerals[current];
      i++;
    } else {
      arabic += numerals[current];
    }
  }
  return arabic || NaN;
};
