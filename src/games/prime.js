import game from '../index.js';
import { gettingRandomNumber } from '../utils.js';

const isNumberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const execiseAndRightAnswer = () => {
  const exercise = gettingRandomNumber();
  const rightAnswer = isNumberPrime(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const startPrimeGame = () => {
  const taskForUser = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(taskForUser, execiseAndRightAnswer);
};

export default startPrimeGame;
