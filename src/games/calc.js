import game from '../index.js';
import { gettingRandomNumber, gettingSign } from '../utils.js';

const execiseAndRightAnswer = () => {
  const firstNumber = gettingRandomNumber();
  const secondNumber = gettingRandomNumber();
  const sign = gettingSign();
  const execise = `${firstNumber} ${sign} ${secondNumber}`;

  let rightAnswer = '';
  switch (sign) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    default:
      rightAnswer = firstNumber * secondNumber;
      break;
  }
  return [execise, rightAnswer];
};

const startCalcGame = () => {
  const taskForUser = ('What is the result of the expression?');
  game(taskForUser, execiseAndRightAnswer);
};

export default startCalcGame;
