const { scrabbleCheckReuse, scrabbleCheckNoReuse, scrabbleCheckWildcard } = require("./scrabbleCheck");

describe('ScrabbleCheck works', () => {
  it('works if the tile can be reused', done => {
    expect(scrabbleCheckReuse("hanyan", ['h', 'a', 'n', 'y', 'm'])).toBeTruthy();
    expect(scrabbleCheckReuse("hanyan", ['h', 'a', 'n', 'm'])).toBeFalsy();
    done();
  });

  it('works if the tile cannot be reused', done => {
    expect(scrabbleCheckNoReuse("hanyan", ['h', 'a', 'n', 'y', 'm'])).toBeFalsy();
    expect(scrabbleCheckNoReuse("hanyan", ['h', 'a', 'n', 'm'])).toBeFalsy();
    expect(scrabbleCheckNoReuse("hanyan", ['h', 'a', 'n', 'y', 'm', 'a', 'n'])).toBeTruthy();
    done();
  });

  it('works with no tile reuse, but if a wildcard exists', done => {
    expect(scrabbleCheckWildcard("hanyan", ['h', 'a', 'n', 'y', 'm', '*', '*'])).toBeTruthy();
    expect(scrabbleCheckWildcard("hanyan", ['h', 'a', 'n', 'y', 'm', '*'])).toBeFalsy();
    done();
  })
});

