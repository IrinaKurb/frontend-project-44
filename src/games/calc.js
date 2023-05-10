import game from '../index.js';
import getRandomNumber from '../utils.js';

const exerciseAndRightAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const signs = ['+', '-', '*'];
  const indexOfSign = getRandomNumber(0, signs.length - 1);
  const sign = signs[indexOfSign];
  const exercise = `${firstNumber} ${sign} ${secondNumber}`;

  let rightAnswer = 0;
  switch (sign) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`this sign was not found: '${sign}'`);
  }
  return [exercise, String(rightAnswer)];
};

const startCalcGame = () => {
  const taskForUser = ('What is the result of the expression?');
  game(taskForUser, exerciseAndRightAnswer);
};

export default startCalcGame;
