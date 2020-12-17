const {hasAllChars, minimumWindow} = require("./minimumWindow");

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