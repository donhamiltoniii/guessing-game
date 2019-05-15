class GuessingGame {
  guess(number) {
    if (number == 0) {
      return "Enter a number between 1 and 10";
    }
    return number == 7;
  }
}

module.exports = GuessingGame;
