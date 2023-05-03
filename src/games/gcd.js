import game from '../index.js';
import getRandomNumber from '../utils.js';

const exerciseAndRightAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const exercise = `${firstNumber} ${secondNumber}`;
  let rightAnswer = 1;

  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  for (let divider = 1; divider <= minNumber; divider += 1) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      rightAnswer = divider;
    }
  }
  return [exercise, String(rightAnswer)];
};

const startGcdGame = () => {
  const taskForUser = 'Find the greatest common divisor of given numbers.';
  game(taskForUser, exerciseAndRightAnswer);
};

export default startGcdGame;
