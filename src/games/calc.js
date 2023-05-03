import game from '../index.js';
import getRandomNumber from '../utils.js';

const getSign = () => {
  const signs = ['+', '-', '*'];
  const min = 0;
  const max = signs.length - 1;
  const indexOfRandomSign = Math.floor(Math.random() * (max - min + 1) + min);
  return signs[indexOfRandomSign];
};

const exerciseAndRightAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const sign = getSign();
  const exercise = `${firstNumber} ${sign} ${secondNumber}`;

  let rightAnswer = '';
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
