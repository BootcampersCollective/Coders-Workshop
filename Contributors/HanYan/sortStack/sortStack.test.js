const sortStack = require("./sortStack");

describe('Sort Stack works', () => {
  it('sorts', done => {
    const randomList = (new Array(1000).fill(0)).map(zero => Math.random());
    const copy = [...randomList];
    expect(sortStack(copy)).toEqual(randomList.sort());
    done();
  })
});