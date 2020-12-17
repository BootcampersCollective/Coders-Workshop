const dailyTemperatures = temps => {
  const result = [];

  const findNextWarmerDayWait = i => {
    const thisTemp = temps[i];
    let j = i + 1;
    while (temps[j] <= thisTemp) {
      j++;
    }
    return (j >= temps.length) ? 0 : j - i; // check out of bounds
  }

  for (let i = 0; i < temps.length - 1; i++) {
    result.push(findNextWarmerDayWait(i));
  }
  result.push(0);
  return result;
}


describe('DailyTemperatures returns an array of days till the next warmer day', () => {
  it('works with the example input given', done => {
    const expected = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(expected).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    done();
  });
})