import game from '../index.js';
import { gettingRandomNumber } from '../utils.js';

const execiseAndRightAnswer = () => {
  let firstNumber = gettingRandomNumber();
  let secondNumber = gettingRandomNumber();
  const execise = `${firstNumber} ${secondNumber}`;

  while (secondNumber) {
    const temporary = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temporary;
  }
  const rightAnswer = firstNumber;

  return [execise, rightAnswer];
};

const startGcdGame = () => {
  const taskForUser = 'Find the greatest common divisor of given numbers.';
  game(taskForUser, execiseAndRightAnswer);
};

export default startGcdGame;
