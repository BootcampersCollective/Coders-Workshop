const findMostCommon = require("./findMostCommon");

describe('findMostCommon should work', () => {
  it('should find the most common when there\'s 1 most common', done => {
    const input = [1, 2, 2, 3];
    expect(findMostCommon(input)).toEqual([2]);
    done();
  });
  it('should find the most common when there\'s multiple most common', done => {
    const input = [1, 2, 3, 4];
    expect(findMostCommon(input)).toEqual([1, 2, 3, 4]);
    const input2 = [1, 1, 2, 2];
    expect(findMostCommon(input2)).toEqual([1, 2]);
    done();
  });
  it('should work with an empty array', done => {
    expect(findMostCommon([])).toEqual([]);
    done();
  });
  it('should work with strings', done => {
    expect(findMostCommon("null")).toEqual(['l']);
    done();
  });
  it('should work with null', done => {
    expect(findMostCommon(null)).toBe(null);
    done();
  });
  it('should work with numbers', done => {
    expect(findMostCommon(2)).toBe(null);
    done();
  });
  it('should work with undefined', done => {
    expect(findMostCommon(undefined)).toBe(null);
    done();
  });
})