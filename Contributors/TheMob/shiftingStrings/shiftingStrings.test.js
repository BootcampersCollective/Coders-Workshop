const shiftingStrings = require("./shiftingStrings");

describe("shiftingStrings work for the examples involved", () => {
  it("works for abcde/cdeab", () => {
    const expected = shiftingStrings("abcde", "cdeab");
    expect(expected).toBeTruthy();
  });

  it("works for abc/acb", () => {
    const expected = shiftingStrings("abc", "acb");
    expect(expected).toBeFalsy();
  });
});