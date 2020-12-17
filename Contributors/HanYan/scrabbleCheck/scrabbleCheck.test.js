const scrabbleCheckReuse = (word, chars) => {
  for (let char of word) {
    if (!chars.includes(char)) return false;
  }
  return true;
}

const scrabbleCheckNoReuse = (word, chars) => {
  for (let char of word) {
    if (!chars.includes(char)) return false;
    else chars.splice(chars.indexOf(char), 1);
  }
  return true;
}

const scrabbleCheckWildcard = (word, chars) => {
  let numWildcards = chars.filter(char => char === "*").length;
  for (let char of word) {
    if (!chars.includes(char)) {
      if (numWildcards > 0) numWildcards--;
      else return false;
    }
    else chars.splice(chars.indexOf(char), 1);
  }
  return true;
}

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

