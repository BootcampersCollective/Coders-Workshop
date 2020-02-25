import {embolden} from './embolden';

describe('Embolden should work', () => {
  it('should work with no overlaps', (done) => {
    const expected = 'a<b>bc</b>d<b>ef</b>g';
    const actual = embolden('abcdefg', ['bc', 'ef']);
    expect(actual).toBe(expected);
    done();
  });
  it('should work with overlaps', (done) => {
    const expected = 'a<b>bcdef</b>g';
    const actual = embolden('abcdefg', ["bcd", "def"]);
    expect(actual).toBe(expected);
    done();
  });
  it('should work with bolding ends', (done) => {
    const expected = '<b>abc</b>de<b>fg</b>';
    const actual = embolden('abcdefg', ['abc', 'fg'])
    expect(actual).toBe(expected);
    done();
  });
})