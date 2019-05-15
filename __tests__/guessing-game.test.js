const GuessingGame = require("../src/guessing-game");

describe("GuessingGame", () => {
  let underTest;

  beforeEach(() => {
    underTest = new GuessingGame();
  });

  test("should win when given 7", () => {
    const actual = underTest.guess(7);
    expect(actual).toBe(true);
  });

  test("should return false for all numbers not 7", () => {
    const actual = underTest.guess(4);
    expect(actual).toBe(false);
  });

  test("should return instructions when given 0", () => {
    const actual = underTest.guess(0);
    expect(actual).toBe("Enter a number between 1 and 10");
  });
});
