const {getLetterPosition} = require("./getLetterPosition");

describe("getLetterPosition", () => {
  it("should work with the examples provided", () => {
    expect(getLetterPosition('a')).toBe(1);
    expect(getLetterPosition('Y')).toBe(25);
  })
})