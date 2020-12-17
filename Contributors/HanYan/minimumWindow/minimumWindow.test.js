const hasAllChars = (window, t) => {
  const windowArr = window.split("");
  for (let char of t) {
    let foundIndex = windowArr.indexOf(char);
    if (foundIndex === -1) return false;
    windowArr.splice(foundIndex, 1);
  }
  return true;
}

const minimumWindow = (s, t) => {
  let resultSoFar = s;
  let found = false;
  let leftIndex = 0, rightIndex = t.length; // starting lengths
  while (rightIndex <= s.length) {
    let substring = s.substr(leftIndex, rightIndex - leftIndex);
    if (substring.length < t.length) {
      rightIndex++;
      continue;
    };
    if (hasAllChars(substring, t)) {
      if (!found) found = true;
      if (substring.length <= resultSoFar.length) resultSoFar = substring;
      leftIndex++;
    } else {
      rightIndex++;
    }
  }
  return found ? resultSoFar : '';
}

describe('HasAllChars works', () => {
  it('works for an example', done => {
    const expected = hasAllChars("abcdefghijklmnopqrstuvwxyz", "string");
    expect(expected).toBeTruthy();
    done();
  });
  it('works for an example where it fails', done => {
    const expected = hasAllChars("abcdefghijklmnopqrstuvwxyz", "strings");
    expect(expected).toBeFalsy();
    done();
  });
});

describe('Minimum window works', () => {
  it('works for an example', done => {
    const expected = minimumWindow("abcdefghijklmnopqrstuvwxyz", "string");
    expect(expected).toBe('ghijklmnopqrst');
    done();
  });

  it('works for an example that spans the whole S string', done => {
    const expected = minimumWindow("abcdefghijklmnopqrstuvwxyz", "az");
    expect(expected).toBe('abcdefghijklmnopqrstuvwxyz');
    done();
  });

  it('works for an example where a window doesn\'t exist', done => {
    const expected = minimumWindow('hanyan', 'az');
    expect(expected).toBe('');
    done();
  });
});