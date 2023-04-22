import game from '../index.js';
import gettingRandomNumber from '../utils/random _number.js';

const execiseAndRightAnswer = () => {
  let firstNumber = gettingRandomNumber();
  let secondNumber = gettingRandomNumber();
  const execise = `${firstNumber} ${secondNumber}`;

  while (secondNumber) {
    const term = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = term;
  }
  const rightAnswer = String(firstNumber);

  return [execise, rightAnswer];
};

const startGcdGame = () => {
  const taskForUser = 'Find the greatest common divisor of given numbers.';
  game(taskForUser, execiseAndRightAnswer);
};

export default startGcdGame;
