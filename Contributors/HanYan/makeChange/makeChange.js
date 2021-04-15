const changeValues = {
  dollar: 100,
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1
}

const makeChange = (price, amountGiven) => {
  let remaining = (amountGiven - price) * 100;
  if (remaining < 0) throw new Error("Not enough cash given!");
  const change = {
      dollar: -1,
      quarter: -1,
      dime: -1,
      nickel: -1,
      penny: -1
  }
  for (let denomination in change) {
      if (change[denomination] === -1) {
          change[denomination] = Math.floor(remaining / changeValues[denomination]);
          remaining -= change[denomination] * changeValues[denomination];
      }
  }
  return change;
}