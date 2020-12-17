// import {findMostCommon} from "./findMostCommon.js";

const findMostCommon = (input) => {
  // check if input is a list or string, value
  // otherwise, return null
  if (typeof input === "string") input = input.split("");
  if (Array.isArray(input)) {
    // now input is an array, 
    // keep track of most common freq and make an object: key = item, value = freq
    const frequencies = {};
    let maxFreq = 0;
    input.forEach(item => {
      if (frequencies[item] === undefined) frequencies[item] = 1;
      else frequencies[item]++;
      if (frequencies[item] > maxFreq) maxFreq = frequencies[item];
    });
    const uniqueInput = [...new Set(input)];
    return uniqueInput.filter(item => frequencies[item] === maxFreq);
  }
  else return null;
}

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