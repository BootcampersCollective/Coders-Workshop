const {fixedPt} = require("./fixedPoint");

describe("fixedPoint() works for examples provided", () => {
  it("works for the first example", () => {
    const expected = fixedPt([-6, 0, 2, 40]);
    expect(expected).toBe(2);
  });

  it("works for the second example", () => {
    const expected = fixedPt([1, 5, 7, 8]);
    expect(expected).toBe(false);
  })
})