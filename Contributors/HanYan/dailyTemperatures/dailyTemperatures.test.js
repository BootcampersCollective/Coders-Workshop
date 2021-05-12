const dailyTemperatures = require("./dailyTemperatures");

describe('DailyTemperatures returns an array of days till the next warmer day', () => {
  it('works with the example input given', done => {
    const expected = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(expected).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    done();
  });
})