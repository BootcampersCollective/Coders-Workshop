import {longestCryptogram, isCryptogram} from './cryptogram'

describe('cryptogram should work', () => {
  
  it('isCryptogram subfunction works for true case', (done) => {
    expect(isCryptogram('abppplee', 'apple')).toBe(true);
    expect(isCryptogram('abppplee', 'bale')).toBe(false);
    expect(isCryptogram('abppplee', 'applee')).toBe(true);
    done()
  }),

  it('longestCryptogram should work', (done) => {
    const actual = 'apple';
    const expected = longestCryptogram("abppplee", ["able", "ale", "apple", "bale", "kangaroo"]);
    expect(actual).toBe(expected);
    done()
  })

})