import gettingRandomNumber from '../utils/random _number.js';
import gettingSign from '../utils/random_sign.js';
import game from '../index.js';

const execiseAndRightAnswer = () => {
  const firstNumber = gettingRandomNumber();
  const secondNumber = gettingRandomNumber();
  const sign = gettingSign();
  const execise = `${firstNumber} ${sign} ${secondNumber}`;

  let rightAnswer = '';
  switch (sign) {
    case '+':
      rightAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      rightAnswer = String(firstNumber - secondNumber);
      break;
    default:
      rightAnswer = String(firstNumber * secondNumber);
      break;
  }
  return [execise, rightAnswer];
};

const startCalcGame = () => {
  const taskForUser = ('What is the result of the expression?');
  game(taskForUser, execiseAndRightAnswer);
};

export default startCalcGame;
